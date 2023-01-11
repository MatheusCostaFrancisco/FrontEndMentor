<template>
  <div class="product-container">
    <div
      class="product-image"
      alt="Imagem de um perfume, com o frasco quadrado de vidro, com uma adesivo no meio com a marca do fabricante."
    ></div>
    <div class="product-bottom">
      <div class="product-subtitle">PERFUME</div>
      <div class="product-title">Gabrielle Essence Eau De Parfum</div>
      <div class="product-description">
        <p>
          A floral, solar and voluptuous interpretion composed by
          Olivier&nbsp;&nbsp; &nbsp; Polge, Perfumer-Creator fro the House of
          CHANEL.
        </p>
      </div>
      <div class="product-price">
        <div class="product-price-current">$149.99</div>
        <div class="product-price-older">$169.99</div>
      </div>

      <button class="product-button">
        <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
            fill="#FFF"
          />
        </svg>
        <span>Add to Card</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'CardProductComponent',
  })
</script>

<style scoped>
  .product-container {
    width: 21.25rem;
    display: flex;
    flex-direction: column;
  }

  .product-bottom {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    background-color: var(--white);
    padding: 1.5rem;
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }
  .product-image {
    width: 100%;
    height: 13.75rem;
    background-image: url(/src/assets/image-product-mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }

  .product-subtitle {
    color: var(--dark-grayish-blue);
    font-size: 0.75rem;
    letter-spacing: 0.4rem;
  }

  .product-title {
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Fraunces';
    line-height: 2rem;
  }

  .product-description {
    text-align: left;
    color: var(--dark-grayish-blue);
  }

  .product-price {
    margin-top: 0.7rem;
    display: flex;
    gap: 1rem;
  }

  .product-button {
    margin-top: 0.5rem;
  }
  .product-bottom > button {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 0.5rem;
    border: 0px;
    background-color: var(--dark-cyan);
    color: var(--white);
    cursor: pointer;
  }

  .product-bottom > button:hover {
    background-color: var(--dark-cyan-hover);
  }

  .product-bottom > span {
    font-weight: 700;
  }

  .product-price-current {
    font-size: 2rem;
    color: var(--dark-cyan);
    font-family: 'Fraunces';
  }

  @media (min-width: 90rem) {
    .product-container {
      flex-direction: row;
      width: 37.5rem;
      height: 25rem;
    }

    .product-image {
      width: 50%;
      height: 100%;
      background-image: url('../assets/image-product-desktop.jpg') !important;
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0;
      border-bottom-left-radius: 0.75rem;
    }

    .product-bottom {
      width: 50%;
      justify-content: space-between;
      border-top-left-radius: 0px;
      border-top-right-radius: 0.75rem;
      border-bottom-left-radius: 0px;
    }
  }
</style>
