<template>
  <div id="section-main">
    <div class="title">
      <h1>Finishing up</h1>
      <p class="subtitle">Double-check everthing looks OK before confirming</p>
    </div>
    <div class="card-summary">
      <div class="card-line">
        <div>
          <h4>{{ `${planChosen.plan} (${planChosen.frequency})` }}</h4>
          <router-link to="/select-plan">Change</router-link>
        </div>
        <div class="card-line-price">
          <span>{{ `${pricePerPlan}/${abreviationFrequencySelected}` }}</span>
        </div>
      </div>
      <hr />
      <div v-show="planChosen.moreinfos.onlineService" class="card-line">
        <div>
          <p>Online Service</p>
        </div>
        <div>
          <span>{{
            `+$${priceByMoreInfo(
              'onlineService'
            )}/${abreviationFrequencySelected}`
          }}</span>
        </div>
      </div>
      <div v-show="planChosen.moreinfos.largerStorage" class="card-line">
        <div>
          <p>Larger Storege</p>
        </div>
        <div>
          <span>{{
            `+$${priceByMoreInfo(
              'largerStorage'
            )}/${abreviationFrequencySelected}`
          }}</span>
        </div>
      </div>
      <div v-show="planChosen.moreinfos.customizableProfile" class="card-line">
        <div>
          <p>Customizable profile</p>
        </div>
        <div>
          <span>{{
            `+$${priceByMoreInfo(
              'customizableProfile'
            )}/${abreviationFrequencySelected}`
          }}</span>
        </div>
      </div>
    </div>
    <div class="total-line">
      <div>
        <p>total (per month)</p>
      </div>
      <div>
        <span class="total-price">{{
          `+${totalPrice}/${abreviationFrequencySelected}`
        }}</span>
      </div>
    </div>
    <div class="action-section">
      <span class="btn-back" @click="$router.push('/more-info')">Go Back</span>
      <Button
        :disabled="!validateForm"
        :color="!validateForm ? 'cool-gray' : 'purplish-blue'"
        @click="handleConfirm"
        label="Confirm"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { mapState } from 'pinia'
  import { defineComponent } from 'vue'
  import validateForm from '../utils/validationForm'
  import Button from '../components/Button.vue'
  import {
    MoreInfosType,
    plansService,
    PlanType,
  } from '../infra/services/plans.service'
  import { useMainStore } from '../store'

  export default defineComponent({
    name: 'SummaryInfo',
    data: () => ({
      form: {
        plan: {
          prices: {
            arcade: '',
            advanced: '',
            pro: '',
          },
          moreInfos: {
            onlineService: '',
            largerStorage: '',
            customizableProfile: '',
          },
        } as PlanType,
      },
    }),
    computed: {
      ...mapState(useMainStore, ['planChosen']),
      validateForm() {
        return validateForm()
      },
      abreviationFrequencySelected() {
        return this.planChosen.frequency === 'Monthly' ? 'mo' : 'yr'
      },
      pricePerPlan() {
        const plan = this.planChosen.plan.toLocaleLowerCase() as
          | 'arcade'
          | 'advanced'
          | 'pro'

        return this.form.plan.prices[plan]
      },
      totalPrice() {
        const { largerStorage, onlineService, customizableProfile } =
          this.form.plan.moreInfos
        let sum = 0
        if (this.planChosen.moreinfos.largerStorage) {
          sum = sum + Number(largerStorage)
        }
        if (this.planChosen.moreinfos.onlineService) {
          sum = sum + Number(onlineService)
        }
        if (this.planChosen.moreinfos.customizableProfile) {
          sum = sum + Number(customizableProfile)
        }

        return sum + Number(this.pricePerPlan)
      },
    },
    methods: {
      priceByMoreInfo(more: keyof MoreInfosType) {
        const fre = this.planChosen.frequency.toLowerCase() as
          | 'monthly'
          | 'yearly'
        return this.form.plan.moreInfos[more]
      },
      handleConfirm() {
        localStorage.clear()
        this.$router.push('/success')
      },
    },
    components: {
      Button,
    },
    async mounted() {
      const response = await plansService.getPlans()
      const frequency = this.planChosen.frequency.toLowerCase() as
        | 'monthly'
        | 'yearly'
      this.form.plan = response[frequency]
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
