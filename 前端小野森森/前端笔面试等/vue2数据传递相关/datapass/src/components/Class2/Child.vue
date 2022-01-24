<template>
    <div>
        <h1>孩子继承爸爸的资产:{{money}}</h1>
        <button @click="useMoney">用钱</button>
    </div>
</template>

<script>
export default {
    name: 'Child',
    props: {
        money: Number
    },
    methods: {
        useMoney(){
            this.$emit('useMoney', 100);
        }
    }
    
}
</script>

<style>

</style>