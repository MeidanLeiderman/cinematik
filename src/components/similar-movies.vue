<template>
    <div class="similar-movies-list">
        <mini-preview v-for="(movie, index) in movies" :key="index" :movie="movie" :activeMovie="activeMovie" @set-movie="setActiveMovie"/>
    </div>
</template>

<script>
import MiniPreview from '@/components/mini-movie-preview.vue'
export default {
    props: {
        movies:{
            type: Array,
            required: false,
            // default: []
        }
    },
    components: {
        MiniPreview
    },
    data(){
        return {
            activeMovie: null
        }
    },
    methods:{
        setActiveMovie(id){
            this.activeMovie = id
        }
    },
    beforeUnmount(){
        this.activeMovie = null
    }
}
</script>