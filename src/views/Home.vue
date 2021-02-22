<template>
  <div class="home">
    <h2>Popular Right Now</h2>
    <movie-list :movies="movies" />
    <button class="btn" @click="loadMovies">Show More</button>
    <chart :moviesData="movieStats" v-if="movieStats"/>
  </div>
</template>

<script>
import MovieList from '@/components/movie-list.vue'
import Chart from '@/components/chart.vue'
import {mapState} from 'vuex'
export default {
  name: "Home",
  components: {
    MovieList,
    Chart
  },
  computed: {
    ...mapState({
      movies: state => state.moviesToShow,
      movieStats: state => state.movieStatistics
    }),
  },
  methods:{
    loadMovies(){
      this.$store.dispatch('getPopularMovies');
    }
  },
};
</script>
