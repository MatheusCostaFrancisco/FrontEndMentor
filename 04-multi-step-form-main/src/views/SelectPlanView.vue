<template>
  <div id="section-personal-info">
    <div class="title">
      <h1>Select your plan</h1>
      <p>You have the option monthly or yearly biling.</p>
    </div>

    <div class="action-section">
      <span class="btn-back">Go Back</span>
      <Button color="marine-blue" label="Next Step" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Input from '../components/Input.vue'
  import Button from '../components/Button.vue'

  export default defineComponent({
    name: 'SelectPlanView',
    components: {
      Input,
      Button,
    },
  })
</script>

<style scoped>
  #section-personal-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
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

  .form {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .action-section {
    align-self: end;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
