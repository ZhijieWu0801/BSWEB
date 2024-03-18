<template>
  <div class="leftNav">
    <el-row class="tac">
      <el-col :span="24">
        <h5>自定义颜色</h5>
        <el-menu
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
    clickHandle(item){
        console.log(item,"-------");
        //item 里面携带path 做路由跳转，渲染组件
        item.path && this.$router.push({path:item.path})
    }

  },
};
</script>
  
  <style>
/* 这里是样式 */
</style>
  