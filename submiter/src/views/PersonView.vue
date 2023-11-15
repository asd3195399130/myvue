<!--  -->
<template>
  <div class="">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名字">
        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          action="http://47.94.4.201/index.php/index/upload/uploadimg"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input
          v-model="form.region"
          placeholder="请输入内容"
          style="width: 50%"
        ></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="form.sex" label="0">男</el-radio>
        <el-radio v-model="form.sex" label="1">女</el-radio>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-date-picker
          v-model="form.Date"
          type="date"
          placeholder="选择日期"
          style="width: 50%"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-select
          v-model="vprovince"
          placeholder="请选择省"
          @change="
            selectedCity = 0;
            selectarea = 0;
          "
        >
          <el-option
            v-for="(item, index) in citys"
            :value="index"
            :label="item.name"
            :key="index"
          ></el-option>
        </el-select>
        <el-select
          v-model="selectedCity"
          placeholder="请选择市"
          @change="selectarea = 0"
        >
          <el-option
            v-for="(item, index) in citys[vprovince].city"
            :key="index"
            :label="item.name"
            :value="index"
          >
          </el-option>
        </el-select>
        <el-select v-model="selectarea" placeholder="请选择区/县">
          <el-option
            v-for="(item, index) in citys[vprovince].city[selectedCity].area"
            :key="index"
            :label="item"
            :value="index"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input
          v-model="form.iphone"
          placeholder="请输入内容"
          style="width: 50%"
        ></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱">
        <el-input
          v-model="form.email"
          placeholder="请输入内容"
          style="width: 50%"
        ></el-input>
      </el-form-item>
      <el-form-item label="个人介绍">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editor"
          :defaultConfig="toolbarConfig"
          :mode="mode"
        />
        <Editor
          style="height: 500px; overflow-y: hidden"
          v-model="html"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="onCreated"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <div style="border: 1px solid #ccc"></div>
  </div>
</template>

<script>
import { citys } from "../assets/js/city";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
export default {
  components: { Editor, Toolbar },
  data() {
    return {
      citys: citys,
      form: {
        name: "admin",
        region: "老虎",
        sex: "0",
        imageUrl: "",
        Date: "",
        iphone: "",
        email: "",
      },
      vprovince: 0,
      selectedCity: 0,
      selectarea: 0,
      activeIndex2: 0,
      editor: null,
      html: "<p>hello</p>",
      toolbarConfig: {},
      editorConfig: { placeholder: "请输入内容..." },
      mode: "default", // or 'simple'
    };
  },
  methods: {
    onSubmit() {
      const selectedIndexString =
        this.vprovince + "," + this.selectedCity + "," + this.selectarea;
      let obj = {
        userid: "1",
        name: this.form.name,
        nick: this.form.region,
        sex: this.form.sex,
        img: this.form.imageUrl,
        birthdata: this.formatDateString(this.form.Date),
        iphone: this.form.iphone,
        email: this.form.email,
        strcity: selectedIndexString,
      };
      this.$apiPost(
        "http://47.94.4.201/index.php/index/index/mycenter",
        obj
      ).then((res) => {
        console.log(res);
        // console.log(obj);
        this.$router.replace({ name: "message", params: this.form });
      });
    },
    handleAvatarSuccess(res, file) {
      this.form.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    formatDateString(dateString) {
      // 将日期字符串转换为 Date 对象
      const date = new Date(dateString);
      // 获取年、月、日信息
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月份从0开始，需要加1；并确保两位数显示
      const day = date.getDate().toString().padStart(2, "0"); // 确保两位数显示
      // 构建新的日期字符串
      return `${year}-${month}-${day}`;
    },
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.html = "<p>模拟 Ajax 异步设置内容 HTML</p>";
    }, 1500);
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
  border-radius: 50%;
}

.el-form {
  width: 1200px;
  height: 100%;
  min-height: 1000px;
  border: 1px solid red;
  border: none;
  text-align: left;
  font-size: 16px Medium;
  font-family: "Microsoft YaHei", "微软雅黑";
}

.el-cascader {
  width: 50%;
}

.el-date-picker {
  width: 50%;
}
</style>