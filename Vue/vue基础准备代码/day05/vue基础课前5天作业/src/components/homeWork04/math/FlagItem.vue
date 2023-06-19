<template>
  <div>
    <div v-if="statusArr.length < 1">
      <span
        v-for="(item, index) in list"
        :key="index"
        >{{ index + 1 }}: {{ item }}</span
      >
    </div>
  <div v-else>
    <span 
      v-for="(item,index) in statusArr"
      :key="index"  
      :class="item.classAttr"
    >{{index+1}}.{{item.cont}}</span>
  </div>
  </div>
</template>

<script>
export default {
  props: ["statusArr"],
  data() {
    return {
      list: ["未完成", "未完成", "未完成", "未完成", "未完成"],
    };
  },
};
</script>

<style scoped>
.right {
  color: green;
}
.error {
  color: red;
}
.undo {
  color: #ccc;
}
</style>
