// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import VueUIButton from './components/button/index'
import VueUIProgressSpinner from './components/progressspinner/index'
import VueUIProgressBar from './components/progressbar/index'

Vue.use(VueUIButton)
Vue.use(VueUIProgressBar)
Vue.use(VueUIProgressSpinner)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
});
