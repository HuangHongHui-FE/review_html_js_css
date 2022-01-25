<template>
    <div>
        <h1>孩子继承爸爸的资产:{{money}}</h1>
        <button @click="useMoney">孩子用钱</button>
        <Son :money="money" @notice="notice" />
    </div>
</template>

<script>
import Son from './Son.vue'

export default {
    name: 'Child',
    components: {
        Son
    },
    props: {
        money: Number
    },
    methods: {
        useMoney(){
            // this.$emit('useMoney', 100);
            console.log(this.$parent)
            this.$parent.$emit('useMoney', 100);  // 通过这个调用爷爷事件
        },

        notice(){
            console.log('孙子：我用钱了呦！')
        }
    }
    
}
</script>

<style>

</style>