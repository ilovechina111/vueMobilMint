import Vue from 'vue'
import App from './App.vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

Vue.config.productionTip = false

// 引入UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 1.3 导入自己的 router.js 路由模块
import router from './router'

new Vue({
  render: h => h(App),
  router // 1.4 挂载路由对象到 VM 实例上
}).$mount('#app')
