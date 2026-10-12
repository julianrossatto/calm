<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { areasProfissionais, profissoes } from '../data/profissoes.js'

const route = useRoute()
const router = useRouter()

function validarArea(areaId) {
  return areasProfissionais.some((area) => area.id === areaId)
    ? areaId
    : 'Todas'
}

const busca = ref('')
const areaSelecionada = ref(validarArea(route.query.area))
const quantidadeVisivel = ref(10)

// Exibe 10 profissões inicialmente e permite carregar mais aos poucos.
const profissoesVisiveis = computed(() =>
  profissoesFiltradas.value.slice(0, quantidadeVisivel.value),
)

// Cria os filtros com base nas áreas cadastradas em profissoes.js.
const areas = computed(() => [
  { id: 'Todas', nome: 'Todas' },
  ...areasProfissionais.map((area) => ({
    id: area.id,
    nome: area.nome,
  })),
])

// Filtra por área e pesquisa em nome, descrição, área e habilidades.
const profissoesFiltradas = computed(() => {
  const termo = busca.value.trim().toLocaleLowerCase('pt-BR')

  return profissoes.filter((profissao) => {
    const correspondeArea =
      areaSelecionada.value === 'Todas' ||
      profissao.areaId === areaSelecionada.value

    const correspondeBusca =
      profissao.nome.toLocaleLowerCase('pt-BR').includes(termo) ||
      profissao.descricao.toLocaleLowerCase('pt-BR').includes(termo) ||
      profissao.area.toLocaleLowerCase('pt-BR').includes(termo) ||
      profissao.habilidades.some((habilidade) =>
        habilidade.toLocaleLowerCase('pt-BR').includes(termo),
      )

    return correspondeArea && correspondeBusca
  })
})

// Mantém a área escolhida pela URL sincronizada com o filtro do catálogo.
watch(
  () => route.query.area,
  (areaId) => {
    areaSelecionada.value = validarArea(areaId)
  },
)

// Sempre que a pesquisa ou a área mudar, reinicia a lista nos primeiros 10 resultados.
watch([busca, areaSelecionada], () => {
  quantidadeVisivel.value = 10
})

function selecionarArea(areaId) {
  areaSelecionada.value = areaId

  const query = { ...route.query }
  if (areaId === 'Todas') {
    delete query.area
  } else {
    query.area = areaId
  }

  router.replace({ query })
}

function verMaisOpcoes() {
  quantidadeVisivel.value += 10
}

function limparFiltros() {
  busca.value = ''
  selecionarArea('Todas')
  quantidadeVisivel.value = 10
}
</script>

<template>
  <main class="pagina-profissoes">
    <section class="cabecalho">
      <span class="etiqueta">EXPLORE NOVAS POSSIBILIDADES</span>

      <h1>Conheça diferentes profissões.</h1>

      <p>
        Descubra áreas de atuação, conheça possibilidades
        e encontre caminhos que despertem sua curiosidade.
      </p>
    </section>

    <section class="catalogo">
      <div class="controles">
        <label class="campo-busca">
          <span class="sr-only">Pesquisar profissão</span>
          <span aria-hidden="true">⌕</span>

          <input
            v-model="busca"
            type="search"
            placeholder="Buscar uma profissão..."
          />
        </label>

        <div class="filtros" aria-label="Filtrar por área">
          <button
            v-for="area in areas"
            :key="area.id"
            type="button"
            :class="{ ativo: areaSelecionada === area.id }"
            :aria-pressed="areaSelecionada === area.id"
            @click="selecionarArea(area.id)"
          >
            {{ area.nome }}
          </button>
        </div>
      </div>

      <div class="resumo">
        <h2>Profissões para explorar</h2>

        <span>
          Mostrando {{ profissoesVisiveis.length }} de {{ profissoesFiltradas.length }}
          {{ profissoesFiltradas.length === 1 ? 'profissão encontrada' : 'profissões encontradas' }}
        </span>
      </div>

      <div
        v-if="profissoesFiltradas.length"
        class="grade-profissoes"
      >
        <article
          v-for="profissao in profissoesVisiveis"
          :key="profissao.id"
          class="card-profissao"
        >
          <span class="area">
            {{ profissao.area }}
          </span>

          <h3>{{ profissao.nome }}</h3>

          <p>{{ profissao.descricao }}</p>

          <div class="habilidades">
            <strong>Habilidades relacionadas</strong>
            <span>{{ profissao.habilidades.join(', ') }}</span>
          </div>

          <RouterLink
            class="botao-detalhes"
            :to="{ name: 'profissao-detalhe', params: { id: profissao.id } }"
          >
            Conhecer profissão
            <span aria-hidden="true">→</span>
          </RouterLink>
        </article>
      </div>

      <div
        v-if="profissoesVisiveis.length < profissoesFiltradas.length"
        class="acoes-catalogo"
      >
        <button
          type="button"
          class="botao-ver-mais"
          @click="verMaisOpcoes"
        >
          Ver mais opções
          <span aria-hidden="true">↓</span>
        </button>
      </div>

      <div v-else-if="!profissoesFiltradas.length" class="sem-resultados">
        <h3>Nenhuma profissão encontrada</h3>

        <p>
          Tente outro termo ou selecione uma área diferente.
        </p>

        <button type="button" @click="limparFiltros">
          Limpar filtros
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.pagina-profissoes {
  min-height: 100vh;
  padding: 65px 24px 80px;
  background: #f4f8fc;
  color: #315c83;
}

.cabecalho {
  max-width: 850px;
  margin: 0 auto 42px;
  text-align: center;
}

.etiqueta {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 30px;
  background: #e2effb;
  color: #4389cc;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.3px;
}

.cabecalho h1 {
  margin: 20px 0 14px;
  font-size: clamp(32px, 5vw, 48px);
  line-height: 1.15;
  letter-spacing: -1.5px;
}

.cabecalho p {
  max-width: 600px;
  margin: 0 auto;
  color: #63798c;
  font-size: 16px;
  line-height: 1.8;
}

.catalogo {
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #e5edf5;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 12px 35px rgba(49, 92, 131, 0.07);
}

.controles {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.campo-busca {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  border: 1px solid #dce7f1;
  border-radius: 12px;
  background: #f9fbfe;
  color: #4389cc;
}

.campo-busca > span {
  font-size: 25px;
}

.campo-busca input {
  width: 100%;
  min-width: 0;
  padding: 15px 0;
  border: none;
  outline: none;
  background: transparent;
  color: #315c83;
  font: inherit;
}

.campo-busca:focus-within {
  border-color: #4389cc;
  box-shadow: 0 0 0 3px #4389cc20;
}

.filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filtros button {
  padding: 9px 15px;
  border: 1px solid #dce7f1;
  border-radius: 30px;
  background: #fff;
  color: #526777;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s;
}

.filtros button:hover {
  border-color: #4389cc;
  color: #357bb5;
}

.filtros button.ativo {
  border-color: #4389cc;
  background: #4389cc;
  color: #fff;
}

.resumo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 35px 0 20px;
}

.resumo h2 {
  margin: 0;
  font-size: 21px;
}

.resumo > span {
  color: #718497;
  font-size: 13px;
}

.grade-profissoes {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.card-profissao {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  padding: 23px;
  border: 1px solid #e5edf5;
  border-radius: 18px;
  background: #fff;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.card-profissao:hover {
  transform: translateY(-3px);
  border-color: #c6def3;
  box-shadow: 0 10px 25px rgba(49, 92, 131, 0.08);
}

.area {
  padding: 6px 10px;
  border-radius: 20px;
  background: #eaf4fd;
  color: #357bb5;
  font-size: 11px;
  font-weight: 700;
}

.card-profissao h3 {
  margin: 17px 0 10px;
  font-size: 18px;
  line-height: 1.4;
}

.card-profissao > p {
  margin: 0;
  color: #63798c;
  font-size: 14px;
  line-height: 1.7;
}

.habilidades {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: auto;
  padding-top: 22px;
  color: #63798c;
  font-size: 12px;
  line-height: 1.6;
}

.habilidades strong {
  color: #315c83;
}

.botao-detalhes {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin-top: 20px;
  padding: 11px 14px;
  border: 1px solid #cfe2f3;
  border-radius: 11px;
  background: #f3f8fd;
  color: #357bb5;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
}

.botao-detalhes:hover {
  border-color: #4389cc;
  background: #e8f3fd;
  transform: translateY(-1px);
}

.botao-detalhes:focus-visible {
  outline: 3px solid #4389cc55;
  outline-offset: 3px;
}

.acoes-catalogo {
  display: flex;
  justify-content: center;
  margin-top: 34px;
  padding-top: 24px;
  border-top: 1px solid #edf2f7;
}

.botao-ver-mais {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-width: 210px;
  padding: 13px 22px 13px 24px;
  border: 1px solid #4389cc;
  border-radius: 14px;
  background: linear-gradient(135deg, #4389cc 0%, #357bb5 100%);
  color: #fff;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1px;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(49, 92, 131, 0.16);
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.botao-ver-mais > span {
  display: grid;
  flex: 0 0 27px;
  width: 27px;
  height: 27px;
  place-items: center;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  transition: background 0.2s ease, transform 0.2s ease;
}

.botao-ver-mais:hover {
  border-color: #315c83;
  background: linear-gradient(135deg, #357bb5 0%, #315c83 100%);
  box-shadow: 0 9px 22px rgba(49, 92, 131, 0.22);
  transform: translateY(-2px);
}

.botao-ver-mais:hover > span {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(2px);
}

.botao-ver-mais:active {
  box-shadow: 0 3px 8px rgba(49, 92, 131, 0.16);
  transform: translateY(0);
}

.botao-ver-mais:focus-visible {
  outline: 3px solid #4389cc55;
  outline-offset: 4px;
}

@media (max-width: 480px) {
  .acoes-catalogo {
    margin-top: 26px;
    padding-top: 20px;
  }

  .botao-ver-mais {
    width: 100%;
    max-width: 320px;
  }
}

.sem-resultados {
  padding: 45px 15px;
  text-align: center;
}

.sem-resultados p {
  color: #63798c;
}

.sem-resultados button {
  margin-top: 10px;
  padding: 11px 16px;
  border: none;
  border-radius: 10px;
  background: #4389cc;
  color: #fff;
  cursor: pointer;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 900px) {
  .grade-profissoes {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .pagina-profissoes {
    padding: 45px 16px 55px;
  }

  .cabecalho {
    margin-bottom: 30px;
  }

  .catalogo {
    padding: 20px 16px;
    border-radius: 18px;
  }

  .grade-profissoes {
    grid-template-columns: 1fr;
  }

  .card-profissao {
    padding: 21px;
  }
}
</style>
