<template>
<!-- <div class="cast-container"> -->
    <div class="cast">
        <div class="actor" v-for="(actor, index) in movie.cast" :key="index">
            <img class="actor-img" :src="actorImage(actor)" alt="actor image">
            <h5 class="actor-name">{{actor.name}}</h5>
        </div>
    </div>
<!-- </div> -->
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    methods:{
        actorImage(actor){
            const imagePath = actor.profile_path
            if(!imagePath) return '../src/assets/imgs/error-profile.png'
            return `https://image.tmdb.org/t/p/w45/${actor.profile_path}`
        }
    }
}
</script>