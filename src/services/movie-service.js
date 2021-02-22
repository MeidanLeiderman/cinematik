'use strict'
const API_KEY = '09aea31936b202e2cabbd8bf40f0bb15'
const BASE_URL = 'https://api.themoviedb.org/3/movie'

async function getPopularMovies(page) {
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    const movies = await response.json()
    return movies.results
}

async function getLatestMovies() {
    let data = []
    for (var i = 0; i < 90; i++) {
        const date = Date.now() - (1000*60*60*24*i)
        const dateToCheck = _formatToDateISO(date)
        const test = await getMoviePerDay(dateToCheck)
        data.unshift(test)
    }
    return data
}

async function getMoviePerDay(dateString) {
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=${dateString}&primary_release_date.lte=${dateString}`)
    let results = await response.json()
    return { date: dateString, count: results.total_results }
}


function _formatToDateISO(timestamp) {
    const dateObject = new Date(timestamp).toISOString()
    const indexToSlice = dateObject.indexOf('T')
    const dateString = dateObject.slice(0, indexToSlice)
    return dateString
}

async function getSelectedMovie(id) {
    try {
        const responses = await Promise.all([
            getMovieDetails(id),
            getMovieCast(id),
            getSimilarMovies(id)
        ])
        const movie = { ...responses[0], cast: [...responses[1].cast], crew: [...responses[1].crew], similarMovies: [...responses[2].results] }
        return movie
    } catch (err) {
        console.log('unable to reach server', err)
    }
}

async function getMovieCast(id) {
    const response = await fetch(`${BASE_URL}/${id}/credits?api_key=${API_KEY}&language=en-US`)
    if (!response.ok) {
        throw new Error('network request failed')
    }
    return response.json()
}

async function getMovieDetails(id) {
    const response = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US`)
    if (!response.ok) {
        throw new Error('network request failed')
    }
    return response.json()
}

async function getSimilarMovies(id) {
    const response = await fetch(`${BASE_URL}/${id}}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    if (!response.ok) {
        throw new Error('network request failed')
    }
    return response.json()
}

export default {
    getPopularMovies,
    getSelectedMovie,
    getLatestMovies
}