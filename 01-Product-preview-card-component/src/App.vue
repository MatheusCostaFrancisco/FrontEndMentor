<template>
  <main class="content" role="main">
    <CardProductComponent />
  </main>
  <div class="attribution" role="contentinfo">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by
    <a target="_blank" href="https://github.com/MatheusCostaFrancisco"
      >Matheus Costa Francisco</a
    >.
  </div>
</template>

<script lang="ts">
  import CardProductComponent from './components/CardProductComponent.vue'

  export default {
    name: 'App',
    components: {
      CardProductComponent,
    },
  }
</script>

<style scoped>
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 100%;
  }

  .attribution {
    text-align: center;
  }
</style>
