<template>
    <div class="loginOuter" id="loginBG">
        <div class="sysName">
            流浪宠物管理系统
        </div>
        <div class="loginContainer dobCenter"  @keydown.enter="login">
            <div class="container">
                <template v-if="isLogin">
                    <div class="item rowCenter">
                        <span class="lable">账号:</span
                        ><input type="text" class="value" v-model="tel" />
                    </div>
                    <div class="item rowCenter">
                        <span class="lable">密码:</span
                        ><input type="password" class="value" v-model="pwd" />
                    </div>
                    <button @click="login" class="btn">登录</button>
                    <!-- <button @click="goSignIn" class="btn">去注册</button> -->
                </template>
                <template v-else>
                    <div class="item rowCenter">
                        <span class="lable">电话号码:</span>
                        <input type="text" class="value" v-model="singTel" />
                    </div>
                    <div class="item rowCenter">
                        <span class="lable">名字:</span>
                        <input type="text" class="value" v-model="singName" />
                    </div>
                    <div class="item rowCenter">
                        <span class="lable">密码:</span>
                        <input type="text" class="value" v-model="singPwd" />
                    </div>
                    <div class="item rowCenter">
                        <span class="lable">地址:</span>
                        <input type="text" class="value" v-model="singAddress" />
                    </div>
                    <button @click="goLogin" class="btn">去登录</button>
                    <button @click="signIn" class="btn">注册</button>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import { login, signIn } from "@/api/Api.js";
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
                socket: "",
                message: "",
            };
        },
        methods: {
            linkeServe(id) {
                // 创建 WebSocket 连接
                const socket = new WebSocket("ws://127.0.0.1:3001");
                this.$store.commit("setSocket",socket);//把ws保存到仓库

                this.socket = socket;
                // function init() {
                // 当连接建立时
                console.log(123333);
                socket.addEventListener("open", function (event) {
                    console.log("WebSocket 连接已建立");
                    const info = {
                        userId: id,
                        standing: 0,
                    };
                    const messageInfo = JSON.stringify(info);
                    // 发送消息给服务器
                    socket.send(messageInfo);
                });
                // 当接收到消息时
                socket.addEventListener("message", function (event) {
                    console.log("收到消息:", event.data);
                });

                // 当连接关闭时
                socket.addEventListener("close", function (event) {
                    console.log("WebSocket 连接已关闭");
                });

                // 当连接发生错误时
                socket.addEventListener("error", function (error) {
                    console.error("WebSocket 连接发生错误:", error);
                });
                // }
                // init();
            },
            goLogin() {
                this.isLogin = true;
            },
            login() {
                if (!this.isLogin) {
                    return;
                }
                this.$store.commit("setLoading", true);
                login({
                    tel: this.tel,
                    pwd: this.pwd,
                }).then((r) => {
                        const data = r.data.data;
                        console.log(r.data);
                        if (r.data.isSuccessful) {
                            // 保存个人信息
                            console.log(data);
                            localStorage.setItem("token", data.loginToken);
                            this.$store.commit("setLogin", r.data.isSuccessful);
                            this.$store.commit("setId", data.id);
                            this.$store.commit("setTel", data.ATel);
                            this.$store.commit("setName", data.AName);
                            this.$store.commit("setLimit", data.ALimit);
                            this.$store.commit("setTissue", data.ATissue);
                            this.$store.commit("setAddress", data.AAddress);
                            this.$store.commit("setBirth", data.ABirth);
                            this.linkeServe(data.ATel);
                            this.$router.push({ path: "/index" });
                            // this.$emit("login", r.data.isSuccessful);
                            console.log(this.$store.state);
                        }
                        else {
                            this.$Message.error(r.data.msg)
                        }
                    })
                    .then(() => {
                        this.$store.commit("setLoading", false);
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
                signIn(data).then((result) => {
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
.loginOuter{
    width: 100%;
    height: 100%;
    .sysName{
        font-size: 50px;
    }
    .loginContainer {
        width: 100%;
        height: 100%;
        .container {
            background-color: aqua;
            padding: 40px;
            .item {
                margin-bottom: 25px;
            }
            .lable {
                display: inline-block;
                margin-right: 15px;
                width: 80px;
                // text-align: right;
            }
        }
    }
}
</style>