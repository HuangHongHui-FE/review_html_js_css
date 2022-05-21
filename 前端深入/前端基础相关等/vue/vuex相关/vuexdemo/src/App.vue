<template>
  <div id="app">
    <!-- <tab :curIdx="curIdx" @changeTab="changeTab" />
    <page :curIdx="curIdx" /> -->

    <tab />
    <br/>

    <page />
    <br/>

    <part1 />
    <br/>

    <part3one />
    <part3two />
  </div>
</template>

<script>
import Tab from '@/components/Tab';

import Page from '@/components/Page';

import Part1 from '@/components/Part1'
import Part3one from '@/components/Part3_modules'
import Part3two from '@/components/Part3_modules/index2'
export default {
  name: 'App',
  components: {
    Tab,
    Page,
    Part1,
    Part3one,
    Part3two
  },
  data(){
    // return {
    //   curIdx: 0
    // }
  },
  methods: {
    // changeTab (index){
    //   this.curIdx = index;
    // }
  }

}
</script>

<style>
#app {
  color: aquamarine;
}
</style>
