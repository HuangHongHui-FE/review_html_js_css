<template>
  <div id="app">
    <p>Class1</p>
    <Mother />
    <p>Class2</p>
    <Grandpa />
    <p>Class4</p>
    <Grandpa4 />
    <p>CLass5</p>
    <Grandpa5 />
    <p>Class6</p>
    <Grandpa6 />
  </div>
</template>


<script>
import Mother from './components/Class1/Mother.vue'
import Grandpa from './components/Class2/Grandpa.vue'
import Grandpa4 from './components/Class4/Grandpa.vue'
import Grandpa5 from './components/Class5/Grandpa.vue'
import Grandpa6 from './components/Class6/Grandpa.vue'
export default {
  name: 'App',
  components: {
    Mother,
    Grandpa,
    Grandpa4,
    Grandpa5,
    Grandpa6
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
