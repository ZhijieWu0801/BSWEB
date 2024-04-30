<template>
    <div class="deleteAdminContainer">
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
                if(!this.tel){
                    this.$Message.error("手机号不能为空");
                    return
                }
                if(!this.textarea){
                    this.$Message.error("删除原因不能为空");
                    return
                }
                const data = {
                    tel: this.tel,
                    msg: this.textarea,
                };
                
                deleteAdminByTel(data).then((data)=>{
                    console.log(data.data);
                    if(data.data.msg){
                        this.$Message.success("删除成功");
                    } else {
                        this.$Message.error("删除失败");
                    }
                });
            },
        },
    };
</script>
  
  <style>
</style>