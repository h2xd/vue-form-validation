<template>
  <form @submit="onSubmit" class="container" autocomplete="off">
    <SourceGrid>
      <Input
        v-for="(field, index) in fields"
        :key="`form-field-${index}`"
        :label="field.label"
        :name="field.target.name"
        :placeholder="field.placeholder"
        :error-message="field.target.errorMessage.value"
        :value="field.target.value.value"
        v-model="field.target.value.value"
      />

      <button type="submit" class="submit">Send!</button>

      <template #code>
        <PrismNeo
          language="javascript"
          v-for="(field, index) in fields"
          :key="`form-field-${index}`"
          :code="{ [field.target.name]: field.target }"
        />
      </template>
    </SourceGrid>
  </form>
</template>

<script setup>
import { ref, unref } from 'vue'
import { useField, useForm } from 'vee-validate';
import SourceGrid from '../components/SourceGrid.vue'
import Input from '../components/Input.vue'
import PrismNeo from '../components/Prism.vue'

const submitted = ref({})

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isRequired(value) {
  return value ? true : 'This field is required';
}

function isEmail(value) {
  return emailRegex.test(value) ? true : 'E-Mail is not valid'
}

const { handleSubmit } = useForm()

const name = useField('name', isRequired, { initialValue: '' })
const email = useField('email', isEmail, { initialValue: '' })
const password = useField('password', isRequired, { initialValue: '' })

const fields = [
  {
    label: 'Name',
    placeholder: 'Dein Name',
    target: name
  },
  {
    label: 'E-Mail',
    placeholder: 'Deine E-Mail',
    target: email
  },
  {
    label: 'Passwort',
    placeholder: 'Dein Passwort',
    target: password
  }
]

const onSubmit = handleSubmit((values) => {
  submitted.value = values
})
</script>
