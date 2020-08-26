import { postQuery, getQuery} from "@/axios/request/test"
import { GET_DATA } from '../mutations.type'

const formateData=(data)=>{
  return data.map(x => ({
    ...x,
    }))
}


const state = {
  data:[]
}
const getters = {
  data:state=>state.data
}
const actions = {
  async postQuery({commit}, params) {
    const { data } = await postQuery(params)
    commit(GET_DATA , data)
    return formateData(data)
  },
  async getQuery({commit}, params) {
    const { data } = await getQuery(params)
    commit(GET_DATA , data)
    return formateData(data)
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
