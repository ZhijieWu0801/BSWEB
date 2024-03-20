<template>
  <div class="animalExitContainer">
    <Dialogs @Ok="okHandle" @Cancel="CancelHandle" :title="title">
      <template>
        <div class="slotContainer">
          <div>
            <span>管理员电话</span><input type="text" v-model="serial" />
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
export default {
  components: {
    Dialogs,
  },
  data() {
    return {
      title: "删除管理员",
      serial: "",
      textarea: "",
    };
  },
  methods: {
    CancelHandle() {},
    okHandle() {},
  },
};
</script>
  
  <style>
</style>