<template>
  <div id="app">
    <message-box
      title="App"
      content="This is CONTENT for App"
      type="danger"
    ></message-box>
  </div>
</template>

<script>
import { MessageBox } from './components/MyUI';

export default {
  name: 'App',
  components: {
    MessageBox
  }
}
</script>

<style lang="less">
#app {

}
</style>
