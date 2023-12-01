<script setup>
import { ref } from 'vue';
import { useMovieStore } from '../stores/movie';
import HeaderComponent from '../components/HeaderComponent.vue';

const movieStore = useMovieStore();

const title = ref(movieStore.movieTitle);
const overview = ref(movieStore.movieOverview);
const image_path = ref(movieStore.movieImagePath);
const release_date = ref(movieStore.movieReleaseDate);
const trailer_path = ref(movieStore.movieTrailerPath)

</script>

<template>
    <header-component />
    <main>
        <h1>{{ title }} ({{ release_date }})</h1>
        <div class="movieDetail">
            <div class="imageTrailer">
                <img :src="'https://image.tmdb.org/t/p/original/' + image_path" alt="" class="src">
                <iframe :src="'https://www.youtube.com/embed/' + trailer_path" frameborder="0" width="800" v-if="trailer_path.length > 0"></iframe>
                <p v-else>Sem vídeo</p>
            </div>
            <p>{{ overview }}</p>
        </div>
    </main>
</template>

<style scoped>
.movieDetail {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.imageTrailer {
    display: flex;
    gap: 5%;
    width: 95%;
    margin-left: 5%;
    justify-content: center;
}

p {
    margin-left: 10%;
    font-size: large;
    width: 80%;
}

h1 {
    margin-top: 5%;
    text-align: center;
}

img {
    width: 300px;
}
</style>