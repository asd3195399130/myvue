<!--  -->
<template>
  <div class="">
    <div class="header">
      <el-button type="success" @click="Addbtn">添加按钮</el-button>
    </div>
    <div class="box">
      <div class="seacher">
        <div style="margin-top: 15px">
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
            style="width: 350px"
            @input="sechart"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="sechart"
            ></el-button>
          </el-input>
        </div>
      </div>
      <table border="1">
        <thead>
          <th>ID</th>
          <th>姓名</th>
          <th>性别</th>
          <th>手机号</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.sex === 0 ? "男" : "女" }}</td>
            <td>{{ item.iphone }}</td>
            <td>
              <el-button type="primary" @click="checkbox(item.id)"
                >查看</el-button
              >
              <el-button type="danger" @click="del(item.id)">删除</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
      >
      </el-pagination>
    </div>
    <div class="addbtn" v-if="show">
      <h1>添加</h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="讲师名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.sex"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.iphone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即添加</el-button>
          <el-button @click="show = false">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getlist, addlist, getinfo, getdel, getsech } from "../api/Https";
export default {
  methods: {
    onSubmit() {
      let obj = {
        name: this.form.name,
        sex: this.form.sex,
        iphone: this.form.iphone,
      };
      addlist(obj).then((res) => {
        if (res.code == 0) {
          this.$message({
            message: "添加成功",
            type: "success",
          });
          this.reading();
          this.Addbtn();
        }
      });
    },
    sechart() {
      // this.reading(this.input3)
      this.currentPage = 1;
      let obj = {
        name: this.input3,
        sex: this.input3,
      };
      getinfo(obj).then((res) => {
        this.tableData = res.data.data;
      });
      // this.$apiGet("http://47.94.4.201", {
      //   name: this.input3,
      // }).then((res) => {
      //   this.tableData = res.data.data;
      //   console.log(this.tableData);
      // });
    },
    checkbox(index) {
      let id = index;
      getsech(id).then((res) => {
        const teacher = res.data;
        this.$alert(
          `姓名：${teacher.name}<br>性别：${
            teacher.sex === 0 ? "男" : "女"
          }<br>手机号：${teacher.iphone}`,
          "教师详情",
          {
            dangerouslyUseHTMLString: true,
          }
        );
      });
    },
    reading() {
      const params = {
        page: this.currentPage,
        pagelimit: this.pageSize,
      };
      getlist(params)
        .then((res) => {
          this.tableData = res.data.data;
        })
        .catch((error) => {
          this.$message.error("获取教师列表失败：" + error.message);
        });
      // this.$apiGet("http://47.94.4.201", params).then(res => {
      //   this.tableData = res.data.data
      // }).catch(error => {
      //   this.$message.error('获取教师列表失败：' + error.message);
      // })
    },
    Addbtn() {
      this.show = !this.show;
    },
    del(index) {
      let id = index;

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          getdel(id).then((res) => {
            console.log(res);
            this.reading();
          });
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.reading();
    },
  },

  data() {
    return {
      tableData: [],
      form: {
        name: "",
        sex: "",
        iphone: "",
        currentPage: 1,
        pageSize: 10,
      },
      show: false,
      input3: "",
      currentPage: 1,
      pageSize: 10,
    };
  },
  created() {
    this.reading();
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.box {
  width: 1200px;
  // border:1px solid red;
  margin: 0 auto;
}

table {
  width: 1200px;
  border-collapse: collapse;
}

.addbtn {
  width: 500px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  h1 {
    margin-top: 30px;
  }

  .el-form {
    margin-top: 60px;
  }
}

.header {
  width: 1200px;
  text-align: right;
  // margin-left: 50px;
  margin: auto;
}

.seacher {
  width: 1200px;
  text-align: left;
  margin: auto;
}
</style>