import { defineStore } from 'pinia'

import moviesApi from '../api/movies'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: {
      topRated: {
        page_1: [],
        page_2: [],
        page_3: []
      },
      popular: {
        page_1: [],
        page_2: [],
        page_3: []
      }
    },
    series: {
      topRated: {
        page_1: [],
        page_2: [],
        page_3: []
      },
      popular: {
        page_1: [],
        page_2: [],
        page_3: []
      }
    }
  }),
  actions: {
    async getMovieLists() {
      let response = await moviesApi.getTopRatedMovies(1)
      this.movies.topRated.page_1 = response.results
      response = await moviesApi.getTopRatedMovies(2)
      this.movies.topRated.page_3 = response.results
      response = await moviesApi.getTopRatedMovies(3)
      this.movies.topRated.page_2 = response.results

      response = await moviesApi.getPopularMovies(1)
      this.movies.popular.page_1 = response.results
      response = await moviesApi.getPopularMovies(2)
      this.movies.popular.page_2 = response.results
      response = await moviesApi.getPopularMovies(3)
      this.movies.popular.page_3 = response.results

      response = await moviesApi.getPopularSeries(1)
      this.series.popular.page_1 = response.results
      response = await moviesApi.getPopularSeries(2)
      this.series.popular.page_2 = response.results
      response = await moviesApi.getPopularSeries(3)
      this.series.popular.page_3 = response.results

      response = await moviesApi.getTopRatedSeries(1)
      this.series.topRated.page_1 = response.results
      response = await moviesApi.getTopRatedSeries(2)
      this.series.topRated.page_2 = response.results
      response = await moviesApi.getTopRatedSeries(3)
      this.series.topRated.page_3 = response.results
    }
  }
})
