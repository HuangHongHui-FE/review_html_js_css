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
            this.money -= num,
            // 爷爷向下，儿子，孙子，爸爸广播数据（注意child与father中的notice）
            this.$eventBroadcast('notice')
        }
    }
}
</script>

<style>

</style>