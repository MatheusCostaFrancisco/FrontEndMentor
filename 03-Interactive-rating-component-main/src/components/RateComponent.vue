<template>
  <div class="card" :class="[model.sumbitted ? 'card-rotated' : '']">
    <div class="card-front">
      <div class="card__icon">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <div class="card__title">How did we do?</div>
      <div class="card__description">
        Please let us know we dod with your support request. All feedback is
        appreciated to help us improve our offering!
      </div>
      <div class="card__rating">
        <button
          class="card__rating"
          :class="[isRated(item) ? 'active' : '']"
          v-for="item in lenghtRate"
          @click="setValueModel('rateChosed', item)"
        >
          {{ item }}
        </button>
      </div>
      <button
        class="card__btn-submit"
        @click="setValueModel('sumbitted', true)"
        :disabled="!model.rateChosed"
      >
        SUBMIT
      </button>
    </div>
    <div class="card-back" @click="setValueModel('sumbitted', false)">
      <div class="card-back__image"></div>
      <div class="card-back__selected-rate">
        You selected {{ model.rateChosed }} of {{ lenghtRate.length }}
      </div>
      <div class="card__title">Thank you!</div>
      <div class="card__description">
        We aprreciate you taking time to give a rating. If you ever need more
        support, don`t hesitate to get it touch!
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import vue, { computed, reactive, ref } from 'vue'

  interface Model {
    rateChosed: null | number
    sumbitted: boolean
  }

  const lenghtRate = ref([1, 2, 3, 4, 5])
  const model = reactive<Model>({
    rateChosed: null,
    sumbitted: false,
  })

  const isRated = (item: number) => item === model.rateChosed

  const setValueModel = (element: keyof Model, item: number | boolean) => {
    model[element] = item
  }
</script>

<style scoped>
  .card {
    position: relative;
    width: 25rem;
    height: 26rem;
    border-radius: 1rem;
    background-color: var(--dark-blue);
    -webkit-box-shadow: inset 10px -88px 180px -16px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: inset 10px -88px 180px -16px rgba(0, 0, 0, 0.48);
    box-shadow: inset 10px -88px 180px -16px rgba(0, 0, 0, 0.48);
    transform-style: preserve-3d;
    transition: all 0.6s ease-in;
  }

  .card-rotated {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    display: flex;
    padding: 2rem;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
  }

  .card-front {
    z-index: 2;
    backface-visibility: hidden;
  }

  .card__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--dark-blue);
  }

  .card__title {
    font-weight: 700;
    font-size: 2rem;
    color: var(--white);
  }

  .card__description {
    color: var(--light-grey);
  }

  .card__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card__rating > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    width: 3rem;
    height: 3rem;
    background-color: var(--dark-blue);
    color: var(--light-grey);
    font-weight: 700;
  }

  .card__rating > button:hover {
    color: var(--white);
    background-color: var(--light-grey);
    cursor: pointer;
  }

  .card__rating > button:active {
    color: var(--white);
    background-color: var(--orange);
    cursor: pointer;
  }

  .card__btn-submit {
    color: var(--white);
    cursor: pointer;
    border-radius: 2rem;
    background-color: var(--orange);
    height: 3rem;
    width: 100%;
  }
  .active {
    color: var(--white) !important;
    background-color: var(--orange) !important;
    cursor: pointer;
  }
  .card__btn-submit:active {
    background-color: var(--white);
    color: var(--orange);
  }

  .card-back {
    display: flex;
    align-items: center;
    z-index: 1;
    transform: rotateY(180deg);
    text-align: center;
    backface-visibility: hidden;
  }

  .card-back__image {
    background: url(../assets/illustration-thank-you.svg) no-repeat;
    background-position: center;
    width: 100%;
    height: 150px;
  }

  .card-back__selected-rate {
    width: 12rem;
    text-align: center;
    color: var(--orange);
    border-radius: 2rem;
    padding: 0.5rem;
    background-color: var(--dark-blue);
  }
</style>
