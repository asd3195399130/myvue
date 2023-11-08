<!--  -->
<template>
    <div class="main-content">
        <!-- 主内容区域 -->
        <router-view></router-view>
        <div class="main_left">
            <div class="main-left-list">
                <div class="main_ly">
                    <img src="https://img0.baidu.com/it/u=1302187753,1022585962&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1699376400&t=8e1590a6a32b9a6746e054af95e34fb8"
                        alt="">
                    <div>
                        <span>admin</span>
                        <p>超级管理员</p>
                    </div>

                </div>
                <div class="date">
                    <p>上次登录的时间：</p>
                    <span>2020-11-06</span>
                </div>
                <div class="location">
                    <p>上次登录的地点：</p>
                    <span>郑州</span>
                </div>
            </div>
            <div class="main-left-lrue">
                <div class="main-left_top">
                    <h4>语言详情</h4>
                </div>
                <div ref="main" id="main"></div>
            </div>
        </div>
        <div class="main_right">
            <div class="main_right_top">
                <div class="main_right_first">
                    <img src="../assets/微信截图_20231106151218.png" alt="">
                </div>
                <div class="main_right_second">
                    <img src="../assets/微信截图_20231106151230.png" alt="">
                </div>
                <div class="main_right_third">
                    <img src="../assets/微信截图_20231106151247.png" alt="">
                </div>
            </div>
            <div class="main-right-content">
                <div class="tab-list">
                    <h2>代办事项</h2>
                    <a href="#">添加</a>
                </div>
                <ul>
                    <li v-for="(item, index) in list" :key="index" class="list_box">
                        <input type="checkbox" name="" id="" v-model="item.status">
                        <p :class="getText(item)">{{ item.title }}</p>
                        <a href="#">删除</a>
                    </li>
                </ul>

            </div>
        </div>
        <div style="clear: both;"></div>
        <div class="footer">
            <div class="footer-left" ref="footleft"></div>
            <div class="footer-right" ref="footright"></div>
            <div style="clear: both;"></div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            list: [
                {
                    id: 1,
                    title: "今天要修复100个bug",
                    status: false
                }, {
                    id: 2,
                    title: "今天要修复100个bug",
                    status: false
                }, {
                    id: 3,
                    title: "今天要写100行代码加几个bug",
                    status: false
                }, {
                    id: 4,
                    title: "今天要修复100个bug",
                    status: false
                }, {
                    id: 5,
                    title: "今天要修复100个bug",
                    status: false
                }, {
                    id: 6,
                    title: "今天要写100行代码加几个bug",
                    status: false
                }
            ]
        }
    },
    methods: {
        getText(item) {
            return {
                'start': item.status
            }
        },
        rederchart() {
            var chartDom = this.$refs.main
            var myChart = echarts.init(chartDom);
            var option;
            const datas = [
                { name: "VUE", value: "71.3" },
                { name: "Javascript", value: "24.1" },
                { name: "CSS", value: "13.7" },
                { name: "HTML", value: "5.9" },
            ]
            const myColor = ["#51FC4E", "#4C5FF5", "#f1e05a", "#42b983"].reverse();
            const xData = datas.map((item) => item.name);
            const yData = datas.map((item) => item.value);
            const max = Math.ceil(Math.max(...yData) * 1.2);
            const maxData = [max, max, max, max, max];
            option = {
                backgroundColor: '#ffffff',
                grid: {
                    left: "15%",
                    right: "0%",
                    bottom: "5%",
                    top: "10%",
                    containLabel: false,
                },
                xAxis: [
                    {
                        show: false,
                    },
                    {
                        show: false,
                    },
                ],
                yAxis: [
                    {
                        show: false,
                        inverse: true,
                        data: yData,
                    },
                    {
                        show: true,
                        data: yData,
                        offset: -45,
                        position: "right",
                        axisLabel: {
                            show: false,
                            // lineHeight: 0,
                            // verticalAlign: "bottom",
                            // fontSize: 15,
                            // color: "#4bf3f9",
                            // formatter: "{value}亿",
                        },
                        axisLine: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                    },
                ],
                series: [
                    {
                        name: "进度",
                        show: true,
                        type: "bar",
                        barGap: "-100%",
                        xAxisIndex: 1,
                        barWidth: 4,
                        itemStyle: {
                            borderRadius: 4,
                            color: (params) => {
                                var num = myColor.length;
                                return {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "#42b983",
                                        },
                                        {
                                            offset: 1,
                                            color: myColor[params.dataIndex % num],
                                        },
                                    ],
                                };
                            },
                        },
                        label: {
                            show: false,
                        },
                        // max: 0,
                        labelLine: {
                            show: false,
                        },
                        z: 2,
                        data: yData,
                        animationDelay: 1000,
                        animationDuration: 1000
                    },
                    {
                        name: "外圆",
                        type: "scatter",
                        emphasis: {
                            scale: false,
                        },
                        xAxisIndex: 1,
                        symbolSize: 10,
                        itemStyle: {
                            color: (params) => {
                                var num = myColor.length;
                                return myColor[params.dataIndex % num];
                            },
                            shadowColor: "rgba(255, 255, 255, 0.5)",
                            shadowBlur: 5,
                            borderWidth: 1,
                            opacity: 1,
                        },
                        label: {
                            show: true,
                            verticalAlign: "bottom",
                            lineHeight: 38,
                            formatter: function (data) {
                                return yData[data.dataIndex] + "%";
                            },
                            fontSize: 20,
                            color: "#f1e05a",
                        },
                        z: 2,
                        data: yData,
                        animationDelay: 1700,
                        animationDuration: 1000
                    },
                    {
                        name: "年份",
                        z: 1,
                        show: true,
                        type: "bar",
                        xAxisIndex: 1,
                        barGap: "-100%",
                        barWidth: 4,
                        itemStyle: {
                            borderRadius: 4,
                            color: "rgba(13, 55, 78, 1)",
                        },
                        label: {
                            show: true,
                            verticalAlign: "middle",
                            position: "left",
                            fontSize: 14,
                            color: "black",
                            formatter: function (data) {
                                return xData[data.dataIndex] + "：";
                            },
                        },
                        data: maxData,
                    },
                ],
            };
            option && myChart.setOption(option);
        },
        sales() {
            var chartDom = this.$refs.footleft
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                legend: { top: '5%' },
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '胃幽门', '早早孕', '甲乙流', 'HPV', '艾滋梅毒胃幽门'],
                        ['1月', 0, 0, 0, 6, 0],
                        ['2月', 0, 0, 0, 4, 0],
                        ['3月', 0, 0, 0, 14, 0],
                        ['4月', 0, 0, 0, 116, 0],
                        ['5月', 0, 0, 5, 12, 0],
                        ['6月', 0, 31, 4, 354, 0],
                        ['7月', 0, 106, 0, 66, 0],
                        ['8月', 0, 14, 2, 388, 3],
                        ['9月', 0, 2, 0, 229, 6],
                        ['10月', 0, 0, 4, 421, 26],
                        ['11月', 45, 12, 16, 6, 78],
                        ['12月', 65, 9, 27, 112, 59],
                    ]
                },
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{
                    type: 'bar', label: {
                        show: true,
                        position: 'top'
                    },
                }, {
                    type: 'bar', label: {
                        show: true,
                        position: 'top'
                    }
                }, {
                    type: 'bar', label: {
                        show: true,
                        position: 'top'
                    }
                }, {
                    type: 'bar', label: {
                        show: true,
                        position: 'top'
                    }
                }, {
                    type: 'bar', label: {
                        show: true,
                        position: 'top'
                    }
                }]
            };
            option && myChart.setOption(option);
        },
        trend() {
            var chartDom = this.$refs.footright
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                title: {
                    text: 'Stacked Line'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['广州西门子变压器公司', '耐恒（广州）纸品有限公司', '广州斗原钢铁有限公司', '广州璨宇光学有限公司', '佐登妮丝（广州）有限公司']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2021-12-20 00:00:00', '2021-12-20 06:00:00', '2021-12-20 12:00:00', '2021-12-20 18:00:00', '2021-12-21 00:00:00', '2021-12-21 06:00:00', '2021-12-21 12:00:00', '2021-12-21 18:00:00', '2021-12-22 00:00:00']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '广州西门子变压器公司',
                        type: 'line',
                        // stack: 'Total',
                        data: [130, 105, 135, 120, 175, 205, 185, 195, 208],
                        smooth: true,
                    },
                    {
                        name: '耐恒（广州）纸品有限公司',
                        type: 'line',
                        // stack: 'Total',
                        data: [225, 222, 180, 234, 205, 180, 170, 220, 231],
                        smooth: true,
                    },
                    {
                        name: '广州斗原钢铁有限公司',
                        type: 'line',
                        // stack: 'Total',
                        data: [180, 230, 201, 150, 230, 230, 240, 210, 240],
                        smooth: true,
                    },
                    {
                        name: '广州璨宇光学有限公司',
                        type: 'line',
                        // stack: 'Total',
                        data: [180, 175, 201, 210, 200, 142, 205, 235, 248],
                        smooth: true,
                    },
                    {
                        name: '佐登妮丝（广州）有限公司',
                        type: 'line',
                        // stack: 'Total',
                        data: [235, 250, 238, 252, 260, 245, 235, 235, 230],
                        smooth: true,
                    }
                ]
            };
            option && myChart.setOption(option);
        }
    },
    created() {

    },
    mounted() {
        this.rederchart();
        this.sales();
        this.trend()
    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.main-content {
    width: 85vw;
    flex: 1;
    /* 让主内容区域占据剩余的空间 */
    padding: 20px;
    /* 可以根据需要进行调整 */
    background: #f0f0f0
}

.main_left {
    // width: 100%;
    float: left;
    width: 40%;
    // border: 5px solid red
}

.main-left-list {
    width: 100%;
    height: 195px;
}

.main_ly {
    height: 135px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    flex-direction: row;
}

.main_ly img {
    width: 108px;
    height: 108px;
    border-radius: 50%;
    margin-top: 10px;
    // margin-right: 250px;
}

.main_ly span {
    display: inline-block;
    font-size: 27px;
    font-weight: 500;
    color: #222222
}

.main_ly p {
    font-size: 12px;
    font-weight: 400;
    color: #999999
}

.date {
    width: 100%;
    display: flex;
    align-items: center;
}

.date span {
    margin-left: 15px;
}

.location {
    width: 100%;
    display: flex;
    align-items: center;
}

.location span {
    margin-left: 15px;
}

.main-left-lrue {
    width: 100%;
    height: 330px;
    margin-top: 15px;
}

.main-left_top {
    height: 30px;
    border-bottom: 1px solid #ccc;
    text-align: left;
    padding-left: 15px;
    line-height: 30px;
}

#main {
    width: 600px !important;
    max-width: 600px;
    height: 300px;

}

.main_right {
    float: right;
    width: 52%;
    height: 600px;
    // border: 1px solid black
}

.main_right_top {
    display: flex;
    justify-content: space-around;
}

.main_right_first {
    width: 233px;
    // height: 67px;
    // border: 1px solid black
}

.main_right_second {
    width: 233px;
    height: 67px;
    // border: 1px solid black
}

.main_right_third {
    width: 233px;
    height: 67px;
    // border: 1px solid black
}

.main-right-content {
    width: 100%;
    // height: 405px;
    margin-top: 70px
}

.main-right-content h2 {
    text-align: left;


    font-size: 15px;
    font-weight: 400;
    padding-left: 15px;

}

.tab-list {
    border-bottom: 1px solid #ccc;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
}

.tab-list a {
    text-decoration: none;
    color: #409eff;
    padding-right: 55px
}

.list_box {
    padding-left: 30px;
    display: flex;
    height: 58px;
    line-height: 58px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    // justify-content: space-between;
}

.list_box p {
    width: 50%;
    text-align: left;
    margin-left: 150px;
    cursor: pointer;
}

.list_box:last-of-type {
    border-bottom: none;
}

.list_box a {
    text-decoration: none;
    cursor: pointer;
    text-align: right;
    margin-left: 50px;
    color: #409eff;
}

.start {
    text-decoration: line-through;
    color: #ccc
}

.footer {
    width: 100%;
    height: 310px;

}

.footer ::after {
    clear: both;
}

.footer-left {
    width: 600px;
    height: 300px;

    float: left;
}

.footer-right {
    width: 600px;
    height: 300px;

    float: right;
}
</style>