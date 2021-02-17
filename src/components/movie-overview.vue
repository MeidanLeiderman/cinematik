<template>
    <div class="overview">
        <ul class="genre-list">
            <li v-for="genre in movie.genres" :key="genre.id" class="genre">{{genre.name}}</li>
        </ul>
        <div class="box" ref="nu">
            <h2 class="title">{{movie.title}}</h2>
            <h5 class="rating">{{movie.vote_average}} / 10</h5>
        </div>
            <h5 class="date">Released: {{date}}</h5>
        <p class="plot" ref="plot">{{movie.overview}}</p>
        <button class="btn" v-if="isLonger" @click="check">more</button>
    </div>
</template>

<script>

export default {
    props:{
        movie:{
            type: Object,
            required: true
        }
    },
    data(){
        return{
            isMounted: false
        }
    },
    computed:{
        date(){
            const dateObj = new Date(this.movie.release_date)
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            let year = dateObj.getFullYear()
            let month = dateObj.getMonth()
            let day = dateObj.getDate()+1
            return `${day} ${months[month]} ${year}`
        },
        isLonger(){
            if(!this.isMounted) return
            const el = this.$refs.plot
            if (el.scrollHeight > el.clientHeight) return true
            else return false
        },
    },
    mounted(){
            this.isMounted = true
    },
}
</script>