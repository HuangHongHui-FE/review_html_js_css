<template>
    <div>
        <h2>父亲资产: {{fatherM}}</h2>

        <button @click="earnMoney">赚钱</button>
        <button @click="invest">投资</button>
    </div>
</template>

<script>
export default {
    name: 'Father',
    props: {
        fatherM: Number
    },
    data(){
        return{

        }
    },
    methods: {
        earnMoney(){
            this.$emit('earnMoney', 100);
        },
        invest(){
            this.$emit('invest', 1000);
        }
    }
}
</script>