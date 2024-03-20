<template>
  <div class="animalExitContainer">
    <Dialogs @Ok="okHandle" @Cancel="CancelHandle" :title="title">
      <template>
        <div>
          <span>宠物主人电话</span>
          <input type="text" v-model="tel" />
        </div>
        <div>
          <span> 宠物编号</span>
          <input type="text" v-model="serial" />
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
      title: "动物领养",
      tel: "",
      serial: "",
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