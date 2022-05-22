<template>
  <div id="app">
    <BtnRadios :subjects="subjects" />
  </div>
</template>

<script>
import BtnRadios from '@/components/BtnRadios'

export default {
  name: 'App',
  components: {
    BtnRadios
  },
  data(){
    return {
      subjects: [
        'vue',
        'React',
        'Angular'
      ]
    }
  }
}
</script>

<style>
#app {

}
</style>
