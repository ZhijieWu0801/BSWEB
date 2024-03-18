<template>
  <div id="app">
    <div class="appBody">
      <template v-if="!isLogin">
        <login @login="login" />
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
export default {
  components: {
    leftNav,
    login,
  },
  data() {
    return {
      isLogin: false,
    };
  },
  mounted() {},
  methods: {
    login() {
      this.isLogin = true;
      this.$router.push({ path: "/about" });
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
