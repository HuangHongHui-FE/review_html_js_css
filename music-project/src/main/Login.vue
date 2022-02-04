<template>
    <div class="content" v-show="data.xIs">
        <div class="x" @click="xClick">X</div>
        <div class="top">
            <p>QQ登录</p>
            <p>微信登录</p>
        </div>
        <div class="item1">
            账号密码登录
        </div>
        <div class="item2">
            <p>推荐使用<a href="">快速安全登录</a>，防止盗号。</p>
        </div>
        <div class="item_input">
            <p v-if="data.user_x" @click="userXClick">x</p>
            <input type="text" placeholder="支持QQ号/邮箱/手机号登录" v-model="data.user" @input="userChange">
            <input type="text" placeholder="密码" v-model="data.password" @input="passwordChange">
        </div>
        <button class="item_button">授权并登录</button>
        <div class="bottom">
            <a href="">忘了密码？</a> | <a href="">注册新账号</a>  |  <a href="">意见反馈</a>
        </div>
    </div>
    
    
</template>

<script>
import { defineComponent } from "vue";

import { reactive } from "vue";

// import NavItem from "../staticComponents/NavItem.vue";
export default defineComponent({
  components: {
    // NavItem,
  },
  setup() {
    const data = reactive({
        xIs: true,
        user: '',
        password: '',
        user_x: false
    });
    const songSheetClick = function (event, id) {
        console.log(event, id)
    }
    const xClick = function (){
        data.xIs = !data.xIs
    }
    const userChange = function() {
        console.log(data.user)
        if(data.user !== ''){
            data.user_x  = true       
        }else{
            data.user_x = false
        }
    }

    const passwordChange = function(){
        console.log(data.password)
    }

    const userXClick = function(){
        data.user_x = !data.user_x
        data.user = ''
    }
    return {
        data,
        songSheetClick
        ,xClick,
        userChange,
        userXClick,
        passwordChange
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
    .item2{
        position: relative;
        top: 50px;
        color: rgb(153, 153, 153);
    }

    .item2 a{
        color: rgb(30, 111, 255);;
    }

    .item_input{
        position: relative;
        top: 80px;
        
        
    }
    .item_input p{
        position: absolute;
        top: 5px;
        left: 250px;
        color: turquoise;
    }
    .item_input input{
        box-sizing: border-box;
        display: block;
        width: 270px;
        height: 34px;
        padding-left: 8px;
        outline: none;
        margin-bottom: 10px;
    }

    .item_input input:focus{
        border: 1px solid rgb(30, 111, 255);
    }

    .item_button{
        position: relative;
        top: 85px;
        width: 270px;
        height: 35px;
        background-color: rgb(30, 111, 255);
        color: white;
        cursor: pointer;
    }

    .bottom{
        position: relative;
        top: 130px;
        font-size: 12px;
        left: 100px;
    }

    .bottom a{
        color: rgb(97, 97, 97);
    }
</style>