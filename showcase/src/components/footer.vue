<template>
  <div id="layout-footer">
    <router-view></router-view>
  <div class="content-section layout-footer">
    <span><a href="http://sudheerjonna.com">SudheerJonna</a>, Copyright &copy; 2017 (Inspired by <a href="https://twitter.com/prime_ng?lang=en">PrimeNG</a>)</span>
    <div class="footer-links">
      <a href="https://github.com/sudheerj/vue-ui"><i class="fa fa-github"></i></a>
      <a href="https://twitter.com/sudheerjonna?lang=en"><i class="fa fa-twitter"></i></a>
    </div>
   </div>
</div>
</template>

<script>

  export default {
    name: 'footer-layout'
  };
</script>
