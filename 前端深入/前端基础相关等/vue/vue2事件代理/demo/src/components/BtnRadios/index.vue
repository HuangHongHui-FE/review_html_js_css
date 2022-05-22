<template>
    <!-- // 事件代理 -->
    <div class="wrapper" @click="radioCheck($event)">  
        
        <radios-btn 
            v-for="(item, index) of subjects"
            :key="index"
            :index="index"
            :curIdx="curIdx"
            :item="item"
            @radioCheck="radioCheck"
        />
    </div>
</template>

<script>

    import RadiosBtn from './Button'

    export default{
        name: 'BtnRadios',
        props: {
            subjects: Array
        },
        components: {
            RadiosBtn
        },
        data(){
            return {
                curIdx: 0
            }
        },
        methods: {
            // 普通方法来做
            // radioCheck(index){
            //     this.curIdx = index
            // }

            // 事件代理来做
            radioCheck(e){
                const tar = e.target, className = tar.className;
                if(className == 'radio-btn'){
                    const index = parseInt(tar.dataset.index);  // 接收data-set传过来的
                    this.curIdx = index
                }
            }
        }
    }
</script>


<style scoped>

</style>
