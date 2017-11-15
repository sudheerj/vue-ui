<template>
  <div id="app">
    <vueui-button @click="back" label="Back" style="left:0px"></vueui-button>
    <div id="wrapper">
      <h2>Features</h2>
      <h3>1. Basic</h3>
      <vueui-progressSpinner></vueui-progressSpinner>
      <h3>2. Custom</h3>
      <vueui-progressSpinner style="{width: '50px', height: '50px'}" strokeWidth="8" fill="#EEEEEE"
                             animationDuration=".5s"></vueui-progressSpinner>
    </div>
  </div>
</template>
<style lang="scss" src="../../../../src/assets/themes/omega/theme.scss"></style>
<style lang="css" src="../../../../node_modules/font-awesome/css/font-awesome.min.css"></style>
<script>

  export default {
    name: 'progressspinnerdemo',
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

