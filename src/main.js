// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/normalize.css'
import './assets/css/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='                    // 线上代理地址
global.LOCAL_API_PROXY = 'http://10.10.10.156/proxy.php?apiProxy='    // 本地代理地址，注意更改为你的主机ip
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
