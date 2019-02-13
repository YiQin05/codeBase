import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import getter from './getter'
import mutations from './mutation'
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getter,
  mutations
})
export default store
