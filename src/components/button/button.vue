<template>
  <button
    :class="styleClass"
    :disabled="disabled"
    :label = "label"
    name="button"
    @click="handleClick"
  >
    <slot></slot>
    <span class=""></span>
  </button>
</template>

<script>
  export default {
    name: 'VueButton',
    data() {
        return {
          cornerStyleClass: 'ui-corner-all'
        }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: 'Button'
      },
      icon: {
        type: String,
        default: null
      },
      iconPos: {
        type: String,
        default: 'left'
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('click', e)
      }
    },
    computed: {
      styleClass: function () {
        let styleClass = 'ui-button ui-widget ui-state-default ' + this.cornerStyleClass;
        if (this.icon) {
          if (this.label != null && this.label !== undefined) {
            if (this.iconPos === 'left') {
              styleClass = styleClass + ' ui-button-text-icon-left';
            }
            else {
              styleClass = styleClass + ' ui-button-text-icon-right';
            }
          }
          else {
            styleClass = styleClass + ' ui-button-icon-only';
          }
        }
        else {
          styleClass = styleClass + ' ui-button-text-only';
        }

        return styleClass;
      }
    }
  }
</script>
<link rel="stylesheet" type="text/css" href="button.css">
<link rel="stylesheet" type="text/css" href="../../assets/vueui.css">
<link rel="stylesheet" type="text/css" href="../../assets/themes/omega/theme.css">
