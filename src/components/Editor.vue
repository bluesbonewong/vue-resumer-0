<template>
  <div id="editor">
    <nav>
      <ul>
        <li v-for="i in [0,1,2,3,4]"
            v-bind:class="{active:currentTab === i}"
            @click="currentTab = i">
          <svg class="icon">
            <use v-bind:xlink:href="icon[i]"></use>
          </svg>
        </li>
      </ul>
    </nav>
    <ul class="tab">
      <!--<li v-for="i in [0,1,2,3,4,5]"-->
      <!--v-bind:class="{active:currentTab === i}" v-text="`Tab${i + 1}`">-->
      <!---->
      <!--</li>-->
      <li v-bind:class="{active:currentTab === 0}">
        <h1>个人信息</h1>
        <EditorProfile v-bind:profile="resume.profile"/>
      </li>
      <li v-bind:class="{active:currentTab === 1}">
        <h1>技能描述</h1>
        <EditorItems v-bind:items="resume.skillHistory" v-bind:itemsLabel="resume.skillLabels" v-bind:itemsInputType="resume.skillInputType"/>
      </li>
      <li v-bind:class="{active:currentTab === 2}">
        <h1>项目描述</h1>
        <EditorItems v-bind:items="resume.projectHistory" v-bind:itemsLabel="resume.projectLabels" v-bind:itemsInputType="resume.projectInputType"/>
      </li>
      <li v-bind:class="{active:currentTab === 3}">
        <h1>工作经历</h1>
        <EditorItems v-bind:items="resume.workHistory" v-bind:itemsLabel="resume.workLabels" v-bind:itemsInputType="resume.workInputType"/>
      </li>
      <li v-bind:class="{active:currentTab === 4}">
        <h1>教育经历</h1>
        <EditorItems v-bind:items="resume.eduHistory" v-bind:itemsLabel="resume.eduLabels" v-bind:itemsInputType="resume.eduInputType"/>
      </li>
      <li v-bind:class="{active:currentTab === 5}">

      </li>
    </ul>
  </div>
</template>

<script>
  import EditorProfile from './EditorProfile'
  import EditorItems from './EditorItems'

  export default {
    props: ['resume'],
    components: {
      EditorProfile,
      EditorItems,
    },
    data() {
      return {
        currentTab: 0,
        icon: ['#icon-shenfenzheng', '#icon-tool', '#icon-jiangbei', '#icon-work_table', '#icon-xueli', '#icon-heart']
      }
    }
  }
</script>

<style lang="scss">
  #editor {
    color: #606266;
    /*background: #2d2d2d;*/
    min-height: 100px;
    background: #2F3339;
    display: flex;

    nav {
      display: flex;
      flex-direction: column;
      width: 70px;
      background: #000;
      height: 100%;

      > ul > li {
        padding: 15px 20px;
        transition: all .3s;
      }

      > ul > li.active {
        background: #E23150;
        color: white;
      }

      > ul > li:hover {
        color: white;
      }
    }

    .tab {
      padding: 0 24px;
      flex-grow: 1;
      overflow: auto;

      > li {
        display: none;

        h1 {
          margin: 20px 0 24px 0;
          color: #FFF;
        }

        h3 {
          margin-bottom: 10px;

          > span {
            padding: 0 10px;
            font-family: 'Vani';
            color: #E23150;
          }

          > .el-icon-circle-close {
            color: white;
            margin-left: 260px;
            transition: all .3s;
            cursor: pointer;
          }

          > .el-icon-circle-close:hover {
            color: #E23150;
          }
        }

        hr {
          border-color: #E23150;
        }
      }

      li.active {
        display: block;
      }
    }

  }

</style>
