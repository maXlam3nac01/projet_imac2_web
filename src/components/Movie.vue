<template>
    <div class="movie">
        <input type="text" v-model="searchTerm" @keyup.enter="searchMovie" placeholder="Search for a movie...">
        <button @click="searchMovie">Search</button>

        <div v-if="movie">
            <h1>{{ movie.Title }}</h1>
            <img :src="movie.Poster" alt="Movie Poster" />
            <p>{{ movie.Plot }}</p>
        </div>
        <div v-else>
            <p>No movie found.</p>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'MovieComponent',
    data() {
        return {
            movie: null,
            searchTerm: ''
        }
    },
    methods: {
        searchMovie() {
            axios.get(`https://imdb-api.com/fr/API/SearchMovie/k_nq96obwu/${this.searchTerm}`)
                .then(response => {
                    this.movie = response.data.results[0];
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>