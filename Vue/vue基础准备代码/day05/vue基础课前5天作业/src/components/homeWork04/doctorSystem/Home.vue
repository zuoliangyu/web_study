<template>
  <div>
    <input placeholder="输入关键字搜索" v-model='doctor'/>
    <table class="my-table">
      <thead>
        <tr>
          <th>就诊日期</th>
          <th>医生姓名</th>
          <th>诊断结果</th>
          <th>处方信息</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{item.date}}</td>
          <td>{{item.doctor}}</td>
          <td>{{item.diagnosis}}</td>
          <td>{{item.prescription}}</td>
          <td @click='isShow = true'>详情</td>
        </tr>
      </tbody>
    </table>
    <Detail :visible.sync="isShow" :list="list"></Detail>
  </div>
</template>
<script>
import Detail from "./Detail.vue";
export default {
  data() {
    return {
      isShow: false,
      doctor: '',
      list: [],
      records: [
        {
          date: "2022-01-01",
          doctor: "张三",
          diagnosis: "感冒",
          prescription: "感冒药",
        },
        {
          date: "2022-02-01",
          doctor: "李四",
          diagnosis: "头疼",
          prescription: "止疼药",
        },
        {
          date: "2022-03-01",
          doctor: "王五",
          diagnosis: "腰痛",
          prescription: "止痛贴",
        },
      ],
    };
  },
  created(){
    this.renderData()
  },
  components: {
    Detail,
  },
  methods: {
    renderData(){
      this.list = this.records
    }
  },
  watch: {
    doctor(newVal){
      this.list = this.records.filter(item => item.doctor === newVal)
      if(this.list.length < 1) this.list = this.records
    }
  }
};
</script>
<style scoped>
.my-table {
  border-collapse: collapse;
  width: 100%;
}

.my-table td,
.my-table th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.my-table th {
  background-color: #f2f2f2;
}
</style>
