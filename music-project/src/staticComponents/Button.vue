<template>
  <div
    :class="{ button: true, 'button-checked': props.checked }"
    :style="props.style"
    @click="props.onClick($event, props.params)"
  >
    <i :class="props.iconClass"></i>
    <span>{{ props.text }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    iconClass: {
      type: String,
      default: "iconfont icon-24gl-play",
    },
    text: {
      type: String,
      default: "全部播放",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    style: Object,
    params: Object,
    onClick: Function,
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style>
.button {
  width: 110px;
  height: 32px;
  border-radius: 20px;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
}
.button:hover {
  background-color: #d9d9d9;
}

.button-checked {
  background-image: linear-gradient(to right, #54dabf, #1ecc94);
}
.button-checked > i,
.button-checked > span {
  color: white !important;
}

.button > i {
  font-weight: 600;
  font-size: 18px;
  vertical-align: bottom;
}

.button > span {
  font-size: 14px;
  padding-left: 5px;
}
</style>
