<template>
  <div class="home">
    <div class="whole">
      <!-- 头部 -->
      <div class="header">
        <div class="header_first">
          <div class="header_first_qaz">
            <i class="header_first_i">
            </i>
            <h3>后台管理系统</h3>
          </div>
        </div>
        <div class="header_right">
          <img src="../assets/微信截图_20231106104340.png" alt="" height="50px;">
        </div>
      </div>
      <!-- 中部 -->
      <div class="admin-layout">
        <div class="sidebar">
          <!-- 侧边栏内容 -->
          <!-- <ul>
            <li >
              <router-link to=""></router-link>
              {{ item.title }}
            </li>
          </ul> -->
          <el-row class="tac">
            <el-col :span="12">
              <h5>自定义颜色</h5>
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" v-for="(item, index) in navleft"
                :key="index">
                <el-submenu index="1">
                  <template slot="title">
                    <i :class="item.icon"></i>
                    <!-- <span>{{ item.title }}</span> -->
                    <router-link :to="item.path" tag="span">{{ item.title }}</router-link>
                  </template>
                </el-submenu>
                <!-- <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item> -->
              </el-menu>
            </el-col>
          </el-row>
        </div>
        <div class="main-content">
          <!-- 主内容区域 -->
          <router-view></router-view>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navleft from "@/config/navleft.js";

export default {
  name: 'HomeView',
  data() {
    return {
      navleft: navleft,


    }
  }, methods: {
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },



  },
  mounted() {

  },
}
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box
}

.whole {
  width: 100vw;
  width: calc(100vw - 29px);
  margin: 0 auto;
}

.header {
  width: 100%;
  height: 50px;
  background: #242f42;
  // line-height: 50px;
  padding-top: 10px;
}

.header::after {
  clear: both;
}

.header_first_qaz {
  width: 300px;
  display: flex;
  align-items: center;
  float: left;
}

.header_first_i {
  display: block;
  width: 30px;
  height: 30px;
  text-align: center;
  margin-left: 15px;
  background: url(../assets/菜单左.png)no-repeat
}

ul {
  list-style: none;
}

// .sidebar li {
//   height: 50px;
//   line-height: 50px;
//   color: #bfcbd9;
//   text-align: left;
//   margin-top: 10px;
//   margin-left: 50px;
//   cursor: pointer;
// }

.header_first_qaz h3 {
  color: #ffffff;
  margin-left: 10%;
}

.header_right {
  float: right;
  height: 50px;
  margin: 0
}

.header_right img {
  height: 50px;
}

.admin-layout {
  display: flex;
  height: 100vh;
  /* 设置高度为视口的100%，以填充整个屏幕 */
}

.sidebar {
  width: 250px;
  /* 设置侧边栏的宽度 */
  background-color: #324157;
  /* 设置侧边栏的背景颜色 */
  /* 可以添加其他样式，如边框、阴影等 */
}



.tac {
  height: 100vh;
}

.el-col {
  width: 100%;
  height: 600px;
}
</style>
