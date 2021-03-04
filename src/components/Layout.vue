<template>
  <Header />
  <main>
    <slot name="default" />
  </main>
  <Footer />
</template>



<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>
