
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header class="cabecalho">
    <RouterLink to="/" class="logo">
      calm<span>.</span>
    </RouterLink>

    <nav class="navegacao">
      <RouterLink
        to="/"
        class="link"
        :class="{ ativo: route.path === '/' }"
      >
        Início
      </RouterLink>

      <RouterLink
        to="/questionario"
        class="link"
        :class="{ ativo: route.path === '/questionario' }"
      >
        Explorar
      </RouterLink>

      <a href="#sobre" class="link">Sobre</a>
    </nav>
  </header>
</template>

<style scoped>
.cabecalho {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  color: #315c83;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -1px;
  text-decoration: none;
}

.logo span {
  color: #79b9eb;
}

.navegacao {
  display: flex;
  align-items: center;
  gap: 28px;
}

.link {
  color: #526777;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

.link:hover,
.link.ativo {
  color: #357bb5;
}

@media (max-width: 480px) {
  .cabecalho {
    padding: 20px;
  }

  .navegacao {
    gap: 14px;
  }

  .link {
    font-size: 13px;
  }
}
</style>
