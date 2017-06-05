import Vue from 'vue'
import Router from 'vue-router'
import More from '@/components/More'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/more',
      name: 'More',
      component: More
    }
  ]
})
