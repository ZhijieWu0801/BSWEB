<template>
    <div class="perAdoptContainer">
        <Dialogs @Ok="okHandle" @Cancel="CancelHandle" :title="title">
            <template>
                <div>
                    <span>宠物主人电话</span>
                    <input type="text" v-model="form.tel" />
                </div>
                <div>
                    <span> 宠物编号</span>
                    <input type="text" v-model="form.serial" />
                </div>
            </template>
        </Dialogs>
    </div>
</template>
  
  <script>
    import Dialogs from "@/components/Dialog.vue";
    import { linkPet } from "@/api/Api.js";
    export default {
        components: {
            Dialogs,
        },
        data() {
            return {
                title: "动物领养",
                form:{
                    tel: "",
                    serial: "",
                },
            };
        },
        methods: {
            CancelHandle() {},
            okHandle() {
                console.log(this.form)
                for (const key in this.form) {
                    if(!key.tel){
                        // return this.$Message.error(`请完整填完表单`) 
                    }
                }
                
                const data = {
                    tel: this.form.tel,
                    serial: this.form.serial,
                };
                linkPet(data).then(r=>{
                    // console.log(r.data);
                    this.$Message.info(r.data.msg)
                });
            },
        },
    };
</script>
  
  <style>
</style>