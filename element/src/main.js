import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import MyTable from "@/components/MyTable.vue";
Vue.component("my-table", MyTable);
// import MyTableColunmn from "@/components/MyTableColunmn.vue";
// Vue.component("My-Table-Colunmn", MyTableColunmn);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
