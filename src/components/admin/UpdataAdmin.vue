<template>
    <div class="petInboundContainer">
        <div>
            <span>验证管理员</span>
            <input
                type="text"
                @input="verifyInputHandle"
                v-model="renderList[0].value"
            />
            <button @click.stop="verifyClickHandle">点击验证</button>
        </div>
        <Dialogs
            @Ok="okHandle"
            @Cancel="CancelHandle"
            :cancelText="cancelText"
            :title="title"
            :showNotClickMask="showNotClickMask"
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
                            :disabled="showNotClickMask"
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
            </template>
        </Dialogs>
    </div>
</template>
  
  <script>
import Dialogs from "@/components/Dialog.vue";
import { updataAdmin } from "@/api/Api.js";

export default {
    data() {
        return {
            title: "修改员工",
            cancelText: "清空",
            addAdminData: {},
            renderList: [
                { lable: "管理员电话", value: "", type: "text" },
                { lable: "管理员名字", value: "", type: "text" },
                { lable: "管理员权限", value: "", type: "text" },
                { lable: "管理员组织", value: "", type: "text" },
                { lable: "管理员地址", value: "", type: "text" },
                { lable: "管理员密码", value: "", type: "text" },
                { lable: "管理员生日", value: "", type: "datetime-local" },
            ],
            // verifyTel:'',
            passValidation: false, //判断是否通过了验证
            showNotClickMask: true, //有没有禁用遮罩
            debounceFunc: null,
        };
    },
    components: {
        Dialogs,
    },
    methods: {
        okHandle() {
            // console.log(this.renderList);
            this.addAdminData = {
                tel: this.renderList[0].value,
                name: this.renderList[1].value,
                limit: this.renderList[2].value,
                tissue: this.renderList[3].value,
                address: this.renderList[4].value,
                pwd: this.renderList[5].value,
                birth: this.renderList[6].value,
            };
            updataAdmin(this.addAdminData);
        },
        CancelHandle() {
            // 取消清除数据
            this.renderList.forEach((item) => {
                item.value = null;
            });
        },
        async verifyHandle() {
            this.$axios
                .post(`${this.$baseUrl}/api/admin/getAdminByTel`, {
                    tel: this.renderList[0].value,
                })
                .then((r) => {
                    if (r.data.data) {
                        this.showNotClickMask = false;
                    } else {
                        this.showNotClickMask = true;
                    }
                });
        },
        async verifyClickHandle() {
            await this.verifyInputHandle();
            if (this.showNotClickMask) {
                this.$notify({
                    title: "错误",
                    message: "没有找到用户",
                    type: "error",
                });
            } else {
                this.$notify({
                    title: "成功",
                    message: "找到用户，请继续编辑",
                    type: "success",
                });
            }
        },
        async verifyInputHandle() {
            if (this.debounceFunc) {
                return;
            }
            this.debounceFunc = await this.$debounce(
                this.verifyHandle,
                1000,
                () => {
                    this.debounceFunc = null;
                }
            );
            this.debounceFunc();
        },
    },
};
</script>
  
  <style lang="scss">
</style>