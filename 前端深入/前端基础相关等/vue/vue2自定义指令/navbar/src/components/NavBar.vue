<template>
    <div class="nav-bar" 
        v-nav-current="{
            curIdx,
            className: 'nav-item',
            activeClass: 'nav-current'
        }">
        <!-- <div
            v-for="(item, index) of items"
            :key="index"
            :class="['nav-item', {'nav-current' : index === curIdx}]"
            @click="changeNav(index)"
        > -->


        <!-- 样式的增减做成自定义指令的方式 -->
        <div
            class="nav-item"
            v-for="(item, index) of items"
            :key="index"
            @click="changeNav(index)"
        >{{item}}
        </div>
    </div>
</template>



<script>

import navCurrent from '@/directives/navCurrent'
    export default {
        name: 'NavBar',
        directives: {
            navCurrent
        },
        data(){
            return {
                curIdx: 0,
                items: [
                    '选项1',
                    '选项2',
                    '选项3',
                    '选项4'
                ]
            }
        },
        methods: {
            changeNav(index) {
                this.curIdx = index
            }
        }
    }
</script>


<style scoped>
    .nav-bar{
        width: 500px;
        height: 50px;
        margin: 50px auto;
        border: 1px solid #000;
    }
    .nav-item {
        float: left;
        width: 25%;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }

    .nav-item.nav-current {
        background-color: #000;
        color: #fff;
    }
</style>
