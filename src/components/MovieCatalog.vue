<script setup>

import { ref, onMounted } from 'vue'
import { useMovieStore } from '../stores/movie';
import MovieComponent from './MovieComponent.vue';
import Loading from 'vue-loading-overlay'

const movieStore = useMovieStore()

const currentSelection = ref('Populares')

const popularMovies = ref()
const topRatedMovies = ref()

const currentPage = ref(1)

const isLoading = ref(false)

function changePage(page) {
    isLoading.value = true
    currentPage.value = page
    popularMovies.value = movieStore.movies.popular['page_' + page];
    topRatedMovies.value = movieStore.movies.topRated['page_' + page];
    isLoading.value = false
}

onMounted(async () => {
    isLoading.value = true
    await movieStore.getMovieLists();
    popularMovies.value = movieStore.movies.popular.page_1;
    topRatedMovies.value = movieStore.movies.topRated.page_1;
    isLoading.value = false
})

</script>


<template>
    <div class="filter">
        <button @click="currentSelection = 'Populares'" :class="currentSelection == 'Populares' ? 'selected' : ''">Populares</button>
        <button @click="currentSelection = 'Melhores'" :class="currentSelection == 'Melhores' ? 'selected' : ''">Melhores Avaliados</button>
    </div>
    <div class="catalog" v-if="currentSelection == 'Populares'">
        <div class="movieContainer" v-for="movie, index of popularMovies" :key="index">
            <movie-component :title="movie.title" :img_path="movie.poster_path"/>
        </div>
    </div>
    <div class="catalog" v-else>
        <div class="movieContainer" v-for="movie, index of topRatedMovies" :key="index">
            <movie-component :title="movie.title" :img_path="movie.poster_path"/>
        </div>
    </div>
    <div class="pages">
            <div :class="currentPage == 1? 'page currentPage' : 'page'" @click="changePage(1)">1</div>
            <div :class="currentPage == 2? 'page currentPage' : 'page'" @click="changePage(2)">2</div>
            <div :class="currentPage == 3? 'page currentPage' : 'page'" @click="changePage(3)">3</div>
    </div>
    <loading v-model:active="isLoading" is-full-page/>
</template>

<style scoped>
.filter {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5%;
    margin-top: 5%;
}

.pages {
    display: flex;
    width: 100%;
    margin-top: 6%;
    justify-content: center;
    gap: 3%;
    font-size: large;
}

.page {
    cursor: pointer;
}

.currentPage {
    text-decoration: underline;
    transform: scale(1.2);
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