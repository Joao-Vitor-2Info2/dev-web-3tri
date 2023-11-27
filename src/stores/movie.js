import { defineStore } from "pinia";

import moviesApi from '../api/movies'

export const useMovieStore = defineStore('movie', {
    state: () => ({
        movies: {
            topRated: null,
            popular: null,
        },
        series: {
            top_rated: null,
            popular: null,
            on_the_air: null
        }
    }),
    actions: {
        async getMovieLists() {
            let response = await moviesApi.getTopRatedMovies();
            this.movies.topRated = response.results

            response = await moviesApi.getPopularSeries();
            this.series.popular = response.results

            response = await moviesApi.getPopularMovies();
            this.movies.popular = response.results
        }
    }
})