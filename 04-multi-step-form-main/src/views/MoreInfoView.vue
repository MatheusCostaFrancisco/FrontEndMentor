<template>
  <div id="section-main">
    <div class="title">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance you gaming experience.</p>
    </div>

    <div class="section-choose-ons">
      <label
        :class="[model.onlineService ? 'checked' : '']"
        for="online-service"
        class="card-add-ons"
      >
        <input
          v-model="model.onlineService"
          id="online-service"
          name="online-service"
          type="checkbox"
        />
        <div class="card-title">
          <h4>Online Service</h4>
          <span>Acess to multiplayer games</span>
        </div>
        <div>
          <span class="card-price">{{
            `+${form.moreInfos.onlineService}/${abreviationFrequencySelected}`
          }}</span>
        </div>
      </label>
      <label
        :class="[model.largerStorage ? 'checked' : '']"
        for="larger-storage"
        class="card-add-ons"
      >
        <input
          v-model="model.largerStorage"
          id="larger-storage"
          name="ons"
          type="checkbox"
        />
        <div class="card-infos-container">
          <h4>Larger Storage</h4>
          <span>Extra 1TB of cloud save</span>
        </div>
        <div>
          <span class="card-price">{{
            `+${form.moreInfos.largerStorage}/${abreviationFrequencySelected}`
          }}</span>
        </div>
      </label>
      <label
        :class="[model.customizableProfile ? 'checked' : '']"
        for="custom-profile"
        class="card-add-ons"
      >
        <input
          v-model="model.customizableProfile"
          id="custom-profile"
          name="ons"
          type="checkbox"
        />
        <div class="card-infos-container">
          <h4>Customizable Profile</h4>
          <span>Custom theme on your profile</span>
        </div>
        <div>
          <span class="card-price">{{
            `+${form.moreInfos.customizableProfile}/${abreviationFrequencySelected}`
          }}</span>
        </div>
      </label>
    </div>

    <div class="action-section">
      <span class="btn-back" @click="$router.push('/select-plan')"
        >Go Back</span
      >
      <Button
        @click="$router.push('/summary-info')"
        color="marine-blue"
        label="Next Step"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { mapActions, mapState } from 'pinia'
  import { defineComponent } from 'vue'
  import Button from '../components/Button.vue'
  import { MoreInfosType, plansService } from '../infra/services/plans.service'
  import { useMainStore } from '../store'

  export default defineComponent({
    name: 'MoreInfo',
    data: () => ({
      model: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
      },
      form: {
        moreInfos: {
          onlineService: '1',
          largerStorage: '2',
          customizableProfile: '2',
        } as MoreInfosType,
      },
    }),
    watch: {
      'model.onlineService': function (curr) {
        this.setMoreInfo('onlineService', curr)
      },
      'model.largerStorage': function (curr) {
        this.setMoreInfo('largerStorage', curr)
      },
      'model.customizableProfile': function (curr) {
        this.setMoreInfo('customizableProfile', curr)
      },
    },
    methods: {
      ...mapActions(useMainStore, ['setMoreInfo']),
    },
    computed: {
      ...mapState(useMainStore, ['planChosen']),
      abreviationFrequencySelected() {
        return this.planChosen.frequency === 'Monthly' ? 'mo' : 'yr'
      },
    },
    created() {
      this.model = this.planChosen.moreinfos
    },
    async mounted() {
      const response = await plansService.getPlans()
      const frequency =
        (this.planChosen.frequency.toLowerCase() as 'monthly') || 'yearly'
      this.form.moreInfos = response[frequency].moreInfos
    },
    components: {
      Button,
    },
  })
</script>

<style scoped>
  .action-section {
    align-self: end;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .section-choose-ons {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 3rem;
  }

  .card-add-ons {
    widows: 100%;
    height: 4rem;
    padding: 2.5rem 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid var(--light-gray);
    border-radius: 0.5rem;
  }

  input[type='checkbox'] {
    width: 1.2rem;
    height: 1.2rem;
    background-color: black !important;
    fill: var(--alabaster) !important;
    border: 5px solid black;
  }

  .card-title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .card-price {
    color: var(--purplish-blue);
  }

  input[type='checkbox']:hover + label {
    color: #ccc;
    font-style: italic;
  }

  .checked {
    border: 1px solid var(--purplish-blue);
    background-color: var(--alabaster);
  }

  .card-add-ons:hover {
    border: 1px solid var(--purplish-blue);
    background-color: var(--alabaster);
  }

  @media screen and (max-width: 60rem) {
    label {
      gap: 1rem;
    }

    .card-add-ons {
      height: auto;
      padding: 1rem;
    }
    .card-title {
      gap: 0;
    }
  }
</style>
