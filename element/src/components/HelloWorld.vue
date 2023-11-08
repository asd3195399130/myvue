<template>
  <div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="searchName" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
    <el-table :data="tableData" border style="width: 100% ">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column fixed prop="id" label="ID" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="150">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="150">
      </el-table-column>
      <el-table-column prop="province" label="省份" width="150">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="150">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="150">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row.id)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="editclick(scope.$index)">编辑</el-button>
          <el-button type="text" size="small" @click="del(scope.$index)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
      点我打开
    </el-button>

    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="名字" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="sex">
          <el-select v-model="ruleForm.sex" placeholder="选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date"
                style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="省份" prop="type">
          <el-input v-model="ruleForm.province"></el-input>
        </el-form-item>
        <el-form-item label="城市" prop="resource">
          <el-input v-model="ruleForm.city"></el-input>
        </el-form-item>
        <el-form-item label="详情地址" prop="desc">
          <el-input type="textarea" v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="邮政编号" prop="desc">
          <el-input type="textarea" v-model="ruleForm.zip"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">{{ text }}</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

    </el-drawer>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(id) {
      console.log(id);
      this.$router.push({ name: "Mycheck", params: { id } });
    },
    //删除
    del(index) {
      if (confirm("你确定要删除吗")) {
        this.tableData.splice(index, 1);
      }
    },
    formatDateString(dateString) {
      // 将日期字符串转换为 Date 对象
      const date = new Date(dateString);
      // 获取年、月、日信息
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');  // 月份从0开始，需要加1；并确保两位数显示
      const day = date.getDate().toString().padStart(2, '0');  // 确保两位数显示
      // 构建新的日期字符串
      return `${year}-${month}-${day}`;
    },
    // 搜索
     search(){

     },
    // 添加或者修改
    submitForm() {
      if (this.editindex > -1) {
        this.tableData[this.editindex].name = this.ruleForm.name;
        this.tableData[this.editindex].sex = this.ruleForm.sex;
        this.tableData[this.editindex].date = this.ruleForm.date;
        this.tableData[this.editindex].province = this.ruleForm.province;
        this.tableData[this.editindex].city = this.ruleForm.city;
        this.tableData[this.editindex].address = this.ruleForm.address;
        this.tableData[this.editindex].zip = this.ruleForm.zip;
      } else {
        this.tableData.push({
          id: this.tableData.length + 1,
          name: this.ruleForm.name,
          sex: this.ruleForm.sex,
          date: this.formatDateString(this.ruleForm.date),
          province: this.ruleForm.province,
          city: this.ruleForm.city,
          address: this.ruleForm.address,
          zip: this.ruleForm.zip
        })
        this.ruleForm = {
          name: '',
          sex: '',
          date: '',
          province: '',
          city: "",
          address: '',
          zip: ''
        }
      }
      this.text = "点我修改",
        this.drawer = false
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //修改
    editclick(index) {
      // console.log(index);
      this.editindex = index
      this.ruleForm.name = this.tableData[index].name;
      this.ruleForm.sex = this.tableData[index].sex;
      this.ruleForm.province = this.tableData[index].province;
      this.ruleForm.city = this.tableData[index].city;
      this.ruleForm.date = this.tableData[index].date;
      this.ruleForm.address = this.tableData[index].address;
      this.ruleForm.zip = this.tableData[index].zip
      this.drawer = true
      this.text = "点我修改"
    }

  },
  watch: {
    searchName(newVal){
      console.log(newVal);
      if(this.searchName == ""){
        return this.tableData
      }else{
        return this.tableData = this.tableData.filter(item=>item.name.includes(this.searchName))
      }
    }
  },
  data() {
    return {
      drawer: false,
      searchName:"",
      tableData: [
        {
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        sex: "男",
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        id: 2,
        date: '2016-05-04',
        name: '张晓红',
        province: '上海',
        sex: "男",
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        sex: "男",
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        sex: "男",
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }
    ],
      ruleForm:{
        name: '',
        sex: '',
        date: '',
        province: '',
        city: "",
        address: '',
        zip: ''

      },
      editindex: -1,
      text: "点我添加"

    }
  }
}
</script>
<style>
.el-table {
  text-align: center
}

.cell {
  text-align: center
}
</style>