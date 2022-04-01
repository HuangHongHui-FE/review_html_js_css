// 处理点击事件延迟与初始化东西
import FastClick from "./fastclick";

// 设置html上的字体大小，以便使用rem
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + "px";

window.addEventListener(
  "load",
  function() {
    FastClick.attach(document.body);
  },
  false
);

document.documentElement.addEventListener(
  "touchmove",
  function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  },
  false
);
