<template>
  <!-- <div class="home" v-scroll="scrollHigh"> -->
  <div class="home">
    <div class="designers-section">
      <div class="designers">
        <div v-for="(designer,index) in designers">
          <img v-bind:src='designer.profile'>
          <hr>
          <h2>{{designer.name}}</h2>
          <p>{{designer.country}}</p>
          <p>{{designer.fields}}</p>
          <p>views - {{designer.views}} | likes - {{designer.likes}}</p>
          <button @click="designer.username">View Projects</button>
        </div>
      </div>
    </div>

    <hr>
    <div class="projects-section">
      <h1>Projects</h1>
      <div class="projects">
        <div v-for="(project,index) in projects">
        
            <img v-bind:src='project.profile.covers[404]'>
      
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'tillyhome',
  data() {
    return {
      designers: [],
      projects: [],
      chosenUser: 'avvart'
    }
  },
  methods: {
    courtneybrendle: function assignuser(user) {
      var chosenUser = user
      console.log(user)
    }
  },
  mounted(){

  },

  created() {
    this.$http.jsonp('https://www.behance.net/v2/users/faatiliop1b86b/following?api_key=t82uKk0jQldcSbWiHLpWvNXW6FDfOdFW')
      .then(response => {
        console.log(response)
        for (var i = 0; i < 4; i++) {
          this.designers.push({
            profile: response.body.following[i].images[276],
            fields: response.body.following[i].fields[1],
            name: response.body.following[i].display_name,
            country: response.body.following[i].location,
            likes: response.body.following[i].stats.appreciations,
            views: response.body.following[i].stats.views,
            username: response.body.following[i].username
          })
        }
      });

    this.$http.jsonp('https://www.behance.net/v2/users/' + this.chosenUser + '/projects?api_key=t82uKk0jQldcSbWiHLpWvNXW6FDfOdFW')
      .then(response => {
        console.log(response)
        for (var i = 0; i < 8; i++) {
          this.projects.push({
            profile: response.body.projects[i],
          })
        }
      });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.designers-section {
  width: 100%;
  margin-top: 60px;
  margin-bottom: 80px;
}

.designers {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.designers img {
  border-radius: 200px;
  height: 300px;
  width: auto;
  padding: 20px;
}

.projects-section {
  width: 100%;
  margin-top: 60px;
  margin-bottom: 40px;
}

.projects {
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  margin: auto;
}

.projects img {
  height: 250px;
  width: auto;
  padding: 20px;
}


hr {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 2px;
  border-color: purple;
}

h1 {
  font-size: 45px;
}
</style>
