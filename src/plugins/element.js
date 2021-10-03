import Vue from 'vue'
import { Button, Form, FormItem, Input ,Message} from 'element-ui'
  //导入message 与别的组件不同，就是需要挂载到vue的原型上面
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message

