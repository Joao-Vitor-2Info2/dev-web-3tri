<script setup>

import {ref } from 'vue';

const generos = ref(['drama', 'comédia', 'terror', 'romance'])

</script>

<template>
    
    <header>
        <div class="row1">
            <button>Filmes</button>
            <button>Séries</button>
        </div>
        <hr>
        <div class="row2">
            <div class="logo">aaaa</div>
            <div class="generos">
                <button class="genero" v-for="genero, index in generos" :key="index">
                     {{ genero }}
                </button>
            </div>
        </div>
    </header>

</template>

<style scoped >

header {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 10px;
}

.logo {
    position: absolute;
    left: 1%;
}

.row2 {
    display: flex;
    justify-content: center;
    text-align: center;
}

.row1 {
    display: flex;
    gap: 1%;
    justify-content: center;
}

.generos {
    user-select: none;
    display: flex;
    gap: 5%;
}

hr {
    width: 100%;
}

</style>