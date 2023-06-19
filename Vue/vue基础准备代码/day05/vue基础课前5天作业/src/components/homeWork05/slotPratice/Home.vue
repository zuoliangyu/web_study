<template>
  <div class="body">
    <SlotOne :list="list">
      <template #title>
        <h1>本周热搜 TOP5</h1>
      </template>

      <template #body="{ item }">
        <a href="#" class="body1a">
          <p>{{ item.name }}</p>
          <p>
            <img src="../../../assets/hot.png" alt="" />
            <i>{{ item.hotNum }}</i>
          </p>
        </a>
      </template>
    </SlotOne>

    <SlotOne :list="list2">
      <template #title2>
        <h1>可能感兴趣的人</h1>
        <p>换一批</p>
      </template>

      <template #body2="{ item }">
        <div class="body2">
          <div class="left">
            <h2>{{ item.name }} {{ item.age }}岁</h2>
            <p>研究领域：{{ item.major }}</p>
            <p>{{ item.school }} · {{ item.honour }}</p>
          </div>
          <a href="javascript:;">+关注</a>
        </div>
      </template>
    </SlotOne>
  </div>
</template>

<script>
import SlotOne from "./SlotOne.vue";
export default {
  components: {
    SlotOne,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          name: "区块链1",
          hotNum: 82,
        },
        {
          id: 2,
          name: "区块链2",
          hotNum: 12,
        },
        {
          id: 3,
          name: "区块链3",
          hotNum: 823,
        },
        {
          id: 4,
          name: "区块链4",
          hotNum: 12,
        },
        {
          id: 5,
          name: "区块链5",
          hotNum: 43,
        },
        {
          id: 6,
          name: "区块链6",
          hotNum: 75,
        },
      ],
      list2: [
        {
          id: 1,
          name: "苏轼",
          age: 52,
          major: "机电一体化技术",
          school: "合肥科技大学",
          honour: "教授1",
        },
        {
          id: 2,
          name: "苏轼2",
          age: 52,
          major: "机电一体化技术2",
          school: "合肥科技大学2",
          honour: "教授2",
        },
        {
          id: 3,
          name: "苏轼3",
          age: 523,
          major: "机电一体化技术3",
          school: "合肥科技大学3",
          honour: "教授3",
        },
        {
          id: 4,
          name: "苏轼4",
          age: 52,
          major: "机电一体化技术4",
          school: "合肥科技大学4",
          honour: "教授4",
        },
      ],
    };
  },
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
.body2 {
  display: flex;
  justify-content: space-between;
  padding:10px;
  border-bottom: 1px solid #efefef;
}
.body2 h2 {
  font-weight: normal;
  font-size: 20px;
}
.body2 p:first-of-type {
  margin: 4px 0;
}
.body2 a {
  text-decoration: none;
  width: 80px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  background-color: #007aff;
  text-align: center;
  color: #fff;
}
.body1a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  height: 40px;
  border-bottom: 1px solid #efefef;
}
.cont img {
  width: 30px;
}
.body1a p:last-of-type {
  display: flex;
  align-items: center;
}
</style>
