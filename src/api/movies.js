import axios from 'axios'

const auth = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmUxZjE0YzYyZTQzOWIwMjM4MDJkNTE0ZWZjMjdjNSIsInN1YiI6IjY1MDg5YTU1NDJkOGE1MDEzODliNGM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NUIY0vNhpSOb1uS96BLUFvsxx4l6wSNfRO_sClDFpj4'

const config = {headers: {accept: 'application/json', Authorization: `Bearer ${auth}`,}}

class moviesApi {
    async getTopRatedMovies() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1`, config)
        return data
    }
    async getPopularMovies() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1`, config)
        return data
    }
    async getPopularSeries() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=1`, config)
        return data
    }
    async getTopRatedSeries() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?&language=pt-BR&page=1`, config)
        return data
    }
    async getOnTheAirSeries() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?&language=pt-BR&page=1`, config)
        return data
    }
}

export default new moviesApi