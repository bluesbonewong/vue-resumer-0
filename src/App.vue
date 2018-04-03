<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'

  export default {
    components: {
      Topbar,
      Editor,
      Preview
    }
  }
</script>

<style lang="scss">
  .icon {
    width: 30px;
    height: 40px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;

  }

  #app {
    display: flex;
    height: 100vh;
    flex-direction: column;
  }

  main {
    display: flex;
    flex: 1;

    > .editor {
      width: 30em;
    }
    > .preview {
      flex: 1;
    }
  }


</style>
