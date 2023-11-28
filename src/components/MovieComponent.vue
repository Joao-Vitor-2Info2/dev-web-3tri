<script setup>

import {defineProps} from 'vue'

const props = defineProps({
    img_path: String,
    title: String,
})

</script>

<template>
    <div class="movie">
        <img :src="'https://image.tmdb.org/t/p/original/' + props.img_path" alt="">
        <p>{{ props.title }}</p>
    </div>
</template>

<style scoped>

.movie {
    color: white;
    text-align: center;
}

img {
    height: 300px;
    width: 200px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.651);
}

</style>