<template>
  <div>
    <div style="margin: 20px;"></div>
    <el-form>
      <div v-for="(work,index) in workHistory">
        <h3>第<span>{{index + 1}}</span>份工作<i class="el-icon-circle-close" @click="deleteWorkHistory(index)"></i>
        </h3>
        <hr>
        <el-form-item label="公司">
          <el-input v-model="work.company"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="work.position"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="work.time"></el-input>
        </el-form-item>
        <el-form-item label="工作内容">
          <el-input v-model="work.content"></el-input>
        </el-form-item>
        <div style="margin: 20px;overflow: hidden;"></div>
      </div>
      <el-button style="width: 100%;margin-bottom: 24px;" type="primary" @click="addWorkHistory">新增工作经历
      </el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ['workHistory'],
    methods: {
      addWorkHistory() {
        this.workHistory.push({
          company: '', position: '', time: '', content: ''
        })
      },
      deleteWorkHistory(index) {
        this.workHistory.splice(index, 1)
      }
    }
  }
</script>
