import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import more from '@/components/more/more'
import user from '@/components/user/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/more',
      name: 'more',
      component: more
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})

