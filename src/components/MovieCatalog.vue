<script setup>

import { ref, onMounted } from 'vue'
import { useMovieStore } from '../stores/movie';

const movieStore = useMovieStore()

const currentSelection = ref('Populares')

const popularMovies = ref()
const topRatedMovies = ref()

onMounted(async () => {
    await movieStore.getMovieLists();
    popularMovies.value = movieStore.movies.popular;
    topRatedMovies.value = movieStore.movies.topRated;
})


</script>


<template>
    <div class="filter">
        <button @click="currentSelection = 'Populares'" :class="currentSelection == 'Populares' ? 'selected' : ''">Populares</button>
        <button @click="currentSelection = 'Melhores'" :class="currentSelection == 'Melhores' ? 'selected' : ''">Melhores Avaliados</button>
    </div>
    <div class="catalog" v-if="currentSelection == 'Populares'">
        <div class="movie" v-for="movie, index of popularMovies" :key="index">
            <img :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt="">
            <p>{{ movie.title }}</p>
        </div>
        
    </div>
    <div class="catalog" v-else>
        <div class="movie" v-for="movie, index of topRatedMovies" :key="index">
            <img :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt="">
            <p>{{ movie.title }}</p>
        </div>
        
    </div>
</template>

<style scoped>
.filter {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5%;
   margin-top: 5%;
}

.selected {
    background-color: rgb(14, 14, 14);
    color: white;
}

button {
    border: none;
    cursor: pointer;
    padding: 0.5%;
    border-radius: 10px;
    transition: all 0.1s ease-in-out;
}

.movie {
    text-align: center;
    width: 200px;
    height: 300px;
}

img {
    height: 300px;
    width: 200px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.651);
}

.catalog {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 5%;
    flex-wrap: wrap;
    gap: 3.5%;
    row-gap: 100px;
}
</style>