
<template>
  <footer class="rodape">
    <RouterLink to="/" class="logo">
      calm<span>.</span>
    </RouterLink>

    <p>
      Explore possibilidades, no seu tempo.
    </p>

    <small>Um projeto de exploração profissional.</small>
  </footer>
</template>

<style scoped>
.rodape {
  padding: 32px 24px;
  border-top: 1px solid var(--color-border-divider);
  background: var(--color-surface-soft);
  color: var(--color-text-faint);
  text-align: center;
}

.logo {
  color: var(--color-brand-dark);
  font-size: 24px;
  font-weight: 800;
  text-decoration: none;
}

.logo span {
  color: var(--color-brand-soft);
}

p {
  margin: 10px 0;
}

small {
  font-size: 12px;
}
</style>
