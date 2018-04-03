<template>
  <div id="editor">
    <nav>
      <ul>
        <li v-for="i in [0,1,2,3,4,5]"
            v-bind:class="{active:currentTab === i}"
            @click="currentTab = i">
          <svg class="icon">
            <use v-bind:xlink:href="icon[i]"></use>
          </svg>
        </li>
      </ul>
    </nav>
    <ul class="tab">
      <li v-for="i in [0,1,2,3,4,5]"
          v-bind:class="{active:currentTab === i}" v-text="`Tab${i + 1}`">

      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentTab: 0,
        icon: ['#icon-shenfenzheng', '#icon-tool', '#icon-heart', '#icon-jiangbei', '#icon-work_table', '#icon-xueli']
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

    .tab > li {
      display: none;
    }

    .tab > li.active {
      display: block;
    }

  }

</style>
