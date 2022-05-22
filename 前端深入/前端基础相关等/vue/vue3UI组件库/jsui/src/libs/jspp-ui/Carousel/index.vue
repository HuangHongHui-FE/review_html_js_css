<template>
    <!-- 鼠标事件 -->
    <div class="carousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <!-- 这里那么多div是为了方便到时候添样式 -->
        <div class="inner">
            <CarDot 
                :hasDot="hasDot" 
                :itemLen="itemLen" 
                :currentIndex="currentIndex" 
                :dotBgColor="dotBgColor" 
                @dotClick="dotClick"
            />
            <!-- 左右的指示器 -->
            <CarDirector
                dir="prev"
                @dirClick="dirClick"
            />
            <CarDirector
                dir="next"
                @dirClick="dirClick"
            />
            <slot></slot>
        </div>
    </div>
</template>

<script>

import {reactive, toRefs, onMounted, onBeforeUnmount, getCurrentInstance} from 'vue';

import CarDot from './Dot.vue'  // 小圆点
import CarDirector from './Director.vue'  // 小圆点

export default {
    name: 'Carousel',
    components: {
        CarDot
    },
    props: {
        autoplay: {
            type: Boolean,
            default: true
        },
        duration: {
            type: Number,
            default: 3000
        },
        initial: {
            type: Number,
            default: 0
        },
        hasDot: {
            type: Boolean,
            default: true
        },
        hasDirector: {
            type: Boolean,
            default: true
        },
        dotBgColor: String
    },

    setup(props){
        const instance = getCurrentInstance();

        const state = reactive({
            currentIndex: props.initial,
            itemLen: 0
        })


        // 播放的逻辑
        let t = null;
        const autoplay = () => {
            if(props.autoplay){
                t = setInterval(() => {
                    setIndex('prev')  // 按照轮播图index设置
                }, props.duration)
            }
        }

        const setIndex = (dir) => {
            switch (dir) {
                case 'next':
                    state.currentIndex += 1
                    if(state.currentIndex === state.itemLen) {
                        state.currentIndex = 0
                    }
                    break;
                case 'prev':
                    state.currentIndex -= 1
                    if(state.currentIndex === -1) {
                        state.currentIndex = state.itemLen - 1;
                    }
                    break;
                default:
                    break;
            }
        }

        // 圆点点击事件
        const dotClick = (index) => {
            state.currentIndex = index
        }


        const mouseEnter = () => {
            clearInterval(t);
            t = null;
        }

        const mouseLeave = () => {
            autoplay();
        }

        // 指示器的点击
        const dirClick = (dir) => {
            setIndex(dir)
        }

        onMounted(() => {
            // console.log(instance)
            // console.log(instance.slots.default())  // 为了找到itemLen总共的轮播图个数

            state.itemLen = instance.slots.default()[0].children.length;

            autoplay();
        })

        onBeforeUnmount(() => {
            clearInterval(t);
            t = null;
        })




        return {
            ...toRefs(state),
            dotClick,
            mouseEnter,
            mouseLeave,
            dirClick
        }
    }
}
</script>



<style>
    .carousel{
        width: 100%;
        height: 100%;
    }
    .inner{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>