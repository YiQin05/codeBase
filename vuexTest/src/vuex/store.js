import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  count: 10,
  count1: 11,
  filterData: [
    {id: 1, text: '数据1', done: true},
    {id: 2, text: '数据2', done: false},
    {id: 3, text: '数据3', done: true}
  ]
}

const mutations = {
  INCREMENT (state, playLoad) {
    state.count += playLoad.clickTime
  },
  DECREMENT (state, playLoad) {
    state.count -= playLoad.clickTime
  }
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
