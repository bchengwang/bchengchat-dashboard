<template>
  <div class="app">
    <Left/>
    <Right/>
  </div>
</template>

<script>
import "./assets/css/iconfont.css"
import Left from './components/Left.vue'
import Right from './components/Right.vue'
import DengLu from './components/DengLu.vue'

export default {
  name: 'App',
  components: {
    Left,
    Right,
    DengLu
  }
}
</script>

<style>

</style>
