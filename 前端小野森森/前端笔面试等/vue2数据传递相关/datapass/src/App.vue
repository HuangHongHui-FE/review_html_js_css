<template>
  <div id="app">
    <Mother />
    <Grandpa />
  </div>
</template>


<script>
import Mother from './components/Class1/Mother.vue'
import Grandpa from './components/Class2/Grandpa.vue'
export default {
  name: 'App',
  components: {
    Mother,
    Grandpa
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
