<template>
    <div>
        <a href="javascript:;" :class="[{current: curIdx === 0}]" @click="changeTab(0, '选项1')">选项1</a>
        <a href="javascript:;" :class="[{current: curIdx === 1}]" @click="changeTab(1, '选项2')">选项2</a>
        <a href="javascript:;" :class="[{current: curIdx === 2}]" @click="changeTab(2, '选项3')">选项3</a>
        <a href="javascript:;" :class="[{current: curIdx === 3}]" @click="changeTab(3, '选项4')">选项4</a>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: 'Tab',
    // props: {
    //     curIdex: Number
    // },

    computed: {
        ...mapState(['curIdx'])
    },
    methods: {
        // changeTab(index){
        //     this.$emit('changeTab', index)
        // }

        // 1. 
        // ...mapMutations(['setCurIdx']),

        // 2.
        changeTab(index, text){
            this.$store.commit('setCurIdx', {index, text})
        }
    }
}
</script>

<style>
    a {
        margin-right: 10px;
    }
    .current{
        text-decoration: none;
        color: #000;
    }
</style>