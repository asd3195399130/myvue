<template>
  <div>
    <My-Table :tableData="tableData" :tablehaders="tablehaders">
      <template v-slot:extraButtons="{ row }">
        <el-button size="mini" type="primary" @click="handleExtraAction(row)">其他操作</el-button>
      </template>
    </My-Table>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";

export default {
  components: {
    "My-Table": MyTable,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          age: 16,
        },
        {
          date: "2016-05-02",
          name: "王小1111虎",
          address: "上海市普陀区金沙江路 1518 弄",
          age: 16,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          age: 16,
        },
      ],
      tablehaders: [
        { label: "日期", prop: "date" },
        { label: "姓名", prop: "name" },
        { label: "地址", prop: "address" },
        { label: "年龄", prop: "age" },
      ],
    };
  },
  methods: {},
};
</script>