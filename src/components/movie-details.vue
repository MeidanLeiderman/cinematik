<template>
    <div class="details">
            <div class="category">
                <h6 class="label">Director(s):</h6>
                <ul class="list-container">
                    <li class="list-item" v-for="(director, index) in directors" :key="index">{{director.name}}</li>
                </ul>
            </div>
            <div class="category" v-if="producers.length">
                <h6 class="label">Executive Producer(s):</h6>
                <ul class="list-container" ref="producers">
                    <li class="list-item" v-for="(producer, index) in producers" :key="index" :ref="'producers'+index">{{producer.name}}</li>
                </ul>
                <button class="open-modal-btn" v-if="isProducersLong" @click="toggleModal(producers, 'Executive Producers')" :style="producersPosition">more</button>
            </div>
            <div class="category">
                <h6 class="label">Countries:</h6>
                <ul class="list-container">
                    <li class="list-item" v-for="(country, index) in movie.production_countries" :key="index">{{country.name}}</li>
                </ul>
            </div>
            <div class="category">
                <h6 class="label">Studio(s):</h6>
                <ul class="list-container" ref="studios">
                    <li class="list-item" v-for="(studio, index) in movie.production_companies" :key="index" :ref="'studio'+index">{{studio.name}}</li>
                </ul>
                <button class="open-modal-btn" v-if="isStudiosLong" @click="toggleModal(movie.production_companies, 'Studios')" :style="studioPosition">more</button>
            </div>
            <div class="category">
                <span class="label">Budget:</span>
                <span class="list-item">{{budget}}</span>
            </div>
        </div>
        <modal v-if="isModal" @close-modal="toggleModal">
            <template #title>
                <h3 class="title">{{movie.title}}</h3>
            </template>

            <template #content>
                <div class="category">
                    <h6 class="label">{{modalTitle}}</h6>
                    <ul class="list-container">
                        <li class="list-item" v-for="(item, index) in infoToShow" :key="index">{{item.name}}</li>
                    </ul>
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
    components: {
        Modal
    },
    data(){
        return {
            isMounted: false,
            isModal: false,
            modalInfo: null,
            modalTitle: null
        }
    },
    computed:{
        directors(){
            return this.movie.crew.filter(person=>person.job==="Director")
            
        },
        producers(){
            const producers = this.movie.crew.filter(person=>person.job==="Executive Producer")
            return producers
        },
        budget(){
            const budget = this.movie.budget
            return budget ? `$${budget.toLocaleString('en-US')}` : 'undisclosed'
        },
        isProducersLong(){
            if(!this.isMounted) return
            const el = this.$refs.producers
            if (el.scrollHeight > el.clientHeight) return true
            else return false
        },
        isStudiosLong(){
            if(!this.isMounted) return
            const el = this.$refs.studios
            if (el.scrollHeight > el.clientHeight) return true
            else return false
        },
        studioPosition(){
            const lastListItemWidth = this.$refs.studio2.clientWidth +128
            return `left: ${lastListItemWidth}px`
        },
        producersPosition(){
            const lastListItemWidth = this.$refs.producers2.clientWidth +128
            return `left: ${lastListItemWidth}px`
        }
    },
    methods:{
        toggleModal(type, title){
            this.isModal = !this.isModal
            this.infoToShow = type
            this.modalTitle = title
        },
    },
    mounted(){
        this.isMounted = true
    }
}
</script>