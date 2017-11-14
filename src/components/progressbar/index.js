import Vue from 'vue'
import ProgressBar from './progressbar.vue'

const VueUIProgressBar = {
  install(Vue, options) {
    Vue.component('vueui-progressBar', ProgressBar)
  }
}

export default VueUIProgressBar
