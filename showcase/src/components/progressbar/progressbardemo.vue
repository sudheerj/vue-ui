<template>
  <div id="app">
    <h3>Progress Bar</h3>
    <h3>Dynamic</h3>
    <vueui-progressBar :value="value"></vueui-progressBar>
    <h3>Static</h3>
    <vueui-progressBar :value="50"></vueui-progressBar>

    <h3>Indeterminate</h3>
    <vueui-progressBar mode="indeterminate" :style="{'height': '6px'}"></vueui-progressBar>
  </div>
</template>
<style lang="scss" src="../../../../src/assets/themes/omega/theme.scss"></style>
<style lang="css" src="../../../../node_modules/font-awesome/css/font-awesome.min.css"></style>
<script>

  export default {
    name: 'progressbardemo',
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

