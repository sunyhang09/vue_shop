import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
// 导入全局样式表
//导入axios
//在原型属性添加axios
import axios from 'axios'
//每个组件都可以通过$http来发送网络请求
//在这里可以配置基本配置信息

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
