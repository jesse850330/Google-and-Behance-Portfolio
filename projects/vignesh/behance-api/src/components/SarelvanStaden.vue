<template>
  <div class='sarelProjects'>
    <div v-for='author1Project in author1Projects'>
      <h1>Total projects contribution - {{author1Project.length}}</h1>
    </div>
    <h1>Preview</h1>
    <div :key="item.name" class='project' v-for='item in mostAppreciated'>
      <img style='margin:0 auto;margin-bottom:2em;' v-bind:src='item.covers[404]'>
    </div>
    <VueHighcharts class='vuechart' :options="options" ref="lineCharts"></VueHighcharts>
    <button class='all-projects-button' v-on:click='showModal()'>ALL PROJECTS</button>

    <div v-if='modal' class='project-modal'>
      <h1>Projects</h1>
      <button v-on:click='all'>All</button>
      <button v-on:click='viewedMost'>Most viewed</button>
      <div class='all-projects'>
        <div class='all-project' :class="{highlight:author1Project.name == selected}" @click="selected = author1Project.name" v-for='author1Project in author1Projects[0]'>
          <img v-bind:src='author1Project.covers[404]'></img>
          <p>{{author1Project.stats.views}}</p>
          <p>{{author1Project.stats.appreciations}}</p>
          <p>{{author1Project.stats.comments}}</p>
          <div :class="{arrowdown:author1Project.name == selected}"></div>
        </div>
        <div v-for='get in getDetails' class='all-projects-details'>
          <h6>{{filt[0].name}}</h6>
          <a :href='filt[0].url' target='_blank'>
            <button>View Gallery</button>
          </a>
        </div>
      </div>

    </div>
    <div v-if='modal' v-on:click='closeModal()' class='overlay'>
    </div>
  </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'

export default {
  name: 'sarel',
  data() {
    return {
      author1Projects: [],
      mostAppreciatedProjects: [],
      modalProjects: [],
      filt: [],
      modal: false,
      source: 0,
      selected: '',
      selected1: '',
      apd: true,
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
          categories: ['Title1', 'Title2', 'Title3', 'Title4', 'Title5', 'Title6']
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
  components: {
    VueHighcharts
  },
  created() {
    this.updateSource(this.source);

  },
  methods: {
    load() {
      let lineCharts = this.$refs.lineCharts;
      lineCharts.delegateMethod('showLoading', 'Loading...');
      setTimeout(() => {
        lineCharts.addSeries(asyncData);
        lineCharts.hideLoading();
      }, 2000)
    },
    showModal: function() {
      this.modal = true
    },
    closeModal: function() {
      this.modal = false
    },
    viewedMost: function() {
      this.source = 4000
    },
    all: function() {
      this.source = 0
    },

    updateSource: function(source) {
      this.$http.jsonp('https://api.behance.net/v2/users/5501311/projects?api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
        .then(response => {
          // this.allprojects.push(response.body.projects)
          this.author1Projects = []
          this.author1Projects.push((response.body.projects).filter(function(item) {
            return item.stats.views >= source;
          }))
          this.mostAppreciatedProjects.push((response.body.projects).filter(function(item) {
            return item.stats.appreciations >= 350;
          }))
          for (var i = 0; i <= (response.body.projects).length; i++) {
            this.modalProjects.push({name: response.body.projects[i].name, url: response.body.projects[i].url })
          }
          console.log(response)
          // console.log( this.coverImage)
        }).catch(e => {
          console.log(e);
        }
        )
      this.$emit('sendCoverimage', this.author1Projects)
    }
  },
  computed: {
    mostAppreciated: function() {
      return this.author1Projects[0].filter(function(item) {
        return item.stats.appreciations >= 350;
      })

    },
    getDetails: function() {
        // return item.name ==  
        for (var j = 0; j < this.modalProjects.length; j++) {
          if (this.selected === this.modalProjects[j].name) {
            this.filt = []
            return this.filt.push(this.modalProjects[j])
          }
        }
    }

  },
  watch: {
    source: function(val) {
      this.updateSource(val)
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
  position: relative;
}

.project {
  margin-left: 10%;
}

.project img {
  width: 30%;
  float: left;
  padding: 1em;
}

.highlight {
  border: 18px solid maroon;
  position: relative;
}
.arrowdown {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid maroon;
  position: absolute;
  bottom: -2em;
  right: 8.5em;
}
.active {
  font-weight: bold;
}

.showclass {
  display: block;
}

.vuechart {
  width: 70%;
  /*margin:0 auto;*/
}

.all-projects-button {
  width: 30vw;
  height: 5vh;
  text-align: center;
}

.project-modal {
  width: 80%;
  height: 80%;
  overflow-y: scroll;
  position: fixed;
  top: 10%;
  left: 10%;
  z-index: 1;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .8s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.all-projects {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.all-project {
  width: 33%;
  height: auto;
  margin: 0 auto;
  
}
.all-projects-details{
}
.all-project img {
  width: 100%;
  height: auto;
  padding: 2em;
}

.all-project p {
  margin-top: -1em;
  float: left;
  width: 23.3%;
  padding: 0 0 0 4em;
}

.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: rgba(0, 0, 0, .7);
  display: table;
  transition: opacity .3s ease;
}
</style>
