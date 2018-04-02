import Vue from 'vue'
import VueRouer from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(VueRouer)

export default new VueRouer({
  routes: [
    {path: '/msite', component: Msite},
    {path: '/order', component: Order},
    {path: '/profile', component: Profile},
    {path: '/search', component: Search},
    {path: '/login', component: Login},
    {path: '/', redirect: '/msite'}
  ]
})
