<template>
  <SourceGrid>
    <form class="container" @submit.prevent="handleSubmit" autocomplete="off">
      <div :class="['inputGrid', v$.email.$error && 'error']">
        <input id="email" name="email" placeholder="you@vuejs.hamburg" class="input" v-model="state.email"  />
        <label for="email" class="label">E-Mail</label>
        <div v-for="(error, index) of v$.email.$errors" :key="`email-error-${index}`">
          <div class="errorMessage">{{ error.$message }}</div>
        </div>
      </div>

      <div :class="['inputGrid', v$.name.$error && 'error']">
        <input id="name" name="name" placeholder="Name" class="input" v-model="state.name" />
        <label for="name" class="label">Name</label>
        <div v-for="(error, index) of v$.name.$errors" :key="`name-error-${index}`">
          <div class="errorMessage">{{ error.$message }}</div>
        </div>
      </div>

      <button type="submit" class="submit">Send!</button>
    </form>

    <template #code>
      <PrismNeo language="javascript" :code="v$" />
    </template>
  </SourceGrid>
</template>

<script setup>
import { reactive, unref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import SourceGrid from '../components/SourceGrid.vue'
import PrismNeo from '../components/Prism.vue'

const state = reactive({
  name: '',
  email: '',
})

const rules = {
  name: { required },
  email: { required, email },
}

const v$ = useVuelidate(rules, state)

function handleSubmit() {

  unref(v$).$touch()
  if(v$.$error) return
}
</script>
