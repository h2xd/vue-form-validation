<template>
  <footer class="container">
    <a href="https://www.sumcumo.de/" class="link">
      <svg class="sumcumo" xmlns="http://www.w3.org/2000/svg" width="631" height="70" viewBox="0 0 631 70">
        <path d="M14,0H56V14H14ZM0,14V42H42V56H0V70H56V28H14V14Z" fill="#35353e" class="logo-s"></path>
        <path d="M616,
        14V56H574V14h42V0H560V70h70V14ZM420,
        0V56H378V14H364V70h70V0Zm42,
        0V14h28V56h14V14h28V70h14V0ZM448,
        14h14V70H448ZM308.14,
        14h42V0h-56V56h14Zm0,
        42h42V70h-42ZM280,
        56H266V70h14ZM140,
        14V70H84V56h42V14ZM84,
        0H70V56H84ZM252,
        0V70H238V14H210V70H196V14H168V70H154V0Z" fill="#35353e" class="logo-umcumo"></path>
      </svg>
    </a>|
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

.sumcumo {
  display: inline-flex;
  width: auto;
  max-height: .8rem;
  line-height: 1;
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
