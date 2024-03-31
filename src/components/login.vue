<template>
  <div class="loginContainer">
    <div><span>账号:</span><input type="text" v-model="tel" /></div>
    <div><span>密码:</span><input type="text" v-model="pwd" /></div>
    <button @click="login">登录</button>
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
          this.$emit("login", r.data.state === 200);
          // 保存个人信息
          this.$store.commit("updataId", r.data.id);
          this.$store.commit("updataTel", r.data.ATel);
          this.$store.commit("updataName", r.data.AName);
          this.$store.commit("updataLimit", r.data.ALimit);
          this.$store.commit("updataTissue", r.data.ATissue);
          this.$store.commit("updataAddress", r.data.AAddress);
          this.$store.commit("updataBirth", r.data.ABirth);
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