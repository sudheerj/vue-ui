<template>
  <div class="layout-wrapper">
    <div slot="header">
    <header-layout></header-layout>
    </div>
    <div slot="sider">
    <sidebar-layout></sidebar-layout>
    </div>
    <footer-layout></footer-layout>
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
