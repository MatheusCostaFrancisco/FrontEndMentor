<template>
  <div id="section-main">
    <div class="title">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
    </div>
    <form class="form">
      <Input
        name="name"
        label="Name"
        :placeholder="'informe name and last name'"
      />
      <Input
        name="email-adress"
        label="Email Adress"
        :placeholder="'example@domain.com'"
      />
      <Input
        name="phone-number"
        label="Phone Number"
        :placeholder="'e.g +1 234 567 890'"
      />
    </form>
    <div class="action-section">
      <Button color="marine-blue" label="Next Step" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Input from '../components/Input.vue'
  import Button from '../components/Button.vue'

  export default defineComponent({
    name: 'PersonalInfo',
    components: {
      Input,
      Button,
    },
  })
</script>

<style scoped>
  .form {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .action-section {
    align-self: end;
    display: flex;
    justify-content: flex-end;
  }
</style>
