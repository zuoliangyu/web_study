<template>
  <div>
    <div class="subject" v-for="(item, index) in numArr" :key="index">
      <span>{{ item.num1 }}</span>
      <span>+</span>
      <span>{{ item.num2 }}</span>
      <span>=</span>
      <input type="number" v-model.number="item.key" />
      <button @click='submitFn(index)'>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numArr: [],
    };
  },
  created() {
    this.getRandomNum()
  },
  methods: {
    getRandomNum() {
      let num1 = 0;
      let num2 = 0
      for (let i = 0; i < 5; i++) {
        num1 = Math.floor(Math.random() * 20);
        num2 = Math.floor(Math.random() * 20);

        this.numArr.unshift({
          num1,
          num2,
          sum: num1 + num2
        });
      }
    },
    submitFn(index){
      this.$emit('submitFn', this.numArr[index].sum, this.numArr[index].key)
    }
  },
};
</script>

<style scoped>
.subject {
  margin: 5px;
  padding: 5px;
  font-size: 20px;
}
.subject span {
  display: inline-block;
  text-align: center;
  width: 20px;
}
.subject input {
  width: 50px;
  height: 20px;
}
</style>
