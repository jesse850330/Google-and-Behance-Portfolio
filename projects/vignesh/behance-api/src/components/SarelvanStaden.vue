<template>
  <div class='sarelProjects'>
    <div class='contri' v-for='author1Project in author1Projects'>
      <h1>Projects - Total contribution - {{projectSize}}</h1>
    </div>
    <div class='projects'>
      <div class='project' v-for='item in previewdProjects'>
        <img class='project-img'v-bind:src='item.covers[404]'>
        <h4>{{item.name}}</h4>
        <div class='overall-stat'>
          <span class="glyphicon glyphicon-eye-open">
            <p>{{item.stats.views}}</p>
          </span>
          <span class="glyphicon glyphicon-user">
            <p>{{item.stats.appreciations}}</p>
          </span>
          <span class="	glyphicon glyphicon-thumbs-up">
            <p></p>{{item.stats.comments}}</p>
          </span>
        </div>
        <a :href='item.url' target='_blank'>
          <button>View Gallery</button>
        </a>
      </div>
    </div>

    <div v-if='modal' class='project-modal'>
      <h1>Projects</h1>
      <button v-on:click='all'>All</button>
      <button v-on:click='viewedMost'>Most viewed</button>
      <div class='all-projects'>
        <div class='all-project' v-for='author1Project in author1Projects[0]'>
          <img v-bind:src='author1Project.covers[404]'></img>
          <h2>{{author1Project.name}}</h2>
          <p>{{author1Project.stats.views}}</p>
          <p>{{author1Project.stats.appreciations}}</p>
          <p>{{author1Project.stats.comments}}</p>
          <a :href='author1Project.url' target='_blank'>
            <button>View Gallery</button>
          </a>
        </div>
      </div>

    </div>
    <div>
    <button class='all-projects-button' v-on:click='showModal()'>VIEW ALL PROJECTS</button>
    </div>
    <VueHighcharts class='vuechart' :options="options" ref="lineCharts"></VueHighcharts>
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
      previewProjects: [],
      preview: [],
      random: Number,
      projectSize: Number,
      modal: false,
      source: 0,
      selected: '',
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
          categories: ['Lexus RC 350 F-Sport fine art photography', 'Maserati GranCabrio fine art ', 'Martini Porsche fine art photography', 'Ford Model T & A fine art photography', '1954 Corvette fine art photography', 'Mustang fine art photography']
        },
        yAxis: {
          min: 1000,
          max: 35000,
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
          valueSuffix: ''
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        series: [
          {
            name: 'Views',
            data: [4341, 4654, 6157, 5217, 32114, 4052]
          },
          {
            name: 'Likes',
            data: [330, 361, 598, 580, 2211, 416]
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
          this.author1Projects = []
          this.author1Projects.push((response.body.projects).filter(function(item) {
            return item.stats.views >= source;
          }))
          this.previewProjects.push((response.body.projects))
          this.projectSize = (response.body.projects).length
        }).catch(e => {
          console.log(e);
        }
        )
    }
  },
  computed: {
    previewdProjects: function() {
      this.preview = []
      this.random = Math.floor((Math.random() * (this.projectSize - 6)) + 1);
      for (var i = this.random; i <= (this.random + 5); i++) {
        this.preview.push(this.previewProjects[0][i])
      }
      return this.preview
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
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top:4em;
  border:0.1em solid maroon;
}
.contri h1{
   width: 100%;
  text-align: center;
  margin-top: 1em;
  padding:0.5em;
  font-family: 'Bree Serif', serif;
}
.projects {
  width: 80%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.project{
   width: 25%;
  height: 60%;
  float: left;
  margin-left:6%;
  border:0.1em solid green;
  margin-bottom:2em;
  box-shadow: 1px 3px grey;
}
.projects h4{
  width: 100%;
  text-align: center;
  margin-top: 1em;
  padding:0.5em;
  font-family: 'Bree Serif', serif;
}
.projects img {
  width: 100%;
  height: 60%;
  margin-top:-0.2em;
}
.projects button{
  width:60%;
  font-size: 1.5em;
  margin:1em 0 1em 0;
  background-color: #003D3D;
  color:white;
  font-family: 'Merriweather', serif;
}
.overall-stat span {
  padding: 0.2em;
}

.overall-stat p {
  display: inline;
  margin-left: 0.5em;
  font-size: 1.2em;
  width:30%;
}

.vuechart {
  width: 70%;
  margin-bottom: 2em;
  /*margin:0 auto;*/
}

.all-projects-button {
  width: 20vw;
  height: 5vh;
  text-align: center;
  margin:1em 0em;
  background-color: #785000;
  color:white;
  font-family: 'Bree Serif', serif;
  font-size: 1.25em;
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
@media screen and (max-width:1400px){
.project-img {
  width: 40%;
  height: 40%;
  margin-top: 1.6em;
}
}

</style>
