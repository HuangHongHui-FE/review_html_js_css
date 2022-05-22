<template>
    <button :class="['my-btn', btnStyle]">
        <slot></slot>
    </button>
</template>


<script>
    export default {
        name: 'MyBtn',
        props: {
            btnStyle: String
        }
    }
</script>


<style scoped>
    .my-btn{
        height: 34px;
        padding: 0 15px;
        border: none;
        outline: none;
        background-color: #000;
        color: #fff;
    }

    .my-btn.btn-primary {
        background-color: blue;
        color: #fff;
    }

    .my-btn.btn-danger {
        background-color: red;
        color: #fff;
    }

    .my-btn.btn-success {
        background-color: green;
        color: #fff;
    }
</style>
