import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import 'normalize.css'
import moment from 'moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$moment = moment
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
