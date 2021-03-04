<template>
  <div ref="containerRef">
    <pre :class="languageClass" ref="preRef">
      <code ref="codeRef">
        {{ formattedCode }}
      </code>
    </pre>
  </div>

</template>

<script>
import {computed, defineComponent, onBeforeUpdate, onMounted, ref, nextTick } from 'vue'
import Prism from 'prism-es6';

export default defineComponent({
  props: {
    language: {
      type: String,
      default: 'javascript',
    },
    code: {
      required: true,
    }
  },
  setup(props) {
    const languageClass = computed(() => `language-${props.language}`)
    const containerRef = ref(null)
    const preRef = ref(null)
    const codeRef = ref(null)
    const formattedCode = ref(props.code)

    function highlight() {
      formattedCode.value = props.code

      Prism.highlightAllUnder(containerRef.value)

      codeRef.value.innerHTML = codeRef.value.innerHTML.replace(/^[\r\n\s] {6}/g, '')
    }

    onMounted(() => highlight())

    onBeforeUpdate(() => {
      nextTick(() => highlight())
    })

    return {
      containerRef,
      preRef,
      codeRef,
      formattedCode,
      languageClass
    }
  }
})

</script>
