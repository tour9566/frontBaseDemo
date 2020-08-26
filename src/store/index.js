import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from './modules/home'
import testStore from './modules/test'
Vue.use(Vuex)
const debug = process.env.NODE_ENV === 'development'
const store = new Vuex.Store({
    modules: {
        homeStore,
        testStore
    },
    state: {
        loading: false
    },
    mutations: {
        mutateLoading(state, payload) {
            state.loading = payload
        }
    },
    strict: debug
})
export default store