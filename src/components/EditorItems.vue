<template>
  <div>
    <div style="margin: 20px;"></div>
    <el-form>
      <div v-for="(item,index) in items" v-bind:key="index">
        <h3>第<span>{{index + 1}}</span>份经历<i class="el-icon-circle-close" @click="deleteItem(index)"></i>
        </h3>
        <hr>
        <el-form-item v-for="(key,index) in itemsKeys" v-bind:label="itemsLabel[index]" v-bind:key="index">
          <el-input v-model="item[key]" v-bind:type="itemsInputType[index]" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
        </el-form-item>
        <div style="margin: 20px;overflow: hidden;"></div>
      </div>
      <el-button style="width: 100%;margin-bottom: 24px;" type="primary" @click="addItem">
        新增一项
      </el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ['items', 'itemsLabel', 'itemsInputType'],
    computed: {
      itemsKeys() {
        // items的key名
        // 如[ "company", "position", "time", "content" ]
        return Object.keys(this.items[0])
      }
    },
    methods: {
      addItem() {
        // 遍历itemsKeys，将其放入一个新对象，并且对象的值为空字符串
        let empty = {}
        this.itemsKeys.map((key) => {
          empty[key] = ''
        })
        this.items.push(empty)
      },
      deleteItem(index) {
        if (this.items.length > 1) {
          this.items.splice(index, 1)
        } else {
          this.open()
        }
      },
      open() {
        this.$message({
          showClose: true,
          message: '请至少保留一项哟',
          type: 'error',
          center: true
        })
      },
    }
  }
</script>
