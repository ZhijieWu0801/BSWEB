<template>
    <div id="app" v-loading="isLoging">
        <div @click="aaaa">aaaaaa</div>
        <div class="appBody" v-if="true">
            <template v-if="!isLogin">
                <login @login="login" />
            </template>
            <template v-else>
                <leftNav></leftNav>
                <router-view class="view" />
                <!-- <button @click="change">qiehuan</button> -->
            </template>
        </div>
        <div>
            <input type="file" @change="handleFileInputChange" />
            <button @click="convertImageToBase64">Convert to Base64</button>
            <img :src="base64Image" alt="Converted Image" style="width: 500px;"/>
        </div>
    </div>
</template>
<script>
import leftNav from "@/components/leftNav.vue";
import login from "@/components/login.vue";
export default {
    components: {
        leftNav,
        login,
    },
    data() {
        return {
            isLogin: !!localStorage.getItem("token") || false,
            isLoging: false,
            base64Image: "",
        };
    },
    mounted() {
        console.log(this.isLogin);
    },
    methods: {
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
            console.log("Base64 Image:", {aaa:this.base64Image});
        },
        aaaa() {
            // v-loding 测试函数
            // this.isLoging = !this.isLoging;
            // this.$store.commit("setLoging", this.isLoging);
            // setTimeout(() => {
            //     this.isLoging = !this.isLoging;
            //     this.$store.commit("setLoging", this.isLoging);
            // }, 3000);
            console.log(

                this.$comfunc.testTel("12345600000")
            );
        },
        login(r) {
            console.log(r);
            this.isLogin = r;
            this.isLogin && this.$router.push({ path: "/about" });
        },
        change() {
            console.log(111);
            this.$router.push({ path: "/about" });
        },
    },
};
</script>
<style lang="scss">
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
