<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <div class="row1">
            <RouterLink to="/" class="logo">
                <font-awesome-icon class="logoImg"  :icon="['fas', 'video']"/>
            </RouterLink>
            <RouterLink to="/filmes">Filmes</RouterLink>
            <RouterLink to="/series">Séries</RouterLink>
            <div class="search">
                <input type="text">
                <font-awesome-icon class="magnifying"  :icon="['fas', 'magnifying-glass']" />
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
    margin-bottom: 2%;
    padding-top: 1%;
}

.search {
    display: flex;
    gap: 5%;
}

.magnifying {
    user-select: none;
    cursor: pointer;
}

input {
    border-radius: 20px;
    border: 1px solid black;
}

a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    transition: all 0.2s ease-in-out;
}

a:hover {
    transform: scale(1.1);
}

.logo {
    position: absolute;
    left: 1%;
}

.logoImg {
    height: 25px;
}

.row1 {
    display: flex;
    justify-content: center;
    gap: 5%;
    margin-left: 5%;
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