import { createRouter, createWebHistory } from 'vue-router'
//import Movie from '../components/Movie.vue'
import MovieGallery from "../components/MovieGallery.vue"
import MovieTop250 from "../components/MovieTop250.vue"
import YearMovie from "../components/YearMovie.vue"
import DirectorMovie from "../components/DirectorMovie.vue"

const routes = [
  {
    path: '/search',
    name: 'Search',
    component: MovieGallery
  }, {
    path:"/",
    name: "Home",
    component: MovieTop250
  }, {
    path:"/year",
    name: "By Year",
    component: YearMovie
  }, {
    path:"/crew",
    name: "By Crew",
    component: DirectorMovie
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router