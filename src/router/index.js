import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import More from '@/components/More'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/more',
      name: 'More',
      component: More
    }
  ]
})

