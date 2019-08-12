import request from "@/axios/index"

const { getFollowPersonInfoByPhone } = request
const state = {}
const getters = {}
const actions = {
  async getFollowPersonInfoByPhone({}, params) {
    const { data } = await getFollowPersonInfoByPhone(params)
    return data
  }
}
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
