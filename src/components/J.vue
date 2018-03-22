<template>
  <div  class='jesse'>
    <div class="j">
      <div   class='name'>
        <h1>Jesse Jesse</h1>
      </div>

    </div>
      <div class='project-details'>
      <div class='logo'>
        <img src="https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2Flogo.png?1521623335856">
      </div>
      <div>
        <div class='project-title'>
          <h1>Google API & Data Viz</h1>
        </div>
        <h1>Project detail</h1>
        <p>Main purpose of this single page site is to showcase our designers projects. I've done Ux design processes to make website pleasing to eye and for great user experience. I've used Vue framework and Data viz to showcase overall statistics of designer's projects such as likes, comments, & appreciations.</p>
        <button class='jesseHome'>
          <router-link v-bind:to="'/jesseHome'">VIEW THE PROJECT</router-link>
        </button>
      </div>

    </div>
  
  </div>
</template>

<script>
export default {
  name: 'j',
  components: {
  },
 
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1,
h2 {
  font-weight: bold;
  line-height: 1.6;
}
.jesseHome {
 height: auto;
  width: auto;
  background-color: black;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2em;
  padding: 0.8em;
  margin-top: 1em;
  }
  a {
  text-decoration: none;
}

* {
  color: black;
}
.jesse {
 height: 80vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  margin-top: 10vh;
}

.j {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-top: 4vh;
}
.project-details {
  width: 80vw;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 3vh;
}

.project-details p {
  width: 50vw;
  font-family: 'Merriweather', serif;
  text-align: left;
  font-size: 1.5em;
  line-height: 1.4;
}

.project-details h1 {
  width: 50vw;
  height: 1em;
  font-family: 'Bree Serif', serif;
  text-align: left;
  font-size: 2em;
  margin-top: 5vh;
}

.project-details img {
  width: 30vw;
  height: auto;
  margin-top: 4vh;
  padding-right: 4vw;
}

.project-title img {
  width: 10vw;
  height: 10vh;
  margin-top: -2vh;
}

.name h1 {
  height: auto;
  margin-top: 2vh;
  text-align: center;
  font-size: 2.5em;
}

.name h1::first-letter {
  font-size: 200%;
}




.project-title h1 {
  margin-top: 2vh;
  font-size: 3em;
  text-align: center;
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
