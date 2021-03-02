<template>
  <SourceGrid>
    <form class="container" @submit.prevent="handleSubmit">
      <div :class="['inputGrid', v$.email.$error && 'error']">
        <input id="email" name="email" placeholder="you@vuejs.hamburg" class="input" v-model="state.email"  />
        <label for="email" class="label">E-Mail</label>
        <div v-for="(error) of v$.email.$errors">
          <div class="error">{{ error.$message }}</div>
        </div>
      </div>

      <div :class="['inputGrid', v$.name.$error && 'error']">
        <input id="name" name="name" placeholder="Name" class="input" v-model="state.name" />
        <label for="name" class="label">Name</label>
        <div v-for="(error) of v$.name.$errors">
          <div class="error">{{ error.$message }}</div>
        </div>
      </div>

      <button type="submit" class="submit">Send!</button>
    </form>

    <template #code>
      <pre>
        {{ v$.$errors }}
      </pre>
    </template>
  </SourceGrid>
</template>

<script setup>
import { reactive, ref, computed, unref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import Prism from 'vue-prism-component'
import SourceGrid from '../components/SourceGrid.vue'

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
  console.log(v$)

  unref(v$).$touch()
  // v$.$touch()
  if(v$.$error) return
}
</script>
