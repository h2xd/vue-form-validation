<template>
  <Form v-slot="{ errors }" class="container">
    <div :class="['inputGrid', errors.email && 'error']">
      <Field id="email" name="email" placeholder="you@vuejs.hamburg" class="input" :rules="isEmail"  />
      <label for="email" class="label">E-Mail</label>
      <ErrorMessage name="email" class="error" />
    </div>

    <div :class="['inputGrid', errors.name && 'error']">
      <Field id="name" name="name" placeholder="Name" class="input" :rules="isRequired" />
      <label for="name" class="label">Name</label>
      <ErrorMessage name="name" class="error" />
    </div>

    <button type="submit" class="submit">Send!</button>
  </Form>

  <Prism language="html">
    {{ codeTemplate }}
  </Prism>

  <Prism language="html">
    {{ codeJavascript }}
  </Prism>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import Prism from 'vue-prism-component'

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isRequired(value) {
  return value ? true : 'This field is required';
}

function isEmail(value) {
  return emailRegex.test(value) ? true : 'E-Mail is not valid'
}

const codeTemplate = `
<Form v-slot="{ errors }" class="container">
  <div :class="['inputGrid', errors.email && 'error']">
    <Field id="email" name="email" placeholder="you@vuejs.hamburg" class="input" :rules="isEmail"  />
    <label for="email" class="label">E-Mail</label>
    <ErrorMessage name="email" class="error" />
  </div>

  <div :class="['inputGrid', errors.name && 'error']">
    <Field id="name" name="name" placeholder="Name" class="input" :rules="isRequired" />
    <label for="name" class="label">Name</label>
    <ErrorMessage name="name" class="error" />
  </div>

  <button type="submit" class="submit">Send!</button>
</Form>
`

const codeJavascript = `<script setup>
  import { Field, Form, ErrorMessage } from 'vee-validate';

  const emailRegex = /^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;

  function isRequired(value) {
    return value ? true : 'This field is required';
  }

  function isEmail(value) {
    return emailRegex.test(value) ? true : 'E-Mail is not valid'
  }
<\/script>
`
</script>
