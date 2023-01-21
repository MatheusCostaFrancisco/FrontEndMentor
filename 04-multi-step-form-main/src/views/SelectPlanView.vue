<template>
  <div id="section-main">
    <div class="title">
      <h1>Select your plan</h1>
      <p>You have the option monthly or yearly biling.</p>
    </div>

    <div class="container-plans">
      <div class="section-plans">
        <div class="plan-item">
          <label
            :class="[planSeleced === 'Arcade' ? 'checked' : '']"
            for="plan-arcade-item"
            @click="handleChangePlan('Arcade')"
          >
            <div class="plan-item-image">
              <img
                src="../assets/images/icon-arcade.svg"
                alt="Icone do plane Arcade"
              />
            </div>
            <div>
              <h4>Arcade</h4>
              <div class="plan-item-price">
                {{
                  `$${planSelectedInfos.prices.arcade}/${abreviationFrequencySelectes}`
                }}
              </div>
              <!-- <span>2 months free</span> -->
            </div>
          </label>
          <input type="radio" id="plan-arcade-item" name="plans" />
        </div>

        <div class="plan-item">
          <label
            :class="[planSeleced === 'Advanced' ? 'checked' : '']"
            for="plan-advanced-item"
            @click="handleChangePlan('Advanced')"
          >
            <div class="plan-item-image">
              <img
                src="../assets/images/icon-advanced.svg"
                alt="Icone do plane Arcade"
              />
            </div>
            <div>
              <h4>Advanced</h4>
              <div class="plan-item-price">
                {{
                  `$${planSelectedInfos.prices.advanced}/${abreviationFrequencySelectes}`
                }}
              </div>
              <!-- <span>2 months free</span> -->
            </div>
          </label>
          <input type="radio" id="plan-advanced-item" name="plans" />
        </div>

        <div class="plan-item">
          <label
            :class="[planSeleced === 'Pro' ? 'checked' : '']"
            for="plan-pro-item"
            @click="handleChangePlan('Pro')"
          >
            <div class="plan-item-image">
              <img
                src="../assets/images/icon-pro.svg"
                alt="Icone do plane Arcade"
              />
            </div>
            <div class="plan-item-info">
              <h4>Pro</h4>
              <div class="plan-item-price">
                {{
                  `$${planSelectedInfos.prices.pro}/${abreviationFrequencySelectes}`
                }}
              </div>
              <!-- <span>2 months free</span> -->
            </div>
          </label>
          <input type="radio" id="plan-pro-item" name="plans" />
        </div>
      </div>

      <div class="section-period">
        <span>Monthly</span>
        <div>
          <Switch v-model="frequenceBoolean" />
        </div>
        <span>Yearly</span>
      </div>
    </div>

    <div class="action-section">
      <span class="btn-back" @click="$router.push('/user-info')">Go Back </span>
      <Button
        color="marine-blue"
        @click="$router.push('/more-info')"
        label="Next Step"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Input from '../components/Input.vue'
  import Button from '../components/Button.vue'
  import Switch from '../components/SwitchButton.vue'
  import { mapActions, mapState } from 'pinia'
  import { PlanNamesType, useMainStore } from '../store'
  import {
    plansService,
    PlanType,
    ResponsePlans,
  } from '../infra/services/plans.service'

  export default defineComponent({
    name: 'SelectPlanView',
    components: {
      Input,
      Button,
      Switch,
    },
    data: () => ({
      planSeleced: 'Arcade',
      frequencySelected: 'Monthly',
      frequenceBoolean: false,
      planInfos: {} as ResponsePlans,
      planSelectedInfos: {
        prices: {
          arcade: '',
          advanced: '',
          pro: '',
        },
      } as PlanType,
    }),
    computed: {
      ...mapState(useMainStore, ['planChosen']),
      abreviationFrequencySelectes() {
        return this.frequencySelected === 'Monthly' ? 'mo' : 'yr'
      },
    },
    watch: {
      frequencySelected(curr) {
        if (curr === 'Monthly') {
          this.planSelectedInfos = this.planInfos.monthly
          this.frequenceBoolean = false
        } else {
          this.planSelectedInfos = this.planInfos.yearly
          this.frequenceBoolean = true
        }

        this.setFrequency(curr)
      },
      frequenceBoolean(curr) {
        if (curr) {
          this.frequencySelected = 'Yearly'
        } else {
          this.frequencySelected = 'Monthly'
        }
      },
      planInfos(curr: ResponsePlans) {
        if (this.frequencySelected === 'Yearly') {
          this.planSelectedInfos = curr.yearly
        } else {
          this.planSelectedInfos = curr.monthly
        }
      },
    },
    methods: {
      ...mapActions(useMainStore, ['setPlan', 'setFrequency']),
      handleChangePlan(plan: PlanNamesType) {
        this.planSeleced = plan
        this.setPlan(plan)
      },
    },
    async mounted() {
      const response = await plansService.getPlans()
      this.planInfos = response
      this.frequencySelected = this.planChosen.frequency
      this.planSeleced = this.planChosen.plan
    },
  })
</script>

<style scoped>
  .container-plans {
    flex-grow: 1;
    margin-top: 3rem;
  }

  .section-plans {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    color: var(--marine-blue);
    font-weight: 700;
    font-size: 2rem;
  }

  .plan-item {
    display: flex;
  }

  .plan-item > label {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--light-gray);
    border-radius: 0.5rem;
    padding: 1rem;
    height: 10rem;
    width: 8.5rem;
    cursor: pointer;
  }

  .plan-item > label:hover {
    border: 1px solid var(--purplish-blue);
  }

  .checked {
    border: 1px solid var(--purplish-blue) !important;
    background-color: var(--alabaster);
  }

  .plan-item-image {
    flex-grow: 1;
  }
  .plan-item img {
    width: 2rem;
  }

  .plan-item > input {
    display: none;
  }

  .section-period {
    height: 3rem;
    width: 100%;
    background-color: var(--alabaster);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-weight: 700;
    margin-top: 2rem;
  }

  .action-section {
    align-self: end;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 60rem) {
    .section-plans {
      flex-direction: column;
      gap: 1rem;
    }
    .plan-item > label {
      width: 100%;
      height: auto;
      flex-direction: row;
      justify-content: flex-start;
      text-align: left;
      gap: 1rem;
    }
    .plan-item-image {
      flex-grow: 0;
    }
  }
</style>
