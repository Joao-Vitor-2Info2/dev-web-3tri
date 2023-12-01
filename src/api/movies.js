import axios from 'axios'

const auth = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmUxZjE0YzYyZTQzOWIwMjM4MDJkNTE0ZWZjMjdjNSIsInN1YiI6IjY1MDg5YTU1NDJkOGE1MDEzODliNGM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NUIY0vNhpSOb1uS96BLUFvsxx4l6wSNfRO_sClDFpj4'

const config = {headers: {accept: 'application/json', Authorization: `Bearer ${auth}`,}}

class moviesApi {
    async getTopRatedMovies(page) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=${page}`, config)
        return data
    }
    async getPopularMovies(page) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`, config)
        return data
    }
    async getPopularSeries(page) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=${page}`, config)
        return data
    }
    async getTopRatedSeries(page) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?&language=pt-BR&page=${page}`, config)
        return data
    }
    async getMovieTrailer(id) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`, config)
        return data
    }
    async getSeriesTrailer(id) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?language=pt-BR`, config)
        return data
    }
}

export default new moviesApi