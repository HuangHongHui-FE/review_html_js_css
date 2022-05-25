<template>
  <div id='app'>

    <!-- 轮播图组件 -->
    <!-- <div class="container">

      <carousel
        :autoplay="true"
        :duration="1000"
        :initial="0"
        :hasDot="true"
        :hasDirector="true"
        dotBgColor="#000"
      >

        <car-item v-for="(item, index) of carData" :key="index">
          <img :src="require(`./assets/img/${item.img_name}`)" />
        </car-item>

      </carousel>

    </div> -->


    <!-- 无限菜单非递归   v-slot="title" -->
    <!-- <div class="side-bar">
      <tree-menu>
        <template v-for="item of menuData">

          <menu-item v-if="!item.children" :key="item.id">
            {{item.title}}
          </menu-item>

          <sub-menu v-else :key="item.id">
            
            <template #title>
              {{item.title}}
            </template>

            <template v-for="c of item.children" :key="c.id">
              <menu-item>
                {{c.title}}
              </menu-item>
            </template>

          </sub-menu>

        </template>
      </tree-menu>
    </div> -->



    <div class="side-bar">
      <tree-menu>
        <template v-for="item of menuData">

          <menu-item v-if="!item.children" :key="item.id">
            <a href="">
              {{item.title}}
            </a>
          </menu-item>

          <re-sub-menu v-else :key="item.id" :data="item"></re-sub-menu>

        </template>
      </tree-menu>
    </div>

  </div>
</template>

<script>
// 轮播图数据
// import carData from '@/data/carousel.js'

// 无限菜单数据
import menuData from '@/data/menu.js'


export default {
  name: 'App',
  setup() {


    return {
      // carData,
      menuData
    }
  }
}
</script>

<style scoped>
/* 轮播图 */
/* .container{
  width: 520px;
  height: 280px;

  margin: 150px auto;
} */



/* 无限菜单 */
.side-bar{
  width: 300px;
}
</style>
