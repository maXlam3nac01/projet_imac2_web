<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/headerComponent.vue'
import FooterComponent from './components/footerComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.movie-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.movie-gallery div {
  width: 200px;
  background: #eeeeee;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  transition: ease-in-out .2s;
}

.movie-gallery div:hover {
  background: #252525;
  color: white;
  filter: drop-shadow(0 0 5px #00000080);
}

.movie-gallery img {
  max-width: 200px;
}
</style>

