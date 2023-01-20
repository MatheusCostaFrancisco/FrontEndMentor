<template>
  <div class="success-container">
    <img
      src="../assets/images/icon-thank-you.svg"
      alt="ícone vermelho con um check no meio"
    />
    <h1>Thank You!</h1>
    <p>
      Thanks for confirming your subscription! We hope you have fun ussing our
      plataform. If you ever need support, please feel free to email us at
      support@loremgaming.com
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'SuccessView',
  })
</script>

<style scoped>
  .success-container {
    width: 32rem;
    height: 35rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  img {
    width: 6rem;
  }
  h1 {
    color: var(--marine-blue);
  }

  p {
    text-align: center;
  }
</style>
