<template>
  <div id="app">
    <button @click="openMessageBox">show</button>
    <button @click="openInfoMessageBox">INFO</button>
    <button @click="openSuccessMessageBox">SUCCESS</button>
    <button @click="openWarnMessageBox">WARN</button>
    <button @click="openDangerMessageBox">DANGER</button>

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
      }, () => {
        console.log('open的回调执行')
      });
    },

    // 以.的方式打开不同的弹出框
    openInfoMessageBox() {
      this.$messageBox.info({
        title: 'Info',
        content: 'This is CONTENT for Info'
      }, () => {
        console.log('Info')
      })
    },

    openSuccessMessageBox(){
      this.$messageBox.success({
        title: 'Success',
        content: 'This is CONTENT for Success'
      }, () => {
        console.log('Success')
      })
    },

    openWarnMessageBox(){
      this.$messageBox.warn({
        title: 'Warn',
        content: 'This is CONTENT for Warn'
      }, () => {
        console.log('Warn')
      })
    },

    openDangerMessageBox(){
      this.$messageBox.danger({
        title: 'Danger',
        content: 'This is CONTENT for Danger'
      }, () => {
        console.log('Danger')
      })
    }
  }
}
</script>

<style lang="less">
#app {

}
</style>
