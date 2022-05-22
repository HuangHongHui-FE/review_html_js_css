<template>
  <div id="app">
    <input type="text" placeholder="请搜索" @input="searchAction($event)">
    
    <ul v-if="searchResult.length > 0">
      <li
        v-for="(item, index) of searchResult"
        :key="index"
      >
        <div>
          <img :src="item.img" :alt="item.course_name">
        </div>
        <h1>{{item.course_name}}</h1>
      </li>
    </ul>
    

    <ul v-else>
      <li 
        v-for="(item, index) of courseData"
        :key="index"
      >
        <div>
          <img :src="item.img" :alt="item.course_name">
        </div>
        <h1>{{item.course_name}}</h1>
      </li>
    </ul>
  </div>
</template>

<script>

// 数据
import courseData from '@/data/course';

import {throttle} from '@/libs/utils'


export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      searchResult: [],
      courseData
    }
  },

  methods: {
    // searchAction(e){
    //   const inputValue = e.target.value;
    //   this.searchResult = this.courseData.filter((item) => {
    //     if(item.course_name.includes(inputValue)){
    //       return item
    //     }
    //   })
    // }

    // 节流
    searchAction: throttle(function(e){
      const inputValue = e.target.value;
      this.searchResult = this.courseData.filter((item) => {
        if(item.course_name.includes(inputValue)){
          return item
        }
      })
    }, 2000)
  }
}
</script>

<style>
#app {
  
}
img{
  width: 100px;
  height: 100px;
}
</style>
