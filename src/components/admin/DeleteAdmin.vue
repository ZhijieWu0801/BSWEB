<template>
    <div class="animalExitContainer">
        <Dialogs @Ok="okHandle" @Cancel="CancelHandle" :title="title">
            <template>
                <div class="slotContainer">
                    <div>
                        <span>管理员电话</span
                        ><input type="text" v-model="tel" />
                    </div>
                    <div>删除原因</div>
                    <textarea
                        name=""
                        id=""
                        cols="80"
                        rows="10"
                        placeholder="请输入"
                        v-model="textarea"
                    ></textarea>
                </div>
            </template>
        </Dialogs>
    </div>
</template>
  
  <script>
import Dialogs from "@/components/Dialog.vue";
import { deleteAdminByTel } from "@/api/Api.js";

export default {
    components: {
        Dialogs,
    },
    data() {
        return {
            title: "删除管理员",
            tel: "",
            textarea: "",
        };
    },
    methods: {
        CancelHandle() {
            this.tel = "";
            this.textarea = "";
        },
        okHandle() {
            const data = {
                tel: this.tel,
                msg: this.textarea,
            };
            deleteAdminByTel(data);
        },
    },
};
</script>
  
  <style>
</style>