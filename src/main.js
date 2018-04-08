// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'

// 引入 element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.scss'

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App />'
})

const EventBus = new Vue()

// 添加到全局的 Vue 对象
Object.defineProperties(Vue.prototype, {
  $bus: {
    get() {
      return EventBus
    }
  }
})
