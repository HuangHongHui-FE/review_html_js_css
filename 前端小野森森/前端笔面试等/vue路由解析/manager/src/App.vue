<template>
  <div id="app">
    <MHeader />
    <SideBar />
    <PageBoard />
  </div>
</template>

<script>
import MHeader from '@/components/Header'
import SideBar from '@/components/SideBar'
import PageBoard from '@/components/PageBoard'

import {getUserRouters} from '@/services';

export default {
  name: 'App',
  components: {
    MHeader,
    SideBar,
    PageBoard
  },
  async mounted(){
    const data = await getUserRouters(1);
    console.log(data)
  }
}
</script>

<style lang="less">
  #app {
    height: 100%;
  }
</style>
