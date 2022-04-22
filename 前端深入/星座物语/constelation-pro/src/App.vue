<template>
  <div id="app">
    <my-header>星座物语</my-header>  // 那变边用slot接收
    <NavBar />
    <ErrorTip />
    <router-view v-slot="{ Component }" v-if="!errorCode">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <!-- 底部的tab -->
    <tab />
  </div>
</template>

<script>
  import MyHeader from '@/components/Header';
  import Tab from '@/components/Tab';
  import NavBar from '@/components/NavBar';
  import ErrorTip from '@/components/ErrorTip';
  
  import { watch, computed } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';

  export default {
    name: 'App',
    components: {
      MyHeader,
      Tab,
      NavBar,
      ErrorTip
    },
    setup () {
      const store = useStore(),
            state = store.state,
            router = useRouter();
      
      // 刷新页面，回到跟路由
      router.push('/');
      store.commit('setField', 'today');
      
      watch(() => {
        // console.log(router)  // 当前的路由信息
        return router.currentRoute.value.name;   // return 出去的为value
      }, (value) => {
        store.commit('setField', value);
      });

      return {
        errorCode: computed(() => state.errorCode)
      }
    }
  }
</script>
