<script setup>

import { ref } from 'vue'

const movies = ref([{
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 'supla'
},])

const currentMovie1 = ref(1)
const currentMovie2 = ref(1)

const divMovies1 = ref();
const divMovies2 = ref();

function changeMovie(index, row) {

    if (row == 1) {

        if (currentMovie1.value == 1 && index == -1 || currentMovie1.value == movies.value.length - 2) {
            currentMovie1.value = 1
        } else {
            currentMovie1.value += index
        }
        divMovies1.value[currentMovie1.value].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    } else {
        if (currentMovie2.value == 1 && index == -1 || currentMovie2.value == movies.value.length - 2) {
            currentMovie2.value = 1
        } else {
            currentMovie2.value += index
        }
        divMovies2.value[currentMovie2.value].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
}

</script>


<template>
    <div class="catalog">
        <h2> Filmes - Populares</h2>
        <div class="movies">
            <div class="nav" @click="changeMovie(-1, 1)"> --- </div>

            <div class="movieRow">
                <div class="movie" v-for="movie, index of movies" :key="index" ref="divMovies1">
                    <img :src="movie.img" alt="">
                    <p>{{ movie.title }}</p>
                    <p>{{ movie.genre }}</p>
                </div>
            </div>

            <div class="nav" @click="changeMovie(1, 1)"> --- </div>
        </div>

        <h2> Séries - Populares</h2>
        <div class="movies">
            <div class="nav" @click="changeMovie(-1, 2)"> --- </div>

            <div class="movieRow">
                <div class="movie" v-for="movie, index of movies" :key="index" ref="divMovies2">
                    <img :src="movie.img" alt="">
                    <p>{{ movie.title }}</p>
                    <p>{{ movie.genre }}</p>
                </div>
            </div>

            <div class="nav" @click="changeMovie(1, 2)"> --- </div>
        </div>
    </div>
</template>

<style scoped>
.movieRow {
    display: flex;
    overflow-x: scroll;
    margin-top: 5%;
    gap: 2%;
    row-gap: 20px;
    width: 95%;
    margin: auto;
}

.movies {
    display: flex;
    align-items: center;
}

.nav {
    user-select: none;
    cursor: pointer;
}

.movie {
    border: 1px solid;
}
</style>