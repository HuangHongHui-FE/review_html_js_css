<template>
    <div class="side-bar">
        <!-- 循环组件 -->
        <ul>
            <li>
                <router-link to="/">首页</router-link>
            </li>
        </ul>

        <template v-for="(item, index) of $store.state.userRouters">
            <MenuItem :key="index" :item="item"/>
        </template>
    </div>
</template>


<script>
import MenuItem from './MenuItem.vue'
export default {
    name: 'SideBar',
    components: {
        MenuItem
    }
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