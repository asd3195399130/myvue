import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import count from "./count.js";

export default new Vuex.Store({
  state: {
    num: 0,
    sum: 0,
    result: 0,
    operation: "add",
  },
  getters: {
    result(state) {
      const num1 = parseFloat(state.num);
      const sum1 = parseFloat(state.sum);
      if (state.operation === "add") {
        return num1 + sum1;
      } else if (state.operation === "subtract") {
        return num1 - sum1;
      } else if (state.operation === "multiply") {
        return num1 * sum1;
      } else if (state.operation === "divide") {
        if (sum1 !== 0) {
          return num1 / sum1;
        } else {
          return "除数不能为零";
        }
      }
    },
  },
  mutations: {
    setNum(state, value) {
      state.num = value;
    },
    setSum(state, value) {
      state.sum = value;
    },
    setresult(state, value) {
      state.result = value;
    },
    setoperation(state, value) {
      state.operation = value;
    },
  },
  actions: {
    calculate({ commit, getters }) {
      commit("setresult", getters.result);
    },
  },
  modules: {
    Count: count,
  },
});
