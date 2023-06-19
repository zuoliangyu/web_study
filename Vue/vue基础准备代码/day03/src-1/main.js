import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import globalButton from './components/globalButton.vue'
Vue.component('globalButton',globalButton)
new Vue({
  render: h => h(App),
}).$mount('#app')
