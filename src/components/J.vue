<template>
  <div class='jesse'>
    <div class="j">
    <div class='project-details'>
      <div>
        <img src="https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2Flogo.png?1521623335856">
      </div>
      <div>
        <div class='name'>
        <h1>Jesse Shiao</h1>
        </div>
        <div class='project-title'>
          <h1>Google API & Data Viz</h1>
        </div>
        <h1>Project detail</h1>
        <p>Main purpose of this single page site is to show the users(tourist) places such as restaurant, clubs, & adventure places nearby. My app uses google API & user would be able to navigate to their destination. My app has the capacity to show the users distance to travel.</p>
         <button class='jesseHome'>
          <a href='https://github.com/jesse850330/Google-Api' target='_blank' >VIEW THE PROJECT</a>
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'j',
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
  margin-top: 1.5em;
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
  margin-bottom: 15vh;
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
  margin: 20.5vh 4vw 0 0;
  padding-right: 6vw;
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
@media screen and (max-width:1400px) {

.project-details p {
  width: 50vw;
  font-family: 'Georgia', serif;
  text-align: left;
  font-size: 1.25em;
  line-height: 1.8;
  letter-spacing: 0.11em;
  margin-top:2.5em;
}

.project-details h1 {
  width: 50vw;
  height: 1em;
  text-align: left;
  font-size: 2em;
  margin-top: 5vh;
}

.project-details img {
  width: 350px;
  height: auto;
  margin: 24.5vh 4vw 0 0;
  padding-right: 6vw;
}


.project-title h1 {
  margin-top: 2vh;
  font-size: 2.75em;
  text-align: center;
}
.name h1 {
  height: auto;
  margin-top: 1.5vh;
  text-align: left;
  font-size: 2.5em;
}

.jesseHome {
  height: auto;
  width: auto;
  font-size: 1.75em;
  margin-top: 1.5em;
}
}
@media screen and (max-width:1000px) {

.project-details p {
  width: 60vw;
  font-size: 1.2em;
  letter-spacing: 0.11em;
  margin-top:2.5em;
}

.project-details h1 {
  width: 50vw;
  height: 1em;
  text-align: left;
  font-size: 1.75em;
  margin-top: 5vh;
}

.project-details img {
  width: 250px;
  height: auto;
  margin: 24.5vh 1vw 0 0;
  padding-right: 6vw;
}


.project-title h1 {
  margin-top: 2vh;
  font-size: 2.5em;
  text-align: center;
}
.name h1 {
  height: auto;
  margin-top: 1.5vh;
  text-align: left;
  font-size: 2.25em;
}

.jesseHome {
  height: auto;
  width: auto;
  font-size: 1.5em;
  margin-top: 1.5em;
}
}
@media screen and (max-width:700px) {
.project-details {
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content:center;
}
.project-details p {
  width: 80vw;
  font-size: 1.2em;
  letter-spacing: 0.11em;
  margin-top:2em;
}

.project-details h1 {
  width: 50vw;
  height: 1em;
  font-size: 1.75em;
  margin-top: 4vh;
}

.project-details img {
  width: 150px;
  height: auto;
  margin: 1.5vh 1vw 0 0;
}


.project-title h1 {
  width:100%;
  margin-top: 1.5vh;
  font-size: 2.5em;
}
.name h1 {
  width: 80vw;
  height: auto;
  margin-top: 1.25vh;
  text-align: center;
  font-size: 2.25em;
}


}
</style>
