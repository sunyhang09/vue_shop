import Vue from 'vue'
import { Button, Form, FormItem, Input ,Message,Container,Header,Aside,Main,Menu,MenuItem,Submenu,MenuItemGroup} from 'element-ui'
  //导入message 与别的组件不同，就是需要挂载到vue的原型上面
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.prototype.$message = Message

