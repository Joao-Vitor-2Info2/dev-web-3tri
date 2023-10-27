<script setup>

import {ref } from 'vue';

const generos = ref(['drama', 'comédia', 'terror', 'romance'])

</script>

<template>
    
    <header>
        <div class="logo">aaaa</div>
        <div class="generos">
            <button class="genero" v-for="genero, index in generos" :key="index">
                 {{ genero }} 
            </button>
        </div>
    </header>

</template>

<style scoped >

header {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
}

.logo {
    position: absolute;
    left: 1%;
}

.generos {
    user-select: none;
    display: flex;
    gap: 5%;
}

</style>