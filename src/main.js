import Vue from 'vue'
import App from './App.vue'
import router from './router'

// start bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// end boostrap

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
