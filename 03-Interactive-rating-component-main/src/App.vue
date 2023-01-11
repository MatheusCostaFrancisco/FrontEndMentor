<template>
  <div class="content">
    <RateComponent />
  </div>
</template>

<script setup lang="ts">
  import RateComponent from './components/RateComponent.vue'
</script>

<style scoped>
  .content {
    perspective: 1000px;
  }
</style>
