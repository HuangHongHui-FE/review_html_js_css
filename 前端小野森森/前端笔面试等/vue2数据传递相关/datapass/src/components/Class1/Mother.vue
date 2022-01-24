<template>
    <div>
        <h1>家庭资产: {{fatherM}}</h1>
        <!-- <Father
            :fatherM="fatherM"
            @earnMoney="earnMoney"
            @invest="invest"
         /> -->
         <!-- <Father
            :fatherM="fatherM"
            @earnMoney="earnMoney"
            @update:value="value => this.fatherM = value"
         /> -->
         <!-- <Father
            :fatherM="fatherM"
            @earnMoney="earnMoney"
            :value.sync="fatherM"
         /> -->
         <Father
            :fatherM="fatherM"
            @earnMoney="earnMoney"
            @invest="fatherM => this.fatherM = fatherM"
         />
        <Child 
            :childM='childM'
            @getMoney="getMoney"
        />
    </div>
</template>


<script>
import Father from './Father.vue'
import Child from './Child.vue'
export default {
    name:"Mother",
    components: {
        Father,
        Child
    },
    data(){
        return{
            fatherM: 3000,
            childM: 0
        }
    },
    methods: {
        earnMoney(num){
            this.fatherM += num;
        },
        invest(num){
            this.fatherM = num;
        },
        getMoney(num){
            this.fatherM -= num
            this.childM += num
        }
    }
}
</script>


<style scoped>


</style>