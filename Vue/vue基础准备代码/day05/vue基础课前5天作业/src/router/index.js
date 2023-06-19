import Vue from "vue";
import VueRouter from "vue-router";
import DoctorHome from "@/components/homeWork04/doctorSystem/Home";
import MathHome from "@/components/homeWork04/math/Home";
import SlotPratice from "@/components/homeWork05/slotPratice/Home";
import UserOrder from "@/components/homeWork05/userOrder/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "UserOrder",
    component: UserOrder,
  },
  {
    path: "/SlotPratice",
    name: "SlotPratice",
    component: SlotPratice,
  },
  {
    path: "/MathHome",
    name: "MathHome",
    component: MathHome,
  },
  {
    path: "/DoctorHome",
    name: "DoctorHome",
    component: DoctorHome,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
