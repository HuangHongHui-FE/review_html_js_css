<template>
  <div class="main">
    <!-- <Nav /> -->
    <!-- <Header /> -->
    <!-- <Content /> -->
    <!-- <My /> -->
    <!-- <Login /> -->
    <!-- <Footer /> -->
    <Register />
  </div>
</template>

<script>
import "./style/static.css";
// import Content from "./main/Content.vue";
// import My from "./main/My.vue";
// import Login from "./main/Login.vue";
import Register from "./main/Register.vue";
// import Footer from "./main/Footer.vue";
// import Header from "./main/Header.vue";
// import PlayList from "./main/PlayList.vue";
// import Nav from "./main/Nav.vue";

export default {
  name: "App",
  components: {
    // Content,
    // Footer,
    // Header,
    // PlayList,
    // Nav,
    // My,
    // Login,
    Register
  },
};
</script>

<style>
.main {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 210px auto;
  grid-template-rows: 80px auto 80px;
  min-width: 1150px;
  min-height: 500px;
}
</style>
