<template>
  <main>
    <div class="steps-section">
      <Steps :steps="steps" />
    </div>
    <div class="page-section">
      <router-view></router-view>
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
      steps: [
        {
          name: 'YOUR INFO',
          route: 'user-info',
        },
        {
          name: 'SELECT PLAN',
          route: 'select-plan',
        },
        {
          name: 'ADD INFO',
          route: 'more-info',
        },
        {
          name: 'SUMMARY',
          route: 'summary-info',
        },
      ],
    }),
  })
</script>

<style scoped>
  main {
    display: flex;
    width: 60rem;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: var(--white);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 1rem;
    padding: 1rem;
  }

  .steps-section {
    background-image: url('./assets/images/bg-sidebar-desktop.svg');
    width: 17.13rem;
    height: 35.5rem;
    padding: 2rem;
    padding-top: 2.5rem;
  }

  .page-section {
    display: flex;
    flex-grow: 1;
    height: 100%;
    padding: 0 4rem;
  }
</style>
