<template>
    <div class="leftNav">
        <el-row class="tac">
            <el-col :span="24">
                <!-- <h5>自定义颜色</h5> -->
                <el-menu
                    unique-opened
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <el-submenu
                        :index="item.index"
                        v-for="(item, i) in leftNavlist"
                        :key="i"
                        v-if="item.child"
                    >
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{ item.lable }}</span>
                        </template>
                        <el-menu-item
                            :index="childItem.index"
                            v-for="(childItem, i) in item.child"
                            @click="clickHandle(childItem)"
                            :key="i"
                        >
                            <i class="el-icon-document"></i>
                            <span slot="title">{{ childItem.lable }}</span>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item
                        v-if="!item.child"
                        @click="clickHandle(item)"
                        index="3"
                        :index="item.index"
                        v-for="(item, i) in leftNavlist"
                        :key="i"
                    >
                        <i class="el-icon-document"></i>
                        <span slot="title">{{ item.lable }}</span>
                    </el-menu-item>
                    <div class="exit" @click.end="exit">退出</div>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
  
  <script>
import leftNavlist from "@/js/leftNavlist";
export default {
    components: {},
    data() {
        return {
            leftNavlist,
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickHandle(item) {
            // console.log(item, "-------", {
            //   path: item.path,
            //   params: { type: item.type },
            // });
            //item 里面携带path 做路由跳转，渲染组件
            const path = item.type ? item.path + item.type : item.path;
            console.log(path, "=====", this.$route.path);
            if (this.$route.path === path) {
                return;
            }
            item.path &&
                this.$router.push({
                    path: path,
                });
        },
        exit() {
            // this.$emit("login", r.data.isSuccessful);
            this.$store.commit("setLogin", false);
            this.$store.commit("setLogin", false);
            this.$router.push({ path: "/" });
            localStorage.removeItem("token");
            this.$store.commit("setId", "");
            this.$store.commit("setTel", "");
            this.$store.commit("setName", "");
            this.$store.commit("setLimit", "");
            this.$store.commit("setTissue", "");
            this.$store.commit("setAddress", "");
            this.$store.commit("setBirth", "");
        },
    },
};
</script>
  
  <style scoped>
/* 这里是样式 */
* {
    user-select: none;
}
</style>
<style lang="less">
.tac {
    height: 100%;
    .el-col {
        height: 100%;
        .el-menu {
            height: 100%;
        }
    }
    .el-menu-vertical-demo {
        position: relative;
        .exit {
            position: absolute;
            left: 50%;
            bottom: 50px;
            transform: translateX(-50%);
        }
    }
}
</style>
  