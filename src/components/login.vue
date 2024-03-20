<template>
  <div class="loginContainer">
    <div><span>账号:</span><input type="text" v-model="tel" /></div>
    <div><span>密码:</span><input type="text" v-model="pwd" /></div>
    <button @click="login">登录</button>
    aaaaaaaaaaaa
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "",
      pwd: "",
    };
  },
  methods: {
    login() {
      this.$axios
        .post(`${this.$baseUrl}/api/login`, {
          tel: this.tel,
          pwd: this.pwd,
        })
        .then((r) => {
          console.log(r.data.state);
          this.$emit("login",r.data.state === 200 );
        })
        .catch((error) => {
          console.error("Error:", error); // 输出错误信息
        });
    },
  },
};
</script>

<style>
.loginContainer {
  width: 100%;
}
</style>