<template>
    <div
        id="app"
        v-loading:loadingText.prop="lodingText"
        v-loading="$store.state.LOADING"
    >
        <!-- <div @click="test">1111111111111111111111111</div>
        <img :src="imgSrc" alt="" style="width: 500px;height: 500px;"/>
        <input type="text" @change="sendMessage({id:1,message})" v-model="message" />

        <input type="file" @change="fileChange"> -->
        <!-- <div @click="aaaa">aaaaaa</div> -->
        <div class="appBody" v-if="true">
            <template v-if="!$store.state.LOGIN">
                <login />
            </template>
            <template v-else>
                <leftNav></leftNav>
                <router-view class="view" />
                <!-- <button @click="change">qiehuan</button> -->
            </template>
        </div>
    </div>
</template>
<script>
    import leftNav from "@/components/leftNav.vue";
    import login from "@/components/login.vue";
    import { getImg, getPetBySerial } from "@/api/Api";
    export default {
        components: {
            leftNav,
            login,
        },
        data() {
            return {
                // isLogin: !!localStorage.getItem("token") || false,
                isLogin: this.$store.state.LOGIN,
                isLoding: this.$store.state.LOADING,
                base64Image: "",
                // lodingText: this.$store.getters.getLoadingText,
                lodingText: "",
                socket: "",
                message: "",
                imgSrc: "",
            };
        },
        created() {
            window.vLoadingText = this.$store.getters.getLoadingText;
        },
        mounted() {
            /**
             * 
             */
            this.$bus.$on("sendMessageToServe", (data) => {
                console.log(data,444555);
                this.sendMessage(data);
            });
            console.log(this.isLogin);
        },
        computed: {
            // lodingText(){
            //     return this.$store.getters.getLoadingText
            // }
        },
        watch: {
            isLogin: (val, old) => {
                console.log(val);
                if (val) {
                }
            },
        },
        methods: {
            fileChange(file){
                console.log(file);
            },
            linkeServe() {
                // 创建 WebSocket 连接
                const socket = new WebSocket("ws://127.0.0.1:3001");
                this.socket = socket;
                // function init() {
                // 当连接建立时
                console.log(123333);
                socket.addEventListener("open", function (event) {
                    console.log("WebSocket 连接已建立");
                    const info = {
                        userId: 321,
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
            test() {
                getImg().then((r) => {
                    console.log(r);
                    this.imgSrc = `data:image/png;base64,${r.data.img}`;
                });
                // getPetBySerial({serial:"M-202405051113560099"}).then(r=>{
                //     console.log(r,654);
                // })
            },
            sendMessage(data) {
                // 向 WS 发消息
                // 要发送的消息对象
                const messageObject = {
                    userId: data.id,
                    standing: 0,
                    content: "这是来自管理员的消息",
                    timestamp: Date.now(),
                    // 可以附加任意额外的信息
                    message: data.message,
                };
                const message = JSON.stringify(messageObject);
                console.log("this.message",message);
                if (message) {
                    console.log(111,this.$store.state);
                    this.$store.state.SOCKET.send(message);
                }
            },
            tobase64() {
                // 图片转base64数据
            },
            handleFileInputChange(event) {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    this.base64Image = reader.result;
                };

                reader.readAsDataURL(file);
            },
            convertImageToBase64() {
                // 这里可以发送 base64Image 到后端处理
                console.log("Base64 Image:", { aaa: this.base64Image });
            },
            aaaa() {
                // v-loding 测试函数
                this.isLoding = !this.isLoding;
                // this.lodingText = this.$store.state.LOADINGTEXT;
                console.log("this.lodingText", this.lodingText);
                this.$store.commit("setLoading", this.isLoding);
                setTimeout(() => {
                    this.isLoding = !this.isLoding;
                    this.$store.commit("setLoading", this.isLoding);
                    console.log(this.$store.state.LOADING);
                }, 3000);
                // console.log(this.$comfunc.testTel("12345600000"));
            },
            login(r) {
                // console.log(r,this.$store.state.LOGIN,this.isLogin);
                // this.isLogin = this.$store.state.LOGIN;
                console.log(this.isLogin);
                this.isLogin && this.linkeServe();
                this.isLogin && this.$router.push({ path: "/index" });
            },
            change() {
                console.log(111);
                this.$router.push({ path: "/about" });
            },
        },
    };
</script>
<style lang="scss">
    @import url("@/less/common.less");
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
        .appBody {
            display: flex;
            height: 100%;
            .leftNav {
                flex: 0 1 15%;
            }
            .view {
                flex: 1 1;
            }
        }
    }

    nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
