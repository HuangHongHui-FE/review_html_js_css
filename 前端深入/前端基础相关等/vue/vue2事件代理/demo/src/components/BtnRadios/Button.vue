<template>
    <!-- <button :class="['radio-btn', {'current': index === curIdx}]" @click="radioCheck(index)">
        {{item}}
    </button> -->

    <button :class="['radio-btn', {'current': index === curIdx}]" :data-index="index">
        {{item}}
    </button>
</template>



<script>
    export default{
        name: 'RadiosBtn',
        props: {
            item: String,
            index: Number,
            curIdx: Number
        },
        methods: {
            radioCheck(index){
                this.$emit('radioCheck', index)
            }
        }
    }
</script>


<style scoped>
    .radio-btn{
        height: 34px;
        border: none;
        outline: none;
        padding: 0 15px;
        margin-right: 20px;
        border-radius: 5px;
        border: 1px solid #ddd;
        color: #999;
        background-color: #eee;
    }

    .radio-btn.current {
        background-color: #fff;
        color: red;
        border-color: red;
    }
</style>
