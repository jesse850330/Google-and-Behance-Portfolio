<template>
  <!-- <div class="home" v-scroll="scrollHigh"> -->
  <div class="home">
    <h1> Jesse profile</h1>
      <phone></phone>
  <map></map>

  </div>

</template>

<script>
import phone from './components/phone' 
import map from './components/map' 
export default {
  name: 'jessehome',
  data() {
    return {
    }
  },
  components:{
    phone,
    map
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
