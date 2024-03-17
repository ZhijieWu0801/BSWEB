<template>
  <div id="app">
    <div class="appBody">

      <leftNav :navList="navList"></leftNav>
      <router-view class="view"/>
      <button @click="change">qiehuan</button>
    </div>
  </div>
</template>
<script>
import leftNav from "@/components/leftNav.vue";
export default {
  components: {
    leftNav,
  },
  data() {
    return {
      navList: [123456,456,12654],
    };
  },
  methods:{
    change(){
      console.log(111);
      this.$router.push({path:"/about"})
    }
  }
};
</script>
<style lang="scss">
*{
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
  .appBody{
    display: flex;
    height: 100%;
    .leftNav{
      flex: 0 1 15%;
    }
    .view{
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
