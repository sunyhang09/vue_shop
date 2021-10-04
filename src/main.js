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
//可以在这里来创建一个拦截器
axios.interceptors.request.use(config => {  //满足要求才可以使用接口
  console.log(config)  //在config中有请求头，需要在请求头挂载一个
  config.headers.Authization = window.sessionStorage.getItem('token')
  return config  //返回之前，先进行预处理
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
