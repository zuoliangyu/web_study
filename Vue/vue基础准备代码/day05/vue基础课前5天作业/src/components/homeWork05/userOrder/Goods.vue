<template>
  <div>
    <h2>商品相关信息</h2>
    <div>
      <div>商品id: <strong>{{goodInfoCur.goodNo}}</strong></div>
      <div>商品名称: <strong>{{goodInfoCur.goodName}}</strong></div>
      <div v-if="goodInfoCur.desc">商品描述: <slot name="desc" :img="goodInfoCur.desc">{{goodInfoCur.desc}}</slot></div>
      <div v-else>商品描述: <slot name="desc" :img="goodInfoCur.desc"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['goodInfoCur']
};
</script>

<style scoped></style>
