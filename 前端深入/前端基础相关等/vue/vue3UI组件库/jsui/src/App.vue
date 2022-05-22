<template>
  <div id='app'>
    <div class="container">
      <carousel
        :autoplay="true"
        :duration="3000"
        :initial="0"
        :hasDot="true"
        :hasDirector="true"
      >

        <car-item v-for="(item, index) of carData" :key="index">
          <img :src="require(`./assets/img/${item.img_name}`)" />
        </car-item>

      </carousel>
    </div>
  </div>
</template>

<script>
// 数据
import carData from '@/data/carousel.js'


export default {
  name: 'App',
  setup() {


    return {
      carData
    }
  }
}
</script>

<style scoped>
.container{
  width: 520px;
  height: 280px;

  margin: 150px auto;
}
</style>
