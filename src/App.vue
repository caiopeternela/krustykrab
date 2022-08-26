<template>
  <div id="app">
    <Navbar :logo="logo" :alt="alt"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue"
  import Footer from "./components/Footer.vue"
  export default {
    components: {
      Navbar,
      Footer,
    },
    data() {
      return {
        logo: "/img/logo.png",
        alt: "Krusty Krab"
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap');

  * {
    font-family: 'Chelsea Market', cursive;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
  }
</style>
