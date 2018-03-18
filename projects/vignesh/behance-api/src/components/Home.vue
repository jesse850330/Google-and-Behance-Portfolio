<template>
  <!-- <div class="home" v-scroll="scrollHigh"> -->
  <div class="home">
    <div class='welcome-page'>
      <nav>
        <ul>
          <li class='aboutnav' v-scroll-to="'.about p'">About</li>
          <li v-scroll-to="'.designers'">Designers</li>
        </ul>
      </nav>
      <div class='welcome-page-details'>
        <img class='logo-landingpage' src="https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2Fnodejs-interactive-logo-center.png?1521338872084"></img>
        <h1>Showcasing our designer's work</h1>
        <button v-scroll-to="'.designers'">View our designers</button>
        <div class='welcome-img1' v-for="item in landingImageProjects">
          <div v-if='image1'>
            <img style='margin:0 auto;margin-bottom:2em;' v-bind:src='landingimage[2]'>
          </div>
          <div v-if='image2'>
            <img style='margin:0 auto;margin-bottom:2em;' v-bind:src='landingimage[3]'>
          </div>
        </div>
      </div>
    </div>
    <div class='about'>
      <h1>About</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class='designers-section'>
      <h1 class='designers-heading'>Our designers</h1>
      <div class='designers'>
        <div v-for="(designer,index) in designers" :class="{highlight:designer.name == selected}" id='profileimg' @click="selected = designer.name">
          <img v-bind:src='designer.profile'>
          <p>{{designer.field}}</p>
          <p>{{designer.stats.followers}}</p>
          <p>{{designer.stats.views}}</p>
          <p>{{designer.stats.appreciations}}</p>
          <h2>{{designer.name}}</h2>
          
          <div :class="{arrowdown:designer.name == selected}"></div>
        </div>
      </div>
    
    </div>
  <NathanChambers v-if='author2Stats'/>
      <SarelVanStaden v-if='author1Stats'/>
      <ElenaGalitsky v-if='author3Stats'/>
      <DannyCarlsen v-if='author4Stats'/>
  </div>
  <!--API=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c-->
</template>

<script>
import Parallax from './Parallax'
import SarelVanStaden from './SarelvanStaden'
import NathanChambers from './Nathan Chambers'
import ElenaGalitsky from './Elena Galitsky'
import DannyCarlsen from './Danny Carlsen'
export default {
  name: 'vigneshhome',
  data() {
    return {
      designers: [],
      sarelVanProjects: [],
      fields: [],
      clicked: false,
      scrollPosition: null,
      position: null,
      projectSize: Number,
      landingimage: [],
      random: Number,
      names: [],
      selected: '',
      profilehover: false,
      image1: true,
      image2: false,
      author1Stats: false,
      author2Stats: false,
      author3Stats: false,
      author4Stats: false
    }
  },
  components: {
    SarelVanStaden,
    DannyCarlsen,
    ElenaGalitsky,
    NathanChambers,
    Parallax
  },

  methods: {
    addCoverimage: function(data) {
      this.sarelVanProjects = data
      // console.log(this.image)

    },
    toggle: function(clicked) {
      clicked = !clicked

    },
    scrollHigh: function() {
      this.scrollPosition = window.scrollY
      this.position = window.innerHeight

    },

    mouseOver: function() {
      this.profilehover = !this.profilehover

    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHigh)
  },
  updated() {

    if (this.selected === 'NathanChambers') {
      this.author2Stats = true
      this.author1Stats = false
      this.author3Stats = false
      this.author4Stats = false
    }
    if (this.selected === 'Sarelvan Staden') {
      this.author1Stats = true
      this.author2Stats = false
      this.author3Stats = false
      this.author4Stats = false
    }
    if (this.selected === 'DannyCarlsen') {
      this.author1Stats = false
      this.author2Stats = false
      this.author3Stats = true
      this.author4Stats = false
    }
    if (this.selected === 'ElenaGalitsky') {
      this.author1Stats = false
      this.author2Stats = false
      this.author3Stats = false
      this.author4Stats = true
    }

  },
  created() {
    function withTimeout(msecs, promise) {
      const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('timeout'));
        }, msecs);
      });
      return Promise.race([timeout, promise]);
    }
    var self = this
    setInterval(function() {
      self.image1 = !self.image1
    }, 4000)
    setInterval(function() {
      self.image2 = !self.image2
    }, 4000)
    withTimeout(1000, this.$http.jsonp('https://api.behance.net/v2/users?q=Sarel van Staden&api_key=07mrxT7XsAsYl56ltnyvxtv3ZBVlN6rO'))
      .then(response => {
        this.designers.push({ profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name), stats: response.body.users[0].stats })
        // console.log(this.designers)
      }).catch(e => {
        console.log(e);
      }
      )
    withTimeout(1000, this.$http.jsonp('https://api.behance.net/v2/users/5501311/projects?api_key=07mrxT7XsAsYl56ltnyvxtv3ZBVlN6rO'))
      .then(response => {
        this.sarelVanProjects.push((response.body.projects))
        this.projectSize = (response.body.projects).length
      }).catch(e => {
        console.log(e);
      }
      )
    withTimeout(2000, this.$http.jsonp('https://api.behance.net/v2/users?q=Nathan Chambers&api_key=JYT3SLhZ4tgf2qJkRjkweXseBxh025ZO'))
      .then(response => {
        this.designers.push({ profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name), stats: response.body.users[0].stats })
        // console.log(this.designers)
      }).catch(e => {
        console.log(e);
      }
      )
    withTimeout(3000, this.$http.jsonp('https://api.behance.net/v2/users?q=Elena Galitsky&api_key=ERxjVnISOzDju1jbpE8G1G53GZbfN3sF'))
      .then(response => {
        this.designers.push({ profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name), stats: response.body.users[0].stats })
        // console.log(this.designers)
      }).catch(e => {
        console.log(e);
      }
      )
    withTimeout(4000, this.$http.jsonp('https://api.behance.net/v2/users?q=Danny Carlsen&api_key=Zp2mg75r7GRjJTNuApsLtgPP32ocfhpS'))
      .then(response => {
        this.designers.push({ profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name), stats: response.body.users[0].stats })
        // console.log(this.designers)
      }).catch(e => {
        console.log(e);
      }
      )
  },
  computed: {
    landingImageProjects: function() {
      this.landingimage = []
      this.random = Math.floor((Math.random() * (this.projectSize - 2)) + 1);
      for (var i = this.random; i <= (this.random + 3); i++) {
        this.landingimage.push(this.sarelVanProjects[0][i].covers[404])
      }
      return this.landingimage
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  height: 100%;
}

nav li:hover,
nav li.router-link-active,
.logo-landingpage,
nav li.router-link-exact-active {
  cursor: pointer;
}

.navcolor {
  color: white;
}

nav ul li {
  display: flex;
  height: auto;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2vh;
  font-size: 1.75em;
  color: white;
  line-height: 50px;
  display: inline;
  margin-right: 3vw;
  font-family: 'Bree Serif', serif;
}

.aboutnav {
  border-right: 0.1em solid green;
  padding-right: 1.5em;
}

nav {
  position: absolute;
  width: 60%;
  padding: 0.4em 0 0.4em 0;
  height: 100px;
  text-align: right;
  margin: 0 auto;
  top: 0;
  right: 0;
}

.logo-landingpage {
  width: auto;
  height: 90px;
}

.welcome-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  transition: background-color 0.4s ease-in;
  align-items: left;
}


.welcome-page-details {
  width: 100%;
  height: 30%;
  text-align: center;
  margin-top: -2.5em;
  z-index: 1111;
}

.about {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  margin-top: 6vh;
}
.about h1{
  font-family: 'Bree Serif', serif;
  font-size: 3em;
}
.about p {
  width: 90%;
  height: auto;
  letter-spacing: 0.05em;
  line-height: 1.6em;
  font-family: 'Merriweather', serif;
  margin: 0 auto;
  font-size: 24px;
  color: #003D3D;
  margin-top: 1.6em;
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
  right: 7.5em;
}

.welcome-page-details h1 {
  font-size: 3em;
  color: white;
  font-family: 'Bree Serif', serif;
}

.welcome-page-details button {
  font-size: 2em;
  height: 25%;
  color: black;
  background-color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  z-index: 1111;
}

.welcome-img1 {
  width: 30%;
  height: 30%;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 55vh;
  animation: bounce 4s;
}

.welcome-img1 img {
  width: 30%;
  height: 310px;
}

.designers-section {
  width: 100%;
  height: auto;
  padding-top: 1em;
  margin-top: 4em;
}
.designers-section h1{
  font-family: 'Bree Serif', serif;
  font-size: 3em;
}
.designers {
  width: 100%;
  height: 38vh;
  display: flex;
  justify-content: center;
}

.designers img {
  width: 70%;
  height: 70%;
  margin-top: 1.6em;
}

@keyframes bounce {
  0% {
    transform: scale(0.96);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
