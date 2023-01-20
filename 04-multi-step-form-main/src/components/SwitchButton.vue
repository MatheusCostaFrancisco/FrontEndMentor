<template>
  <label class="switch">
    <input
      @change="(e) => handleChange(e)"
      type="checkbox"
      :checked="modelValue"
    />
    <span class="slider round"></span>
  </label>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core'

  interface EventInputCheck extends Event {
    target:
      | ({
          checked: boolean
        } & EventTarget)
      | any
  }

  export default defineComponent({
    name: 'SwitchComponent',
    methods: {
      handleChange(event: EventInputCheck) {
        this.$emit('update:modelValue', event.target.checked || false)
      },
    },
    props: {
      modelValue: {
        type: Boolean,
      },
    },
  })
</script>

<style scoped>
  .switch {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.5rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--marine-blue);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 1rem;
    width: 1rem;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(1.5rem);
    -ms-transform: translateX(1.5rem);
    transform: translateX(1.5rem);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
