<!--  -->
<template>
<div class="">
    <div class="box">
       <table border="1">
        <thead>
             <th>姓名</th>
           <th>性别</th>
           <th>手机号</th>
           <th>操作</th>
        </thead>
     <tbody>
        <tr v-for="(item,index) in tableData" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.sex }}</td>
        <td>{{ item.iphone }}</td>
        <td>
         <el-button type="primary">查看</el-button>
         <el-button type="danger">删除</el-button>
        </td>
        </tr>
       </tbody>
       </table>
     </div>
      <div class="addbtn">
        <h1></h1>
       </div>
</div>
</template>

<script>
export default {
 methods: {
        handleClick(row) {
            console.log(row);
        }
    },

    data() {
        return {
            tableData: []
        }
    },
    created() {
      this.$apiGet("http://47.94.4.201/index.php/index/teacher/teacherlist").then(res=>{
        this.tableData = res.data.data
        console.log(this.tableData);
      })
    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.box{
    width:1200px;
    // border:1px solid red;
    margin: 0 auto;
}
table{
    width: 1200px;
    border-collapse: collapse;
}
.addbtn{
    width:500px;
    height:500px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background: rgba( 255, 255, 255, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>