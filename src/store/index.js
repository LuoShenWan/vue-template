import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// 数据初始状态
const state = {
  sidebar: false
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
