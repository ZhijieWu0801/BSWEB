<template>
  <div class="loginContainer">
    <button @click="login">登录</button>
    aaaaaaaaaaaa
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$emit("login");
    },
  },
};
</script>

<style>
.loginContainer {
  width: 100%;
}
</style>