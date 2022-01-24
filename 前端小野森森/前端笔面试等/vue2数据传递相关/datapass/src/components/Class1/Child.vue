<template>
    <div>
        <h2>子女资产</h2>
        <button @click="getMoney">获得资产</button>
    </div>
</template>

<script>
export default {
    name: 'Child',
    data(){
        return{

        }
    },
    methods:{
        getMoney(){
            this.$emit('getMoney', 50)
        }

    }
}
</script>