<template>
    <div class="righttTeble">
        <button @click="getAllPetByType">查询</button>
        <tables :tableData="tableData" :tableTitle="tableTitle"></tables>
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
    import { getAllPetByType } from "@/api/Api.js";
    import tables from "@/components/Table.vue";
    const typeMap = {
        cat: "M",
        dog: "D",
    };
    const TableMap = {
        id: "id",
        PName: "宠物名字",
        species: "宠物种类",
        serial: "宠物编号",
        //   APwd: "密码",
        petMaster: "宠物主人",
        // Tissue: "组织",
        // ABirth: "生日",
    };
    export default {
        components: {
            tables,
        },
        beforeRouteEnter(){
            
        },
        data() {
            const tableData = [];

            const tableTitle = [];
            const species = this.$route.params.species;
            return {
                tableData,
                tableTitle,
                // species,
                pageSize: 5,
                page: 1,
                currentPage: 0,
                total: 0,
            };
        },
        mounted() {},
        methods: {
            initTable() {
                this.tableData = [];
                this.tableTitle = [];
            },
            getAllPetByType() {
                this.initTable();
                const data = {
                    species: this.$route.params.species,
                    pageSize: this.pageSize,
                    page: this.page,
                };
                // this.$axios
                //   .post(`${this.$baseUrl}/api/pet/getAllPetByType`, data)
                getAllPetByType(data).then((r) => {
                    console.log(r.data);
                    // console.log(r.data);
                    if (r.data.data) {
                        for (const key in r.data.data[0]) {
                            //   console.log(key);
                            TableMap[key] &&
                                this.tableTitle.push({
                                    prop: TableMap[key],
                                    label: TableMap[key],
                                });
                        }
                        console.log(this.tableTitle, typeof r.data);
                        this.total = r.data.total;
                        r.data.data.map((r) => {
                            // console.log(r);
                            const data = {};
                            for (const key in r) {
                                // console.log(key);
                                if (key === "petMaster") {
                                    // console.log(r);
                                    TableMap[key] &&
                                        (data[TableMap[key]] = r[key]
                                            ? r[key].MPName
                                            : "暂无");

                                    break;
                                }
                                TableMap[key] && (data[TableMap[key]] = r[key]);
                            }
                            // console.log(data,"-----------");
                            this.tableData.push(data);
                        });
                        console.log(this.tableData, 111111111);
                    } else {
                        this.$Message.info("暂无数据");
                    }
                });
                // console.log(this.$route.params.species);
            },
            handleSizeChange() {
                console.log(11);
            },
            handleCurrentChange(e) {
                console.log(22, e);
                this.page = e;
                this.getAllPetByType();
            },
        },
    };
</script>

<style>
</style>