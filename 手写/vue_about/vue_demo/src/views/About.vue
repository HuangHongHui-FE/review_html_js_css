<template>
  <div class="gouwu">
    <h1>This is an about page</h1>

    <!-- 组件实现购物车的单选全选 -->
    <GouWu />
  </div>
</template>


<script>
import GouWu from '../components/GouWu.vue'
  export default{
    name: 'About',
    components: {
      GouWu
    },
    data(){
      return {

      }
    }
  }
</script>

