import Vue from 'vue'
import Router from 'vue-router'
import Films from './views/Films.vue'
import Serials from './views/Serials.vue'
import Favorites from './views/Favorites.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'films',
      component: Films
    },
    {
      path: '/serials',
      name: 'serials',
      component: Serials
    }
  ]
})
