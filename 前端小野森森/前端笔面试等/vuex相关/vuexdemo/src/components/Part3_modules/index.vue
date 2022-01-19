<template>
    <div>
        <h1>counter1: {{count}}</h1>
        <button @click="setCount(4)">增加4</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: 'MyPartOne',
    computed: {
        // 注意这里的参数
        ...mapState('counter1', {
            count: (state) => state.count
        })
    },
    methods: {
        ...mapMutations('counter1', ['setCount'])
    }
}
</script>

<style scoped>

</style>