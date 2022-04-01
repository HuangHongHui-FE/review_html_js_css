<template>
    <div class="ui-stars">
        <!-- 动态绑定class，来调节星星的颜色 -->
        <span
            v-for="number in 5"
            :key="number"
            :class="[
                'iconfont icon-xingxing', 
                number <= starNum ? 'active' : ''
            ]"
            :style="{ fontSize: size + 'px' }"
            @click="setStarNum(number)"
        >
        </span>
    </div>
</template>

<script>
    export default {
        name: 'Stars',
        props: {
            num: {
                type: Number,
                default: 0
            },
            size: {
                type: Number,
                default: 16
            }
        },
        data(){
            return{
                // 注意这里， 不能直接改props传过来的值
                starNum: this.num
            }
        },
        methods: {
            setStarNum(number){
                this.starNum = number;

                // 触发调用这个组件的组件的方法
                this.$emit('getStarNum', this.starNum);
            }
        }
    }
</script>

<style scoped>
@font-face {
  font-family: "iconfont"; /* Project id 3280136 */
  src: url('//at.alicdn.com/t/font_3280136_89640l20k3d.woff2?t=1648288655309') format('woff2'),
       url('//at.alicdn.com/t/font_3280136_89640l20k3d.woff?t=1648288655309') format('woff'),
       url('//at.alicdn.com/t/font_3280136_89640l20k3d.ttf?t=1648288655309') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xingxing:before {
  content: "\e62b";
}

.iconfont.active{
    color: #FCC33F;
}
</style>
