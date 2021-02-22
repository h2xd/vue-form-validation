<template>
  <Header />

  <VeeValidateSimple />
</template>

<script setup>
import Header from './components/Header.vue'
import VeeValidateSimple from './components/VeeValidateSimple.vue'
import './assets/form.css'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 4rem auto;

  max-width: 40rem;
}
</style>
