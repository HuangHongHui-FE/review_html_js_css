<template>
  <div id="app">
    <!-- 默认点亮的星星个数，以及星星的大小 -->
    <Stars 
      :num="num"
      :size="size"
    />
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return{
      num: 3,
      size: 30
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
