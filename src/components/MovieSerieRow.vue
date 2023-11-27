<script setup>

import { onMounted, ref, defineProps } from 'vue'
import { useMovieStore } from '../stores/movie';

const props = defineProps({
    listType: String,
});

const currentMovie1 = ref(1)
const divMovies1 = ref();

const movieStore = useMovieStore()

const list = ref()
const title = ref()
const nameOrTitle = ref()

onMounted(async () => {
    await movieStore.getMovieLists()
    if (props.listType == 'topRatedMovies') {
        list.value = movieStore.movies.topRated
        title.value = 'Filmes - Melhores Avaliados'
        nameOrTitle.value = 'title'
    } else if (props.listType == 'popularSeries') {
        list.value = movieStore.series.popular
        title.value = 'Séries - Populares'
        nameOrTitle.value = 'name'
    } else if (props.listType == 'popularMovies') {
        list.value = movieStore.movies.popular
        title.value = 'Filmes - Populares'
        nameOrTitle.value = 'title'
    }
})

function changeMovie(index) {
        if (currentMovie1.value == 1 && index == -1 || currentMovie1.value == list.value.length - 2) {
            currentMovie1.value = 1
        } else {
            currentMovie1.value += index
        }
        divMovies1.value[currentMovie1.value].scrollIntoView({
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
            <div class="movie" v-for="movie, index of list" :key="index" ref="divMovies1">
                <img :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt="">
                <p v-if="nameOrTitle == 'name'">{{ movie.name }}</p>
                <p v-else>{{ movie.title }}</p>
            </div>
        </div>
        <div class="nav" @click="changeMovie(1)"> <font-awesome-icon
                :icon="['fas', 'chevron-right']"></font-awesome-icon> </div>
    </div>
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

.movie {
    color: white;
    text-align: center;
}

img {
    height: 300px;
    width: 200px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.651);
}

h2 {
    color: white;
    font-size: x-large;
    font-weight: 500;
    margin-left: 3%;
}
</style>