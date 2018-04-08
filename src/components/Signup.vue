<template>
  <div class="wrapper">
    <form class="form" v-on:submit.prevent=signUp>
      <div class="formRow"><input type="text" placeholder="用户名" v-model="formData.userName"></div>
      <div class="formRow"><input type="password" placeholder="密码" v-model="formData.password"></div>
      <div class="formActions"><input type="submit" value="注册"></div>
    </form>
  </div>
</template>

<script>
  import AV from 'leancloud-storage'

  let APP_ID = 'iNIcbsMYCcmXztEdL91zshMK-gzGzoHsz'
  let APP_KEY = 'ETz7LskzcSKrc8Vga1FYqyED'
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  })

  export default {
    data() {
      return {
        formData: {
          userName: '',
          password: ''
        }
      }
    },
    methods: {
      signUp() {
        // 新建 AVUser 对象实例
        let user = new AV.User()
        // 设置用户名
        user.setUsername(this.formData.userName)
        // 设置密码
        user.setPassword(this.formData.userName)
        user.signUp().then((loginedUser) => {
          console.log(loginedUser)
          // 如果注册成功
          // 触发exitUp事件，更改App.vue组件的数据 -> class的改变
          this.$emit('exitUp')
          // 触发successInLean事件，更改更改App.vue组件的数据 -> 控制登录注册/登出的显示
          this.$emit('successInLean')
        }, (error) => {
          alert('注册失败')
        })
      }
    }
  }
</script>

<style lang="scss">
  .wrapper {
    box-sizing: border-box;
    margin: 150px auto;
    display: flex;
    justify-content: center;

    .form {
      padding: 20px;
      box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2);

      .formRow {
        > input {
          margin: 8px;
          width: 500px;
          height: 50px;
          font-size: 20px;
          padding: 6px 10px;
          box-sizing: border-box;
          box-shadow: 0 0.25em 0.5em 0 rgba(46, 61, 73, .12);
          transition: box-shadow .3s ease, border .3s ease;
          border: 1px solid #dbe2e8;
          outline: none;
        }

        > input:hover {
          box-shadow: 0 0.125em 0.5em 0 rgba(46, 61, 73, .06);
        }

        > input:focus {
          border: 1px solid rgba(226, 49, 80, 0.15);
          box-shadow: 0 0 0.75em 0.25em rgba(226, 49, 80, 0.15);
        }
      }

      .formActions {
        > input {
          height: 50px;
          font-size: 20px;
          margin: 8px 8px 20px 8px;
          width: 500px;
          padding: 6px 10px;
          box-sizing: border-box;
          box-shadow: 0 0.25em 0.5em 0 rgba(46, 61, 73, .12);
          transition: all .3s ease, border .3s ease;
          border: 1px solid #dbe2e8;
          background: #E23150;
          color: white;
          outline: none;
        }

        > input:hover {
          box-shadow: 0 0.125em 0.5em 0 rgba(46, 61, 73, .06);
          background: rgb(255, 55, 89);
        }
      }
    }
  }
</style>
