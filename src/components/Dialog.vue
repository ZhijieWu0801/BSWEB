<template>
  <div class="dialogContainer">
    <div v-if="mask" class="mask"></div>
    <div class="body">
      <div class="title">
        <div class="titleText">
          {{ title }}
        </div>
        <div class="close" v-if="close" @click.stop="Close">
          <img src="" alt="" srcset="" />
        </div>
      </div>
      <slot></slot>

      <div class="foot">
        <button class="isCancel" @click.stop="Cancel">{{ cancelText }}</button>
        <button class="isOk" @click.stop="Ok">{{ okText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "默认标题",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    okText: {
      type: String,
      default: "确认",
    },
    close: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    Cancel() {
      this.$emit("Cancel");
    },
    Ok() {
      this.$emit("Ok");
    },
    Close() {},
  },
};
</script>

<style lang="scss">
.dialogContainer {
  position: relative;
  .mask {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #000000cc;
  }
}
</style>