<template>
  <div class='nathenProjects'>
    <div v-for='author2Project in author2Projects'>
      <h1>Total projects contribution - {{author2Project.length}}</h1>
    </div>
        <h1>Most viewed Projects</h1>
    <div :key="item.name" class='project' v-for='item in mostViewed'>
          <img style='margin:0 auto;margin-bottom:2em;' v-bind:src='item.covers[404]'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nathan',
  data() {
    return {
      author2Projects: []
    }
  },

  created() {

    // this.$http.jsonp('https://api.behance.net/v2/users/13491869/projects?api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
    //   .then(response => {
    //     this.author2Projects.push(response.body.projects)
    //     console.log(response)
    //   }).catch(e => {
    //     console.log(e);
    //   }
    //   )
  },
    computed: {
    mostViewed: function() {
      return this.author2Projects[0].filter(function(item) {
        return item.stats.views >= 9700;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nathanProjects {
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
