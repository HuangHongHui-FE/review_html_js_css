<template>
    <div class="side-bar">aide-bar</div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style lang="less" scoped>
    .side-bar{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 200px;
        height: 100%;
        padding-top: 90px;
        box-sizing: border-box;
        background-color: #ededed;
    }
</style>