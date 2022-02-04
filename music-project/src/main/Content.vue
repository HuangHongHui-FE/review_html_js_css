<template>
  <div class="content">
    <div>
      <SongSheet
        imgUrl="https://y.qq.com/music/photo_new/T002R300x300M000004EeGWI4b4NXF_1.jpg?max_age=2592000"
        number="1231.1"
        title="周杰伦音乐电台"
        :isIcon="true"
        :isEffect="true"
        iconClass="iconfont icon-shipintianchong"
        iconFontSize="13px"
        :onClick="songSheetClick"
        id="111"
        :style="{ width: '18vw' }"
        padding="0"
        content="周杰伦-七里香(电视台第四版)"
        height="12vw"
        width="18vw"
      />
    </div>
    <div>
      <SongSheet
        imgUrl="https://y.qq.com/music/photo_new/T002R300x300M000004EeGWI4b4NXF_1.jpg?max_age=2592000"
        number="1231.1"
        title="我爱你"
        :isIcon="true"
        :isEffect="true"
        iconClass="iconfont icon-touting"
        iconFontSize="12px"
        :onClick="songSheetClick"
        id="111"
      />
    </div>
    <div>
      <Button :checked="true" :onClick="buttonClick" :params="{ a: 1 }" />
    </div>
    <div>
      <SongSheetPlus
        imgUrl="https://y.qq.com/music/photo_new/T002R300x300M000004EeGWI4b4NXF_1.jpg?max_age=2592000"
        :onClick="songSheetPlusClick"
        number="123"
        size="10vw"
        id="65456"
        :params="{ a: 1 }"
        :sideStyle="{ width: '14vw' }"
        title="飙升榜"
        :content="['花园里的秘密-周杰伦', '奇迹再现', '你不知道']"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SongSheet from "../staticComponents/SongSheet.vue";
import Button from "../staticComponents/Button.vue";
import SongSheetPlus from "../staticComponents/SongSheetPlus.vue";
export default defineComponent({
  props: {},
  components: {
    SongSheet,
    Button,
    SongSheetPlus,
  },
  setup() {
    const songSheetClick = function (event, id) {
      console.log(event, id, "我是songSheetClick组件的点击事件");
    };
    const buttonClick = function (event, params) {
      console.log(event, params, "我是button组件的点击事件");
    };
    const songSheetPlusClick = function (event, params) {
      console.log(event, params, "我是songSheetPlusClick组件的点击事件");
    };
    return {
      songSheetClick,
      buttonClick,
      songSheetPlusClick,
    };
  },
});
</script>

<style>
.content {
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  box-sizing: border-box;
  overflow: scroll;
  background-color: #fcfcfc;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.content::-webkit-scrollbar {
  display: none;
}
</style>
