<template>
  <div id="app">
    <Navigation />
    <div id="nav">
      <router-link to="/films">Films</router-link> |
      <router-link to="/serials">Serials</router-link> |
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 15px;
  border-bottom: 2px solid #cfcfcf;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
  import Navigation from '@/components/Navigation.vue'
  export default {
  name: 'navigation',
  components: {
  Navigation
  }
  }
</script>
