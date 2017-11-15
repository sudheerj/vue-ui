<template>
  <div id="app">

    <vueui-button @click="back" label="Back" style="left:0px"></vueui-button>
    <div id="wrapper">
      <h2>Features</h2>

      <h3>1. Basic</h3>

      <h3>Boolean - {{checked}}</h3>
      <vueui-tristatecheckbox v-model="checked" binary="true"></vueui-tristatecheckbox>

    </div>
  </div>
</template>
<style lang="scss" src="../../../../src/assets/themes/omega/theme.scss"></style>
<style lang="css" src="../../../../node_modules/font-awesome/css/font-awesome.min.css"></style>
<script>

  export default {
    name: 'tristatecheckboxdemo',
    data: function () {
      return {
          checked: false
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

