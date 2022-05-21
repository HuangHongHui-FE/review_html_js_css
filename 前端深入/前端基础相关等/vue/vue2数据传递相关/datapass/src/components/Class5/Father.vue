<template>
    <div class="father">
        <!-- 直接传递给child -->
        <Child />
    </div>
</template>

<script>
import Child from './Child.vue'
export default {
    inject: [
        'grandpa'
    ],
    name: "Father",
    components: {
        Child
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
        console.log(this.grandpa.name)
    }
}
</script>

<style>

</style>