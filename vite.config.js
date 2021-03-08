import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/


export default ({ command, mode }) => {
  if (command === 'serve') {
    return defineConfig({
      plugins: [vue()]
    })
  } else {
    return defineConfig({
      base: 'https://h2xd.github.io/vue-form-validation/',
      plugins: [vue()]
    })
  }
}
