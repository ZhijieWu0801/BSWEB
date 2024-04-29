<template>
    <div class="petInboundContainer">
        <Dialogs
            @Ok="okHandle"
            @Cancel="CancelHandle"
            :cancelText="cancelText"
            :title="title"
        >
            <template>
                <div class="slotContainer">
                    <div
                        class="itemContainer"
                        v-for="(item, index) in renderList"
                        :key="index"
                    >
                        <span class="itemText"> {{ item.lable }}：</span>

                        <input
                            v-if="item.type !== 'select'"
                            class="itemInput"
                            :type="item.type"
                            v-model="renderList[index].value"
                        />
                        <select
                            v-else
                            name=""
                            id=""
                            v-model="renderList[index].value"
                        >
                            <option
                                :value="opt.value"
                                v-for="(opt, i) in item.child"
                                :key="i"
                            >
                                {{ opt.lable }}
                            </option>
                        </select>
                    </div>
                </div>
                <!-- <button @click="getAdminInfoByTel">aaaa</button> -->
            </template>
        </Dialogs>
        <tables :tableData="tableData" :tableTitle="tableTitle"></tables>
    </div>
</template>
    
    <script>
    import Dialogs from "@/components/Dialog.vue";
    import Tables from "@/components/Table.vue";
    import { getAdminByTel } from "@/api/Api.js";

    const TableMap = {
        AName: "姓名",
        ATel: "电话",
        AAddress: "地址",
        //   APwd: "密码",
        Limit: "权限",
        Tissue: "组织",
        ABirth: "生日",
    };
    export default {
        data() {
            return {
                title: "查询员工",
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
                tableTitle: [],
                tableData: [],
            };
        },
        components: {
            Dialogs,
            Tables,
        },
        methods: {
            initTable() {
                this.tableTitle = [];
                this.tableData = [];
            },

            okHandle() {
                // console.log(this.renderList);
                this.selectAdminData = {
                    tel: this.renderList[0].value,
                };
                this.getAdminInfoByTel();
            },
            CancelHandle() {
                // 取消清除数据
                this.renderList.forEach((item) => {
                    item.value = null;
                });
            },

            getAdminInfoByTel() {
                this.tableTitle = [];
                this.tableData = [];
                this.selectAdminData = {
                    tel: this.renderList[0].value,
                };
                console.log(1111);
                this.initTable();
                getAdminByTel(this.selectAdminData).then((r) => {
                    // console.log(r.data.data);
                    if (!r.data.data) {
                        return;
                    }
                    for (const key in r.data.data) {
                        //   console.log(key);
                        TableMap[key] &&
                            this.tableTitle.push({
                                prop: TableMap[key],
                                label: TableMap[key],
                            });
                    }
                    console.log(this.tableTitle);
                    const data = {};
                    for (const key in r.data.data) {
                        // console.log(key);
                        TableMap[key] && (data[TableMap[key]] = r.data.data[key]);
                    }
                    console.log(data, "-----------");
                    this.tableData.push(data);
                });
            },
        },
    };
</script>
    
    <style lang="scss">
</style>