<script setup>

import { ref } from 'vue'

const generos = ref(['drama', 'comédia', 'terror', 'romance'])

const movies = ref([{
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 1
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 2
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 3
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 0
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 1
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 2
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 3
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 1
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 2
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 3
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 0
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 1
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 2
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 0
}, {
    img: 'https://imgs.search.brave.com/0Segl4FI95GW5t9Q--Hz1CW5Au-dArvdnp1K91Xg2Ms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvcGFy/Y2Vpcm9zL2ZjLzIw/MjEvMTEvMjIvc3Vw/bGEtZGl2dWxnYWNh/by0xNjM3NTUwMjA1/MDMzX3YyXzMwMHgy/MjUuanBn',
    title: 'supla',
    genre: 1
},])

</script>


<template>
    <div class="catalog">
        <div class="generos">
                <button class="genero" v-for="genero, index in generos" :key="index">
                     {{ genero }}
                </button>
            </div>
        <div class="movies">
            <div class="movie" v-for="movie, index of movies" :key="index">
                <img :src="movie.img" alt="">
                <p>{{ movie.title }}</p>
                <p>{{ generos[movie.genre] }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.movies {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5%;
    gap: 2%;
    row-gap: 20px;
    align-items: center;
    justify-content: center;
}

.movie {
    border: 1px solid;
}
</style>