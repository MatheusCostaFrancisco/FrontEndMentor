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
        v-model="model.name"
        :error-log="error.name"
        :placeholder="'informe name and last name'"
      />
      <Input
        name="email-adress"
        label="Email Adress"
        v-model="model.email"
        :error-log="error.email"
        :placeholder="'example@domain.com'"
      />
      <Input
        name="phone-number"
        label="Phone Number"
        type="number"
        :error-log="error.phone"
        v-model="model.phone"
        :placeholder="'e.g +1 234 567 890'"
      />
    </form>
    <div class="action-section">
      <Button color="marine-blue" @click="handleNext" label="Next Step" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Input from '../components/Input.vue'
  import Button from '../components/Button.vue'
  import { mapActions, mapState } from 'pinia'
  import { useMainStore } from '../store'
  import validateEmail from '../utils/validateEmail'

  export default defineComponent({
    name: 'PersonalInfo',
    data: () => ({
      model: {
        name: '',
        email: '',
        phone: '',
      },
      error: {
        name: '',
        email: '',
        phone: '',
      },
    }),
    watch: {
      'model.email': function (curr) {
        if (curr.length > 0 && !validateEmail(curr)) {
          this.error.email = 'Required mail valid'
        } else {
          this.error.email = ''
        }
      },
      'model.phone': function (curr) {
        if (curr.length < 10) {
          this.error.phone = 'Required phone valid'
        } else {
          this.error.phone = ''
        }
      },
      'model.name': function (curr) {
        if (curr.length > 0) {
          this.error.name = ''
        }
      },
    },
    components: {
      Input,
      Button,
    },
    computed: {
      ...mapState(useMainStore, ['user']),
    },
    methods: {
      ...mapActions(useMainStore, ['setUserInfo']),

      validateForm() {
        let res = true
        if (this.model.name === '') {
          this.error.name = 'Required field name.'
          res = false
        }

        if (this.model.email === '' && !validateEmail(this.model.email)) {
          this.error.email = 'Required mail valid.'
          res = false
        }

        if (this.model.phone.length < 10) {
          this.error.phone = 'Required phone valid.'
          res = false
        }

        return res
      },
      handleNext() {
        if (this.validateForm()) {
          this.setUserInfo(this.model)
          this.$router.push('/select-plan')
        }
      },
    },
    created() {
      this.model = { ...this.user }
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
