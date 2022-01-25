<template>
    <div class="child">

    </div>
</template>

<script>
export default {
    name: 'Child2',
    mounted(){
        this.$eventBus.$emit('childTouch', 'Child2来找你了')
    }
}
</script>

<style scoped>

</style>