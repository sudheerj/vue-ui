<template>
  <div id="app">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">RadioButton</span>
          <span>RadioButton is an extension to standard radio button element with skinning capabilities.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>1. Basic</h3>

        <p>Used to select an option from multiple choices.</p>

        <div class="ui-g" style="width:250px;margin-bottom:10px">
          <div class="ui-g-12"><vueui-radioButton name="group1" value="VueJS" label="VueJS" v-model="val1" inputId="opt1"></vueui-radioButton></div>
          <div class="ui-g-12"><vueui-radioButton name="group1" value="Angular" label="Angular" v-model="val1" inputId="opt2"></vueui-radioButton></div>
          <div class="ui-g-12"><vueui-radioButton name="group1" value="React" label="React" v-model="val1" inputId="opt3"></vueui-radioButton></div>
        </div>
        Selected Value = {{val1||'none'}}

        <h3>2. Preselection</h3>

        <p>The preselection feature allows default selection of any option.</p>

        <div class="ui-g" style="width:250px;margin-bottom:10px">
          <div class="ui-g-12"><vueui-radioButton name="group2" value="VueJS" label="VueJS" v-model="val2" inputId="opt1"></vueui-radioButton></div>
          <div class="ui-g-12"><vueui-radioButton name="group2" value="Angular" label="Angular" v-model="val2" inputId="opt2"></vueui-radioButton></div>
          <div class="ui-g-12"><vueui-radioButton name="group2" value="React" label="React" v-model="val2" inputId="opt3"></vueui-radioButton></div>
        </div>

        Selected Value = {{val2||'none'}}

        <h3>3. Events</h3>
        <p>The radio button component supports click event</p>

        <div class="ui-g" style="width:250px;margin-bottom:10px">
          <div class="ui-g-12"><vueui-radioButton name="group3" value="VueJS" label="VueJS" v-model="val3" inputId="opt1" @click="clickMe"></vueui-radioButton></div>
          <div class="ui-g-12"><vueui-radioButton name="group3" value="Angular" label="Angular" v-model="val3" inputId="opt2" @click="clickMe"></vueui-radioButton></div>
          <div class="ui-g-12"><vueui-radioButton name="group3" value="React" label="React" v-model="val3" inputId="opt3" @click="clickMe"></vueui-radioButton></div>
        </div>
        Selected Value = {{val3||'none'}}

        <h3>4. Disabled</h3>
        <p>The component disabled using disabled attribute</p>

        <div class="ui-g" style="width:250px;margin-bottom:10px">
          <div class="ui-g-12"><vueui-radioButton name="group4" value="VueJS" label="VueJS" v-model="val4" inputId="opt1" :disabled="true"></vueui-radioButton></div>
          <div class="ui-g-12"><vueui-radioButton name="group4" value="Angular" label="Angular" v-model="val4" inputId="opt2" :disabled="true"></vueui-radioButton></div>
          <div class="ui-g-12"><vueui-radioButton name="group4" value="React" label="React" v-model="val4" inputId="opt3" :disabled="true"></vueui-radioButton></div>
        </div>
        Selected Value = {{val4||'none'}}

      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";

  let val1;
  let val2="VueJS";
  let val3="Angular";
  let val4="React";

  export default {
    name: 'buttondemo',
    components: {Layout},
    data: function () {
      return {val1,val2,val3,val4}

    },
    methods: {
      clickMe: function (event) {
        if (event) {
          alert(event.target.value)
        }

      }
    }
  };
</script>

