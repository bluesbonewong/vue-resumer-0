<template>
  <div>
    <el-radio-group v-model="labelPosition" size="medium">
      <el-radio-button label="top">基本信息</el-radio-button>
      <el-radio-button label="right">联系方式</el-radio-button>
      <el-radio-button label="left">个人网站</el-radio-button>
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form v-show="labelPosition === 'top'">
      <el-form-item label="照片链接">
        <el-input v-model="profile.photoLink"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="应聘工作">
        <el-input v-model="profile.job"></el-input>
      </el-form-item>
      <el-form-item label="个人年龄">
        <el-input v-model="profile.age"></el-input>
      </el-form-item>
      <el-form-item label="学历">
        <el-input v-model="profile.edubg"></el-input>
      </el-form-item>
      <el-form-item label="毕业院校">
        <el-input v-model="profile.college"></el-input>
      </el-form-item>
    </el-form>
    <el-form v-show="labelPosition === 'right'">
      <el-form-item label="手机号码">
        <el-input v-model="profile.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="profile.email"></el-input>
      </el-form-item>
      <el-form-item label="微信">
        <el-input v-model="profile.wechat"></el-input>
      </el-form-item>
      <el-form-item label="QQ">
        <el-input v-model="profile.qq"></el-input>
      </el-form-item>
    </el-form>
    <el-form v-show="labelPosition === 'left'">
      <el-form-item label="个人博客">
        <el-input v-model="profile.blog"></el-input>
      </el-form-item>
      <el-form-item label="GitHub">
        <el-input v-model="profile.github"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ['profile'],
    data(){
      return {
        labelPosition: 'top'
      }
    }
  }
</script>

<style>

</style>
