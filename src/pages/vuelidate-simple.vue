<template>
  <SourceGrid>
    <form class="container" @submit.prevent="submitHandler">
      <div :class="['inputGrid', v$.email.$error && 'error']">
        <input id="email" name="email" placeholder="you@vuejs.hamburg" class="input" v-model="email"  />
        <label for="email" class="label">E-Mail</label>
        <div v-for="(error) of v$.email.$errors">
          <div class="error">{{ error.$message }}</div>
        </div>
      </div>

      <div :class="['inputGrid', v$.name.$error && 'error']">
        <input id="name" name="name" placeholder="Name" class="input" v-model="name" />
        <label for="name" class="label">Name</label>
        <div class="error" v-if="!v$.name.required">Field is required</div>
      </div>

      <button type="submit" class="submit">Send!</button>
    </form>

    <template #code>
      <Prism language="javascript">
        {{ v$ }}
      </Prism>
    </template>
  </SourceGrid>
</template>

<script>
import SourceGrid from '../components/SourceGrid.vue'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import Prism from 'vue-prism-component'

export default {
  components: {
    SourceGrid
  },
  setup () {
    const $vuelidate = useVuelidate()

    const submitHandler = () => {
      console.log('submit!', $vuelidate)

      $vuelidate.$touch()

      if ($vuelidate.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }

    return { v$: $vuelidate, submitHandler }
  },
  data () {
    return {
      email: '',
      name: '',
    }
  },
  validations () {
    return {
      email: { required, email },
      name: { required }
    }
  },
}
</script>
