<script setup>

import { onMounted, ref, defineProps } from 'vue'
import { useMovieStore } from '../stores/movie';
import MovieComponent from './MovieComponent.vue'
import Loading from 'vue-loading-overlay'

const props = defineProps({
    contentType: String,
    listType: String,
});

const currentMovie = ref(1)
const divMovies = ref();

const movieStore = useMovieStore()

const list = ref()
const title = ref()
const nameOrTitle = ref()

const isLoading = ref(false)

onMounted(async () => {
    isLoading.value = true
    await movieStore.getMovieLists()
    if (props.listType == 'topRatedMovies') {
        list.value = movieStore.movies.topRated.page_1
        title.value = 'Filmes - Melhores Avaliados'
        nameOrTitle.value = 'title'
    } else if (props.listType == 'popularSeries') {
        list.value = movieStore.series.popular.page_1
        title.value = 'Séries - Populares'
        nameOrTitle.value = 'name'
    } else if (props.listType == 'popularMovies') {
        list.value = movieStore.movies.popular.page_1
        title.value = 'Filmes - Populares'
        nameOrTitle.value = 'title'
    }
    isLoading.value = false
})

function changeMovie(index) {
    if (currentMovie.value == 1 && index == -1 || currentMovie.value == list.value.length - 2) {
        currentMovie.value = 1
    } else {
        currentMovie.value += index
    }

    console.log(currentMovie)
    divMovies.value[currentMovie.value].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
}

</script>

<template>
    <h2> {{ title }}</h2>
    <div class="movies">
        <div class="nav" @click="changeMovie(-1)"><font-awesome-icon :icon="['fas', 'chevron-left']">
            </font-awesome-icon></div>
        <div class="movieRow">
            <div class="movieContainer" v-for="movie, index of list" :key="index" ref="divMovies">
                <MovieComponent :title="props.contentType == 'series' ? movie.name : movie.title" :img_path="movie.poster_path" :overview="movie.overview" :release_date="movie.release_date" :id="movie.id" :type="props.listType" :content_type="props.contentType"/>
            </div>
        </div>
        <div class="nav" @click="changeMovie(1)"> 
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </div>
    </div>
    <loading v-model:active="isLoading" is-full-page />
</template>

<style scoped>
.movieRow {
    display: flex;
    overflow-x: scroll;
    margin-top: 5%;
    gap: 2%;
    width: 95%;
    margin: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.movies {
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-bottom: 5%;
}

.movie::-webkit-scrollbar {
    display: none;
}

.nav {
    user-select: none;
    cursor: pointer;
    color: aliceblue;
}



h2 {
    color: white;
    font-size: x-large;
    font-weight: 500;
    margin-left: 3%;
}
</style>