<!--  -->
<template>
<div class="">
   <div id="box">
       <div class="login">
          <div class="left">
            <div v-if="show1">
              <el-form   label-width="100px" class="demo-ruleForm">
              <h1>登录</h1>
               <el-form-item label="账户" prop="username">
                 <el-input v-model="username" placeholder="请输入用户"></el-input>
               </el-form-item>
               <el-form-item label="密码" prop="pwd">
                 <el-input v-model="password" placeholder="请输入密码"></el-input>
               </el-form-item>
               <el-form-item label="验证吗" prop="name">
                <el-input v-model="buttonText" placeholder="请输入验证码" style="width: 160px;margin-right:112px; float:left"></el-input>  
                   <span style="float:left">{{ code }}</span>
                   <div style="clear:both"></div>
               </el-form-item>
            <el-form-item>
          <button @click.prevent="sunmitForm" class="login_row">登录</button>
        </el-form-item>
        </el-form>
           </div>
           <div v-if="show2">
              <el-form   label-width="100px" class="demo-ruleForm">
              <h1>注册</h1>
               <el-form-item label="账户" prop="username">
                 <el-input v-model="username" placeholder="请输入用户"></el-input>
               </el-form-item>
               <el-form-item label="密码" prop="password">
                 <el-input v-model="password" placeholder="请输入密码"></el-input>
               </el-form-item>
               <el-form-item label="邮箱" prop="name">
                <el-input v-model="email" placeholder="请输入邮箱地址" style="width: 300px;"></el-input>  
               </el-form-item>
            <el-form-item>
             <button @click.prevent="enroll" class="login_row">去登陆</button>
           </el-form-item>
             </el-form>
           </div>
          </div>
      <div class="right">
           <el-button type="primary" size="medium" v-if="show1" @click="singup">注册</el-button>
           <el-button type="primary" size="medium" v-if="show2" @click="login">登录</el-button>
          </div>
         <div style="clear:bath"></div>
      </div>
    </div>
</div>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      code:"",
      buttonText:"",
      show1:true,
      show2:false,
      email:""
    };
  },
  methods: {
    singup(){
      this.show1 = false;
      this.show2 = true;
    },
    login(){
     this.show1 = true;
      this.show2 = false;
    },
    enroll(){
      let obj = {
        name:this.username,
        pwd:this.password,
        emails:this.email
       }
    axios({
      method: "post",
      url: "http://47.94.4.201/index.php/index/index/register",
      data: obj
    }).then(res=>{
       if (res.data.msg == '添加成功') {
          this.$message({
            message: '注册成功',
            type: 'success'
          })
          this.show1 = true
          this.show2 = false
        } else {
          this.$message.error('注册失败或名字重复')
        }

    })
    },
    sunmitForm() {
       let obj = {
        name:this.username,
        pwd:this.password,
        vercode:this.buttonText
       }
       if( !this.username  || !this.password  || !this.buttonText){
        this.$alert("账户、密码和验证码不能为空 ",{
      confirmButtonText:"确定",
      callback: action => {
        this.$message({
          type: 'info',
          message: `action: ${ action }`
        });
      }
        })
       return
      }
       axios({
        method: "post",
        url: "http://47.94.4.201/index.php/index/index/login",
        data: obj
       }).then(res=>{
         if(res.data.code==0){
         this.$message({
            message: '登入成功',
            type: 'success'
          })
          this.$router.push({path:"/home/HelloWorld"})
         }
       })
     },
    
    }, created(){
     axios.get("http://47.94.4.201/index.php/index/index/getcode").then(res=>{
      this.code = res.data.msg
      console.log(res.data.msg);
     })
  }
  }
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
  margin: 0;
  padding: 0;
}
#box {
  width: 100%;
  height: 100vh;
  background: url("https://img1.baidu.com/it/u=2653588009,1450076812&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=500")
    no-repeat;
  background-size: cover;
  position: relative;
}
.login {
  width: 868px;
  height: 439px;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.left {
  float: left;
  width: 50%;
  height: 100%;
  background: #e9e9e9;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.right {
  float: right;
  width: 50%;
  height: 100%;
}
.el-form{
  margin-top:120px;
}
.el-form-item:last-of-type{
  width:200px;
}
.el-form-item{
  width:400px;
  margin-top:10px;
}

.right .el-button{
  width: 200px;
  height: 50px;
  border: none;
  margin-top:200px;
  border-radius:50px;
  background: #1f4037;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #99f2c8, #1f4037);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #99f2c8, #1f4037); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color:#fff
 }
.login_row {
  width: 200px;
  height: 50px;
  border: none;
  border-radius:50px;
  background: #1f4037;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #99f2c8, #1f4037);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #99f2c8, #1f4037); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color:#fff
}

.el-form-item  span{
   display:block;
   width:120px;
   height:40px;
   line-height:30px;
   border:1px solid red;
   margin-left:170px;
   margin-top:-40px;
   font-size:16px;
}
</style>