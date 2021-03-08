<template>
  <div :class="['inputGrid', hasError && 'error']">
    <input v-model="innerValue" v-bind="$attrs" :type="type" class="input" :id="name" name="password" placeholder="Your Password" />
    <label :for="name" class="label">{{ label }}</label>
    <div class="errorMessage" v-if="hasError">{{ errorMessage }}</div>
  </div>
</template>

<script>
import { computed, ref, defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    console.log(context)

    const hasError = computed(() => !!props.errorMessage)
    const innerValue = ref(props.value)

    return {
      hasError,
      innerValue
    }
  }
})

</script>
