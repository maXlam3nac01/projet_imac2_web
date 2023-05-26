<template>
    <div>
        <div class="movie-gallery" v-if="movies.length">
            <div v-for="movie in movies" :key="movie.id">
                <h2>{{ movie.title }}</h2>
                <img :src="movie.image" alt="Movie Poster" />
                <p>{{ movie.year }}</p>
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
    name: 'YearMovie',
    data() {
        return {
            movies: []
        }
    },
    mounted() {
        this.searchMovies();
    },
    methods: {
        sortMovie() {
            this.movies.sort((a, b) => a.year > b.year ? 1 : -1);
        },
        searchMovies() {
            axios.get(`https://imdb-api.com/en/API/Top250Movies/k_nq96obwu`)
                .then(response => {
                    this.movies = response.data.items
                    this.sortMovie()
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>