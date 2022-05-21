<template>
  <div>
    Today
  </div>
</template>

<script>
// 请求数据的
import { getData } from '@/services/request';

import { onMounted } from 'vue';

export default {
  name: 'TodayPage',
  setup () {
    onMounted(() => {
      getData('金牛座', 'week')
    })
  }
}
</script>

<style lang="scss" scoped>

</style>