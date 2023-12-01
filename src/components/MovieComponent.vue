<script setup>
import { defineProps } from 'vue';
import { useMovieStore } from '../stores/movie';
import { useRouter } from 'vue-router';

const movieStore = useMovieStore();
const router = useRouter()

const props = defineProps({
    id: Number,
    title: String,
    overview: String,
    img_path: String,
    release_date: String,
    content_type: Boolean,
});

async function changeMovieInfo() {
    movieStore.movieId = props.id;
    movieStore.movieTitle = props.title;
    movieStore.movieOverview = props.overview;
    movieStore.movieImagePath = props.img_path;
    movieStore.movieReleaseDate = props.release_date;
    props.content_type == 'series' ? await movieStore.getSeriesTrailer() : await movieStore.getMovieTrailer()
    router.push('/filme')
};

</script>

<template>
    <div class="movie" @click="changeMovieInfo">
        <img :src="'https://image.tmdb.org/t/p/original/' + props.img_path" alt="">
        <p>{{ props.title }}</p>
    </div>
</template>

<style scoped>

.movie {
    color: white;
    text-align: center;
    cursor: pointer;
}

img {
    height: 300px;
    width: 200px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.651);
}

</style>