<template>
    <div class="error-page" v-if="apiStatus.error">
        <h3>We were unable to obtain the reach the server. Please try again later.</h3>
    </div>
    <div class="loading-page" v-if="apiStatus.inProgress">
        <h3>Loading movie details</h3>
    </div>
    <div class="movie" v-if="apiStatus.success">
        <div class="movie-image-mobile" :style="{backgroundImage: movieBackdrop}"></div>
        <div class="main-section">
            <movie-overview :movie="movie" v-if="activeSection==='Overview'"/>
            <movie-details :movie="movie" v-if="activeSection==='Details'"/>
            <movie-cast :movie="movie" v-if="activeSection==='Cast'"/>
            <secondary-menu @selected-section="sectionToShow"/>
        </div>
        
        <h3>You might also like:</h3>
        <div class="movie-similar-movies">
            <movie-preview v-for="similarMovie in movie.similarMovies" :key="similarMovie.id" :movie="similarMovie"></movie-preview>
        </div>
    </div>
</template>


<script>
import {mapState} from 'vuex'
import MoviePreview from '@/components/movie-preview.vue'
import SecondaryMenu from '@/components/secondary-menu.vue'
import MovieOverview from '@/components/movie-overview.vue'
import MovieDetails from '@/components/movie-details.vue'
import MovieCast from '@/components/movie-cast.vue'
export default {
    data(){
        return {
            activeSection: 'Overview'
        }
    },
    components: {
        MoviePreview,
        SecondaryMenu,
        MovieOverview,
        MovieDetails,
        MovieCast
    },
    computed:{
        ...mapState({
            apiStatus: state => state.apiStatus,
            movie: state => state.selectedMovie
        }),
        movieBackdrop() {
            return `linear-gradient(90deg, black, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), transparent), url(https://image.tmdb.org/t/p/w780${this.movie.backdrop_path})`;
        },
    },
    methods:{
        fetchMovie(){
            const movieId = this.$route.params.id
            this.$store.dispatch('getSelectedMovie', movieId)
        },
        sectionToShow(section){
            this.activeSection = section
        }
    },
    created(){
        this.fetchMovie()
    }
}
</script>