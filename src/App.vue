<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
        <router-link class='router-link' v-bind:to="'/'">&#8592; Back to portfolio</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  }
}
</script>

<style lang="scss">
*,
 :after,
 :before {
  box-sizing: border-box;
}
.router-link{
position: absolute;
left:2em;
top:1em;
}
.img-landingpage {
  width: 100vw;
  height: 100vh
}

canvas {
  height: 100%;
}

html,
body {
  height: 100vh;
}
a{
  text-decoration: none;
}
body {
  margin: 0;
  min-height: 100%;
  background: #FFFFFF;
}

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}




h1,
h2 {
  font-weight: normal;
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

h3 {
  font-weight: 100;
  font-size: 2rem;
}
</style>
