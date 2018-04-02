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
  import HelloWorld from './components/HelloWorld'
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'

  export default {
    components: {
      HelloWorld,
      Topbar,
      Editor,
      Preview
    }
  }
</script>

<style lang="scss">
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
