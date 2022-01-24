<template>
    <div>
        <h1>爸爸继承爷爷的资产: {{money}}</h1>
        <Child :money="money" @useMoney="useMoney" />
    </div>
</template>

<script>
import Child from './Child.vue'
export default {
    name: "Father",
    components: {
        Child
    },
    props: {
        money: Number
    },
    methods: {
        useMoney(num){
            this.$emit('useMoney', num)
        }
    }
}
</script>

<style>

</style>