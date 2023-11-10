<template>
  <div class="home">
    <el-container>
      <el-aside width="300px">
        <el-col :span="24">
          <el-menu default-active="5" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
            :style="{ height: '100vh', 'line-height': ' 60px' }" router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="/home/HelloWorld">table表格</el-menu-item>
                <el-menu-item index="/home/Package">封装得element</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="/home/Mycheck">查看id</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="商品">
                <el-menu-item index="/home/shopp">商品列表</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="百度">
                <el-menu-item index="/home/RegisterView">百度搜索</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="/home/CompuTn">
                <template slot="title">选项4</template>
                <el-menu-item index="/home/CompuTn">结果</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="/index">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {

    }
  }, methods: {

    handleClose() {
      // 在 methods 中定义 handleClose 方法
      // 这里可以编写处理关闭事件的逻辑
    }, handleOpen() {
      // 在 methods 中定义 handleOpen 方法
      // 这里可以编写处理打开事件的逻辑
    }
  }

}

</script>
<style>
.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 100vh;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  /* line-height: 80vh; */
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu {
  line-height: 100vh;
  /* 设置菜单项的行高 */
}
</style>