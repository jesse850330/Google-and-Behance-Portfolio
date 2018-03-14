<template>
  <div class='sarelProjects'>
    <div v-for='author1Project in author1Projects'>
      <h1>Total projects contribution - {{author1Project.length}}</h1>
    </div>
      <h1>Most viewed Projects</h1>
    <div :key="item.name" class='project' v-for='item in mostViewed'>
          <img style='margin:0 auto;margin-bottom:2em;' v-bind:src='item.covers[404]'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sarel',
  data() {
    return {
      author1Projects: []
    }
  },


  created() {

    this.$http.jsonp('https://api.behance.net/v2/users/5501311/projects?api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        // this.coverImage.push(response.body.projects[1].covers[404])
        this.author1Projects.push(response.body.projects)
        console.log(response)
        // console.log( this.coverImage)
      }).catch(e => {
        console.log(e);
      }
      )
    this.$emit('sendCoverimage', (this.author1Projects))
  },
  
  computed: {
    mostViewed: function() {
      return this.author1Projects[0].filter(function(item) {
        return item.stats.views >= 4000;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sarelProjects {
  width: 100%;
  height: 100%;
  margin:0 auto;
}
.project{
  margin-left: 10%;
}
.project img{
  width:30%;
  float: left;
  padding:1em;
}
</style>
