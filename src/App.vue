<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/css/iconfont.css"
import HomePage from "./components/HomePage.vue"
import LoginPage from './pages/LoginPage.vue'
export default {
  name: 'App',
  components: {
    HomePage,
    LoginPage,
  }
}
</script>

<style>
.app{
  background-image: url('../public/b6526cf0-3b5f-4d53-b368-bfa785daaeb1.jpg');
  background-size: cover;
  width: 100%;
  z-index: 1;
  position: fixed;
  height: 100%;
}
</style>
