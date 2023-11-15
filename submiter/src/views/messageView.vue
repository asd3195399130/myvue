<!--  -->
<template>
  <div class="">
   <h1>{{ form.name }}</h1> 
    <img :src="form.imageUrl" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: "",
    };
  },
  created() {
    this.form = this.$route.params;
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
</style>