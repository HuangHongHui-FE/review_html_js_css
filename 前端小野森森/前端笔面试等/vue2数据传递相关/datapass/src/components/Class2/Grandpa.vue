<template>
    <div>
        <h1>爷爷的资产: {{money}}</h1>
        <Father :money="money" @useMoney="useMoney" />
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
            money: 1000
        }
    },
    methods: {
        useMoney(num){
            this.money -= num
        }
    }
}
</script>

<style>

</style>