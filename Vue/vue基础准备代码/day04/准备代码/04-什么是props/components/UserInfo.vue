<template>
  <div class="userinfo">
    <h3>我是个人信息组件</h3>
    <div>姓名：</div>
    <div>年龄：</div>
    <div>是否单身：</div>
    <div>座驾：</div>
    <div>兴趣爱好 </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.userinfo {
  width: 300px;
  border: 3px solid #000;
  padding: 20px;
}
.userinfo > div {
  margin: 20px 10px;
}
</style>