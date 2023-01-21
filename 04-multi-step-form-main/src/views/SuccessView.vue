<template>
  <div class="success-container">
    <router-link to="/user-info">
      <img
        src="../assets/images/icon-thank-you.svg"
        alt="ícone vermelho con um check no meio"
      />
    </router-link>
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
    width: 30rem;
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

  @media screen and (max-width: 60rem) {
    .success-container {
      width: 100%;
      padding: 4rem 2rem;
      height: 28rem;
    }
  }
</style>
