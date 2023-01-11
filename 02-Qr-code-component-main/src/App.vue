<script setup lang="ts">
  import QRCodeCard from './components/QRCodeCard.vue'
</script>

<template>
  <div class="container">
    <QRCodeCard
      title="Improve your front-end skills by building projects"
      msg="  Scan the QR code to visit Frontend Mentor and take your coding skills to
      the next level"
    />
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
  }
</style>
