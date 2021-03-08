<template>
  <p>
    Willkommen beim Vue.js Meetup Hamburg.
    Schaut gerne in die folgenden links, falls ihr euch für Vuelidate & VeeValidate interessiert.
  </p>
  <nav class="navigation">
    <ul class="navigation-list">
      <li v-for="(item, index) in navigation" :key="index" class="navigation-item">
        <RouterLink :to="item.to" class="navigation-link">
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { PATH } from '../path'

const navigation = [
  {
    to: PATH.VeeValidateComponent,
    title: 'VeeValidate Component',
  },
  {
    to: PATH.VeeValidatePassword,
    title: 'VeeValidate Password',
  },
  {
    to: PATH.VeeValidateCustomComponent,
    title: 'VeeValidate Custom Component',
  },
  {
    to: PATH.VuelidateSimple,
    title: 'Vuelidate Simple',
  },
]
</script>

<style>
.navigation {
  padding: 0;
  margin: 0;
}

.navigation-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.navigation-item {
  margin-bottom: var(--spacing);
}
</style>


