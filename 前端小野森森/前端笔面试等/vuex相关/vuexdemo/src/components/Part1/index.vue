<template>
    <h1>我的信息: {{myInfo}}</h1>
</template>

<script>
export default {
    name: 'Part1',
    data() {
        return {
            myInfo: '无'
        }
    },

    // mounted里面取到我的信息值,也有两种方式，Import的方式
    mounted(){
        this.myInfo = this.$store.getters.getMyInfo
    }

}
</script>

<style>

</style>