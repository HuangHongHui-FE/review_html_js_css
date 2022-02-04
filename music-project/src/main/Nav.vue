<template>
  <div class="nav">
    <div class="nav-music-tag">
      <i>QQ音乐</i>
    </div>
    <div class="nav-music-online">
      <p class="nav-music-online-title">在线音乐</p>
      <NavItem
        :checked="true"
        iconClass="iconfont icon-tuijiansel"
        :onClick="navItemClick"
        :isPlay="true"
      />
      <NavItem
        iconClass="iconfont icon-yinle"
        :onClick="navItemClick"
        text="音乐馆"
      />
      <NavItem
        iconClass="iconfont icon-shipintianchong"
        :onClick="navItemClick"
        text="视频"
      />
      <NavItem
        iconClass="iconfont icon-diantai"
        :onClick="navItemClick"
        text="电台"
      />
    </div>
    <div class="nav-my-music">
      <p class="nav-my-music-title">我的音乐</p>
      <NavItem
        iconClass="iconfont icon-xihuan"
        :onClick="navItemClick"
        text="我喜欢"
      />
      <NavItem
        iconClass="iconfont icon-bendisucai"
        :onClick="navItemClick"
        text="本地和下载"
      />
      <NavItem
        iconClass="iconfont icon-zuijinlaifang"
        :onClick="navItemClick"
        text="最近播放"
      />
      <NavItem
        iconClass="iconfont icon-liebiao"
        :onClick="navItemClick"
        text="试听列表"
      />
    </div>
    <div class="nav-song-list-created">
      <p class="nav-song-list-created-title">创建的歌单</p>
      <NavItem :onClick="navItemClick" text="who" />
      <NavItem :onClick="navItemClick" text="新建歌单1" />
      <NavItem :onClick="navItemClick" text="最新歌曲" />
      <NavItem :onClick="navItemClick" text="我最爱听" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavItem from "../staticComponents/NavItem.vue";
export default defineComponent({
  components: {
    NavItem,
  },
  setup(props) {
    function navItemClick() {
      console.log("我是navItem组件");
    }
    return {
      props,
      navItemClick,
    };
  },
});
</script>

<style scoped>
.nav {
  grid-row-start: 1;
  grid-row-end: 4;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  overflow: scroll;
}
.nav::-webkit-scrollbar {
  display: none;
}
.nav-music-tag,
.nav-music-online,
.nav-my-music,
.nav-song-list-created {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  flex-shrink: 0;
}
.nav-music-tag > i {
  font-size: 30px;
  font-weight: bolder;
  background-image: linear-gradient(to right, #81eed8, #1ecc94);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: center;
}
.nav-music-tag {
  height: 95px;
}
.nav-music-online {
  height: 200px;
}
.nav-my-music {
  height: 210px;
}
.nav-song-list-created {
  height: 200px;
}
.nav-music-online-title,
.nav-my-music-title,
.nav-song-list-created-title {
  font-size: 12px;
  color: #787878;
  margin-left: 20px;
}
</style>
