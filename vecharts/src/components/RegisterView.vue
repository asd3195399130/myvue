<!--  -->
<template>
    <div class="">
        <div class="kenburns-top"></div>
        <div class="login">
            <h1>注册</h1>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        var checkusername = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名不能为空'));
            }
            callback();
        };
        var validatePass = (rule, value, callback) => {
            console.log(value.length);
            if (value === '') {
                callback(new Error('请输入密码'));
            }
            if (value.length !== 6) {
                callback(new Error('密码长度必须是6位'));
            }
            if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
            }
            callback();


        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: '',
                checkPass: '',
                username: ''
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                username: [
                    { validator: checkusername, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    sessionStorage.setItem("username", this.ruleForm.username)
                    sessionStorage.setItem("password", this.ruleForm.pass)
                    this.$router.replace('/login');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.kenburns-top {
    width: 100%;
    height: 100vh;
    z-index: -99999;
    background: url(https://img1.baidu.com/it/u=1267001474,8393285&fm=253&fmt=auto&app=120&f=JPG?w=1080&h=479) no-repeat;
    background-size: cover;
    -webkit-animation: kenburns-top 5s linear infinite;
    ;
    animation: kenburns-top 5s linear infinite;
}

// .kenburns-top:hover {
//   animation-play-state: paused;
// }

.login {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 50px;
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.login h1 {
    color: #125eeb
}

@-webkit-keyframes kenburns-top {
    0% {
        -webkit-transform: scale(1) translateY(0);
        transform: scale(1) translateY(0);
        -webkit-transform-origin: 50% 16%;
        transform-origin: 50% 16%;
    }

    100% {
        -webkit-transform: scale(1.25) translateY(-15px);
        transform: scale(1.25) translateY(-15px);
        -webkit-transform-origin: top;
        transform-origin: top;
    }
}

@keyframes kenburns-top {
    0% {
        -webkit-transform: scale(1) translateY(0);
        transform: scale(1) translateY(0);
        -webkit-transform-origin: 50% 16%;
        transform-origin: 50% 16%;
    }

    100% {
        -webkit-transform: scale(1.25) translateY(-15px);
        transform: scale(1.25) translateY(-15px);
        -webkit-transform-origin: top;
        transform-origin: top;
    }
}

.demo-ruleForm {
    margin-top: 20px;
    text-align: center
}

label {
    color: #ffffff !important;
}

.el-input {
    width: 260px !important;
}

::v-deep .el-form-item__label {
    color: #fff;
    text-align: right
}

::v-deep .el-form-item__content {
    margin-left: 23px !important;
}
</style>