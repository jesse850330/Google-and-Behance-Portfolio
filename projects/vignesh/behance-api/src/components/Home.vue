<template>
  <div class="home">
    <div class='welcome-page'>
      <nav>
        <ul>
          <li class='aboutnav' v-scroll-to="'.about'">What we do</li>
          <li v-scroll-to="'.designers'">Designers</li>
        </ul>
      </nav>
      <div class='welcome-page-details'>
        <img class='logo-landingpage' src="https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2Flogo1.png?1521509947416"></img>
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
      <h1>What we do</h1>
      <transition name="fade">
      <div v-for="number in [currentNumber]">
        <img   :src='images[Math.abs(currentNumber) % images.length]'/>
      </div>
      </transition>
      <p>
        <a @click="prev">Previous</a> |
        <a @click="next">Next</a>
      </p>
    </div>
    <div class='designers-section'>
          <h1 class='designers-heading'>Our designers</h1>
          <div class='designers'>
            <div v-for="(designer,index) in designers" class='designer' :class="{highlight:designer.name == selected}" @click="selected = designer.name">
              <img v-bind:src='designer.profile'>
              <h3>{{designer.name}}</h3>
              <p>{{designer.field}}</p>
              <div class='overall-stat'>
                <span class="glyphicon glyphicon-eye-open">
                  <p>{{designer.stats.views}}</p>
                </span>
                <span class="glyphicon glyphicon-user">
                  <p>{{designer.stats.followers}}</p>
                </span>
                <span class="	glyphicon glyphicon-thumbs-up">
                  <p>{{designer.stats.appreciations}}</p>
                </span>
              </div>
              <div :class="{arrowdown:designer.name == selected}"></div>
            </div>
          </div>

        </div>
    <NathanChambers v-if='author2Stats' />
    <SarelVanStaden v-if='author1Stats' />
    <ElenaGalitsky v-if='author3Stats' />
    <DannyCarlsen v-if='author4Stats' />

    <!-- <div class='footer'>

              <div class='behance-profile'>
                <div>
                  <h3>Behance profile</h3>
                </div>
                <div class='behance-profile--links'>
                  <a :href='designers[1].url' target='_blank'>
                    <p>Sarel VanStaden</p>
                  </a>
                  <a :href='designers[3].url' target='_blank'>
                    <p>Nathan Chambers</p>
                  </a>
                  <a :href='designers[0].url' target='_blank'>
                    <p>Elena Galitsky</p>
                  </a>
                  <a :href='designers[2].url' target='_blank'>
                    <p>Danny Carlsen</p>
                  </a>
                </div>

              </div>
              <div class="address">
                <div>
                  <h3>Contact</h3>
                </div>
                <div class="mail">
                  <div>
                    <i class="glyphicon glyphicon-folder-open"></i>
                    <p>20,Wallstreet,Ohama</p>
                  </div>
                  <div>
                    <i class="phone glyphicon glyphicon-phone-alt"></i>
                    <p>0800-237-237</p>
                  </div>
                </div>
              </div>
            </div> -->
  </div>
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
      author4Stats: false,
      images: [
       'https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2F140416164143-saudi-freedom-tower-cloud-view-super-169.jpg?1510504849378',
        'https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2Fsaturn-with-rings-in-space-zoom-into-beautiful-planet-on-black-background-with-stars-and-sun-in-distance_ekv0blbxe__F0000.png?1519896515509',
        'https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2F140416164143-saudi-freedom-tower-cloud-view-super-169.jpg?1510504849378'],
      currentNumber: 0,
      slide:true
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

    },
    next: function() {
      this.currentNumber += 1
      this.slide = true
    },
    prev: function() {
      this.currentNumber -= 1
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
        this.designers.push({ url: response.body.users[0].url, profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name), stats: response.body.users[0].stats })
        console.log(response)
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
        this.designers.push({ url: response.body.users[0].url, profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name), stats: response.body.users[0].stats })
        // console.log(this.designers)
      }).catch(e => {
        console.log(e);
      }
      )
    withTimeout(3000, this.$http.jsonp('https://api.behance.net/v2/users?q=Elena Galitsky&api_key=ERxjVnISOzDju1jbpE8G1G53GZbfN3sF'))
      .then(response => {
        this.designers.push({ url: response.body.users[0].url, profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name), stats: response.body.users[0].stats })
        // console.log(this.designers)
      }).catch(e => {
        console.log(e);
      }
      )
    withTimeout(4000, this.$http.jsonp('https://api.behance.net/v2/users?q=Danny Carlsen&api_key=Zp2mg75r7GRjJTNuApsLtgPP32ocfhpS'))
      .then(response => {
        this.designers.push({ url: response.body.users[0].url, profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name), stats: response.body.users[0].stats })
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
button {
  box-sizing: content-box;
  border: none;
}

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
  padding-right: 2.5em;
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
  width: 8vw;
  height: 6vw;
  margin-bottom: -1em;
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
  margin-top: -5.5em;
  z-index: 1111;
}


.about {
  width: 80%;
  height: 80%;
  margin: 0 auto;
  margin-top: 4vh;
  padding-bottom: 2.25em;
  /*border-bottom:0.1em solid black;*/
}

.about h1 {
  font-family: 'Bree Serif', serif;
  font-size: 3em;
}

.about img {
  width: 40vw;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.overall-stat {
  background-color: rgba(255, 242, 207, 0.4);
}

.overall-stat span {
  padding: 0.2em 0 1em 0;
}

.overall-stat p {
  display: inline;
  margin-left: 0.5em;
  font-size: 1.2em;
  margin-top: -2em;
}

.highlight {
  /* border: 10px solid maroon; */
  position: relative;
  height: 55%;
  outline: 10px solid #42b983;
  outline-offset: 20px;
  padding-bottom: 15px;
}

.arrowdown {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #42b983;
  position: absolute;
  bottom: -3.5em;
  right: 7.5em;
}

.welcome-page-details h1 {
  font-size: 3em;
  color: white;
  font-family: 'Bree Serif', serif;
}

.welcome-page-details button {
  font-size: 2em;
  height: 20%;
  border-radius: 8;
  color: white;
  background-color: rgba(120, 80, 0, 0.7);
  font-family: Georgia, 'Times New Roman', Times, serif;
  z-index: 1111;
  text-decoration: none;
  padding: 14px;
}

.welcome-page-details button:hover {
  background: rgba(120, 80, 0, 1);
  text-decoration: none;
  color: black;
  transition: 0.5s;
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
  margin: 0 auto;
  margin-bottom: 7em;
}

.designers-section h1 {
  font-family: 'Bree Serif', serif;
  font-size: 3em;
  padding-bottom: 1em;
}

.designers {
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-around;
  margin-left: 10%;
}

.designer {
  background-color: rgba(255, 242, 207, 0.4);
}

.designers img {
  width: 100%;
  height: 80%;
  margin: -.2em 1em 1em 0em;
}

.designers h3 {
  width: 100%;
  text-align: center;
  margin-top: -0.5em;
  padding: 0.5em;
  font-family: 'Bree Serif', serif;
  font-weight: bolder;
}

.designers p {
  width: 100%;
  text-align: center;
  margin-top: -1.5em;
  padding: 0.5em;
  font-family: 'Bree Serif', serif;
  font-weight: normal;
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

.footer {
  width: 100%;
  display: flex;
  height: 12vh;
  margin-top: 2em;
  background-color: #000000;
  color: white;
}

.footer a {
  color: white;
}

.address {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0em 0 0 15em;
}

.address h3 {
  text-align: left;
  padding-bottom: 0.5em;
}

.mail {
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  height: 3em;
  font-size: 1.25em;
  color: white;
}

.mail p {
  display: inline;
  color: white;
  padding-left: 0.75em;
  font-family: 'Exo';
  font-size: 0.75em;
}

.behance-profile {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  text-align: left;
  padding: 0em 0 0 15em;
}

.behance-profile a {
  width: 50%;
}

.behance-profile h3 {
  text-align: left;
  padding-bottom: 0.5em;
}

.behance-profile--links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: auto;
}

.behance-profile p {
  font-size: 1em;
}

@media screen and (max-width:1400px) {


  .designers-section h1 {
    font-family: 'Bree Serif', serif;
    font-size: 2.75em;
    padding-bottom: 1em;
  }

  .designer {
    width: 18vw;
  }
  .overall-stat {
    margin-top: -1em;
  }

  .highlight {
    outline: 8px solid #42b983;
    outline-offset: 10px;
    padding-bottom: 15px;
  }
  .arrowdown {
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #42b983;
    bottom: -2.5em;
    right: 7.5em;
  }

  .overall-stat p {
    font-size: 1em;
  }
}
</style>
