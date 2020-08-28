import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.use(Vuesax)

new Vue({
  router,
  store,
  vuetify,
  Vuex,
  Vuesax,
  render: h => h(App)
}).$mount('#app')
