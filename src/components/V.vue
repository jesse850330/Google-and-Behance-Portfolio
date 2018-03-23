<template>
  <div class='vignesh'>
    <div class="v">
    <div class='project-details'>
      <div>
        <img src="https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2Fxzbit1.png?1521832523123">
      </div>
      <div>
        <div class='name'>
        <h1>Vignesh Murugan</h1>
        </div>
        <div class='project-title'>
          <h1>Behance API & Data Viz</h1>
        </div>
        <h1>Project detail</h1>
        <p>Main purpose of this single page site is to showcase our designers projects. I've done Ux design processes to make website pleasing to eye and for great user experience. I've used Vue framework and Data viz to showcase overall statistics of designer's projects such as likes, comments, & appreciations.</p>
        <button class='vigneshHome'>
          <router-link v-bind:to="'/vigneshHome'">VIEW THE PROJECT</router-link>
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v',
  components: {
  },
  data() {
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

.vigneshHome {
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
  margin-top: 1.5em;
}

a {
  text-decoration: none;
}

* {
  color: black;
}

.vignesh {
  height: 80vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  margin-top: 10vh;
  margin-bottom: 15vh;
}

.v {
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
  justify-content:space-around;
  margin: 3vh 0 0 10vw;
}

.project-details p {
  width: 50vw;
  font-family: 'Georgia', serif;
  text-align: left;
  font-size: 1.5em;
  line-height: 1.8;
  letter-spacing: 0.11em;
  margin-top:2.5em;
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
  width: 500px;
  height: auto;
  margin: 30.5vh 4vw 0 0;
  padding-right: 6vw;
}

.project-title img {
  width: 10vw;
  height: 10vh;
  margin-top: -2vh;
}

.name h1 {
  height: auto;
  margin-top: 1.5vh;
  text-align: left;
  font-size: 2.75em;
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
