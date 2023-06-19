<template>
  <div id="app">
    <h2>测试题</h2>
    <SubjectItem @submitFn="submitFn2"></SubjectItem>
    <div>
      <FlagItem :statusArr="statusArr"></FlagItem>
    </div>
  </div>
</template>

<script>
import FlagItem from "./FlagItem.vue";
import SubjectItem from "./SubjectItem.vue";

export default {
  data() {
    return {
      statusArr: [],
    };
  },
  components: {
    FlagItem,
    SubjectItem,
  },
  methods: {
    submitFn2(val1, val2) {
      console.log(val2)
      if (val1 === val2) {
        this.statusArr.push({
          cont: "回答正确",
          classAttr: "right",
        });
      } else if (val1 !== val2) {
        if (val2 === undefined) {
          this.statusArr.push({
            cont: "未完成",
            classAttr: "undo",
          });
        } else {
          this.statusArr.push({
            cont: "回答错误",
            classAttr: "error",
          });
        }
      }
    },
  },
};
</script>

<style>
body {
  background-color: #eee;
}

#app {
  background-color: #fff;
  width: 500px;
  margin: 50px auto;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 2em;
}
</style>
