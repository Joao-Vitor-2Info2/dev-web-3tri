<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const search = ref('')

</script>

<template>
    <header>
        <div class="row1">
            <RouterLink to="/">
                <div class="logo">aaaa</div>
            </RouterLink>
            <RouterLink to="/filmes">Filmes</RouterLink>
            <RouterLink to="/series">Séries</RouterLink>
            <div class="search">
                <input type="text">
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

input {
    border-radius: 20px;
    border: 1px solid black;
}


a {
    color: rgb(255, 255, 255);
    text-decoration: none;

}

.logo {
    position: absolute;
    left: 1%;
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