<template>
  <div class="" id="wrap">
    <div class="headr">
      <div class="s-top-wrap">
        <div class="s-left-wrap">
          <a href="#">新闻</a>
          <a href="#">hao123</a>
          <a href="#">地图</a>
          <a href="#">贴吧</a>
          <a href="#">视频</a>
          <a href="#">图片</a>
          <a href="#">网盘</a>
          <a href="#">更多</a>
        </div>
        <div class="s-right-wrap">
          <a href="#">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </a>
          <span>设置</span>
          <a
            href="#"
            style="position: relative; overflow: visible"
            class="stn-aglin"
            >登录</a
          >
        </div>
      </div>
      <div class="header-wrapper">
        <div class="s-form">
          <div class="logo">
            <img
              src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
              alt=""
              width="270"
              height="129"
            />
          </div>
        </div>
      </div>
      <form action="#" id="form">
        <span>
          <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable
            @input="search"
          >
          </el-input>
        </span>
        <span class="bg s_btn_wr"
          ><input
            type="submit"
            id="su"
            value="百度一下"
            class="bg s_btn"
            @click.prevent
        /></span>
      </form>
      <ul>
        <li v-for="(item, index) in list" :key="index" @click="Jump(item)">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      list: [],
    };
  },
  methods: {
    Jump(item) {
      (this.input = item),
        (window.location.href = "http://www.baidu.com/s?wd=" + this.input);
    },
    search() {
      this.$apiGet(
        "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + this.input
      ).then((res) => {
        //  console.log(res);
        let first = res.indexOf("[");
        let lest = res.lastIndexOf("]");
        let arr = res.slice(first, lest + 1);
        this.list = JSON.parse(arr);
        console.log(this.list);
      });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
#wrap {
  min-width: 1250px;

  .headr {
    position: relative;
    padding-bottom: 0px;
    height: 100%;
    min-height: 100%;
    text-align: center;
    @media screen and (min-width: 2132px) {
      ul {
        text-align: left;
        width: 446px;
        margin-left: 618px;
        border: solid #4d6ef1;
        border-top: none;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-top: -5px;
        li {
          padding: 12px 16px;
          cursor: pointer;
        }
      }
      /* 在小屏幕上的样式设置 */
    }
    @media screen and (max-width: 2133px) {
      /* 在大屏幕上的样式设置 */
      ul {
        text-align: left;
        width: 446px;
        margin-left: 428px;
        border: solid #4d6ef1;
        border-top: none;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-top: -5px;
        li {
          padding: 12px 16px;
        }
      }
    }
    li:hover {
      background: #cccccc;
      color: #4d6ef1;
    }
    // ul {
    //   text-align: left;
    //   width: 440px;
    //   margin-left: 428px;
    //   border: solid #4d6ef1;
    //   border-top: none;
    //   border-bottom-left-radius: 10px;
    //   border-bottom-right-radius: 10px;
    //   margin-top: -5px;
    //   li {
    //     padding: 12px 16px;
    //   }
    // }

    #form {
      .el-input {
        width: 443px;
        font-size: 16px;
        margin: 0;
        vertical-align: top;
        outline: 0;
        box-shadow: none;
        border: 2px solid #4d6ef1;
        background: #fff;
        color: #222;
        box-sizing: content-box;
        -webkit-tap-highlight-color: transparent;
      }

      .bg {
        width: 108px;
        height: 44px;
        position: relative;
        z-index: 2;

        .s_btn {
          cursor: pointer;
          width: 108px;
          height: 44px;
          line-height: 45px;
          line-height: 44px\9;
          padding: 0;
          background: 0 0;
          background-color: #4e6ef2;
          border-radius: 0 10px 10px 0;
          font-size: 17px;
          color: #fff;
          box-shadow: none;
          font-weight: 400;
          border: none;
          outline: 0;
        }
      }
    }

    .header-wrapper {
      width: auto;
      position: relative;
      height: 40%;
      min-height: 314px;
      max-height: 510px;
      margin: 0;

      .s-form {
        width: 654px;
        height: 100%;
        margin: 0 auto;
        text-align: left;

        .logo {
          height: 60%;
          min-height: 185px;
          max-height: 310px;
          z-index: 0;
          text-align: center;

          img {
            bottom: 15px !important;
            position: absolute;
            left: 50%;
            margin-left: -135px;
          }
        }
      }
    }
  }
}

.s-top-wrap {
  position: absolute;
  z-index: 99;
  min-width: 1000px;
  width: 100%;
  border-bottom: 0;
  height: 60px;
  background: #fff;
}

.s-left-wrap {
  position: absolute;
  left: 0;
  top: 0;
  height: 60px;
  padding-left: 24px;

  a {
    margin-right: 24px;
    margin-top: 19px;
    display: inline-block;
    position: relative;
    color: #222;
    font: 13px/23px Arial, sans-serif;
  }

  a:hover {
    color: blue;
  }
}

a {
  text-decoration: none;
}

.s-right-wrap {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
  height: 60px;
  padding-right: 24px;
  padding-left: 200px;
  -webkit-tap-highlight-color: transparent;

  a {
    position: absolute;
    top: 16px;
    right: 162px;
    display: inline-block;
    margin-right: -11px;

    img {
      width: 92px;
      height: 28px;
    }
  }

  span {
    margin-left: 24px;
    margin-top: 19px;
    display: inline-block;
    position: relative;
    vertical-align: top;
    cursor: pointer;
    color: #222;
    font: 13px/23px Arial, sans-serif;
  }

  .stn-aglin {
    height: 24px;
    width: 48px;
    line-height: 24px;
    display: inline-block;
    font-family: inherit;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    position: absolute;
    top: 0;
    right: 0;
    outline: 0;
    border: 0;
    margin-top: 18px;
    margin-left: 32px;
    font-size: 13px;
    background-color: #4e6ef2;
    border-radius: 6px;
    color: #fff !important;
  }
}
</style>