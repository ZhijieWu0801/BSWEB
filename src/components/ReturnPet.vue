<template>
  <div class="returnPetContainer">
    <Dialogs @Ok="okHandle" @Cancel="CancelHandle" :title="title">
      <template>
        <div class="slotContainer">
          <div>
            <span>宠物主人电话</span>
            <input type="text" v-model="tel" />
          </div>
          <div>
            <span> 宠物编号</span>
            <input type="text" v-model="serial" />
          </div>
          <div>
            <div>归还原因</div>
            <textarea
              name=""
              id=""
              cols="80"
              rows="10"
              placeholder="请输入"
              v-model="textarea"
            ></textarea>
          </div>
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
      title: "动物归还",
      serial: "",
      textarea: "",
      tel:'',
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