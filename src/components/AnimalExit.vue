<template>
  <div class="animalExitContainer">
    <Dialogs @Ok="okHandle" @Cancel="CancelHandle" :title="title">
      <template>
        <div class="slotContainer">
          <div><span>宠物编号</span><input type="text" v-model="serial" /></div>
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