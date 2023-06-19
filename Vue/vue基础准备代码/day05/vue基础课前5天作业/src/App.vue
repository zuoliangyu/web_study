<template>
  <div>
    <div class="nav">
      <router-link to="/">用户管理</router-link>
      <router-link to="/SlotPratice">插槽练习</router-link>
      <router-link to="/MathHome">数学题</router-link>
      <router-link to="/DoctorHome">医疗系统</router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .nav a {
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    color: #fff;
    margin-right: 1px;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: pink;
  }
  .nav a.router-link-exact-active {

    background-color: hotpink;
  }
</style>
