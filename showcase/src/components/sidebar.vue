<template>
<div id="layout-sidebar" >
  <div class="layout-menu">
    <router-link to="/components/button">Button</router-link>
    <router-link to="/components/progressspinner">ProgressSpinner</router-link>
    <router-link to="/components/progressbar">ProgressBar</router-link>
    <router-link to="/components/checkbox">Checkbox</router-link>
    <router-link to="/components/tristatecheckbox">TriStateCheckbox</router-link>
    <router-link to="/components/charts">Charts</router-link>
    <router-link to="/components/rating">Rating</router-link>
  </div>
  <router-view></router-view>
</div>
</template>

<script>

  export default {
    name: 'sidebar'
  };
</script>

