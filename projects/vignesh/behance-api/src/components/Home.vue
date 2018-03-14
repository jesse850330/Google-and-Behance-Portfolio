<template>
  <!-- <div class="home" v-scroll="scrollHigh"> -->
  <div class="home">
    <parallax style='z-index:-999;' :fixed='true'>
      <div class='welcome-page'>
        <div class='welcome-page-details'>
          <h1>Showcasing our designer's work</h1>
          <button v-scroll-to="'.designers-section'">View our designers</button>
        </div>
        <div v-for="(sarelVanProject,index) in sarelVanProjects" v-if='image1' class='welcome-img'>
          <img style='margin:0 auto;margin-bottom:2em;' v-bind:src='sarelVanProject[5].covers[404]'>
        </div>
        <div v-for="(sarelVanProject,index) in sarelVanProjects" v-if='image2' class='welcome-img'>
          <img style='margin:0 auto;margin-bottom:2em;' v-bind:src='sarelVanProject[7].covers[404]'>
        </div>
      </div>
    </parallax>
    <div class='para' v-bind:class="{ paraeffect : (scrollPosition >= position/4)}"></div>
    <div class='home1'>
      <div class='designers-section'>
        <h1>Our designers</h1>
        <div class='designers'>
          <div v-for="(designer,index) in designers" :class="{highlight:designer.field == selected}" id='profileimg' @click="selected = designer.field">
            <img v-bind:src='designer.profile'>
            <div class='hoverclick'>
              <p>Click to see details</p>
            </div>
            <h2>{{designer.name}}</h2>
            <p>{{designer.field}}</p>
             <p>{{designer.stats.followers}}</p>
          <p>{{designer.stats.views}}</p>
          <p>{{designer.stats.appreciations}}</p>
            <div :class="{arrowdown:designer.field == selected}"></div>
          </div>
        </div>
        
     
      </div>
      <NathanChambers v-if='author2Stats'></NathanChambers>
      <SarelVanStaden v-if='author1Stats' @sendCoverimage='addCoverimage'></SarelVanStaden>
      <ElenaGalitsky v-if='author4Stats'></ElenaGalitsky>
      <DannyCarlsen v-if='author3Stats'></DannyCarlsen>
    </div>
  </div>
  <!--API=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c-->
</template>

<script>
import Parallax from './Parallax'
import SarelVanStaden from './SarelvanStaden'
import NathanChambers from './Nathan Chambers'
import ElenaGalitsky from './Elena Galitsky'
import DannyCarlsen from './Danny Carlsen'
export default {
  name: 'vigneshhome',
  data() {
    return {
      designers: [],
      sarelVanProjects: [],
      fields: [],
      clicked: false,
      scrollPosition: null,
      position: null,
      names: [],
      selected: '',
      profilehover: false,
      image1: true,
      image2: false,
      author1Stats: false,
      author2Stats: false,
      author3Stats: true,
      author4Stats: true
    }
  },
  components: {
    SarelVanStaden,
    DannyCarlsen,
    ElenaGalitsky,
    NathanChambers,
    Parallax
  },
  methods: {
    addCoverimage: function(data) {
      this.sarelVanProjects = data
      // console.log(this.image)

    },
    toggle: function(clicked) {
      clicked = !clicked

    },
    scrollHigh: function() {
      this.scrollPosition = window.scrollY
      this.position = window.innerHeight

    },

    mouseOver: function() {
      this.profilehover = !this.profilehover

    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHigh)
  },
  updated() {
  
    if (this.selected === 'Graphic Design') {
      this.author2Stats = true
      this.author1Stats = false
    }
      if (this.selected === 'Photography') {
      this.author1Stats = true
      this.author2Stats = false
    }
    if (this.selected === 'Branding') {
      this.author1Stats = true
    }
    if (this.selected === 'Web design') {
      this.author1Stats = true
    }

  },
  created() {
    var self = this
    setInterval(function() {
      self.image1 = !self.image1
    }, 4000)
    setInterval(function() {
      self.image2 = !self.image2
    }, 4000)

    this.$http.jsonp('https://api.behance.net/v2/users?q=Sarel van Staden&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        this.designers.push({ profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name),stats: response.body.users[0].stats })
        // console.log(this.designers)
      }).catch(e => {
        console.log(e);
      }
      ),

      this.$http.jsonp('https://api.behance.net/v2/users?q=Nathan Chambers&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
        .then(response => {
          // this.designers = response
          // console.log(response.body.users[0].images[276])
          console.log(response)
          this.designers.push({ profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name),stats: response.body.users[0].stats })
        }).catch(e => {
          console.log(e);
        }
        )
    // this.$http.jsonp('https://api.behance.net/v2/users?q=Elena Galitsky&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
    //   .then(response => {
    //     // this.designers = response
    //     // console.log(response.body.users[0].images[276])
    //     console.log(response)
    //       this.designers.push({ profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name),stats: response.body.users[0].stats })
    //   }).catch(e => {
    //     console.log(e);
    //   }
    //   )
    //   this.$http.jsonp('https://api.behance.net/v2/users?q=Danny Carlsen&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
    //     .then(response => {
    //       // this.designers = response
    //       // console.log(response.body.users[0].images[276])
    //       console.log(response)
    //       this.designers.push({ profile: response.body.users[0].images[276], field: response.body.users[0].fields[1], name: (response.body.users[0].first_name + response.body.users[0].last_name) })
    //     }).catch(e => {
    //       console.log(e);
    //     }
    //     )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  transition: background-color 0.4s ease-in;
  align-items: left;
}

.para {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -999;
}

.paraeffect {
  background-color: rgba(0, 0, 0, 0.7);
  transition: background-color 0.2s ease-in;
  z-index: 1;
}

.home1 {
  background-color: white;
}

.hoverclick {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  visibility: hidden;
}

.welcome-page-details {
  width: 60%;
  height: 30%;
  text-align: center;
  margin: 3em;
}

.highlight {
  border: 18px solid maroon;
  position: relative;
}

.arrowdown {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid maroon;
  position: absolute;
  bottom: -2em;
  right: 7.5em;
}

.welcome-page-details h1 {
  font-size: 3em;
  color: white;
  font-family: 'Bree Serif', serif;
}

.welcome-page-details button {
  font-size: 2em;
  height: 25%;
  color: black;
  background-color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  z-index: 1111;
}

.welcome-img {
  width: 40%;
  height: 310px;
  overflow: hidden;
  position: absolute;
  right: 1vw;
  top: 30vh;
  animation: bounce 3s;
}

.welcome-img img {
  width: 40%;
  height: 310px;
}

.designers-section {
  width: 100%;
  height: auto;
  padding-top: 2em;
}

.designers {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
}

#profileimg {
  position: relative;
}



@keyframes bounce {
  0% {
    transform: scale(0.96);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}
</style>
