<template>
  <footer class="container">
    <a href="https://www.sumcumo.de/" class="link">sum.cumo</a>|
    <ul class="list">
      <li v-for="(link, index) in links" :key="index" class="item">
        <a :href="link.to" class="link">
          {{ link.title }}
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup>
const links = [
  {
    to: 'https://github.com/h2xd',
    title: 'Andrej Schujkow'
  },
  {
    to: 'https://github.com/neohcs',
    title: 'Saskia Schön'
  }
]
</script>

<style scoped>
.container {
  text-align: center;
  padding-top: var(--spacing-xxl);
  margin-top: var(--spacing-xxl);
  border-top: 2px solid var(--active-color);
}

.list {
  display: inline-flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
}

.item:not(:first-child):before {
  content: '|'
}

.link {
  padding: 0 var(--spacing-l);
}
</style>
