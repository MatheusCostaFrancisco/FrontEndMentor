<template>
  <div class="card">
    <div class="card__img"></div>
    <div class="card__content">
      <h2 class="card__title">
        {{ title }}
      </h2>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{ msg: string; title: string }>()

  const count = ref(0)
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20rem;
    height: 33rem;
    background-color: var(--white);
    border-radius: 0.5rem 0.5rem 1rem 1rem;
    padding: 1rem;
    text-align: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  .card__img {
    background: url('../assets/image-qr-code.png') no-repeat;
    background-size: cover;
    width: 100%;
    height: 20rem;
    border-radius: 0.5rem;
  }

  .card__content {
    padding: 1rem;
  }

  .card__title {
    font-weight: 700;
    color: var(--dark-blue);
    font-size: 1.5rem;
  }

  p {
    color: var(--grayish-blue);
  }
</style>
