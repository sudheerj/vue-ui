<template>
  <div ref="chart">
    <canvas :width="width" :height="height" @click="onCanvasClick($event)"></canvas>
  </div>
  </button>
</template>
<script>
  let initialized;

  let _data;

  let chart;

  var Chart=require("../../../node_modules/chart.js/dist/Chart.js");

  export default {
    name: 'vueui-charts',
    data: function() {
        return {
          cornerStyleClass: 'ui-corner-all',
          initialized: false,
          _data: null,
          chart: null
        }
    },
    props: {
      width: {
        type: String,
        default: null
      },
      height: {
        type: String,
        default: null
      },
      type: {
        type: String,
        default: null
      },
      options: {
        type: String,
        default: null
      },
      data: {
        type: Object,
        default: () => {}
      }
    },
    methods: {

      onCanvasClick(event) {
        if(this.chart) {
          let element = this.chart.getElementAtEvent(event);
          let dataset = this.chart.getDatasetAtEvent(event);
          if(element&&element[0]&&dataset) {
            this.onDataSelect.emit({originalEvent: event, element: element[0], dataset: dataset});
          }
        }
      },

      initChart() {
        this.chart = new Chart(this.getCanvas(), {
          type: this.type,
          data: this.data,
          options: this.options
        });
      },

      getCanvas() {
        return this.$refs.chart.children[0];
      },

      getBase64Image() {
        return this.chart.toBase64Image();
      },

      generateLegend() {
        if(this.chart) {
          this.chart.generateLegend();
        }
      },

      refresh() {
        if(this.chart) {
          this.chart.update();
        }
      },

      reinit() {
        if(this.chart) {
          this.chart.destroy();
          this.initChart();
        }
      }
    },
    computed: {
      /*data: {
        // getter
        get: function () {
          return this._data;
        },
        // setter
        set: function (val) {
          this._data = val;
          console.log(this._data)
          this.reinit();
        }
      }*/
    },
    mounted: function () {
      this.initChart();
      this.initialized = true;
    }
  }
</script>
