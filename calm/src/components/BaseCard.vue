
<template>
  <section class="cartao">
    <slot />
  </section>
</template>

<style scoped>

.cartao {
  width: 100%;
  box-sizing: border-box;
  padding: var(--space-8);
  border: 1px solid var(--color-card-border);
  border-radius: var(--radius-card);
  background: var(--color-card-background);
  box-shadow: var(--shadow-card);
}

@media (max-width: 600px) {
  .cartao {
    padding: 24px 16px;
    border-radius: 20px;
  }
}

</style>
