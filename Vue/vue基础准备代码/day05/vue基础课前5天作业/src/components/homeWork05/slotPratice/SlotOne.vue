<template>
  <div>
    <div class="top">
      <slot name="title"></slot>
      <slot name="title2"></slot>
    </div>
    <div class="cont">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <slot :item="item" name='body'></slot>
          <slot :item="item" name='body2'></slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list']
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  width: 375px;
  margin: 0 auto;
}
.top {
  background-image: linear-gradient(to right, #007aff, #46d1ff);
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 4px;
  justify-content: space-between;
}
.top h1 ,.top p{
  color: #fff;
  font-size: 22px;
  font-weight: normal;
}
.cont ul {
  list-style: none;
  padding: 0 10px;
  background-color: #fff;
}
</style>
