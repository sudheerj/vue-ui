<template>
  <div id="app">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">ToggleButton</span>
          <span>ToggleButton is used to select a boolean value using a button.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>1. Basic</h3>

        <p>The ToggleButton is used to toggle between two states.</p>
        <vueui-toggleButton v-model="checked1" :style="{'width':'150px'}" name="basic"></vueui-toggleButton>

        <h3>2. Customization</h3>

        <p>The icons and labels of ToggleButton are customized using onLabel, offLabel, onIcon and offIcon attributes.</p>
        <vueui-toggleButton v-model="checked2" name="custom" onLabel="I confirm" offLabel="I reject" onIcon="fa-check-square" offIcon="fa-square" :style="{'width':'150px'}"></vueui-toggleButton>

        <h3>3. Events</h3>
        <p>The ToggleButton component supports change event</p>

        <vueui-toggleButton v-model="checked1" name="events" @change="toggle($event)"></vueui-toggleButton>

        <h3>4. Disabled</h3>
        <p>The component disabled using disabled attribute</p>

        <vueui-toggleButton  :disabled="true" name="disabled" label="Disabled"></vueui-toggleButton>

      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";
  let checked1 = false;
  let checked2 = true;
  export default {
    name: 'togglebuttondemo',
    components: {Layout},
    data: function () {
      return {checked1, checked2}

    },
    methods: {
      toggle: function (value) {
        console.log(value);
      }
    }
  };
</script>

