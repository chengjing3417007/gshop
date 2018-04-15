import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'
import Split from './components/Split/Split.vue'
import './filters'
import loading from './common/images/loading.gif'
import VueLazyload from 'vue-lazyload'
import {Button} from 'mint-ui'
Vue.use(VueLazyload, {
  loading
})
Vue.component(Button.name, Button) // 注册完全局组件
Vue.component('Split', Split) // 注册完全局组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
