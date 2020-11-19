import Vue from 'vue'
import App from './components/App.vue'
import store from "./components/store"

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
