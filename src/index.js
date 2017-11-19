import Button from './components/button/button.vue'
import ProgressSpinner from './components/progressspinner/progressspinner.vue'
import ProgressBar from './components/progressbar/progressbar.vue'
import Checkbox from './components/checkbox/checkbox.vue'
import TristateCheckbox from './components/tristatecheckbox/tristatecheckbox.vue'
import Chart from './components/charts/charts.vue'
import Rating from './components/rating/rating.vue'
import ToggleButton from './components/togglebutton/togglebutton.vue'

const components = {
  'vueui-button': Button,
  'vueui-progressSpinner': ProgressSpinner,
  'vueui-progressBar': ProgressBar,
  'vueui-checkbox': Checkbox,
  'vueui-tristatecheckbox': TristateCheckbox,
  'vueui-charts': Chart,
  'vueui-rating': Rating,
  'vueui-toggleButton': ToggleButton
}

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach((component) => {
    Vue.component(component, components[component])
  })
}

export default Object.assign({}, components, {install})  // eslint-disable-line no-undef
