<template>
  <div id="app">
    <vueui-button  type="button"  label="Click"></vueui-button>

    <vueui-button  type="button"  icon="fa-check" label="Click"></vueui-button>

    <vueui-button  type="button"  icon="fa-check" iconPos="right" label="Click"></vueui-button>

    <vueui-button  type="button" icon="fa-close"></vueui-button>

    <vueui-button  type="button"  icon="fa-check" :disabled="true" label="Disabled"></vueui-button>

    <h3>Severity Buttons</h3>

    <vueui-button  type="button" label="Primary"></vueui-button>

    <vueui-button  type="button" label="Secondary" class="ui-button-secondary"></vueui-button>

    <vueui-button  type="button" label="Success" class="ui-button-success"></vueui-button>

    <vueui-button  type="button" label="Info"  class="ui-button-info"></vueui-button>

    <vueui-button  type="button" label="Warning"  class="ui-button-warning"></vueui-button>

    <vueui-button  type="button" label="Danger"  class="ui-button-danger"></vueui-button>

    <h3>Progress Spinner</h3>
    <vueui-progressSpinner></vueui-progressSpinner>
    <h3>Custom</h3>
    <vueui-progressSpinner style="{width: '50px', height: '50px'}" strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"></vueui-progressSpinner>

    <h3>Progress Bar</h3>
    <h3>Dynamic</h3>
    <vueui-progressBar :value="value"></vueui-progressBar>
    <h3>Static</h3>
    <vueui-progressBar :value="50"></vueui-progressBar>

    <h3>Indeterminate</h3>
    <vueui-progressBar mode="indeterminate" :style="{'height': '6px'}"></vueui-progressBar>

  </div>
</template>

<style lang="scss" src="./assets/themes/omega/theme.scss"></style>
<style lang="css" src="../node_modules/font-awesome/css/font-awesome.min.css"></style>

<script>

  export default {
      name: 'app',
      data: function(){
          return {
              value: 100
          }

      },
      methods: {
        clickMe: function (event) {
            if(event) {
                alert(event.target.innerText)
            }

        }
      }
  };
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

