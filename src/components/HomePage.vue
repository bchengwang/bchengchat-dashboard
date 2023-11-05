<template>
  <div class="app-1">
    <LeftChat></LeftChat>
    <RightChat></RightChat>
  </div>
</template>
  
  <script>
import "../assets/css/iconfont";
import LeftChat from "../components/LeftChat.vue";
import RightChat from "../components/RightChat.vue";
export default {
  name: "HomePage",
  components: {
    LeftChat,
    RightChat,
  },
};
</script>
  
  <style>
  .app-1{
    display: flex;
  }
</style>
  