<template>
    <div>
        <!-- 绑定notice自定义事件，进行触发 -->
        <Father 
            :name="name"
            :age="age"
            :hobby="hobby"
            :homeTown="homeTown"
            
            @notice="notice"
        />
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
            // 想要把这些数据传给Child
            name: '小爷',
            age: '99',
            hobby: 'Travel',
            homeTown: '北京'
        }
    },
    methods: {
        notice(){
            console.log('回家吃饭了');
        }
    }
}
</script>

<style>

</style>