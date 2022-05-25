<template>
    <div class="tree-menu">
        <slot></slot>
    </div>
</template>



<script>

export default {
    name: 'TreeMenu',
    setup() {
        
    }
}
</script>



<style scoped>
    .tree-menu {
        width: 100%;
        background-color: rgb(0, 0, 0);
        color: #fff;
    }
</style>