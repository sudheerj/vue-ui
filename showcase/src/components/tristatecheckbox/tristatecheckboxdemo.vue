<template>
  <div id="app">
    <div class="content-section introduction" id="component">
      <div>
        <span class="feature-title">TriStateCheckbox</span>
        <span>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</span>
      </div>
    </div>
    <layout>
      <div id="wrapper">
        <h2>Features</h2>

        <h3>1. Basic</h3>
        <p>Three states of element can be displayed in an icon format.</p>
        <h3>Boolean - {{checked}}</h3>
        <vueui-tristatecheckbox v-model="checked" binary="true"></vueui-tristatecheckbox>

      </div>
    </layout>
  </div>
</template>
<style lang="scss" src="../../../../src/assets/themes/omega/theme.scss"></style>
<style lang="css" src="../../../../node_modules/font-awesome/css/font-awesome.min.css"></style>
<script>
  import Layout from "../layout";
  export default {
    name: 'tristatecheckboxdemo',
    components: {Layout},
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


