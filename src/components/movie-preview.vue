<template>
  <div class="movie-preview" @click="toMoviePage">
    <div class="movie-image-container">
      <img :src="movieImage" alt="Movie Image Not Available" class="movie-image" />
      <div class="rating-container" v-if="movie.vote_average">
        <h5 class="movie-rating">{{ movie.vote_average }}</h5>
        <svg class="star-icon" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
      </div>
    </div>
    <div class="movie-details">
      <h2 class="movie-title">{{ movie.title }}</h2>
      <h2 class="movie-date">{{ movieYear }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviePreview",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    movieImage() {
      return `https://image.tmdb.org/t/p/w300${this.movie.backdrop_path}`;
    },
    movieYear(){
      let dateObj = new Date(this.movie.release_date)
      return dateObj.getFullYear()
    }
  },
  methods:{
    toMoviePage(){
        this.$router.push(`/movie/${this.movie.id}`)
    }
  }
};
</script>