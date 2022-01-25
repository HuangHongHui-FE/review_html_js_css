<template>
    <div class="child">
    </div>
</template>

<script>

export default {
    name: 'Child',
    components: {

    },
    mounted(){
        this.$eventBus.$on('childTouch', (param) => {
            console.log(param)
        })
        // 不能直接触发，因为子组件比父组件先mounted
        // this.$eventBus.$emit('fatherTouch', '儿子来找你了')
        
        // 这样就能触发了
        this.$nextTick(() => {
            this.$eventBus.$emit('fatherTouch', '儿子来找你了')
        })
    }
    
}
</script>

<style>

</style>