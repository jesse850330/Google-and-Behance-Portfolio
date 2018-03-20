<template>
  <div class='projects'>
     <div v-for='author4Project in author4Projects'>
        <h1>Total projects contribution - {{author4Project.length}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'danny',
  data() {
    return {
      author4Projects: []
    }
  },

  created() {
    this.$http.jsonp('https://api.behance.net/v2/users/16238999/projects?api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        this.author4Projects.push(response.body.projects)
        console.log(response)
      }).catch(e => {
        console.log(e);
      }
      )
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
