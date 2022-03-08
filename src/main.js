/*!

=========================================================
* Vue Light Bootstrap Dashboard - v1.4.0
=========================================================

* Product Page: http://www.creative-tim.com/product/vue-light-bootstrap-dashboard-pro
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import LightBootstrap from './light-bootstrap-main'
// Plugins
import App from './App.vue'

// router setup
import routes from './routes/routes'
import store from './store';

// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)

const app = Vue(App);
app.use(store);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
