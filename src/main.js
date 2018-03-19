// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css/normalize.css'
import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-okaidia.css'
import './assets/tables.scss'

import Vue from 'vue'
import App from './App'
import VigneshHome from '../projects/vignesh/behance-api/src/components/Home'
import VueRouter from 'vue-router'
import VModal from 'vue-js-modal'
import VueResource from 'vue-resource'
import VueScrollTo from 'vue-scrollto'
import VueScroll from 'v-scroll'
import VueParticles from './vue-particles'
// import VueHighcharts from './vue-highcharts'
import Home from './components/Home'
import tillyHome from '../projects/tilly/behance-api/Home'
import Parallax from './components/Parallax.vue'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueParticles)
Vue.use(VueScroll)
Vue.use(Parallax)
Vue.use(VModal)
// Vue.use(VueHighcharts)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1800,
  easing: 'ease',
  offset: -75,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home},
  // { path: '/vigneshHome', component: vigneshHome},
  { path: '/oliverHome', component: tillyHome},
  { path: '/vigneshHome', component: VigneshHome}
]
  

  
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    return { x: 0, y: 0 }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
