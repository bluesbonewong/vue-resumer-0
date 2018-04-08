<template>
  <div class="wrapper">
    <form class="form" v-on:submit.prevent=login>
      <div class="formRow"><input type="text" placeholder="用户名" v-model="formData.userName"></div>
      <div class="formRow"><input type="password" placeholder="密码" v-model="formData.password"></div>
      <div class="formActions"><input type="submit" value="登录"></div>
    </form>
  </div>
</template>

<script>
  import AV from 'leancloud-storage'

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
      login() {
        AV.User.logIn(this.formData.userName, this.formData.password).then((loginedUser) => {
          console.log(loginedUser)
          // 如果登录成功
          // 触发exitUp事件，更改App.vue组件的数据
          this.$emit('exitUp')
          // 触发successInLean事件
          this.$emit('successInLean')
        }, function (error) {
          alert('登录失败')
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
