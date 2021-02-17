import { createStore } from "vuex";
import movieService from '../services/movie-service'

export default createStore({
  state: {
    moviesToShow: [],
    selectedMovie: null,
    apiStatus: {
      inProgress: false,
      success: false,
      error: false
    }
  },
  mutations: {
    setMovies(state, movies) {
      state.moviesToShow = movies
    },
    setSelectedMovie(state, movie) {
      state.selectedMovie = movie
    },
    HANDLE_API_ERROR(state) {
      state.apiStatus.inProgress = false
      state.apiStatus.success = false
      state.apiStatus.error = true
    },
    HANDLE_API_SUCCESS(state) {
      state.apiStatus.inProgress = false
      state.apiStatus.success = true
      state.apiStatus.error = false
    },
    HANDLE_API_IN_PROGRESS(state) {
      state.apiStatus.inProgress = true
      state.apiStatus.success = false
      state.apiStatus.error = false
    }
  },
  actions: {
    async getPopularMovies({ commit }) {
      // commit('HANDLE_API_IN_PROGRESS')
      const movies = await movieService.getPopularMovies()
      commit('setMovies', movies)
    },
    async getSelectedMovie({ commit }, id) {
      // api request in progress
      commit('HANDLE_API_IN_PROGRESS')

      const movie = await movieService.getSelectedMovie(id)
      if (movie) {
        // request successful - update state
        commit('setSelectedMovie', movie)
        commit('HANDLE_API_SUCCESS')
      }
      else {
        // request failed, set error status
        commit('HANDLE_API_ERROR')
      }
    }
  },
  getters: {
    getMovies: state => {
      return state.moviesToShow
    }
  }
});
