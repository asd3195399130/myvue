<template>
  <div class="body">
    <!-- <h1>666</h1> -->
    <div class="kf_header activescoll activetop">
      <div class="header-inner">
        <h1 class="logo"><a href="#" class="link-logo">腾讯客户端</a></h1>
        <div class="login">
          <span class="kf-btn kf-head-login-btn kf-login-btn">
            登录
          </span>
        </div>
      </div>
    </div>
    <!-- 中部 -->
    <div class="main">
      <div class="container">
        <div class="aside">
          <CreateViewVue></CreateViewVue>
          <ul class="faq-kinds">
            <li>
              <router-link to="/Popual" class="currect">热门问题</router-link>
            </li>
            <li v-for="(item, index) in  navleftlist" :key="index" class="faq-li" @click="toggle(index)">
              <router-link to="">
                <i v-if="item.active">➖</i>
                <i v-else>{{ item.icon }}</i>
                {{ item.title }}
              </router-link>
              <dl v-if="item.active" @click.stop>
                <dd v-for="(item, index) in item.children" :key="index">
                  <router-link :to="item.path" @click="add(index)">{{ item.txt }}</router-link>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
        <div class="faw_container">
          <router-view></router-view>
        </div>
        <div style="clear: both;"></div>
      </div>
    </div>
    <!--  浮层begin-->
    <div class="layer-new">
      <div class="layer-box">
        <div class="box-img">
          <i class="code-img"></i>
        </div>
        <div class="box-text">
          <p>关注微信公众号</p>
          <p>向腾讯客服提问</p>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer_new">
      <div class="container">
        <div class="topArea">
          <ul class="helpList">
            <li>
              <i class="icon-serve"></i>
              <div class="server-txt">
                <h3>腾讯服务专线</h3>
                <p>4006 700 700</p>
              </div>
            </li>
            <li>
              <i class="icon-weipay"></i>
              <div class="server-txt">
                <h3>财付通/微信支付/理财通服务专线</h3>
                <p>95017（大陆地区） +86 571 95017（海外及港澳台地区）</p>
              </div>
            </li>
            <li>
              <i class="icon-it"></i>
              <div class="server-txt">
                <h3>理财通服务专线</h3>
                <p>95788</p>
              </div>
            </li>
            <li>
              <i class="icon-teenager"></i>
              <div class="server-txt">
                <h3>未成年人游戏监管专线</h3>
                <p>95092666</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="bottomArea">
          <ul class="copyrightlist">
            <li>
              <a href="#">关于腾讯</a>
            </li>
            <li>
              <a href="#">about Tencent</a>
            </li>
            <li>
              <a href="#">服务条款</a>
            </li>
          </ul>
          <p id="copyright">Copyright © 1998 - 2023 Tencent. All Rights Reserved. 腾讯公司 版权所有 粤网文[2011]0483-070号</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateViewVue from './CreateView.vue';
import navleft from '@/config/navleft.js'

export default {
  components: {
    CreateViewVue
  },
  data() {
    return {
      navleftlist: navleft,
      show: false,
      isClicked: false,
    }
  },
  computed: {
    avtiveTab() {
      return this.navleftlist.findIndex(item => item.active)
    }
  },
  methods: {

    toggle(index) {
      const clickedTab = this.navleftlist[index]
      if (clickedTab.active) {
        clickedTab.active = false;
        this.show = false
      } else {
        this.navleftlist.forEach((item, i) => {
          item.active = i === index
        })
        this.show = true
      }
      this.isClicked = !this.isClicked;
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
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(254, 254, 254)
}


.kf_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1000px;
  z-index: 9999;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .05);
  transition: background-color .1s ease-in-out;
}

.header-inner {
  width: 1100px;
  height: 80px;
  margin: 0 auto;
  position: relative;
  transition: height .3 ease-out;
}

.header-inner::before {
  content: "";
  display: table;
}

.logo {
  width: 270px;
  position: absolute;
  left: 0;
  top: 50%;
  height: 34px;
  transform: translate(0, -50%)
}

h1 {
  font-size: 1em;
  font-weight: 400
}

.link-logo {
  width: 230px;
  height: 34px;
  display: inline-block;
  background: url(https://kf-ui.cdn-go.cn/pc-kf-v8/latest/img/logo@2x.png)no-repeat;
  background-size: 100% 100%;
  text-indent: -9999px;

}

.kf_header .login {
  color: #fff;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%)
}

.kf-btn {
  padding: 6px 0;
  min-width: 80px;
  min-height: 40px;
  transition: opacity 0.3s ease-in-out;
  position: relative;
  display: inline-block;
  margin: 0;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  user-select: none;
  font-size: 18px;
  border-radius: 4px;
  color: #fff;
  background: linear-gradient(135deg, #07f, #0098ff);
  box-sizing: border-box;
}

.kf-btn::after {
  content: "";
  position: absolute;
  bottom: -20px;
  left: -1px;
  background-image: url(https://kf-ui.cdn-go.cn/pc-kf-v8/latest/img/login-shadow.png);
  width: 80px;
  height: 20px
}

.main {
  position: relative;
  padding-top: 75px;
  height: 100%;
  min-height: calc(100vh-237px)
}

.container {
  position: relative;
  padding: 16px 0;
  zoom: 1;
  width: 1100px;
  margin: 0 auto;
  border: none
}

.aside {
  float: left;
  margin-left: 4px;
  height: auto;
  width: 230px;
  background-color: #fff;
  overflow-y: auto;
  border: 1px solid #e5e5e5;
  z-index: 9997;
  margin-bottom: 25px
}

ul {
  list-style: none;
  zoom: 1;
}

.faq-kinds li {
  border-bottom: 1px solid #f5f5f5f5;
  vertical-align: top;
}

.faq-li a {
  display: inline-block;
  width: 100%;
  height: 40px;
  font-size: 15px;
  line-height: 40px;
  cursor: default;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;

}

.faq-li i {
  display: inline-block;
  font-size: 16px;
  color: #333;
  font-weight: 800
}

.faq-li i:hover {
  color: #00ace9;
}

.faq-li {
  border-bottom: 1px solid #f5f5f5;
  text-align: left
}

.faq-li a i {
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
}

.faq-li a:hover {
  color: #00ace9;
}

.currect {
  background-color: #00ace9 !important;
  color: #fff !important
}

dd {
  text-align: left;
  margin-inline-start: 40px;
}

a {
  text-decoration: none;
  cursor: pointer;
}

.faq-kinds li a {
  display: inline-block;
  width: 100%;
  height: 40px;
  font-size: 15px;
  line-height: 40px;
  cursor: default;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.faw_container {
  float: right;
  margin-right: 4px;
  width: 845px;
  height: 553px;
  margin: 0 auto 25px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
}

// 底部
.footer_new {
  padding-top: 34px;
  padding-bottom: 18px;
  border-top: 1px solid #e5e5e5;
  background-color: #fff;
}

.footer_new .container {
  width: auto;

}

.topArea {
  margin-bottom: 22px;
}

.helpList {
  overflow: hidden;
  text-align: center;
  font-size: 0;
  display: flex;
  justify-content: center;
}

.helpList::after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: "";
  clear: both;
  height: 0
}

.helpList li {
  display: inline-block;
  position: relative;
  margin: 0 25px
}

.helpList li>i {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px
}

.icon-serve {
  background: url(https://kf-ui.cdn-go.cn/pc-kf-v8/latest/img/images/icon-service.png)50% no-repeat
}


.icon-weipay {
  background: url(https://kf-ui.cdn-go.cn/pc-kf-v8/latest/img/images/icon-weipay.png)50% no-repeat
}

.icon-teenager {
  background: url(https://kf-ui.cdn-go.cn/pc-kf-v8/latest/img/icon-teenager-v7.png)50% no-repeat;
}

.icon-it {
  background: url(https://kf-ui.cdn-go.cn/h5-payment-center/latest/img/caifutong.png)50% no-repeat
}

.server-txt {
  padding-left: 50px;
  text-align: left
}

.server-txt h3 {
  font-weight: 400;
  color: #000;
  font-size: 14px;
}

.server-txt p {
  color: #666;
  font-size: 14px;
}

.bottomArea {
  text-align: center;
  color: "#888";
  font-size: 12px;
}

.copyrightlist {
  font-size: 0;
  height: 20px;
  line-height: 20px;
}

.copyrightlist::after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

.copyrightlist li {
  display: inline-block;
  font-size: 12px;
  padding-right: 8px;
  margin-right: 5px;
  position: relative;
}

.copyrightlist li::before {
  content: "";
  position: absolute;
  right: 0;
  top: 3px;
  bottom: 3px;
  border-right: 1px solid #888;
}

.copyrightlist li a {
  color: #888;
}

// 浮层
.layer-new {
  position: fixed;
  right: 70px;
  top: 50%;
  margin-top: 88px;
  z-index: 10000;
}

.layer-box {
  padding: 15px 10px;
  background: #fff;
  box-shadow: 0 0 8px #ccc
}

.box-img {
  width: 100%;
  height: 100%;
}

.code-img {
  display: block;
  width: 100px;
  height: 100px;
  background: url(https://kf-ui.cdn-go.cn/pc-kf-v8/latest/img/images/code.jpg)no-repeat;
  background-size: 100px 100px;
}

.box-text {
  margin-top: 10px;
}

.box-text p {
  line-height: 18px;
  font-size: 14px
}

// 浮层结尾
i {
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
}
</style>