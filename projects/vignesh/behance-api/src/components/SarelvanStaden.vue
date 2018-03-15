<template>
  <div class='sarelProjects'>
    <div v-for='author1Project in author1Projects'>
      <h1>Total projects contribution - {{author1Project.length}}</h1>
    </div>
    <h1>Most viewed Projects</h1>
    <div :key="item.name" class='project' v-for='item in mostViewed'>
      <img style='margin:0 auto;margin-bottom:2em;' v-bind:src='item.covers[404]'>
    </div>
    <VueHighcharts class='vuechart' :options="options" ref="lineCharts"></VueHighcharts>
  </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'

export default {
  name: 'sarel',
  data() {
    return {
      author1Projects: [],
      options: {
        title: {
          text: 'Likes & Comments of most viewed projects',
          x: -20 //center
        },
        subtitle: {
          text: 'Source: Behance API',
          x: -20
        },
        xAxis: {
          categories: ['Title1', 'Title2', 'Title3', 'Title4', 'Title5', 'Title6'
          ]
        },
        yAxis: {
          min: 1000,
          max: 10000,
          title: {
            text: 'Number'
          },
          plotLines: [{
            value: 100,
            width: 1,
            color: '#808080'
          }]
        },
        tooltip: {
          valueSuffix: '°C'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        series: [
          {
            name: 'Likes',
            data: [7000, 8000, 9000, 1400, 1820, 2195]
          },
          {
            name: 'Comments',
            data: [30, 490, 587, 85, 119, 152]
          }
        ]
      }
    }
  },
  methods: {
    load() {
      let lineCharts = this.$refs.lineCharts;
      lineCharts.delegateMethod('showLoading', 'Loading...');
      setTimeout(() => {
        lineCharts.addSeries(asyncData);
        lineCharts.hideLoading();
      }, 2000)
    }
  },
  components: {
    VueHighcharts
  },
  created() {

    this.$http.jsonp('https://api.behance.net/v2/users/5501311/projects?api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        // this.coverImage.push(response.body.projects[1].covers[404])
        this.author1Projects.push(response.body.projects)
        console.log(response)
        // console.log( this.coverImage)
      }).catch(e => {
        console.log(e);
      }
      )
    this.$emit('sendCoverimage', (this.author1Projects))
  },

  computed: {
    mostViewed: function() {
      return this.author1Projects[0].filter(function(item) {
        return item.stats.views >= 4000;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sarelProjects {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.project {
  margin-left: 10%;
}

.project img {
  width: 30%;
  float: left;
  padding: 1em;
}
.vuechart{
  width:70%;
  /*margin:0 auto;*/
}
</style>
