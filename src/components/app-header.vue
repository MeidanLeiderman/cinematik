<template>
    <div class="header">
        <h3 class="logo">Cinematik</h3>
        <input type="checkbox" name="navMenuBtn" id="navMenuBtn">
        <label for="navMenuBtn" class="menu-btn">
            <svg class="menu-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <navbar/>
    </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
export default {
    components: {
        Navbar
    }
}
</script>
