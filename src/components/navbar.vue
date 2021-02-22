<template>
    <div class="nav">
      <div class="links-container">
        <router-link class="nav-link" to="/" @click="closeMenu">Home</router-link>
        <router-link class="nav-link" to="/about" @click="closeMenu">About</router-link>
      </div>
  </div>
</template>

<script>
export default {
  emits:['close-menu'],
  methods:{
    closeMenu(){
      this.$emit('close-menu')
    }
  }
}
</script>