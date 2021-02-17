<template>
    <div class="secondary-menu">
            <ul class="secondary-menu-list">
                <li v-for="(option, index) in options" :key="index" class="option" :class="{active: isSelected(option)}" @click="selectOption(option)">{{option}}</li>
                <!-- <li class="info" :class="{active: isActive}" @click="toggleMenu(true)">Info</li>
                <li class="cast" :class="{active: !isActive}" @click="toggleMenu(false)">Cast</li> -->
            </ul>
        </div>
</template>

<script>
export default {
    emits:['selected-section'],
    data(){
        return {
            options: ['Overview', 'Details', 'Cast'],
            selectedOption: 'Overview'
        }
    },
    computed:{
        // isSelected
    },
    methods:{
        selectOption(option){
            this.selectedOption = option
            this.$emit('selected-section', this.selectedOption)
        },
        isSelected(option){
            if(option===this.selectedOption) return true
            else return false
        }
    }
}
</script>