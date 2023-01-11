<template>
  <div class="card">
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
      <button class="card__rating" v-for="item in lenghtRate">
        {{ item }}
      </button>
    </div>
    <button class="card__btn-submit">SUBMIT</button>
  </div>
</template>

<script setup lang="ts">
  import vue, { ref } from 'vue'

  const lenghtRate = ref([1, 2, 3, 4, 5])
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25rem;
    height: 25rem;
    border-radius: 1rem;
    padding: 2rem;

    background-color: var(--dark-blue);
    -webkit-box-shadow: inset 10px -88px 180px -16px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: inset 10px -88px 180px -16px rgba(0, 0, 0, 0.48);
    box-shadow: inset 10px -88px 180px -16px rgba(0, 0, 0, 0.48);
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

  .card__btn-submit:active {
    background-color: var(--white);
    color: var(--orange);
  }
</style>
