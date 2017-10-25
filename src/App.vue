<template>
  <div id="app">
    <VueButton name="button">Click</VueButton>
  </div>
</template>

<script>
  import VueButton from './components/button/button.vue';

  export default {
      name: 'app',
      components: {
          VueButton
      },
  };
</script>
<link rel="stylesheet" type="text/css" href="assets/vueui.css">
<link rel="stylesheet" type="text/css" href="assets/themes/omega/theme.css">
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
