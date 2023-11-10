<!--  -->
<template>
<div class="">
<TeachList />
<nav nav>
    <router-link to="/Teacher/manage">讲师管理</router-link>/
    <router-link to="">讲师列表</router-link>
</nav>
<div>
    <router-view></router-view>
</div>

</div>
</template>

<script>
import TeachList from "../components/TeachList.vue"
export default {
    components:{
TeachList 
    },
   
    created() {
    this.$apiGet("http://47.94.4.201/index.php/index/teacher/teacherlist").then(res=>{
        console.log(res);
    })
    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */

a{
    text-decoration: none;
    color: blue;
}
nav{
    text-align: left;
    width: 1200px;
    height: 10px;
    background: #cccccc;
    z-index:3;
    margin: 0 auto;
}
</style>