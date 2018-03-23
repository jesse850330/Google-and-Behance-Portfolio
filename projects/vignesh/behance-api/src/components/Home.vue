<template>
  <div class="home">
    <!-- Welcome page -->
    <div class='welcome-page'>
      <nav>
        <ul>
          <li class='aboutnav' v-scroll-to="'.about'">What we do</li>
          <li v-scroll-to="'.designers-section'">Our Designers</li>
        </ul>
      </nav>
      <div class='welcome-page-details'>
        <img class='logo-landingpage' src="https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2Flogo1.png?1521759999161"></img>
        <h1>Showcasing our designer's work</h1>
        <button v-scroll-to="'.designers-section'">View our designers</button>
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
      <div class='about-details'>
    <!-- Applying tansition group on about slider -->
        <transition-group name="fade">
          <div class='about-slider' v-for="number in [currentNumber]" v-bind:key="number">
            <img :src='images[Math.abs(currentNumber) % images.length]' />
          </div>
        </transition-group>
        <transition-group name="slide">
          <div class='about-detail' v-for="number in [currentNumber]" v-bind:key="number">
            <div class='about-detail--content' :class='{aboutdetailcontenth1: position<1000}' v-html="contentAbout[Math.abs(currentNumber) % images.length]">
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <p class='prevnext'>
      <a @click="prev" class="previous">&#8249;</a>
      <a @click="next" class="next">&#8250;</a>
    </p>
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
    <transition name="modal">
      <NathanChambers v-if='author2Stats' />
      <SarelVanStaden v-if='author1Stats' />
      <ElenaGalitsky v-if='author3Stats' />
      <DannyCarlsen v-if='author4Stats' />
    </transition>
  </div>
  </div>
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
      selected: 'Sarelvan Staden',
      profilehover: false,
      image1: true,
      image2: false,
      author1Stats: false,
      author2Stats: false,
      author3Stats: false,
      author4Stats: false,
      images: [
        'https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2Fpoly2.jpg?1521681110909',
        'https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2Fpoly.jpg?1521679504208',
        'https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2Fpoly1.jpg?1521680471470'],
      currentNumber: 0,
      slide: true,
      contentAbout: [
        `<h1 style='text-align:left;line-height:1.75em;margin-top:-0.5em;font-size:2em;font-weight:bold;  font-family: 'Bree Serif', serif'>Websites Design </h1>
        <p style='text-align:left;line-height:1.75em;letter-spacing:0.1em;font-size:1em;  font-family: Georgia, 'Times New Roman', Times, serif;font-weight:lighter;'>Top search engine rankings for hundreds of clients.We're dedicated to create optimized user experience & to enable fast website development and easy content maintenance.</p>
        <p style='text-align:left;line-height:1.75em;letter-spacing:0.1em;font-size:1em; margin-top:1.2em; font-family: Georgia, 'Times New Roman', Times, serif;font-weight:lighter;'>Ux design and content management system</p>
        <button style='width: 60%;border-radius: 8;font-size: 1.5em;margin: 1em 0 1em 0;background-color: white;color: black;border: 2px solid #4CAF50;padding: 8px;font-family: 'Merriweather', serif;'>View Project</button>`,

        `<h1 style='text-align:left;line-height:1.75em;margin-top:-0.5em;font-size:2em;font-weight:bold;  font-family: 'Bree Serif', serif'>Photography</h1>
        <p style='text-align:left;line-height:1.75em;letter-spacing:0.1em;font-size:1em;  font-family: Georgia, 'Times New Roman', Times, serif;font-weight:lighter;'>Our employess has been winning awards for as many years. Like most photographers, our photographers do commercial photography and more specifically automotive photography.</p>
        <p style='text-align:left;line-height:1.75em;letter-spacing:0.1em;font-size:1em;margin-top:1.2em;  font-family: Georgia, 'Times New Roman', Times, serif;font-weight:lighter;'> For commercial shoot. Skill for creative lighting techniques</p>
        <button style='width: 60%;border-radius: 8;font-size: 1.5em;margin: 1em 0 1em 0;background-color: white;color: black;border: 2px solid #4CAF50;padding: 8px;font-family: 'Merriweather', serif;'>View Project</button>`,

        `<h1 style='text-align:left;line-height:1.75em;margin-top:-0.5em;font-size:2em;font-weight:bold;  font-family: 'Bree Serif', serif'>Graphic design</h1>
        <p style='text-align:left;line-height:1.75em;letter-spacing:0.1em;font-size:1em;  font-family: Georgia, 'Times New Roman', Times, serif;font-weight:lighter;'>Nathan Chambers, one of our creative director of 485 Design. His work has won  and interior design. He has been featured in many books & magazines</p>
        <p style='text-align:left;line-height:1.75em;letter-spacing:0.1em;font-size:1em; margin-top:1.2em; font-family: Georgia, 'Times New Roman', Times, serif;font-weight:lighter;'>He has been featured in many books & magazines</p>
        <button style='width: 60%;border-radius: 8;font-size: 1.5em;margin: 1em 0 1em 0;background-color: white;color: black;border: 2px solid #4CAF50;padding: 8px;font-family: 'Merriweather', serif;'>View Project</button>`
      ]
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

    },
    toggle: function(clicked) {
      clicked = !clicked

    },
    scrollHigh: function() {
      this.scrollPosition = window.scrollY

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
    window.addEventListener('mouseover', this.scrollHigh)
  },
  updated() {
    this.position = window.innerWidth

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
    /*Time out for requesting API*/
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
a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}

a:hover {
  color: green;
  cursor: pointer;
}

.previous {
  color: black;
  font-size: 3em;
}

.next {
  color: black;
  font-size: 3em;
}



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

.about {
  width: 80%;
  height: 80%;
  margin: 0 auto;
  margin-top: 4vh;
  padding-bottom: 2.25em;
  display: flex;
  flex-direction: column;
}

.about h1 {
  font-family: 'Bree Serif', serif;
  font-size: 3em;
  margin-bottom: 2em;
}

.about-details {
  width: 80vw;
  height: 40vh;
  display: flex;
  justify-content: center;
}


.about-slider {
  width: 40vw;
  height: 30vw;
}

.prevnext {
  margin: -10em 0 8em 0;
}

.about-slider img {
  width: 40vw;
  height: 30vw;
  display: inline-block;
  margin-top:-2.5em;
}

.about-detail {
  width: 40vw;
  height: 40vh;
}

.about-detail--content {
  margin-left: 5em;
  text-align: left;
}

.aboutdetailcontenth1 {
width:70%;
height:70%;
font-size:0.8em;
}

.fade-enter-active {
  transition: all 0.8s ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave {
  opacity: 0;
  position: absolute;
  z-index: 0;
}

.slide-enter-active {
  transition: all 0.9s ease;
  overflow: hidden;
}

.slide-enter,
.slide-leave {
  transform: translate(0, 40%);
  position: absolute;
  z-index: 0;
}

.overall-stat {
  background-color: rgba(255, 242, 207, 0.3);
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



.designers-section {
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin: 3em 0 4em 0;
  cursor: pointer;
}

.designers-section h1 {
  font-family: 'Bree Serif', serif;
  font-size: 3em;
  padding-bottom: 3em;
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

@media screen and (max-width:1400px) {

  nav ul li {
    font-size: 1.5em;
    margin-right: 3vw;
  }
  .logo-landingpage {
    width: 7vw;
    height: 6vw;
    margin-bottom: -1em;
  }
  .welcome-page-details h1 {
    font-size: 2.75em;
  }
  .welcome-page-details button {
    font-size: 1.75em;
    height: 18%;
    padding: 12px;
  }
  .welcome-img1 {
    width: 27%;
    height: 27%;
    top: 59vh;
  }
  .welcome-img1 img {
    width: 27%;
    height: 280px;
  }
  .about {
    height: 70%;
  }
  .designers-section h1 {
    font-family: 'Bree Serif', serif;
    font-size: 2.75em;
    padding-bottom: 1em;
  }

  .designer {
    width: 16vw;
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
    right: 6.5em;
  }



  .overall-stat span {
    padding: -1em 0 1em 0;
  }

  .overall-stat p {
    margin-left: 0.25em;
    font-size: 0.7em;
    margin-top: -1em;
  }
}

@media screen and (max-width:1000px) {
  nav ul li {
    font-size: 1.25em;
    margin-right: 3vw;
  }
  .logo-landingpage {
    width: 6vw;
    height: 5vw;
    margin-bottom: -1em;
  }
  .welcome-page{
    height:80%;
  }
  .welcome-page-details h1 {
    font-size: 2.5em;
  }
  .welcome-page-details button {
    font-size: 1.5em;
    height: 16%;
    padding: 10px;
  }
  .welcome-img1 {
    width: 20%;
    height: 20%;
    top: 55vh;
  }
  .welcome-img1 img {
    width: 50%;
    height: 50%;
  }
   .about {
    height: 70%;
  }
  .about h1 {
  font-size: 2.75em;
  margin-bottom: 2em;
}
  .about-slider img {
  width: 40vw;
  height: 40vw;
}
 .designers-section h1 {
    font-size: 2.75em;
    padding-bottom: 1em;
  }

  .designer {
    width: 18vw;
    height:20vh;
  }

.designers h3 {
  font-size: 1em;
  margin-top: -0.75em;
  padding: 0.5em;
  font-family: 'Bree Serif', serif;
  font-weight: bolder;
}

.designers p {
  margin-top: -1.5em;
  padding: 0.25em;
  font-size: 0.75em;
}
 .highlight {
    height:40%;
  }
   .arrowdown {
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #42b983;
    bottom: -2em;
    right: 5.5em;
  }

  .glyphicon{
    font-size: 0.7em;
  }
  .overall-stat{
    margin-top: -1.2em;
    padding:0.2em;
  }
    .overall-stat span {
    padding: -1em 0 1em 0;
  }

  .overall-stat p {
    margin-left: 0.25em;
    font-size: 0.9em;
    margin-top: -1em;
  }
}
@media screen and (max-width:600px) {
  nav ul li {
    font-size: 1em;
    margin-right: 3vw;
  }
   .logo-landingpage {
    width: 8vw;
    height: 5vw;
    margin-bottom: -1em;
  }
  .welcome-page{
    height:55%;
  }
  .welcome-page-details h1 {
    font-size: 2em;
  }
  .welcome-page-details button {
    font-size: 1.25em;
    height: 16%;
    padding: 10px;
  }
  .welcome-img1 {
    width: 20%;
    height: 20%;
    top: 45vh;
  }
  .welcome-img1 img {
    width: 50%;
    height: 50%;
  }
    .about {
    height: 70%;
  }
    .about-details {
    flex-direction: column;
  }
  .about h1 {
  font-size: 2.5em;
  margin-bottom: 4em;
}
  .about-slider img {
    margin-top:4em;
  width: 80vw;
  height: 60vw;
}
 .about-detail {

   margin-top:16em;
  width: 80vw;
  height: 40vh;
}
.prevnext {
  margin: -2em 0 8em 0;
}
.fade-enter-active {
  transition: all 0.3s ease;
  overflow: hidden;
}


.slide-enter-active {
  transition: all 0.6s ease;
  overflow: hidden;
}

.slide-enter,
.slide-leave {
  transform: translate(0, 20%);
  position: absolute;
  z-index: 0;
}

.designers-section h1 {
  font-size: 2em;
  padding-bottom: 1em;
  margin-top:-3em;
}

.designers {
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
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
}
</style>
