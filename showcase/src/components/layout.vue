<template>
  <div class="layout-wrapper">
    <div slot="header">
      <header-layout></header-layout>
    </div>
    <div slot="sider">
      <sidebar-layout></sidebar-layout>
    </div>
    <div slot="content">
      <slot></slot>
    </div>
    <div>
      <footer-layout></footer-layout>
    </div>
  </div>
</template>
<style lang="css" src="../assets/css/showcase.css"></style>
<script>
  import HeaderLayout from './header.vue'
  import FooterLayout from './footer.vue'
  import SidebarLayout from './sidebar.vue'

  export default {
    components: {
      HeaderLayout,
      SidebarLayout,
      FooterLayout
    },
    name: 'Layout'

  }
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

  #component {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    margin-left: 300px;
    color: #ffffff;
    margin-top: 70px;
  }
</style>
