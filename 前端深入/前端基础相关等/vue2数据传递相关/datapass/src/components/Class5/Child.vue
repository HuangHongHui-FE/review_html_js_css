<template>
    <div class="child">
    </div>
</template>

<script>

export default {
    // 消费者
    inject: [
        'grandpa'
    ],
    name: 'Child',
    components: {

    },
    mounted(){
        console.log("1", this.grandpa.name)
    }
    
}
</script>

<style>

</style>