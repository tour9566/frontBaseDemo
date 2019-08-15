import request from "@/axios/index"
import { GET_DATA } from '../mutations.type'

const { getFollowPersonInfoByPhone } = request
const state = {
  data:[]
}
const getters = {
  data:state=>state.data
}
const actions = {
  async getFollowPersonInfoByPhone({commit}, params) {
    const { data } = await getFollowPersonInfoByPhone(params)
    commit(GET_DATA , data)
    return data
  }
}
const mutations = {
  [GET_DATA](state, payload) {
    state.data = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
