<template>
    <div class="details">
            <div class="category">
                <h6 class="label">Director(s):</h6>
                <ul class="list-container">
                    <li class="list-item" v-for="(director, index) in directors" :key="index">{{director.name}}</li>
                </ul>
            </div>
            <div class="category">
                <h6 class="label">Executive Producer(s):</h6>
                <ul class="list-container">
                    <li class="list-item" v-for="(producer, index) in producers" :key="index">{{producer.name}}</li>
                </ul>
            </div>
            <div class="category">
                <h6 class="label">Countries:</h6>
                <ul class="list-container">
                    <li class="list-item" v-for="(country, index) in movie.production_countries" :key="index">{{country.name}}</li>
                </ul>
            </div>
            <!-- <div class="field">
                <h6 class="field-label">Studio(s):</h6>
                <ul class="studio-list field-info">
                    <li v-for="(studio, index) in movie.production_companies" :key="index">{{studio.name}}, </li>
                </ul>
            </div> -->
            <div class="category">
                <span class="label">Budget:</span>
                <span class="list-item">{{budget}}</span>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            isMounted: false
        }
    },
    computed:{
        directors(){
            return this.movie.crew.filter(person=>person.job==="Director")
            
        },
        producers(){
            const producers = this.movie.crew.filter(person=>person.job==="Executive Producer")
            // if (producers.length>4) {
            //     return producers.slice(0, 4)
            // }
            return producers
        },
        budget(){
            const budget = this.movie.budget
            return budget ? `$${budget.toLocaleString('en-US')}` : 'undisclosed'
        },
        // isLonger(){
        //     if(!this.isMounted) return
        //     const el = this.$refs.plot
        //     if (el.scrollHeight > el.clientHeight) return true
        //     else return false
        // }
    },
    methods:{
        check(array){
            if (array.length>4) return true
            else return false
        }
    },
    mounted(){
        this.isMounted = true
        // console.log(this.$refs)
    }
}
</script>