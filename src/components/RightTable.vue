<template>
    <div class="righttTeble">
        <button @click="getAllPetByType">查询</button>
        <tables :tableData="tableData" :tableTitle="tableTitle"></tables>
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
    data() {
        const tableData = [];

        const tableTitle = [];
        const species = this.$route.params.species;
        return {
            tableData,
            tableTitle,
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
            };
            // this.$axios
            //   .post(`${this.$baseUrl}/api/pet/getAllPetByType`, data)
            getAllPetByType(data).then((r) => {
                console.log(r.data);
                // console.log(r.data);
                for (const key in r.data.data[0]) {
                    //   console.log(key);
                    TableMap[key] &&
                        this.tableTitle.push({
                            prop: TableMap[key],
                            label: TableMap[key],
                        });
                }
                console.log(this.tableTitle, typeof r.data);
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
                // console.log(this.tableData, 111111111);
            });
            // console.log(this.$route.params.species);
        },
    },
};
</script>

<style>
</style>