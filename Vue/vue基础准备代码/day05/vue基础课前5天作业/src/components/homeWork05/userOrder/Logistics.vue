<template>
  <div>
    <h2>物流相关信息</h2>
    <div class="logistics-info-header">
      <div class="logistics-info-header-left">
        <div :class="list[0].classAttr">{{ list[0].cont }}</div>
        <div class="logistics-company">{{ orderInfo.logisticsCompany }}</div>
        <div class="logistics-no">{{ orderInfo.logisticsNo }}</div>
      </div>
    </div>
    <ul class="logistics-info-list">
      <li v-for="(item, index) in orderInfo.logisticsInfo" :key="index">
        <div class="logistics-info-list-time">{{ item.time }}</div>
        <div class="logistics-info-list-content">{{ item.content }}</div>
      </li>
    </ul>
    <button v-judge="orderInfo">查看物流详情</button>
  </div>
</template>

<script>
export default {
  directives: {
    judge: {
      inserted(el, binding) {
        el.addEventListener("click", function () {
          if (
            binding.value.role == "admin" ||
            binding.value.role == "zhangsan" ||
            binding.value.role == "lisi"
          ) {
            alert("你可以查看~");
          } else {
            alert("你无权查看");
          }
        });
      },
    },
  },
  props: ["orderInfo"],
  data() {
    return {
      list: [],
    };
  },
  created() {
    let info = this.orderInfo.logisticsStatus;
    console.log(info);
    switch (info) {
      case 0:
        this.list.push({ cont: "未发货", classAttr: "blue logistics-status" });
        break;
      case 1:
        this.list.push({ cont: "已发货", classAttr: "undo logistics-status" });
        break;
      case 2:
        this.list.push({ cont: "已签收", classAttr: "error logistics-status" });
        break;
      case 3:
        this.list.push({ cont: "未签收", classAttr: "right logistics-status" });
        break;
      default:
        console.log(12);
    }
  }
};
</script>

<style scoped>
.blue {
  color: blue;
}
.undo {
  color: #ccc;
}
.error {
  color: red;
}
.right {
  color: green;
}
</style>
