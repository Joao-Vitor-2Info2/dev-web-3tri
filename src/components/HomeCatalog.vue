<script setup>
import movies from '../api/movies';
import MovieSerieRow from './MovieSerieRow.vue';

</script>


<template>
    
    <div class="welcomeContainer">
        <div class="welcome">
            <h1>
                Bem vindo ao CineClick! <br>
            </h1>
            <h2>
                Encontre os melhores filmes e séries dentre centenas de opções
            </h2>
        </div>
    </div>

    <movie-serie-row :list-type="'topRatedMovies'" :content-type="movie"/>
    <movie-serie-row :list-type="'popularSeries'" :content-type="series"/>
    <movie-serie-row :list-type="'popularMovies'" :content-type="movies"/>

</template>

<style scoped>

.welcome {
    background-color: rgba(0, 0, 0, 0.212);
    width: 80%;
    height: 150px;
    text-align: center;
    box-shadow: 0px 5px 15px black;
}

.welcomeContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
}

h1 {
    color: rgb(255, 255, 255);
}

</style>