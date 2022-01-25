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
    provide(){  // 生产者
        return{
            grandpa: this  // 实例作为了一个数据当做grandpa传递出去
        }
    },
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
        notice(){
            console.log('回家吃饭了');
        }
    },
    mounted(){
        console.log(this.$refs.father.name)  // 通过ref传递， 不仅可以传递数据，也可以传方法
    }
}
</script>

<style>

</style>