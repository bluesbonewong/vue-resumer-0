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

import AV from 'leancloud-storage'

let APP_ID = 'iNIcbsMYCcmXztEdL91zshMK-gzGzoHsz'
let APP_KEY = 'ETz7LskzcSKrc8Vga1FYqyED'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App />'
})
