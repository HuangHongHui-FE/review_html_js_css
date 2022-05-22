<template>
  <div id="app">
    <span>{{count}}</span>
    <p>
      <button @click="plus">+</button>
      <button @click="minus">-</button>
    </p>
  </div>
</template>

<script>
import {ref} from 'vue'


// vue3中直接支持把方法给抽离出去
const useCompute = (count) => {
  const plus = () => {
    count.value++
  }
  const minus = () => {
    count.value--
  }

  return {
    plus,
    minus
  }
}


export default {
  name: 'App',
  setup(){
    const count = ref(0);  // ref是个函数，体现函数式编程

    const {plus, minus} = useCompute(count)

    // const plus =()=> {
    //   count.value++;
    // }

    // const minus = () => {
    //   count.value--;
    // }

    return {
      count,
      plus,
      minus
    }
  }
}
</script>

<style>
#app {
}
</style>
