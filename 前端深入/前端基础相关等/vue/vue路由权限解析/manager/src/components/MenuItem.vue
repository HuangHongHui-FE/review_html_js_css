<template>
    <div>
        MenuItem
        <ul v-if="item.children && item.children.length > 0">
            <li>
                <router-link :to="item.link">{{item.title}}</router-link>
                <!-- 有儿子的话递归 -->
                <template v-for="(c, i) of item.children">
                    <MenuItem :key="i" :item="c" />
                </template>
            </li>
        </ul>

        <ul v-else>
            <router-link :to="item.link || item.path">{{item.title}}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        item: Object
    }
}
</script>

<style lang="less" scoped>

</style>