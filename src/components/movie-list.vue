<template>
    <div class="movie-list">
        <movie-preview v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>
</template>
<script>
import MoviePreview from '@/components/movie-preview.vue'
export default {
    name: "MovieList",
    components: {
        MoviePreview
    },
    props: {
        movies: {
            type: Array,
            required: true
        }
    }
}
</script>