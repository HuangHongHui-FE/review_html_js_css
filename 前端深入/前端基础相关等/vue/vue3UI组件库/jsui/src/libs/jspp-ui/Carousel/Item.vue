<template>
    <div class="car-item" v-if="selfIndex === currentIndex">
        <slot></slot>
    </div>
</template>

<script>
// 每一个轮播项

import {getCurrentInstance, reactive, toRefs, watch} from "vue";
 
export default {
    name: 'CarItem',
    setup() {
        const instance = getCurrentInstance();
        // 从当前实例上的key拿到currentIndex
        // console.log(instance)

        const state = reactive({
            selfIndex: instance.vnode.key,
            currentIndex: instance.parent.ctx.currentIndex
        })

        // 监听index的改变
        watch(() => {
            return instance.parent.ctx.currentIndex
        }, (value) => {
            state.currentIndex = value;
        })

        return {
            ...toRefs(state)
        }

    }
}
</script>

<style scoped>
    img{
        width: 100%;
    }

    .car-item{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>