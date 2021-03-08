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
    </a>
    |
    <a href="https://github.com/h2xd/vue-form-validation" class="link">
      <svg class="github" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
    </a>
    |
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
  display: flex;
  align-content: center;
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

.github {
  display: inline-flex;
  width: auto;
  max-height: 1.2rem;
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
