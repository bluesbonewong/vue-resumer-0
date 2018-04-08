<template>
  <div id="topbar">
    <div class="logo">
      <a class="logo-icon">
        <svg class="icon">
          <use xlink:href="#icon-list"></use>
        </svg>
      </a>
      <a href="#"><p>BoRe</p>
        <p>sume</p></a>
    </div>
    <el-row class="actions">
      <el-button type="primary" @click="signUp" v-if="!successInLeanCloud">注册</el-button>
      <el-button type="primary" plain @click="login" v-if="!successInLeanCloud">登录</el-button>
      <el-button type="primary" @click="saveOrUpdateInfo" v-if="successInLeanCloud">储存</el-button>
      <el-button type="primary" @click="logout" v-if="successInLeanCloud">注销</el-button>
      <el-button plain @click="preview">进行预览</el-button>
      <el-button plain @click="exitPreview">退出预览</el-button>
    </el-row>
  </div>
</template>

<script>
  import AV from 'leancloud-storage'
  import { EventBus } from './eventBus.js';

  export default {
    props: ['successInLeanCloud', 'resume'],
    created() {
      EventBus.$on('fetchInfo', () => {
        this.fetchInfo()
      })

      if (this.getCurrentUser()) {
        // 先做判断，当前用户是否已经登录，若已登录，直接进入resume页面

        // 在created里写，是为了用户刷新页面，还能保留原来所写的东西
        // 否则，一旦刷新，每次都要重新登录
        this.$emit('successInLean')
        this.fetchInfo()
      }
    },
    methods: {
      preview() {
        // 预览功能
        this.$emit('preview')
      },
      exitPreview() {
        // 退出预览功能
        this.$emit('exitPreview')
      },
      signUp() {
        // 注册功能 -> 弹出注册框
        this.$emit('signUp')
      },
      login() {
        // 登录功能 -> 弹出登录框
        // 把这个组件的fetchInfo传递出去
        this.$emit('login', this.fetchInfo)
      },
      logout() {
        // 注销功能
        this.$emit('logout')
      },
      saveInfo() {
        // 将数据字符串化
        let dataString = JSON.stringify(this.resume)
        // 命名数据库里该数据名称
        let AVTodos = AV.Object.extend('resume')
        let avTodos = new AVTodos

        let acl = new AV.ACL()
        acl.setReadAccess(AV.User.current(), true) // 只有当前用户能读
        acl.setWriteAccess(AV.User.current(), true) // 只有当前用户能写

        // 设置内容为dataString【即字符串化的resume数据】
        avTodos.set('content', dataString)
        // 设置访问控制
        avTodos.setACL(acl)

        avTodos.save().then((resume) => {
          // 保存成功后的代码
          this.$emit('setResumeId', resume.id) // 保存成功后，说明数据库有了数据，一定把id加上，否则不会执行update
          console.log('save：', resume)
        }, function (error) {
          alert('保存失败')
        })
      },
      updateInfo() {
        // 如果用户已经储存的过信息，那就更新信息
        let dataString = JSON.stringify(this.resume)
        let avTodos = AV.Object.createWithoutData('resume', this.resume.userId)
        avTodos.set('content', dataString)
        avTodos.save().then(() => {
          console.log('更新成功')
        })
      },
      saveOrUpdateInfo() {
        if (this.resume.userId) {
          console.log('asdfsdf', this.resume.userId)
          this.updateInfo()
        } else {
          this.saveInfo()
        }
        console.log(this.resume)
      },
      fetchInfo() {
        // 拿到用户的数据
        let query = new AV.Query('resume')
        query.find().then((resume) => {
          console.log('fetchinfo的信息', resume)
          // 进入成功回调
          let lastResume = resume[0] // resume是一个数组，取第一项，因为我们更新的就是第一项
          console.log('fetchinfo的最新信息', lastResume)
          let id = lastResume.id // 在leancloud，每一个数据都有一个ObjectId
          this.$emit('replaceResumeData', JSON.parse(lastResume.attributes.content), id)
          // this.items = JSON.parse(last.attributes.content) // 把todo的内容替换当前items的内容
          // this.items.id = id
          // console.log(this.items)
        }, function (error) {
          console.log(error)
        })
      },
      getCurrentUser() {
        // leancloud 获取当前用户

        // 这个判断主要是为了 created 中的 定义currentUser 服务
        let current = AV.User.current()
        if (current) {
          let {id, createAt, attributes: {username}} = current
          return {id, createAt, username}
        } else {
          return null
        }
      }
    }
  }
</script>

<style lang="scss">
  $topicColor: #F5C343;
  $red: #E23150;

  #topbar {
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .logo {
      display: flex;
      align-items: center;

      > a {
        display: flex;
        height: 100%;
        font-size: 60px;

        > p:first-child {
          color: $red;
          transition: all .5s;
        }
      }

      > a:hover {
        > p:first-child {
          color: #f3adb9;
        }
      }

      .logo-icon {
        color: black;
        display: block;
        padding: 14.5px 20px;
        cursor: auto;

        > svg {
          display: block;
        }
      }

    }

    > .actions {
      margin-right: 60px;
    }
  }

</style>
