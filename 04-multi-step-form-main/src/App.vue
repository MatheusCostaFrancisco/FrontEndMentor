<template>
  <div class="main" role="main">
    <div class="steps-section">
      <Steps :steps="steps" />
    </div>
    <div class="page-section">
      <router-view></router-view>
    </div>
  </div>
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

<style>
  .main {
    display: flex;
    width: 59rem;
    flex-wrap: wrap;
    background-color: var(--white);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 1rem;
    padding: 1rem;
    height: 100%;
  }
  main {
    height: 100%;
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
    padding: 0 4rem 0rem;
  }

  #section-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 1rem;
    justify-content: space-between;
    height: 35rem;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    color: var(--marine-blue);
    font-weight: 700;
    font-size: 2rem;
  }

  p {
    color: var(--cool-gray);
  }
</style>
