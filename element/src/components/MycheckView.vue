<!--  -->
<template>
    <div class="">
   <h1>ID是:{{id}}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
         id:""
        }
    },
    created() {
    this.id= this.$route.params.id
    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
</style>