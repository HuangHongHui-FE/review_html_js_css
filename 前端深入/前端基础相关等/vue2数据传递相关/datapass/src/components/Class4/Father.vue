<template>
    <div>
        <!-- 直接传递给child -->
        <Child v-bind="$attrs" v-on="$listeners" />
    </div>
</template>

<script>
import Child from './Child.vue'
export default {
    name: "Father",
    components: {
        Child
    },
    // props: {
    //     name: String,
    //     age: Number,
    //     hobby: String,
    //     homeTown: String
    // },
    methods: {

    },
    mounted(){
        // 注意$attrs
        console.log(this)
    }
}
</script>

<style>

</style>