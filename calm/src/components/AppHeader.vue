<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const cabecalhoRef = ref(null)
const botaoMenuRef = ref(null)
const menuAberto = ref(false)

const inicioAtivo = computed(() => route.path === '/' && !route.hash)
const sobreAtivo = computed(() => route.path === '/sobre')
const explorarAtivo = computed(() =>
  ['/questionario', '/resultados'].includes(route.path),
)
const puzzleAtivo = computed(() => route.path === '/puzzle')
const profissoesAtivo = computed(() => route.path.startsWith('/profissoes'))

function fecharMenu(devolverFoco = false) {
  menuAberto.value = false

  if (devolverFoco) {
    nextTick(() => botaoMenuRef.value?.focus())
  }
}

function fecharAoClicarFora(event) {
  if (menuAberto.value && !cabecalhoRef.value?.contains(event.target)) {
    fecharMenu()
  }
}

watch(() => route.fullPath, () => {
  fecharMenu(menuAberto.value)
})

onMounted(() => {
  document.addEventListener('pointerdown', fecharAoClicarFora)
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', fecharAoClicarFora)
})
</script>

<template>
  <header ref="cabecalhoRef" class="cabecalho" @keydown.esc.prevent="fecharMenu(true)">
    <RouterLink to="/" class="logo" aria-label="horizonte">
      horiz<span class="logo-sol" aria-hidden="true"></span>nte
    </RouterLink>

    <div class="menu-container">
      <button
        type="button"
        ref="botaoMenuRef"
        class="botao-menu"
        :aria-expanded="menuAberto"
        aria-controls="menu-principal"
        :aria-label="menuAberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação'"
        @click="menuAberto = !menuAberto"
      >
        <span class="linhas-menu" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav
        v-show="menuAberto"
        id="menu-principal"
        class="navegacao"
        aria-label="Navegação principal"
      >
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
          to="/puzzle"
          class="link"
          :class="{ ativo: puzzleAtivo }"
          :aria-current="puzzleAtivo ? 'page' : undefined"
        >
          Puzzle
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
          to="/sobre"
          class="link"
          :class="{ ativo: sobreAtivo }"
          :aria-current="sobreAtivo ? 'page' : undefined"
        >
          Sobre
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.cabecalho {
  position: relative;
  z-index: 20;
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

.menu-container {
  position: relative;
}

.botao-menu {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border: 1px solid #dce7f1;
  border-radius: 12px;
  background: #f5faff;
  color: #315c83;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
}

.botao-menu:hover {
  border-color: #a8c8e3;
  background: #eaf4fd;
}

.botao-menu:active {
  transform: scale(0.96);
}

.botao-menu:focus-visible {
  outline: 3px solid #4389cc55;
  outline-offset: 3px;
}

.linhas-menu {
  display: flex;
  width: 20px;
  flex-direction: column;
  gap: 5px;
}

.linhas-menu span {
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transition: transform 0.2s, opacity 0.2s;
}

.botao-menu[aria-expanded='true'] .linhas-menu span:first-child {
  transform: translateY(7px) rotate(45deg);
}

.botao-menu[aria-expanded='true'] .linhas-menu span:nth-child(2) {
  opacity: 0;
}

.botao-menu[aria-expanded='true'] .linhas-menu span:last-child {
  transform: translateY(-7px) rotate(-45deg);
}

.navegacao {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  z-index: 30;
  display: grid;
  width: min(280px, calc(100vw - 32px));
  gap: 4px;
  padding: 9px;
  border: 1px solid #e1edf7;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 14px 34px rgba(38, 59, 80, 0.16);
}

.link {
  display: block;
  padding: 12px 14px;
  border-radius: 10px;
  color: #526777;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
}

.link:hover,
.link.ativo {
  color: #357bb5;
  background: #f3f8fd;
}

@media (max-width: 480px) {
  .cabecalho {
    padding: 20px 16px;
  }
}
</style>
