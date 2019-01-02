// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import websocket from 'vue-simple-websocket'

Vue.config.productionTip = false
Vue.prototype.$websocket = websocket
Vue.use(websocket, 'ws://localhost:3000', {
  reconnectEnabled: true,
  reconnectInterval: 5000 // time to reconnect in milliseconds
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
