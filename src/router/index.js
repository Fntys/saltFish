import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import more from '@/components/more/more'
import user from '@/components/user/user'
import login from '@/view/user/login'
import regist from '@/view/user/regist'
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
      path: '/user/:id',
      name: 'user',
      component: user,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'login',
          component: login
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'regist',
          component: regist
        }
      ]
    }
  ]
})

