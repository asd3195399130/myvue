<template>
  <div>
    <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column v-for="(item, index) in tablehaders " :key="index"
      :prop="item.prop"
      :label="item.label"
      width="300">
    </el-table-column>
   <el-table-column label="操作" width="180">
 <template >
 <el-button size="mini" type="primary" >编辑</el-button>
 <el-button size="mini" type="danger" >删除</el-button>
 </template>
</el-table-column>
  </el-table>

  </div>
  
</template>

<script>
  export default {
    props:["tableData","tablehaders"],
    data() {
      return {
       
      }
    }
  }
</script>
<style>
.cell{
  text-align:center;
}
</style>