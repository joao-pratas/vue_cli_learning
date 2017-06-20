// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

new Vue({
	el: '#navBar',
	router,
	components: { Navigation }
})

var menu = document.getElementById('menu');
var toggler = document.getElementById('toggleMenu');
toggler.onclick = function(){
  menu.classList.toggle('opaToggle');
};