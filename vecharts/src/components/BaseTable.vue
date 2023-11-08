<!--  -->
<template>
    <div class="">
        <el-drawer title="添加学生" :visible.sync="drawer" :with-header="false">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="学生名字">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="form.sex" placeholder="请选择性别">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="入学时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                            style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="学生年龄">
                    <el-input v-model="form.age" placeholder="请输入内容"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">{{ txt }}</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-drawer>
        <div class="table">
            <div style="margin-top: 15px;">
                <el-input placeholder="请输入内容" v-model="searchName" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                </el-input>
            </div>
            <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
                点我打开
            </el-button>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>入学日期</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in pageSizeItem" :key="index">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.age }}</td>
                        <td>{{ item.gender }}</td>
                        <td>{{ item.enrollmentDate }}</td>
                        <td>
                            <el-button type="primary" plain @click="modify(index)">修改</el-button>
                            <el-button type="danger" @click="del(index)">删除</el-button>
                            <el-button type="warning" @click="getoail(item.id)">查看</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button @click="previousPage" :disabled="currentpage === 1">上一页</button>
            <span>{{ currentpage }}</span>
            <button @click="nextPage" :disabled="currentpage === totalpages">下一页</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            student: [
                {
                    id: 1,
                    name: '张三',
                    age: 18,
                    gender: '男',
                    enrollmentDate: '2020-09-01'
                },
                {
                    id: 2,
                    name: '李四',
                    age: 19,
                    gender: '女',
                    enrollmentDate: '2020-09-01'
                },
                {
                    id: 3,
                    name: '王五',
                    age: 20,
                    gender: '男',
                    enrollmentDate: '2020-09-02'
                },
                {
                    id: 4,
                    name: '赵六',
                    age: 19,
                    gender: '女',
                    enrollmentDate: '2020-09-02'
                },
                {
                    id: 5,
                    name: '钱七',
                    age: 18,
                    gender: '女',
                    enrollmentDate: '2020-09-03'
                },
                {
                    id: 6,
                    name: '孙八',
                    age: 21,
                    gender: '男',
                    enrollmentDate: '2020-09-03'
                },
                {
                    id: 7,
                    name: '周九',
                    age: 20,
                    gender: '男',
                    enrollmentDate: '2020-09-04'
                },
                {
                    id: 8,
                    name: '吴十',
                    age: 19,
                    gender: '女',
                    enrollmentDate: '2020-09-04'
                },
                {
                    id: 9,
                    name: '郑十一',
                    age: 18,
                    gender: '男',
                    enrollmentDate: '2020-09-05'
                },
                {
                    id: 10,
                    name: '冯十二',
                    age: 19,
                    gender: '女',
                    enrollmentDate: '2020-09-05'
                }, {
                    id: 11,
                    name: "张三",
                    age: 19,
                    gender: "男",
                    enrollmentDate: "2020-09-06"
                }
            ],
            searchName: "",
            drawer: false,
            form: {
                name: '',
                sex: '',
                date1: '',
                age: "",
            },
            currentpage: 1,
            pageSize: 5,
            isEditMode: -1,
            txt: "添加学生",
            filteredStudents: []

        }
    },
    watch: {
        searchName(newVal) {
            console.log(newVal);
            if (newVal === "") {
                this.filteredStudents = [...this.student];
            } else {
                this.filteredStudents = this.student.filter(item => item.name.includes(newVal));
            }
            // 每当搜索内容改变时，将当前页码重置为1
        }
    },
    computed: {
        // filteredStudent() {
        //     const keyword = this.searchName.trim().includes();
        //     if (keyword) {
        //         return this.student.filter(s => s.name.includes().includes(keyword));
        //     } else {
        //         return this.student;
        //     }
        // },
        totalpages() {
            return Math.ceil(this.filteredStudents.length / this.pageSize)
        },
        pageSizeItem() {
            const startIndex = (this.currentpage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.filteredStudents.slice(startIndex, endIndex)
        }
    },
    methods: {
        getoail(id) {
            console.log(id);
            this.$router.push({ name: "DetailsView", params: { id } })
        },
        del(index) {
            if (confirm("确定删除吗？")) {
                this.filteredStudents.splice(index, 1)
            }
        },
        formatDateString(dateString) {
            // 将日期字符串转换为 Date 对象
            const date = new Date(dateString);
            // 获取年、月、日信息
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');  // 月份从0开始，需要加1；并确保两位数显示
            const day = date.getDate().toString().padStart(2, '0');  // 确保两位数显示
            // 构建新的日期字符串
            return `${year}-${month}-${day}`;
        },
        onSubmit() {
            if (this.isEditMode > -1) {
                // const index = this.student.findIndex(s => s.id === this.form.id);
                this.student[this.isEditMode].name = this.form.name;
                this.student[this.isEditMode].gender = this.form.sex;
                this.student[this.isEditMode].enrollmentDate = this.formatDateString(this.form.date1);
                this.student[this.isEditMode].age = this.form.age;
                // 重置为添加模式

            } else {
                this.filteredStudents.push({
                    id: this.student.length + 1,
                    name: this.form.name,
                    gender: this.form.sex,
                    enrollmentDate: this.formatDateString(this.form.date1),
                    age: this.form.age,
                });

                this.form = {
                    name: '',
                    sex: '',
                    date1: '',
                    age: "",
                }
                this.drawer = false
            }
            this.drawer = false
            this.txt = "添加学生"
            // console.log('submit!');
            console.log(this.form);
        },
        search() {
            if (this.searchName === "") {
                console.log(this.student);
                return this.student
            } else {
                this.student = this.student.filter(item => item.name.includes(this.searchName))
            }
        },
        previousPage() {
            if (this.currentpage > 1) {
                this.currentpage--;
            }
        },
        nextPage() {
            if (this.currentpage < this.totalpages) {
                this.currentpage++;
            }
        },
        modify(index) {
            console.log(index);
            this.isEditMode = index
            this.form.name = this.student[index].name,
                this.form.age = this.student[index].age,
                this.form.sex = this.student[index].gender,
                this.form.date1 = this.student[index].enrollmentDate,
                this.drawer = true
            this.txt = "修改学生"
        }

    },
    created() {
        this.student = [
            {
                id: 1,
                name: '张三',
                age: 18,
                gender: '男',
                enrollmentDate: '2020-09-01'
            },
            {
                id: 2,
                name: '李四',
                age: 19,
                gender: '女',
                enrollmentDate: '2020-09-01'
            },
            {
                id: 3,
                name: '王五',
                age: 20,
                gender: '男',
                enrollmentDate: '2020-09-02'
            },
            {
                id: 4,
                name: '赵六',
                age: 19,
                gender: '女',
                enrollmentDate: '2020-09-02'
            },
            {
                id: 5,
                name: '钱七',
                age: 18,
                gender: '女',
                enrollmentDate: '2020-09-03'
            },
            {
                id: 6,
                name: '孙八',
                age: 21,
                gender: '男',
                enrollmentDate: '2020-09-03'
            },
            {
                id: 7,
                name: '周九',
                age: 20,
                gender: '男',
                enrollmentDate: '2020-09-04'
            },
            {
                id: 8,
                name: '吴十',
                age: 19,
                gender: '女',
                enrollmentDate: '2020-09-04'
            },
            {
                id: 9,
                name: '郑十一',
                age: 18,
                gender: '男',
                enrollmentDate: '2020-09-05'
            },
            {
                id: 10,
                name: '冯十二',
                age: 19,
                gender: '女',
                enrollmentDate: '2020-09-05'
            }, {
                id: 11,
                name: "张三",
                age: 19,
                gender: "男",
                enrollmentDate: "2020-09-06"
            }
        ]
        this.filteredStudents = [...this.student]
    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
table {
    width: 1200px;
    margin: auto;
    border-collapse: collapse;
}

.el-input {
    width: 1200px;
}

.table {
    margin: auto
}

.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
</style>