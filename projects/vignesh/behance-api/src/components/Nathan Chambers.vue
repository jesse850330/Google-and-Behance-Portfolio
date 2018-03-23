<template v-scroll-to="'.contri'">
  <div class='nathanProjects'>
    <div class='contri' v-for='author2Project in author2Projects'>
      <h1>Projects</h1>
      <h3>Total contribution - {{projectSize}}</h3>
    </div>
    <div class='projects'>
      <div class='project' v-for='item in previewdProjects'>
        <img class='project-img' v-bind:src='item.covers[404]'>
        <h4>{{item.name}}</h4>
        <div class='overall-stat'>
          <span class="glyphicon glyphicon-eye-open">
            <p>{{item.stats.views}}</p>
          </span>
          <span class="glyphicon glyphicon-user">
            <p>{{item.stats.appreciations}}</p>
          </span>
          <span class="	glyphicon glyphicon-thumbs-up">
            <p>{{item.stats.comments}}</p>
          </span>
        </div>
        <a :href='item.url' target='_blank'>
          <button>View Project</button>
        </a>
      </div>
    </div>
    <transition name="modal">
      <div v-if='modal' class='project-modal'>
        <div>
          <h1>Projects</h1>
        </div>
        <div class='project-filter--buttons'>
          <p :class="{highlight:showallProject}" v-on:click='all'>All</p>
          <p :class="{highlight:showfilteredProject}" v-on:click='viewedMost'>Popular</p>
        </div>
        <div class='all-projects'>
          <div class='all-project' v-for='author2Project in author2Projects[0]'>
            <img v-bind:src='author2Project.covers[404]'></img>
            <h4>{{author2Project.name}}</h4>
            <div class='over-stat'>
                <span class="glyphicon glyphicon-eye-open"><p>{{author2Project.stats.views}}</p></span>
                
                <span class="glyphicon glyphicon-user"><p>{{author2Project.stats.appreciations}}</p></span>
                
                <span class="	glyphicon glyphicon-thumbs-up">  <p>{{author2Project.stats.comments}}</p></span>
               
            </div>
            <a :href='author2Project.url' target='_blank'>
              <button>View Project</button>
            </a>
          </div>
        </div>
      </div>
    </transition>
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
  name: 'nathan',
  data() {
    return {
      author2Projects: [],
      previewProjects: [],
      showallProject: true,
      showfilteredProject: false,
      preview: [],
      categories: [],
      random: Number,
      projectSize: Number,
      modal: false,
      source: 0,
      selected: '',
      options: {
        title: {
          text: 'Likes & Views of most viewed projects',
          x: -20 //center
        },
        subtitle: {
          text: 'Source: Behance API',
          x: -20
        },
        xAxis: {
          categories: ['Ogilvy & Mather New Zealand Office', 'Culture ', '92 Beans Coffee', 'World Masters Games Identity', 'Better Burger', 'Blood. Sweat. Cheers.']
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
            data: [9822, 2077,6289, 3033, 4773 ,9678]
          },
          {
            name: 'Likes',
            data: [47, 86,31, 77, 175, 44]
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
      this.showfilteredProject = true
      this.showallProject = false
    },
    all: function() {
      this.source = 0
      this.showallProject = true
      this.showfilteredProject = false
    },

    updateSource: function(source) {
      this.$http.jsonp('https://api.behance.net/v2/users/13491869/projects?api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
        .then(response => {
          this.author2Projects = []
          this.author2Projects.push((response.body.projects).filter(function(item) {
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
        this.categories.push(this.previewProjects[0][i].name)
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
button {
  box-sizing: content-box;
  border: none;
}

.nathanProjects {
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top: 4em;
}

.contri {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em;
}

.contri h1 {
  width: 35%;
  font-size: 2em;
  font-family: 'Bree Serif', serif;
}

.contri h3 {
  width: 42%;
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

.project {
  width: 25%;
  height: 60%;
  float: left;
  margin-left: 6%;
  margin-bottom: 3em;
  box-shadow: 0.1px 0.1px 2px 0px rgba(0, 0, 0, 0.45);
}

.projects h4 {
  width: 100%;
  text-align: center;
  margin-top: 1em;
  padding: 0.5em;
  font-family: 'Bree Serif', serif;
}

.projects img {
  width: 100%;
  height: 60%;
  margin-top: -0.2em;
}

.projects button {
  width: 60%;
  border-radius: 8;
  font-size: 1.5em;
  margin: 1em 0 1em 0;
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
  padding: 8px;
  font-family: 'Merriweather', serif;
}


.projects button:hover {
  background: #000000;
  text-decoration: none;
  color: white;
  border: 2px solid #000000;
  transition: 0.5s;
}

.overall-stat span {
  padding: 0.2em;
}

.overall-stat p {
  display: inline;
  margin-left: 0.5em;
  font-size: 1.2em;
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
  margin: 0em 0em 1em 0;
  background-color: #785000;
  color: white;
  font-family: 'Bree Serif', serif;
  font-size: 1.25em;
}

.all-projects-button:hover {
  background: rgba(120, 80, 0, 1);
  text-decoration: none;
  color: black;
  transition: 0.5s;
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
  transition: all .8s ease;
  font-family: Helvetica, Arial, sans-serif;
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

.project-modal h1 {
  width: 80%;
  text-align: left;
  margin: 1em 1em 1em 5.4em;
  padding: 0.5em;
  font-family: 'Bree Serif', serif;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s
}

.modal-enter,
.modal-leave-to {
  opacity: 0
}

.modal-leave,
.modal-enter-to {
  opacity: 1
}

.all-projects {
  width: 80%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
}

.all-project {
  width: 25%;
  height: 60%;
  float: left;
  margin-left: 6%;
  box-shadow: 0.1px 0.1px 2px 0px rgba(0, 0, 0, 0.45);
  margin-bottom: 3em;
}

.all-project h4 {
  width: 100%;
  text-align: center;
  margin-top: 1em;
  padding: 0.5em;
  font-family: 'Bree Serif', serif;
}


.project-filter--buttons {
  position: absolute;
  top: 3.5em;
  right: 10.5em;
}

.project-filter--buttons p {
  width: 6vw;
  display: inline-block;
}

.project-filter--buttons p:first-child {
  border-right: 0.1em solid black;
}

.all-project img {
  width: 100%;
  height: 60%;
  margin-top: -0.2em;
}

.highlight {
  color: #785000;
  font-weight: bold;
}

.all-project p {
  margin-top: -1em;
  float: left;
  width: 23.3%;
  padding: 0 0 0 4em;
}


.over-stat span{
width:20%;

}
.over-stat p{
display: inline;
margin-left:-0.6em;

}
.all projects .over-stat p {
  display: inline;
  margin-left: 0.5em;
  font-size: 1.2em;
}

.all-project button {
  width: 70%;
  border-radius: 8;
  font-size: 1.5em;
  margin: 1em 0 1em 0;
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
  padding: 8px;
  font-family: 'Merriweather', serif;
}



.all-projects button:hover {
  background: #000000;
  text-decoration: none;
  color: white;
  border: 2px solid #000000;
  transition: 0.5s;
}



@media screen and (max-width:1400px) {
  .project-img {
    width: 40%;
    height: 40%;
    margin-top: 1.6em;
  }
  .contri h1 {
    width: 37%;
    font-size: 2em;
  }

  .contri h3 {
    width: 46%;
  }
  .project-modal {
    width: 70%;
    height: 80%;
    top: 10%;
    left: 15%;
  }

  .project-modal h1 {
    width: 80%;
    text-align: left;
    margin: 1em 1em 1em 4.4em;
    padding: 0.5em;
  }
  .all-project h4 {
    font-size: 1.25em;
  }

  .over-stat span{
width:25%;

}
.over-stat p{
display: inline;
margin-left:-1.6em;

}
}
@media screen and (max-width:1000px) {
 .contri h1 {
    width: 37%;
    font-size: 1.75em;
  }

  .contri h3 {
    width: 47%;
    font-size: 1.25em;
  }
.project {
  width: 28%;
  margin-left: 4%;
}
.projects h4 {
  margin-top: 0.75em;
  font-size:1em;
}

.projects button {
  font-size: 1.25em;
  padding: 6px;
}


.glyphicon{
  font-size: 0.8em;
}
.all-projects-button {
  width: 17vw;
  height: 4.5vh;
  font-size: 1em;
}

  .project-modal h1 {
    margin: 1em 1em 1em 4em;
    font-size: 1.5em;
  }
  .all-project h4 {
    font-size: 1em;
  }
.project-filter--buttons {
  right: 7em;
}
.over-stat{
  margin-left:-1em;
}
  .over-stat span{
width:25%;

}
.over-stat p{
margin-left:-1.6em;

}
.all-project button {
  width: 60%;
  font-size: 1em;
}
}
</style>
