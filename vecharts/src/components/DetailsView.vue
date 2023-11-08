<!--  -->
<template>
    <div class="">
        <h1>详情页面</h1>
        <h2>ID:{{ id }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: ""
        }
    },
    created() {
        this.id = this.$route.params.id;
    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
</style>