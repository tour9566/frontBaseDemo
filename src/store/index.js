import Vue from 'vue'
import Vuex from 'vuex'
import helloWorldStore from './modules/home'

Vue.use(Vuex)
const debug = process.env.NODE_ENV === 'development'
const store = new Vuex.Store({
    modules: {
        helloWorldStore
    },
    strict: debug
})
export default store