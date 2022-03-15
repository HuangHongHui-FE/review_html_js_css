<template>
    <div>
        <h1>counter1: {{count}}</h1>
        <button @click="setCount(8)">增加4</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: 'MyPartTwo',
    computed: {
        ...mapState('counter2', {
            count: (state) => state.count
        })
    },
    methods: {
        ...mapMutations('counter2', ['setCount'])
    }
}
</script>

<style scoped>

</style>