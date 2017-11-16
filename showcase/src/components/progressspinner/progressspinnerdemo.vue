<template>
  <div id="app">
    <div class="content-section introduction" id="component">
      <div>
        <span class="feature-title">ProgressSpinner</span>
        <span>ProgressSpinnerDemo is a process status indicator.</span>
      </div>
    </div>
    <layout>
      <div id="wrapper">
        <h2>Features</h2>
        <h3>1. Basic</h3>
        <p>Progress of loading is displayed using basic spinner element</p>
        <vueui-progressSpinner></vueui-progressSpinner>
        <h3>2. Custom</h3>
        <p>The customized spinner with different colors with different percentages</p>
        <vueui-progressSpinner style="{width: '50px', height: '50px'}" strokeWidth="8" fill="#EEEEEE"
                               animationDuration=".5s"></vueui-progressSpinner>
      </div>
    </layout>
  </div>
</template>
<style lang="scss" src="../../../../src/assets/themes/omega/theme.scss"></style>
<style lang="css" src="../../../../node_modules/font-awesome/css/font-awesome.min.css"></style>
<script>
  import Layout from "../layout";
  export default {
    name: 'progressspinnerdemo',
    components: {Layout},
    data: function () {
      return {
        value: 100
      }

    },
    methods: {
      back: function () {
        this.$router.go(-1);
      }
    }
  };
</script>
<style>
  #wrapper {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   /* text-align: center;*/
    margin-left: 330px;
    color: #2c3e50;
    margin-top: 40px;
  }
</style>

