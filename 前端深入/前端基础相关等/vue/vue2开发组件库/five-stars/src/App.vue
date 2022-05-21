<template>
  <div id="app">
    <!-- 默认点亮的星星个数，以及星星的大小 -->
    <Stars 
      :num="starNum"
      :size="size"
      @getStarNum="getStarNum"
    />
  </div>
</template>

<script>
// import Stars from './libs/JSUI/components/Stars.vue'

export default {
  name: 'App',
  components: {
    // Stars
  },
  data () {
    return {
      // 星星数，星星大小
      starNum: 3,
      size: 30
    }
  },
  methods: {
    getStarNum(number){
      this.starNum = number
      // 这里获取到选择的星星
      console.log(this.starNum)
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
