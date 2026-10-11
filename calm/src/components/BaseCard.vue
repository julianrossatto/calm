
<template>
  <section class="cartao">
    <slot />
  </section>
</template>

<style scoped>

.cartao {
  width: 100%;
  box-sizing: border-box;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  background: rgba(248, 251, 255, 0.96);
  box-shadow: 0 12px 35px rgba(49, 92, 131, 0.10);
}

@media (max-width: 600px) {
  .cartao {
    padding: 24px 16px;
    border-radius: 20px;
  }
}

</style>
