
<template>
  <footer class="rodape">
    <RouterLink to="/" class="logo" aria-label="horizonte">
      horiz<span class="logo-sol" aria-hidden="true"></span>nte
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
  background: #183d5d;
  color: #fff;
  text-align: center;
}

.logo {
  color: #fff;
  font-size: 24px;
  font-weight: 800;
  text-decoration: none;
}

.logo .logo-sol {
  display: inline-block;
  width: 0.53em;
  height: 0.53em;
  margin: 0 0.035em;
  border-radius: 50%;
  background: currentColor;
  vertical-align: 0;
}

p {
  margin: 10px 0;
  color: #fff;
}

small {
  color: #fff;
  font-size: 12px;
}
</style>
