<template>
  <div id="app">
    <div class="content-section introduction" id="component">
      <div>
        <span class="feature-title">Checkbox</span>
        <span>Checkbox is an extension to standard checkbox element with skinning capabilities..</span>
      </div>
    </div>
    <layout>
      <div id="wrapper">
        <h2>Features</h2>

        <h3>1. Binary</h3>

        <h3>Boolean - {{checked}}</h3>
        <p>A single boolean value can be bound using the ngModel property as well by enabling the binary option.</p>
        <vueui-checkbox v-model="checked" binary="true"></vueui-checkbox>

      </div>
    </layout>
  </div>
</template>
<script>

  import Layout from "../layout";

  export default {
    name: 'checkboxdemo',
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


