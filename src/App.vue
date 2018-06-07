<template>
  <div id="app">
    <h1> <i class="fab fa-youtube"></i> VueTube</h1>




<router-view></router-view>



  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="scss">
body{
  background: #273043;
#app {
  h1{
    color: #E71D36;
    margin-left: 50px;
  }
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
    
}}
</style>
