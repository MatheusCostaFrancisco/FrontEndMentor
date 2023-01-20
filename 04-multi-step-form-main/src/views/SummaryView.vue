<template>
  <div id="section-main">
    <div class="title">
      <h1>Finishing up</h1>
      <p class="subtitle">Double-check everthing looks OK before confirming</p>
    </div>
    <div class="card-summary">
      <div class="card-line">
        <div>
          <h4>Arcade (Monthly)</h4>
          <router-link to="/">Change</router-link>
        </div>
        <div class="card-line-price">
          <span>$9/mo</span>
        </div>
      </div>
      <hr />
      <div class="card-line">
        <div>
          <p>Arcade (Monthly)</p>
        </div>
        <div>
          <span>+$1/mo</span>
        </div>
      </div>
      <div class="card-line">
        <div>
          <p>Online service</p>
        </div>
        <div>
          <span class="price-line">+$2/mo</span>
        </div>
      </div>
    </div>
    <div class="total-line">
      <div>
        <p>Online service</p>
      </div>
      <div>
        <span class="total-price">+$12/mo</span>
      </div>
    </div>
    <div class="action-section">
      <span class="btn-back" @click="$router.push('/more-info')">Go Back</span>
      <Button color="purplish-blue" label="Confirm" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Button from '../components/Button.vue'

  export default defineComponent({
    name: 'SummaryInfo',
    components: {
      Button,
    },
  })
</script>

<style scoped>
  .card-summary {
    display: flex;
    flex-direction: column;
    background-color: var(--alabaster);
    padding: 1.5rem;
    border-radius: 0.5rem;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .card-line,
  .total-line {
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  .total-line {
    padding: 1.5rem;
    flex-grow: 1;
  }

  .total-price {
    color: var(--purplish-blue);
    font-weight: 700;
    font-size: 1.5rem;
  }

  h4 {
    color: var(--marine-blue);
  }

  .card-line-price {
    color: var(--marine-blue);
    font-weight: 700;
  }
  .action-section {
    align-self: end;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
