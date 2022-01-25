<template>
    <div class="grandpa">
        <!-- ref dom节点上 -》dom对象
            ref  组件上   -> 组件实例
         -->
        <Father
            ref="father"
        />
    </div>
</template>

<script>
import Father from './Father.vue'
export default {
    name: 'Grandpa',
    components: {
        Father
    },
    data(){
        return{
            // 想要把这些数据传给Child
            name: '小爷',
            age: '99',
            hobby: 'Travel',
            homeTown: '北京'
        }
    },
    methods: {
    },
    mounted(){
    }
}
</script>

<style>

</style>