import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ID: "",
    TEL: "",
    NAME: '',
    LIMIT: '',
    TISSUE: '',
    BIRTH: '',
    LOADING: false,
    LOADINGTEXT: "Loading...",
    LOGIN: false,
    ADDRESS: '',
    SOCKET: "", //ws实例
  },
  getters: {
    getSocket: state => {
      return state.SOCKET
    },
    getId: state => {
      return state.ID
    },
    getName: state => {
      return state.NAME
    },
    getTel: state => {
      return state.TEL
    },
    getLimit: state => {
      return state.LIMIT
    },
    getTissue: state => {
      return state.TISSUE
    },
    getBirth: state => {
      return state.BIRTH
    },
    getLoding: state => {
      return state.LOADING
    },
    getLoadingText: state => {
      // console.log(state.LOADINGTEXT,"------");
      return state.LOADINGTEXT
    },
    getLogin: state => {
      return state.LOGIN
    },
    getAddress: state => {
      return state.ADDRESS
    },
  },
  mutations: {
    setSocket: (state, value) => {
      state.SOCKET = value
    },
    setId: (state, value) => {
      state.ID = value
    },
    setName: (state, value) => {
      state.NAME = value
    },
    setTel: (state, value) => {
      state.TEL = value
    },
    setLimit: (state, value) => {
      state.LIMIT = value
    },
    setTissue: (state, value) => {
      state.TISSUE = value
    },
    setBirth: (state, value) => {
      state.BIRTH = value
    },
    setAddress: (state, value) => {
      state.ADDRESS = value
    },
    setLoading: (state, value) => {
      state.LOADING = !!value
    },
    setLoadingText: (state, value) => {
      // 设置loading文案时把window上面的属性也一起设置了，主要使用的是window上的属性
      state.LOADINGTEXT = value;
      window.vLoadingText = value;
    },
    setLogin: (state, value) => {
      state.LOGIN = !!value
    },
  },
  actions: {
    updataSocket: ({
      commit
    }, value) => {
      commit("setSocket", value)
    },
    updataId: ({
      commit
    }, value) => {
      commit("setId", value)
    },
    updataName: ({
      commit
    }, value) => {
      commit("setName", value)
    },
    updataTel: ({
      commit
    }, value) => {
      commit("setTel", value)
    },
    updataLimit: ({
      commit
    }, value) => {
      commit("setLimit", value)
    },
    updataTissue: ({
      commit
    }, value) => {
      commit("setTissue", value)
    },
    updataBirth: ({
      commit
    }, value) => {
      commit("setBirth", value)
    },
    updataLoding: ({
      commit
    }, value) => {
      commit("setLoading", value)
    },
    updataLodingText: ({
      commit
    }, value) => {
      commit("setLoadingText", value)
    },
    updataLogin: ({
      commit
    }, value) => {
      commit("setLogin", value)
    },
    updataAddress: ({
      commit
    }, value) => {
      commit("setAddress", value)
    },
  },
  modules: {}
})