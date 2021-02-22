<template>
    <div class="cast-minified">
        <div class="cast-minified-list">
            <div class="actor" v-for="(actor, index) in shortCastList" :key="index">
                <img class="actor-img" :src="actorImage(actor)" alt="actor image">
                <h5 class="actor-name">{{actor.name}}</h5>
            </div>
        </div>
        <button class="btn" @click="toggleModal">Show entire cast</button>
    </div>
    <div class="cast">
        <div class="actor" v-for="(actor, index) in movie.cast" :key="index">
            <img class="actor-img" :src="actorImage(actor)" alt="actor image">
            <h5 class="actor-name">{{actor.name}}</h5>
        </div>
    </div>
    <modal v-if="isModal" @close-modal="toggleModal">
        <template #title>
                <h3 class="title">{{movie.title}}</h3>
            </template>

            <template #content>
                <div class="actor-list">
                    <div class="actor" v-for="(actor, index) in movie.cast" :key="index">
                        <img class="actor-img" :src="actorImage(actor)" alt="actor image">
                        <h5 class="actor-name">{{actor.name}}</h5>
                    </div>
                </div>
            </template>
    </modal>
</template>

<script>
import Modal from '@/components/modal.vue'
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    components:{
        Modal
    },
    data(){
        return {
            isModal: false,
            defaultActorImg: require('@/assets/imgs/person.png')
        }
    },
    computed:{
        shortCastList(){
            return this.movie.cast.slice(0,8)
        },
        isTooLong(){
            if (this.movie.cast.length>8) return true
            else return false
        },
    },
    methods:{
        actorImage(actor){
            const imagePath = actor.profile_path
            if(!imagePath) return this.defaultActorImg
            return `https://image.tmdb.org/t/p/w45/${actor.profile_path}`
        },
        toggleModal(){
            this.isModal = !this.isModal
        }
    }
}
</script>