<template>
  <!-- <div class="home" v-scroll="scrollHigh"> -->
  <div ref='home' class="home">
    <div class="wrap-banner">
      <vue-particles color="#000000" :particleOpacity="0.7" linesColor="#ffffff" :particlesNumber="80" shapeType="circle" :particleSize="5" :linesWidth="2" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
      </vue-particles>
    </div>
    <div class='welcome-msg'>
      <p>Welcome to portfolio portal</p>
      <h1>Designers created these projects using their skillset of API & DataViz</h1>
    </div>
    <nav v-bind:class="{ active : (scrollPosition >= 700)}">
      <img v-scroll-to="'.home'" class='logo-landingpage' src="https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2FW%20JOV%20logo.png?1520054601329"></img>
      <ul>
        <li v-bind:class="{ jactive : (scrollPosition >= position*1 && scrollPosition <= position * 2) && jactivenav}" class='jessenav' v-scroll-to="'.jesse'">Jesse</li>
        <li v-bind:class="{ oactive : (scrollPosition >= position * 2 && scrollPosition <= position *3) && oactivenav}" class='olivernav' v-scroll-to="'.oliver'">Oliver</li>
        <li v-bind:class="{ vactive : (scrollPosition >= position *3) && vactivenav}" class='vigneshnav' v-scroll-to="'.vignesh'">Vignesh</li>
      </ul>
    </nav>
    <div>
      <parallax class='para' :fixed='true'>
      <img  src="https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2Fsaturn-with-rings-in-space-zoom-into-beautiful-planet-on-black-background-with-stars-and-sun-in-distance_ekv0blbxe__F0000.png?1519896515509"></img>
    </parallax>
    </div>
    <J></J>
    <O></O>
    <V></V>
  </div>
</template>

<script>
import Parallax from './Parallax'
import J from './J'
import O from './O'
import V from './V'
export default {
  name: 'home',
  props: {
    speedFactor: {
      default: 0.1,
      type: Number
    }
  },
  components: {
    J,
    O,
    V,
    Parallax
  },
  methods: {
    scrollHigh: function() {
      this.scrollPosition = window.scrollY
      this.position = window.innerHeight
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHigh)
  },
  data() {
    return {
      scrollPosition: null,
      jactivenav: true,
      oactivenav: true,
      vactivenav: true,
      position: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav li:hover,
nav li.router-link-active,
.logo-landingpage,
nav li.router-link-exact-active {
  cursor: pointer;
}

h1,
h2 {
  font-weight: normal;
}
.navcolor{
  color:white;
}
.para{
  width:100%;
  position: absolute;
  left: 0;
  z-index: -999;
}
.home {
  width: 100%;
}

.jactive {
  color: #00D9FF;
}

.oactive {
  color: #000000;
}

.vactive {
  color: rgba(213, 166, 217, 0.5);
}

.jessenav {
  border-right: 0.1em solid #D6932E;
  padding-right: 1.5em;
}

.olivernav {
  border-right: 0.1em solid #D6932E;
  padding-right: 1.6em;
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

nav {
  position: fixed;
  width: 100%;
  padding: 0.4em 0 0.4em 0;
  height: 100px;
  text-align: right;
  margin: 0 auto;
  top: 0;
  right: 0;
}

.active {
  background-color: rgba(52, 52, 52, 1);
  transition: background-color 0.8s ease;
}

.logo-landingpage {
  width: auto;
  height: 90px;
  position: absolute;
  /* top: 2em; */
  left: 2em;
}

.welcome-msg {
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  height: auto;
  position: absolute;
  top: 32vh;
  right: 20vw;
  color: #D6932E;
}

.welcome-msg p {
  font-family: georgia;
  font-size: 1.5em;
}

.welcome-msg h1 {
  font-family: 'Bree Serif', serif;
  font-size: 2.5em;
  line-height: 1.6;
}

.wrap-banner {
  height: 98.5vh;
  width: 100%;
}


.particles-js {
  background-color: rgba(52, 57, 63, 1);
  background-size: "300px 100px";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#toolbar {
  position: sticky;
  top: 10px;
}



ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
