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
          name: "飞天茅台",
          price: "1499",
          img:
            "https://m.360buyimg.com/babel/jfs/t1/160002/32/24295/171507/61680b59E40e861cb/564a3ae258b5b284.jpg",
        },{
            date:"2023-11-09",
            name:"Apple iPhone 15",
            price:"4599",
            img:"https://img13.360buyimg.com/n7/jfs/t1/138120/34/35667/65859/6462eb1eFca4408a0/963a31a03a269814.jpg.avif"
        }
      ],
      tablehaders: [
        { label: "日期", prop: "date" },
        { label: "商品名称", prop: "name" },
        { label: "价格", prop: "price" },
        { label: "图片", prop: "img" },
      ],
    };
  },
  methods: {},
};
</script>