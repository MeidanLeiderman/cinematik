<template>
<div class="movie-page">
    <error-loading v-if="apiStatus.error"/>
    <loading-data v-if="apiStatus.inProgress"/>
    <div class="movie" v-if="apiStatus.success">
        <div class="movie-image-mobile" :style="{backgroundImage: movieBackdrop}"></div>
        <div class="main-section">
            <movie-overview :movie="movie" v-if="activeSection==='Overview'"/>
            <movie-details :movie="movie" v-if="activeSection==='Details'"/>
            <movie-cast :movie="movie" v-if="activeSection==='Cast'"/>
            <secondary-menu @selected-section="sectionToShow"/>
        </div>
        
        <div v-if="movie.similarMovies">
            <h3 class="similar-movies-title">You might also like:</h3>
            <div class="movie-similar-movies">
                <similar-movies :movies="movie.similarMovies"/>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import {mapState} from 'vuex'
import LoadingData from '@/components/loading-data.vue'
import ErrorLoading from '@/components/error-loading.vue'
import SecondaryMenu from '@/components/secondary-menu.vue'
import MovieOverview from '@/components/movie-overview.vue'
import MovieDetails from '@/components/movie-details.vue'
import MovieCast from '@/components/movie-cast.vue'
import SimilarMovies from '@/components/similar-movies.vue'
export default {
    data(){
        return {
            activeSection: 'Overview',
            modal: false,
            slotToShow: null
        }
    },
    components: {
        LoadingData,
        ErrorLoading,
        SecondaryMenu,
        MovieOverview,
        MovieDetails,
        MovieCast,
        SimilarMovies,
    },
    computed:{
        ...mapState({
            apiStatus: state => state.apiStatus,
            movie: state => state.selectedMovie
        }),
        movieBackdrop() {
            return `linear-gradient(90deg, black, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), transparent), url(https://image.tmdb.org/t/p/w780${this.movie.backdrop_path})`;
        },
        routeId(){
            return this.$route.params.id
        }
    },
    methods:{
        fetchMovie(){
            this.$store.dispatch('getSelectedMovie', this.routeId)
        },
        sectionToShow(section){
            this.activeSection = section
        },
        resetPage(){
            this.activeSection = 'Overview'
            this.modal = false
            this.slotToShow = null
        }
    },
    created(){
        this.fetchMovie()
    },
    watch: {
        routeId(newVal, oldVal){
            if (newVal !== oldVal){
                this.fetchMovie()
                this.resetPage()
            }
        }
    }
}
</script>