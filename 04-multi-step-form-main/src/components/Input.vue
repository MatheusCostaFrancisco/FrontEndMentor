<template>
  <div class="input">
    <div class="input__label">
      <label :for="name">{{ label }}</label>
      <span v-show="errorLog">{{ errorLog }}</span>
    </div>
    <input
      @input="handleChange"
      :class="[errorLog ? 'input-error' : '']"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="modelValue"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core'

  export default defineComponent({
    name: 'InputComponent',
    methods: {
      handleChange(event: any) {
        this.$emit('update:modelValue', event.target.value || '')
      },
    },
    props: {
      name: {
        type: String,
        required: true,
      },
      label: {
        type: String,
      },
      placeholder: {
        type: String,
        default: 'teste',
      },
      errorLog: {
        type: String,
      },
      type: {
        type: String,
        default: 'text',
      },
      modelValue: {
        type: String,
      },
    },
  })
</script>

<style scoped>
  .input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: var(--marine-blue);
  }
  label {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .input__label {
    display: flex;
    justify-content: space-between;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    height: 3rem;
    width: 100%;
    border: 1px solid var(--light-gray);
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    padding-left: 1rem;
    cursor: pointer;
  }

  input:focus-visible {
    outline: none;
    border: 1px solid var(--purplish-blue) !important;
  }

  .input-error {
    border: 1px solid var(--strawberry-red);
  }

  span {
    color: var(--strawberry-red);
    font-weight: 700;
    font-size: 0.9rem;
  }
</style>
