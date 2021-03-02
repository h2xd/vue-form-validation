<template>
  <Header />
  <main>
    <slot name="default" />
  </main>
</template>



<script setup>
import Header from './Header.vue'
</script>
