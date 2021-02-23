<template>
    <div class="movie-small-prev">
        <img class="poster" :src="`https://image.tmdb.org/t/p/w92/${movie.poster_path}`" alt="movie poster" @click="toggleCard">
        <div class="preview" v-if="isCardOpen && isMovieActive">
            <h3 class="preview-title" title="go to movie" @click="routeToMovie">{{movie.title}}</h3>
            <h6 class="preview-date">{{movieYear}}</h6>
            <p class="preview-summary">{{movie.overview}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        },
        activeMovie: {
            type: Number,
        }
    },
    data(){
        return{
            isCardOpen: false
        }
    },
    computed:{
        isMovieActive(){
             if(this.activeMovie === this.movie.id) return true
             else return false
        },
        movieYear(){
            let dateObj = new Date(this.movie.release_date)
            return dateObj.getFullYear()
        }
    },
    methods:{
        toggleCard(){
            this.$emit('set-movie', this.movie.id)
            this.isCardOpen = !this.isCardOpen
        },
        routeToMovie(){
            this.$router.push(`/movie/${this.movie.id}`)
        }
    }
}
</script>