<template>
    <div>
        <h1>孙子继承孩子的资产:{{money}}</h1>
        <button @click="useMoney">孙子用钱</button>
    </div>
</template>

<script>
export default {
    name: 'Son',
    props: {
        money: Number
    },
    methods: {
        useMoney(){
            // this.$parent.$parent.$emit('useMoney', 100);  // 通过这个调用爷爷事件

            // 在原型上扩展，自定义方法, 让他自己实现一层层向上传递，孙子向儿子，爸爸，爷爷传
            this.$eventDispatch('useMoney', 100);
        }
    }
    
}
</script>

<style>

</style>