<template>
  <div id="app">
    <Hea/>
    <Middle/>
    <Bottom/>
  </div>
</template>

<script>
import Hea from './components/Hea.vue'
import Middle from './components/Middle.vue'
import Bottom from './components/Bottom.vue'

export default {
  name: 'App',
  components: {
    Hea,
    Middle,
    Bottom
  }
}
</script>

<style>

</style>
