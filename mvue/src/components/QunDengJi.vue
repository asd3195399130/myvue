<!--  -->
<template>
    <div class="">
        <div class="searchBox">
            <div class="kf_mod_searchBox">
                <div class="searchBar">
                    <input type="text" class="search" placeholder="请输入产品或问题">
                    <button class="iconfont"></button>
                </div>
            </div>
        </div>
        <div class="faqlist">
            <dl>
                <dd v-for="item in grade" :key="item">
                    <a href="#">{{ item }}</a>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            grade: [
                "达到点亮条件，为什么无法点亮QQ群的等级图标？",
                "QQ群等级图标什么情况下会降级？如何提升？",
                "QQ群等级图标点亮不需要设置群摘要显示的说明",
                "QQ群等级多久计算一次？",
                "QQ群等级图标怎么点亮？"
            ]
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

.searchBox {
    position: relative;
    height: 40px;
    padding: 30px 44px;
    border-bottom: 1px solid #f5f5f5;
}

.kf_mod_searchBox {
    width: 660px;
    position: relative;
}

.searchBar {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #fff;

}

.search {
    border: 1px solid #dedede;
    background-color: transparent;
    height: 38px;
    line-height: 38px;
    width: 87%;
    padding-left: 2%;
    padding-right: 10%;
    font-size: 14px;
    color: #666;
    transition: border-color .3s;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: content-box;
    outline: 0 none;
}

.iconfont {
    width: 45px;
    height: 40px;
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    border: none;
    cursor: pointer;
    background-color: #00ace9;
    color: #fff;
    font-family: iconfont !important;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
}

.iconfont::before {
    font-size: 18px;
    content: "🔍"
}

dd {
    margin-bottom: 5px;
    text-align: left;
    padding-left: 46px;
}

.faqlist {
    margin-bottom: 34px;
    margin-top: 10px;
}

a {
    width: 159.45px;
    height: 20px;
    font-size: 15px;
    line-height: 30px;
    color: #333;
    text-decoration: none;
    cursor: pointer;

}

a:hover {
    color: #07f;
}
</style>