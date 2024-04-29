<template>
    <div class="petInboundContainer">
        <tables
            :tableData="table.tableData"
            :tableTitle="table.tableTitle"
        ></tables>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        >
        </el-pagination>
    </div>
</template>
    
<script>
    import Dialogs from "@/components/Dialog.vue";
    import Tables from "@/components/Table.vue";

    import { getAllAdmin, getAdminByTel } from "@/api/Api.js";
    const TableMap = {
        AName: "姓名",
        ATel: "电话",
        AAddress: "地址",
        //   APwd: "密码",
        Limit: "权限",
        Tissue: "组织",
        ABirth: "生日",
        updatedAt: "最近更新时间",
    };
    export default {
        data() {
            return {
                // title: "查询员工",
                cancelText: "清空",
                selectAdminData: {},
                renderList: [
                    { lable: "管理员电话", value: "", type: "text" },
                    //   { lable: "管理员名字", value: "", type: "text" },
                    //   { lable: "管理员权限", value: "", type: "text" },
                    //   { lable: "管理员组织", value: "", type: "text" },
                    //   { lable: "管理员地址", value: "", type: "text" },
                    //   { lable: "管理员密码", value: "", type: "text" },
                    //   { lable: "管理员生日", value: "", type: "datetime-local" },
                ],
                // verifyTel:'',
                passValidation: false, //判断是否通过了验证
                showNotClickMask: true, //有没有禁用遮罩
                debounceFunc: null,
                info: {},
                //   tableTitle: ["姓名", "", ""],
                table: {
                    tableTitle: [],
                    tableData: [],
                },
                tissue: this.$store.state.TISSUE,
                pageSize: 5,
                page: 1,
                currentPage: 0,
                total: 0,
            };
        },
        components: {
            Dialogs,
            Tables,
        },
        mounted() {
            this.getAllAdminInfo();
        },
        updated() {
            // console.log(this.table.tableTitle);
        },
        methods: {
            getAllAdminInfo() {
                this.table.tableTitle = [];
                this.table.tableData = [];
                const data = {
                    page: this.page,
                    pageSize: this.pageSize,
                    tissue: this.$store.state.TISSUE,
                };
                // const that = this;
                // console.log(this.$store.state.TISSUE);
                getAllAdmin(data).then((r) => {
                    this.total = r.data.data.total;
                    for (const key in r.data.data.list[0]) {
                        TableMap[key] &&
                            this.table.tableTitle.push({
                                prop: TableMap[key],
                                label: TableMap[key],
                            });
                    }
                    // console.log(this.table.tableTitle);
                    // console.log(r.data);
                    r.data.data.list.map((r) => {
                        // console.log(r);
                        const data = {};
                        for (const key in r) {
                            // console.log(key);
                            TableMap[key] && (data[TableMap[key]] = r[key]);
                        }
                        // console.log(data,"-----------");
                        this.table.tableData.push(data);
                    });
                    // console.log(this.table.tableData,this.table.tableTitle,9999);
                });
            },
            okHandle() {
                // console.log(this.renderList);
                this.selectAdminData = {
                    tel: this.renderList[0].value,
                    //   name: this.renderList[1].value,
                    //   limit: this.renderList[2].value,
                    //   tissue: this.renderList[3].value,
                    //   address: this.renderList[4].value,
                    //   pwd: this.renderList[5].value,
                    //   birth: this.renderList[6].value,
                };
                this.getAllAdminInfo();
            },
            CancelHandle() {
                // 取消清除数据
                this.renderList.forEach((item) => {
                    item.value = null;
                });
            },

            getAdminInfoByTel() {
                this.table.tableTitle = [];
                this.table.tableData = [];
                this.selectAdminData = {
                    tel: this.renderList[0].value,
                    //   name: this.renderList[1].value,
                    //   limit: this.renderList[2].value,
                    //   tissue: this.renderList[3].value,
                    //   address: this.renderList[4].value,
                    //   pwd: this.renderList[5].value,
                    //   birth: this.renderList[6].value,
                };
                getAdminByTel(this.selectAdminData).then((r) => {
                    console.log(r.data.data);
                    if (!r.data.data) {
                        return;
                    }
                    for (const key in r.data.data) {
                        TableMap[key] &&
                            this.table.tableTitle.push({
                                prop: TableMap[key],
                                label: TableMap[key],
                            });
                    }
                    // console.log(this.table.tableTitle);
                    const data = {};
                    for (const key in r.data.data) {
                        TableMap[key] && (data[TableMap[key]] = r.data.data[key]);
                    }
                    this.table.tableData.push(data);
                });
            },
            handleSizeChange(e) {
                //分页器大小变化
                this.pageSize = e;
                this.getAllAdminInfo();
            },
            handleCurrentChange(e) {
                // 页码变化
                this.page = e;
                this.getAllAdminInfo();
            },
        },
    };
</script>
    
<style lang="scss">
</style>