<template>
    <div>
        <!-- 直接收到参数 -->
        <h1>姓名: {{this.$attrs.name}}</h1>
    </div>
</template>

<script>

export default {
    name: 'Child',
    components: {

    },
    mounted(){
        console.log(this)
        // 调用Grandpa传过来的自定义事件
        this.$listeners.notice();
    }
    
}
</script>

<style>

</style>