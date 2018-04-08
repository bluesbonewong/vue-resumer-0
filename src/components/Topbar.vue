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
      <el-button type="primary" @click="logout" v-if="successInLeanCloud">注销</el-button>
      <el-button plain @click="preview">进行预览</el-button>
      <el-button plain @click="exitPreview">退出预览</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    props:['successInLeanCloud'],
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
        // 注册功能
        this.$emit('signUp')
      },
      login() {
        // 登录功能
        this.$emit('login')
      },
      logout(){
        // 注销功能
        this.$emit('logout')
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
