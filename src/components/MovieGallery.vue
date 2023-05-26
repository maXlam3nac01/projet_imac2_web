<template>
    <div>
        <input v-model="searchTerm" @input="searchMovies" placeholder="Search movies..." />
        <button @click="searchMovie">Search</button>
        <div class="movie-gallery">
            <div v-for="movie in movies" :key="movie.id">
                <h2>{{ movie.title }}</h2>
                <img :src="movie.image" alt="Movie Poster" />
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'MovieGallery',
    data() {
        return {
            searchTerm: '',
            movies: []
        }
    },
    created() {
        this.searchMovies();
    },
    methods: {
        searchMovies() {
            axios.get(`https://imdb-api.com/fr/API/SearchMovie/k_nq96obwu/${this.searchTerm}`)
                .then(response => {
                    this.movies = response.data.results;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>
  
