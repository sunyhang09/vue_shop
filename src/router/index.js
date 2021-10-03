import Vue from 'vue'
import VueRouter from 'vue-router'
const login  = ()=> import('../components/Login.vue')
const home = ()=> import('../components/Home.vue')


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/home',
    component:home
  }
   
]
const router = new VueRouter({
  routes
})

//路由导航守卫控制访问权限
//如果用户没有登录，但是直接通过url访问特定的页面，需要新导航到登录页面
router.beforeEach((to,from,next)=>{
  //如果用户访问的登录页，直接放行
  if(to.path === '/login') return next()
  //从sessionstorage中获取保存的token的值
  const tokenStr = window.sessionStorage.getItem('token')
  //没有token的话，就强行跳转到登录页面
  if(!tokenStr) return next('/login')  //现在是自己设置的一个token，没有安全性。正确做法是从服务器来获取
  next()
})

export default router
