<template>
  <div class="home">
    <h2>Most Popular</h2>
    <movie-list :movies="movies" />
    <button>Show More</button>
  </div>
</template>

<script>
import MovieList from '@/components/movie-list.vue'
export default {
  name: "Home",
  components: {
    MovieList,
  },
  computed: {
    movies() {
      return this.$store.getters["getMovies"];
    },
  },
  created() {
    this.$store.dispatch("getPopularMovies");
  },
};
</script>
