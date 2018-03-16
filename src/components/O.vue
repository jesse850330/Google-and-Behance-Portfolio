<template>
  <div class='oliver'>
    <div class="o">

      <div class='name'>
        <div>
          <h1>Oliver Faatili</h1>
        </div>
      </div>

      <div class='project-details'>
        <div>
          <img src="https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2F6c08b3_e8b0ab79984a4bb1bd4228b21d982790_mv2_d_2072_2072_s_2.png?1520144682471">
        </div>
        <div class="positioning">
          <h1>Behance API & Data Viz</h1>
          <h2>Project detail</h2>
        <p>This page is to display Staff profiles and there latest projects for potential clients to have a look at there work. The display contains their names and fields of design they work in. Their projects hold small descriptions and what fields they are classed as. ie photography & graphic design. </p>
          <iframe class="iframe" src="'/oliverHome'"></iframe>
        </div>
      </div>

    </div>

    <button class='oliverHome'>
      <router-link v-bind:to="'/oliverHome'">View Staff Portfolio's</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: 'o',
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

* {
  color: black;
}

.iframe {
  width: 1000px;
  height: 300px;
  pointer-events: none
}

.oliverHome {
  border-radius: 12px;
  padding: 20px 30px;
  background-color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 15px;
}

.oliver {
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  margin-top: 10vh;
}

.o {
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

.project-details h2 {
  font-family: 'Bree Serif', serif;
  text-align: left;
  font-size: 30px;
}

.project-details img {
  width: 30vw;
  height: auto;
  margin-top: 4vh;
  padding-right: 4vw;
}

.name h1 {
  padding-top: 30px;
  height: auto;
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
  font-family: 'Yrsa', serif;
}


.project-details p {
  width: 50vw;
  font-family: 'Merriweather', serif;
  text-align: left;
  font-size: 1.5em;
  line-height: 1.4;
}






a {
  color: white;
}
</style>
