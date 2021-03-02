<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<script setup>
import Layout from './components/Layout.vue'
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
  padding: 0 var(--spacing-xxl);

  max-width: 60rem;
}

:root {
  --spacing: 0.3rem;
  --spacing-m: calc(var(--spacing) * 2);
  --spacing-l: calc(var(--spacing) * 3);
  --spacing-xl: calc(var(--spacing) * 4);
  --spacing-xxl: calc(var(--spacing) * 5);
  --link-color: #3618e3;
  --active-color: #2802b0;
  --active-text-color: #fff;
  --error-color: #fc134b;
  --inactive-color: #a7a7a7;
}

a {
  color: var(--link-color);
  opacity: 0.85;
  text-decoration: none;
  transition: all 200ms ease-in-out;
}

a:hover {
  opacity: 1;
  text-decoration: underline;
}
</style>
