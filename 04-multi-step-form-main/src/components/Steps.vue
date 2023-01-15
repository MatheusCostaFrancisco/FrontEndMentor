<template>
  <nav name="navidagarion-steps" role="nav">
    <ul class="steps-list">
      <li v-for="(step, index) in steps" class="step-item">
        <div class="step-item__icon">{{ index + 1 }}</div>
        <div class="step-item__title">
          <span>Step {{ index }}</span>
          <h1>{{ step }}</h1>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
  import { PropType } from '@vue/runtime-core'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'StepsComponent',
    props: {
      steps: {
        type: Array as PropType<String[]>,
      },
    },
  })
</script>

<style scoped>
  .steps-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .step-item {
    display: flex;
    gap: 1rem;
  }
  .step-item__icon {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid var(--pastel-blue);
  }
  .step-item__icon:hover {
    background-color: var(--pastel-blue);
    cursor: pointer;
    color: var(--marine-blue);
  }
  .step-item__title {
    display: flex;
    flex-direction: column;
  }
</style>
