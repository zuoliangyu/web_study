<template>
  <div id="app">
      <HmHeader />
      <HmMain />
      <HmFooter />

  </div>
</template>

<script>
import HmHeader from './components/HmHeader.vue'
import HmMain from './components/HmMain.vue'
import HmFooter from './components/HmFooter.vue'

export default {
  
  components:{
    HmHeader,
    HmMain,
    HmFooter

  }
}
</script>

<style>
  
</style>
