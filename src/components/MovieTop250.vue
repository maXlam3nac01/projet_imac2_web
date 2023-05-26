<template>
    <div>
        <div class="movie-gallery" v-if="movies.length">
            <div v-for="movie in movies" :key="movie.id">
                <h2>{{ movie.title }}</h2>
                <img :src="movie.image" alt="Movie Poster" />
            </div>
        </div>
        <div v-else>
            <p>Loading movies...</p>
        </div>
    </div>
</template>

  
<script>
import axios from 'axios';

export default {
    name: 'MovieTop250',
    data() {
        return {
            movies: []
        }
    },
    mounted() {
        this.searchMovies();
    },
    methods: {
        searchMovies() {
            axios.get(`https://imdb-api.com/en/API/Top250Movies/k_nq96obwu`)
                .then(response => {
                    this.movies = response.data.items
                    console.log(response.data.errorMessage)
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>