<template>
    <div class="content">
        <div class="x" @click="xClick">X</div>
        <div class="top">
            <p>QQ登录</p>
            <p>微信登录</p>
        </div>
        <div class="item1">
            注册新账号
        </div>
            
        <div class="item_input">
            <!-- 这里可以加上正则匹配 -->
            <input type="text" placeholder="请输入QQ号/邮箱/手机号">
            <input type="password" placeholder="输入密码">
            <input type="password" placeholder="确认密码">
            <input type="text" placeholder="请输入验证码">
            <img src="https://p1.music.126.net/iMYQNzWbR4oM1b85Y61jxg==/109951166679850771.jpg?param=200y200" alt="">
        </div>
        <button class="item_button">注册</button>
        <div class="bottom">
            <a href="">已有账号？去登录。</a>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

import { reactive } from "vue";
const data = reactive({
    xIs: true
});
// import NavItem from "../staticComponents/NavItem.vue";
export default defineComponent({
  components: {
    // NavItem,
  },
  setup() {
    const songSheetClick = function (event, id) {
        console.log(event, id)
    }
    const xClick = function (){
        data.xIs = !data.xIs
        console.log(data.xIs)
    }
    return {
      songSheetClick
      ,xClick
    };
  },
});
</script>

<style scoped>
a{
    text-decoration: none;
    cursor: pointer;
}
    .content{
        width: 500px;
        height: 400px;
        background-color: rgb(235, 233, 207);
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .x{
        position: relative;
        top: 10px;
        right: -230px;
    }
    .top{
        position: relative;
        top: 10px;
        text-align: center;
        line-height: 40px;
        background-color: rgba(235, 234, 234, 0.7);
        width: 200px;
        height: 40px;
        border-radius: 20px;
    }
    .top p{
        width: 100px;
        height: 85px;
        display: inline-block;
        cursor: pointer;
    }

    .item1{
        position: relative;
        top: 35px;
        color: rgb(75, 75, 75);
        font-size: 19px;
    }

    .item_input{
        position: relative;
        top: 50px;   
    }
    .item_input input{
        box-sizing: border-box;
        display: block;
        width: 270px;
        height: 34px;
        padding-left: 8px;
        outline: none;
    }   
    .item_input input:nth-child(n+1){
        margin-top: 10px;
    }

    .item_input input:nth-child(4){
        width: 180px;
    }

    .item_input input:focus{
        border: 1px solid rgb(30, 111, 255);
    }
    .item_input img{
        position: absolute;
        top: 142px;
        left: 180px;
        width: 90px;
        height: 34px;
    }

    .item_button{
        position: relative;
        top: 70px;
        width: 270px;
        height: 35px;
        background-color: rgb(30, 111, 255);
        color: white;
        cursor: pointer;
    }

    .bottom{
        position: relative;
        top: 80px;
        font-size: 12px;
        left: 120px;
    }

    .bottom a{
        color: rgb(97, 97, 97);
    }
</style>