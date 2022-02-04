<template>
    <div class="head">
        <img src="https://p1.music.126.net/iMYQNzWbR4oM1b85Y61jxg==/109951166679850771.jpg?param=200y200" alt="头像">
        <div class="head_content">
            <h1>刷不动题</h1>
            <p>暂无</p>
            <p>粉丝: 2 &nbsp;&nbsp;&nbsp;&nbsp;  关注:  8</p>
        </div>
        <p id="nums">icon</p>
    </div>
    
</template>

<script>
import { defineComponent } from "vue";
// import NavItem from "../staticComponents/NavItem.vue";
export default defineComponent({
  components: {
    // NavItem,
  },
  setup() {
    const songSheetClick = function (event, id) {
        console.log(event, id)
    }
    return {
      songSheetClick
    };
  },
});
</script>

<style scoped>
.head {
    height: 200px;
    padding: 10px 40px;
    display: flex;
}
.head img {
    flex: 1;
    width: 180px;
    height: 180px;
    border-radius: 50% 50%;
}
.head_content {
    flex: 3;
    padding: 30px 20px;
}

.head p {
    flex: 1;
}

.head_content h1 {
    color: rgb(15, 140, 250);
}

.head_content p {
    padding-top: 20px;
    font-size: 1px;
}

.head_content p:nth-child(2){
    color: rgb(17, 238, 164);
}

.head_content p:nth-child(3){
    color: brown;
    
}

#nums{
    padding-top: 160px;
}

</style>