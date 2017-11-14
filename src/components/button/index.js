import Vue from 'vue'
import Button from './button.vue'

const VueUIButton = {
  install(Vue, options) {
    Vue.component('vueui-button', Button)
  }
}

export default VueUIButton
