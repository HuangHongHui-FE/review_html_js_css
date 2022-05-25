<template>
    <re-sub-menu>
        <!-- v-slot="title" -->
        <template #title>
            {{data.title}}
        </template>

        <template v-for="c of data.children" >
            <menu-item v-if="!c.children" :key="c.id">
                {{c.title}}
            </menu-item>
            <re-sub-menu v-else :data="c" :key="c.id"></re-sub-menu>
        </template>
    </re-sub-menu>
</template>


<script>

export default {
    name: 'ReSubMenu',
    props: {
        data: Object
    },
    setup() {

        return {

        }
    }
}
</script>


<style scoped>
</style>
