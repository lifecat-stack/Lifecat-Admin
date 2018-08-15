import Vue from 'vue'

// A modern alternative to CSS resets
import 'normalize.css/normalize.css'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

// global css
import '@/styles/index.scss'

// app
import App from './App'
import router from './router'
import store from './store'

// icon
import '@/icons'

// permission
import '@/permission'

// simulation data
import './mock'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
