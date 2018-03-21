<template>
  <div class='oliver'>
    <div class="o">

      <div class='name'>
        <div>
          <h1>Oliver Faatili</h1>
        </div>
      </div>

      <div class='project-details'>
        <div class="positioning">
          <h1>Project detail</h1>
          <h2>Project detail</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
  width: 1400px;
  height: 400px;
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
  width: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}

.project-details h2 {
  font-family: 'Bree Serif', serif;
  text-align: left;
  font-size: 30px;
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
