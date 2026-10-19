<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const inicioAtivo = computed(() => route.path === '/' && !route.hash)
const sobreAtivo = computed(() => route.path === '/' && route.hash === '#sobre')
const explorarAtivo = computed(() =>
  ['/questionario', '/resultados'].includes(route.path),
)
const profissoesAtivo = computed(() => route.path.startsWith('/profissoes'))
</script>

<template>
  <header class="cabecalho">
    <RouterLink to="/" class="logo" aria-label="horizonte">
      horiz<span class="logo-sol" aria-hidden="true"></span>nte
    </RouterLink>

    <nav class="navegacao" aria-label="Navegação principal">
      <RouterLink
        to="/"
        class="link"
        :class="{ ativo: inicioAtivo }"
        :aria-current="inicioAtivo ? 'page' : undefined"
      >
        Início
      </RouterLink>

      <RouterLink
        to="/questionario"
        class="link"
        :class="{ ativo: explorarAtivo }"
        :aria-current="route.path === '/questionario' ? 'page' : undefined"
      >
        Explorar
      </RouterLink>

      <RouterLink
        to="/profissoes"
        class="link"
        :class="{ ativo: profissoesAtivo }"
        :aria-current="route.path === '/profissoes' ? 'page' : undefined"
      >
        Profissões
      </RouterLink>

      <RouterLink
        to="/#sobre"
        class="link"
        :class="{ ativo: sobreAtivo }"
        :aria-current="sobreAtivo ? 'location' : undefined"
      >
        Sobre
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.cabecalho {
  width: 100%;
  max-width: none;
  margin: 0 auto;
  padding: 24px max(32px, calc((100% - 1120px) / 2 + 32px));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: #fff;
}

.logo {
  color: #315c83;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -1px;
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
    flex-direction: column;
    gap: 16px;
    padding: 20px 16px;
  }

  .navegacao {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 16px;
  }

  .link {
    font-size: 13px;
  }
}
</style>
