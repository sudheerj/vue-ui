import Vue from 'vue'
import ProgressSpinner from './progressspinner.vue'

const VueUIProgressSpinner = {
  install(Vue, options) {
    Vue.component('vueui-progressSpinner', ProgressSpinner)
  }
}

export default VueUIProgressSpinner
