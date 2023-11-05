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
                <dd v-for="item in trim " :key="item">
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
            trim: [
                "QQ群管理员禁言群成员的操作方法",
                "QQ群内群成员排序的规则",
                "怎么获得QQ群成员等级的积分？",
                "在聊天窗口内显示QQ群成员等级头衔（LV）的设置方法",
                "QQ群内成员禁言批量取消、修改禁言时间的方法",
                "QQ群中@全体群成员的功能介绍",
                "QQ群成员等级头衔在哪些地方显示？",
                "为什么在不同的QQ群中，我的成员等级都不一样？",
                "为什么在同一个群里，积分数相同但头衔等级不一样？",
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