<template>
  <div id="app">
    <my-btn btnStyle="btn-danger">你按钮</my-btn>
  </div>
</template>

<script>
import MyUI from '@/libs/MyUI';

export default {
  name: 'App',

  // main.js里全局导入了
  
  // mixins: [
  //   MyUI
  // ],
  components: {
  }
}
</script>

<style lang="less">
#app {

}


</style>
