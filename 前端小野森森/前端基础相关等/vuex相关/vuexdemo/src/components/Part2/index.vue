<template>
    <h1>我的信息: {{myInfo}}</h1>
</template>

<script>
export default {
    name: 'Part2',
    data() {
        return {

        }
    },

    mounted(){
        // 触发在store定义的异步事件
        this.myInfo = this.$store.dispatch('getData', {
            key: 'aaa',
            model: 'c1',
            subject: 1,
            testType: 'rand'
        });
    }

}
</script>

<style>

</style>