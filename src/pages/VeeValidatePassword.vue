<template>
  <form @submit="onSubmit" class="container" autocomplete="off">
    <SourceGrid>
      <div :class="['inputGrid', password.errorMessage.value && 'error']">
        <input type="text" class="input"  id="password" name="password" placeholder="Your Password" v-model="password.value.value">
        <label for="password" class="label">Password</label>
        <div class="errorMessage">{{ password.errorMessage.value }}</div>
      </div>

      <div :class="['inputGrid', passwordRepeat.errorMessage.value && 'error']">
        <input type="text" class="input" id="passwordRepeat" name="passwordRepeat" placeholder="Your Password" v-model="passwordRepeat.value.value">
        <label for="passwordRepeat" class="label">Password Repeat</label>
        <div class="errorMessage">{{ passwordRepeat.errorMessage.value }}</div>
      </div>

      <button type="submit" class="submit">Send!</button>
      <button class="submit" @click="resetForm">Reset</button>

      <template #code>
        <PrismNeo language="javascript" :code="{ submitted }" />
        <PrismNeo language="javascript" :code="{ password }" />
        <PrismNeo language="javascript" :code="{ passwordRepeat }" />
      </template>
    </SourceGrid>
  </form>
</template>

<script setup>
import { ref, unref } from 'vue'
import { useField, useForm } from 'vee-validate';
import SourceGrid from '../components/SourceGrid.vue'
import PrismNeo from '../components/Prism.vue'

const submitted = ref({})

function isRequired(value) {
  return value ? true : 'This field is required';
}

function isRepeated(compareRef) {
  return (value) => {
    const compare = unref(compareRef)
    return compare && compare === value ? true : 'Not identical'
  }
}

const { handleSubmit, resetForm } = useForm()

const password = useField('password', isRequired)
const passwordRepeat = useField('passwordRepeat', isRepeated(password.value))

const onSubmit = handleSubmit((values) => {
  submitted.value = values
})
</script>
