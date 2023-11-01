<script setup>

import {ref} from 'vue';

import { RouterLink } from 'vue-router';

</script>

<template>
    
    <header>
        <div class="row1">
            <RouterLink to="/filmes"><button>Filmes</button></RouterLink>
            <RouterLink to="/series"><button>Séries</button></RouterLink>
        </div>
        <hr>
        <div class="row2">
            <RouterLink to="/">
                <div class="logo">aaaa</div>
            </RouterLink>
            
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

a {
    color: black;
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