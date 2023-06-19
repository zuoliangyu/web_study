<template>
  <div class="app">
    <h4>父组件 -- <button>获取组件实例</button></h4>
    <BaseForm></BaseForm>
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'
export default {
  components: {
    BaseForm,
  },
  methods: {
   
  }
}
</script>

<style>
</style>