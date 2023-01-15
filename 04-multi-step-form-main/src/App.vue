<template>
  <main>
    <div class="steps-section">
      <Steps :steps="steps" />
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Steps from './components/Steps.vue'

  export default defineComponent({
    name: 'App',
    components: {
      Steps,
    },
    data: () => ({
      steps: ['YOUR INFO', 'SELECT PLAN', 'ADD INFO', 'SUMARRY'],
    }),
  })
</script>

<style scoped>
  main {
    display: flex;
    align-items: center;
    width: 62rem;
    min-height: 40rem;
    background-color: aqua;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 1rem;
    padding: 1rem;
  }

  .steps-section {
    background-image: url('./assets/images/bg-sidebar-desktop.svg');
    width: 17.13rem;
    height: 35.5rem;
    padding: 1rem;
  }
</style>
