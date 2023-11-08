<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column v-for="column in tableColumns" :key="column.prop" :label="column.label" :prop="column.prop">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="text" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="mini" type="text" @click="handleRemove(scope.row)">删除</el-button>
        <slot name="extraButtons" :row="scope.row"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'my-table',
  props: {
    tableData: {
      type: Array,
      required: true
    },
    tableColumns: {
      type: Array,
      required: true
    }
  },
  methods: {},
  create(){
    console.log(this.tableData,this.tableColumns);
  }
}
</script>
