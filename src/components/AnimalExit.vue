<template>
    <div class="animalExitContainer">
        <Dialogs
            @Ok="okHandle"
            @Cancel="CancelHandle"
            :title="title"
            :cancelText="cancelText"
        >
            <template>
                <div class="slotContainer">
                    <div>
                        <span>宠物编号</span
                        ><input type="text" v-model="serial" />
                    </div>
                    <div>出站原因</div>
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
    import { deletPet } from "@/api/Api.js";
    import Dialogs from "@/components/Dialog.vue";
    export default {
        components: {
            Dialogs,
        },
        data() {
            return {
                title: "动物出站",
                serial: "",
                textarea: "",
                cancelText: "清空",
            };
        },
        methods: {
            CancelHandle() {
                this.serial = "";
                this.textarea = "";
            },
            okHandle() {
                const data = {
                    serial: this.serial,
                };
                deletPet(data).then((r)=>{
                  if(!r.data.data){
                    this.$Message.error(r.data.msg)
                  } else {
                    this.$Message.info(r.data.msg)
                  }
                });
            },
        },
    };
</script>

<style>
</style>