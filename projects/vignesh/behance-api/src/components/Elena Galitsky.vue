<template>
  <div class='projects'>
    <div v-for='author3Project in author3Projects'>
        <h1>Total projects contribution - {{author3Project.length}}</h1>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'elena',
  data() {
    return {
      author3Projects: []
    }
  },

  created() {
     this.$http.jsonp('https://api.behance.net/v2/users/126487/projects?api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
         this.autho3Projects.push(response.body.projects)
        console.log(response)
      }).catch(e => {
        console.log(e);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects {
  width: 10%;
  height: 100vh;
}
</style>
