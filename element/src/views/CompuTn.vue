<template>
    <div class="">
        <input type="text" v-model="num">
        <select name="" id="" v-model="operation">
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
        </select>
        <input type="text" v-model="sum">
        <button @click="calculate">计算</button>
        <div>结果：{{ result }}</div>
        <!-- {{ num }} -->

    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["sum", "num", "operation"]),
    ...mapGetters(["result"]),
  },
  methods: {
    ...mapMutations(["setNum", "setSum", "setoperation"]),
    ...mapActions(["calculate"]),
    setNum(value) {
      this.$store.commit("setNum", value);
    },
    setSum(value) {
      this.$store.commit("setSum", value);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
</style>