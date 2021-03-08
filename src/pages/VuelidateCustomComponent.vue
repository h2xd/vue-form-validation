<template>
  <SourceGrid>
    <form class="container" @submit.prevent="handleSubmit" autocomplete="off">
      <Input
        v-for="(field, index) in fields"
        :key="`form-field-${index}`"
        :label="field.label"
        :name="field.target.$path"
        :placeholder="field.placeholder"
        :error-message="field.target.$errors.length > 0 ? field.target.$errors[0].$message : ''"
        :value="field.target.$model"
        v-model="field.target.$model"
      />

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

import Input from '../components/Input.vue'
import SourceGrid from '../components/SourceGrid.vue'
import PrismNeo from '../components/Prism.vue'

const state = reactive({
  name: '',
  email: '',
  password: '',
})

const rules = {
  name: { required },
  email: { required, email },
  password: { required },
}

const v$ = useVuelidate(rules, state)

const fields = [
  {
    label: 'Name',
    placeholder: 'Dein Name',
    target: v$.value.name
  },
  {
    label: 'E-Mail',
    placeholder: 'Deine E-Mail',
    target: v$.value.email
  },
  {
    label: 'Passwort',
    placeholder: 'Dein Passwort',
    target: v$.value.password
  }
]

function handleSubmit() {
  console.log(v$)

  unref(v$).$touch()
  if(v$.$error) return
}
</script>
