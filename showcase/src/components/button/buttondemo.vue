<template>
  <div id="app">
    <vueui-button  type="button"  label="Click" @click="clickMe"></vueui-button>

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
  </div>
</template>
<style lang="scss" src="../../../../src/assets/themes/omega/theme.scss"></style>
<style lang="css" src="../../../../node_modules/font-awesome/css/font-awesome.min.css"></style>
<script>

  export default {
    name: 'buttondemo',
    data: function(){
      return {
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

