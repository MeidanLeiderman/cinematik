<template>
  <div class="chart">
    <h5>Daily Average: {{average}}</h5>
    <canvas
      class="canvas"
      id="my-chart"
      width="400"
      height="300"
      ref="ctx"
    ></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    moviesData: {
      type: Array,
      required: true
    }
  },
  computed: {
    labels() {
      return this.moviesData.map((entry) => {
        const dateObj = new Date(entry.date)
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            let month = dateObj.getMonth()
            let day = dateObj.getDate()
            return `${months[month]} ${day}`
      });
    },
    counts() {
      return this.moviesData.map((day) => day.count);
    },
    average(){
      let sum = this.moviesData.reduce((acc, day) =>{
        acc+=day.count
        return acc
      }, 0)
      let average = sum/this.moviesData.length
      return parseFloat(average.toFixed(1))
    }
  },
  methods: {
    createChart() {
      let chart = new Chart(this.$refs.ctx, {
        type: "line",
        data: {
          labels: this.labels,
          datasets: [
            {
              label: "Movies per day",
              data: this.counts,
              borderColor: "#FF0E39",
              pointRadius: 5,
              fill: false,
              spanGaps: false,
            },
          ],
        },

        options: {
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "# of Movies",
                  fontSize: 16,
                },
                ticks: {
                  fontSize: 16,
                  beginAtZero: true,
                  autoSkip: true,
                  padding: 6
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Dates",
                  fontSize: 16,
                },
                ticks: {
                  // autoSkip: true
                  // sampleSize: 10
                }
              }
            ]
          },
          layout: {
          },
          title: {
            display: true,
            text: "Movies released in the last 90 days",
            position: "bottom",
            fontColor: "white",
            fontSize: 20,
          },
        },
      });
      console.log(chart);
      // this.$refs.ctx = chart
    },
  },
  mounted() {
    this.createChart();
  },
};
</script>