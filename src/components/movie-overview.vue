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
        <button class="btn" v-if="isLonger" @click="toggleModal">See Full Storyline</button>
    </div>
    <modal v-if="isModal" @close-modal="toggleModal">
        <template #title>
                <h3 class="title">{{movie.title}}</h3>
            </template>

            <template #content>
                <p class="">{{movie.overview}}</p>
            </template>
    </modal>
</template>

<script>
import Modal from '@/components/modal.vue'
export default {
    props:{
        movie:{
            type: Object,
            required: true
        }
    },
    components: {
        Modal
    },
    emits:['open-modal'],
    data(){
        return{
            isMounted: false,
            isModal: false
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
    methods:{
        toggleModal(){
            this.isModal = !this.isModal
        }
    },
    mounted(){
            this.isMounted = true
    },
}
</script>