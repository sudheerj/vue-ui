<template>
  <div id="app">
    <div class="content-section introduction" id="component">
      <div>
        <span class="feature-title">ProgressBar</span>
        <span>ProgressBar is a process status indicator.</span>
      </div>
    </div>
    <layout>
      <div id="wrapper">
        <h2>Features</h2>
        <h3>1. Dynamic</h3>
        The progress bar is displayed with dynamic value
        <vueui-progressBar :value="value"></vueui-progressBar>
        <h3>2. Static</h3>
        The progress bar is displayed with static value
       <vueui-progressBar :value="50"></vueui-progressBar>

        <h3>3. Indeterminate</h3>
        The progress bar displayed without any bound using mode attribute instead of showing value between 0 and 100
        <vueui-progressBar mode="indeterminate" :style="{'height': '6px'}"></vueui-progressBar>
      </div>
    </layout>
  </div>
</template>
<style lang="scss" src="../../../../src/assets/themes/omega/theme.scss"></style>
<style lang="css" src="../../../../node_modules/font-awesome/css/font-awesome.min.css"></style>
<script>
  import Layout from "../layout";
  export default {
    name: 'progressbardemo',
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
    /*text-align: center;*/
    margin-left: 330px;
    color: #2c3e50;
    margin-top: 40px;
  }
</style>

