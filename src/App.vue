<template>
  <app-header />
  <router-view />
</template>

<script>
import AppHeader from "@/components/app-header.vue";
export default {
  components: {
    AppHeader,
  },
  created(){
    // Initial API popular movie request
    this.$store.dispatch('getPopularMovies', this.page);
    this.$store.dispatch('getMovieStatistics')
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #1b1a20;
}
</style>
