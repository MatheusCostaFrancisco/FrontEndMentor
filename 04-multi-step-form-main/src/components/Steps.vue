<template>
  <nav name="navidagarion-steps" role="nav">
    <div class="steps-list">
      <div class="step-item" v-for="(step, index) in steps">
        <div
          class="step-item__icon"
          :class="[step.route === current ? 'current' : '']"
        >
          {{ index + 1 }}
        </div>
        <div class="step-item__title">
          <span class="subtilte">STEP {{ index + 1 }}</span>
          <span class="step-item-title-name">{{ step.name }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  interface IStepObject {
    name: string
    route: string
  }

  import { PropType } from '@vue/runtime-core'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'StepsComponent',
    data: () => ({
      current: 'default',
    }),
    watch: {
      '$route.name': function (curr) {
        this.current = curr
      },
    },
    props: {
      steps: {
        type: Array as PropType<IStepObject[]>,
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
    align-items: center;
    gap: 1rem;
  }
  .step-item__icon {
    width: 2.3rem;
    height: 2.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid var(--white);
    color: var(--white);
    font-weight: 500;
  }
  .current {
    background-color: var(--light-blue);
    border: 1px solid var(--light-blue);
    color: var(--marine-blue);
  }
  .step-item__title {
    display: flex;
    flex-direction: column;
  }

  .subtilte {
    color: var(--cool-gray);
    font-size: 0.8rem;
  }

  .step-item-title-name {
    color: var(--white);
    font-weight: 700;
    letter-spacing: 2px;
  }
</style>
