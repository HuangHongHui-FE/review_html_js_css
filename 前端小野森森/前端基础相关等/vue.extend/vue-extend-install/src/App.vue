<template>
  <div id="app">
    <button @click="openMessageBox">show</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    openMessageBox(){
      // 使用
      // console.log(this.$messageBox.show)

      this.$messageBox.show({
        title: 'App',
        content: 'This is CONTENT for App',
        type: 'warn'
      });
    }
  }
}
</script>

<style lang="less">
#app {

}
</style>
