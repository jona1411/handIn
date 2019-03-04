import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from "vee-validate"
import style from '../src/style/variables.scss'

Vue.use(VeeValidate)
Vue.use(style)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

