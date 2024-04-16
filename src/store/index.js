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
    LOGING:false,
  },
  getters: {
    getId: state => {
      return state.Id
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
    getLoging: state=>{
      return state.LOGING
    }
  },
  mutations: {
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
    setLoging: (state, value) => {
      state.LOGING = !!value
    }
  },
  actions: {
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
    updataLoging: ({
      commit
    }, value) => {
      commit("setLoging", value)
    },
  },
  modules: {}
})