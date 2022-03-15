<template>
    <div class="father">
        <!-- 直接传递给child -->
        <Child />
        <Child2 />
    </div>
</template>

<script>
import Child from './Child.vue'
import Child2 from './Child2.vue'
export default {
    name: "Father",
    components: {
        Child,
        Child2
    },
    data(){
        return{
            name: '大爷',
            age: '35',
            hobby: 'coding'
        }
    },
    methods: {
        
    },
    mounted(){
        this.$eventBus.$on('fatherTouch', (param) => {
            console.log(param)
        })
    }
}
</script>

<style>

</style>