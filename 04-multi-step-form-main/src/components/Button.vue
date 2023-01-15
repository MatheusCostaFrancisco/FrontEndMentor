<template>
  <button :class="`btn-${color}`" type="button">
    {{ label }}
  </button>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core'

  export default defineComponent({
    name: 'ButtonComponent',
    props: {
      label: {
        type: String,
      },
      color: {
        type: String,
      },
    },
  })
</script>

<style scoped>
  button {
    border: none;
    padding: 1.1rem 2rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    width: max-content;
  }
</style>
