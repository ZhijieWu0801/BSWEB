<template>
    <div class="loginContainer">
        <template v-if="isLogin">
            <div><span>账号:</span><input type="text" v-model="tel" /></div>
            <div><span>密码:</span><input type="text" v-model="pwd" /></div>
            <button @click="login">登录</button>
            <button @click="goSignIn">去注册</button>
        </template>
        <template v-else>
            <div>
                <span class="lable">电话号码:</span>
                <input type="text" class="value" v-model="singTel" />
            </div>
            <div>
                <span class="lable">名字:</span>
                <input type="text" class="value" v-model="singName" />
            </div>
            <div>
                <span class="lable">密码:</span>
                <input type="text" class="value" v-model="singPwd" />
            </div>
            <div>
                <span class="lable">地址:</span>
                <input type="text" class="value" v-model="singAddress" />
            </div>
            <button @click="goLogin">去登录</button>
            <button @click="signIn">注册</button>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tel: "",
            pwd: "",
            isLogin: true,
            singTel: "",
            singName: "",
            singPwd: "",
            singAddress: "",
        };
    },
    methods: {
        goLogin() {
            this.isLogin = true;
        },
        login() {
            this.$axios
                .post(`${this.$baseUrl}/api/login`, {
                    tel: this.tel,
                    pwd: this.pwd,
                })
                .then((r) => {
                  const data = r.data.data;
                    console.log(r.data);
                    this.$emit("login", r.data.isSuccessful);
                    if(r.data.isSuccessful){
                      // 保存个人信息
                      localStorage.setItem("token",data.loginToken)
                      this.$store.commit("updataId", data.id);
                      this.$store.commit("updataTel", data.ATel);
                      this.$store.commit("updataName", data.AName);
                      this.$store.commit("updataLimit", data.ALimit);
                      this.$store.commit("updataTissue", data.ATissue);
                      this.$store.commit("updataAddress", data.AAddress);
                      this.$store.commit("updataBirth", data.ABirth);
                    }
                })
                .catch((error) => {
                    console.error("Error:", error); // 输出错误信息
                });
        },
        goSignIn() {
            this.isLogin = false;
        },
        signIn() {
            const data = {
                tel: this.singTel,
                name: this.singName,
                pwd: this.singPwd,
                address: this.singAddress,
            };
            this.$axios
                .post(`${this.$baseUrl}/api/master/signIn`, data)
                .then((result) => {
                    console.log(result.data.data.isSuccessful);
                    if (result.data.data.isSuccessful) {
                        this.$Message.info(result.data.msg);
                    }
                });
        },
    },
};
</script>

<style lang="less">
.loginContainer {
    width: 100%;
    .lable{
      display: inline-block;
      width: 100px;
      text-align: right;
    }
}
</style>