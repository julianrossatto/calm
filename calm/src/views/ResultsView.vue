
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import CloudBackground from '../components/CloudBackground.vue'
import BaseCard from '../components/BaseCard.vue'
import { gerarRecomendacoes } from '../utils/recomendacoes.js'

const router = useRouter()

function explorarArea(area) {
  router.push({
    name: 'profissoes',
    query: { area: area.id },
  })
}

function recuperarRespostas() {
  try {
    const dados = sessionStorage.getItem('calm-respostas')

    if (!dados) return []

    const respostas = JSON.parse(dados)

    // Confere se os dados têm a estrutura esperada.
    if (
      !Array.isArray(respostas) ||
      respostas.length !== 5 ||
      !respostas.every(Array.isArray)
    ) {
      return []
    }

    return respostas
  } catch {
    return []
  }
}

const respostas = recuperarRespostas()

const resultado = computed(() => {
  const recomendacoes = gerarRecomendacoes(respostas)

  // Normaliza os grupos e limita o total a três áreas no máximo.
  const destaquesOriginais = Array.isArray(recomendacoes.destaque)
    ? recomendacoes.destaque
    : []

  const outrasOriginais = Array.isArray(recomendacoes.outras)
    ? recomendacoes.outras
    : []

  const idsDestaque = new Set(
    destaquesOriginais.map((area) => area.id),
  )

  const areasLimitadas = [
    ...destaquesOriginais,
    ...outrasOriginais,
  ].slice(0, 3)

  return {
    ...recomendacoes,
    destaque: areasLimitadas.filter((area) => idsDestaque.has(area.id)),
    outras: areasLimitadas.filter((area) => !idsDestaque.has(area.id)),
  }
})

function refazerQuestionario() {
  sessionStorage.removeItem('calm-respostas')
  router.push('/questionario')
}
</script>

<template>
  <main class="pagina-resultados">
    <CloudBackground />

    <div class="conteudo">
      <header class="introducao">
        <span class="etiqueta">UM PONTO DE PARTIDA</span>

        <h1>Novas possibilidades esperam por você.</h1>

        <p>
          Suas respostas podem ajudar você a explorar áreas
          profissionais que despertam sua curiosidade.
        </p>
      </header>

      <BaseCard>
        <div class="titulo-cartao">
          <span class="simbolo">✳</span>
          <div>
            <h2>
              {{
                resultado.personalizadas
                  ? 'Áreas para você explorar'
                  : 'Possibilidades para descobrir'
              }}
            </h2>

            <p>{{ resultado.mensagem }}</p>

          </div>
        </div>

        <div class="aviso">
          <strong>Importante:</strong>
          estas sugestões são pontos de partida para reflexão,
          não definem seu futuro nem substituem orientação profissional.
        </div>


<section
  v-if="resultado.destaque.length"
  class="grupo-areas"
>
  <h3 class="titulo-grupo">Áreas que se destacaram</h3>

  <p class="descricao-grupo">
    Estas áreas tiveram a maior pontuação nas suas respostas.
    Explore todas elas no seu tempo.
  </p>

  <div class="lista-areas">
    <article
      v-for="area in resultado.destaque"
      :key="area.id"
      class="area"
    >
      <div class="detalhes">
        <h3>{{ area.nome }}</h3>

        <div class="pontuacao">
          <span>Pontuação nas respostas</span>
          <strong>{{ area.percentual }}%</strong>
        </div>

        <div class="barra-fundo">
          <div
            class="barra-preenchida"
            :style="{ width: `${area.percentual}%` }"
          ></div>
        </div>

        <p>{{ area.descricao }}</p>

        <div v-if="area.motivos.length" class="motivos">
          <strong>O que contribuiu para esta sugestão?</strong>
          <ul>
            <li v-for="motivo in area.motivos" :key="motivo">
              {{ motivo }}
            </li>
          </ul>
        </div>

        <h4>Você pode conhecer:</h4>

        <div class="etiquetas-profissoes">
          <span
            v-for="profissao in area.exemplos"
            :key="profissao"
            class="etiqueta-profissao"
          >
            {{ profissao }}
          </span>
        </div>
        <button
          type="button"
          class="botao-explorar-area"
          @click="explorarArea(area)"
        >
          Ver profissões desta área
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  </div>
</section>

<!-- Outras possibilidades -->
<section
  v-if="resultado.outras.length"
  class="grupo-areas outras-possibilidades"
>
  <h3 class="titulo-grupo">Outras possibilidades</h3>

  <p class="descricao-grupo">
    Estas áreas também podem despertar seu interesse.
    Vale a pena conhecê-las, mesmo que tenham recebido
    uma pontuação menor.
  </p>

  <div class="lista-areas">
    <article
      v-for="area in resultado.outras"
      :key="area.id"
      class="area"
    >
      <div class="detalhes">
        <h3>{{ area.nome }}</h3>

        <div class="pontuacao">
          <span>Pontuação nas respostas</span>
          <strong>{{ area.percentual }}%</strong>
        </div>

        <div class="barra-fundo">
          <div
            class="barra-preenchida"
            :style="{ width: `${area.percentual}%` }"
          ></div>
        </div>

        <p>{{ area.descricao }}</p>

        <div v-if="area.motivos.length" class="motivos">
          <strong>O que contribuiu para esta sugestão?</strong>
          <ul>
            <li v-for="motivo in area.motivos" :key="motivo">
              {{ motivo }}
            </li>
          </ul>
        </div>

        <h4>Você pode conhecer:</h4>

        <div class="etiquetas-profissoes">
          <span
            v-for="profissao in area.exemplos"
            :key="profissao"
            class="etiqueta-profissao"
          >
            {{ profissao }}
          </span>
        </div>
        <button
          type="button"
          class="botao-explorar-area"
          @click="explorarArea(area)"
        >
          Ver profissões desta área
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  </div>
</section>


        <p class="nota">
          Não se identificou com alguma sugestão? Tudo bem!
          Você também pode explorar as outras áreas e descobrir
          novos interesses.
        </p>

        <div class="acoes">
          <button
            type="button"
            class="botao-secundario"
            @click="refazerQuestionario"
          >
            Refazer questionário
          </button>

          <RouterLink to="/profissoes" class="botao-principal">
            Explorar catálogo de profissões
          </RouterLink>

          <RouterLink to="/" class="botao-secundario botao-inicio">
            Voltar ao início
          </RouterLink>
        </div>
      </BaseCard>
    </div>
  </main>
</template>

<style scoped>
.pagina-resultados {
  position: relative;
  isolation: isolate;
  min-height: 680px;
  overflow: hidden;
  padding: 60px 24px 90px;
  box-sizing: border-box;
}


.grupo-areas {
  margin-top: 24px;
}

.grupo-areas + .grupo-areas {
  margin-top: 32px;
}

.titulo-grupo {
  margin: 0 0 8px;
  color: #315c83;
  font-size: 20px;
}

.descricao-grupo {
  margin: 0 0 18px;
  color: #526777;
  font-size: 14px;
  line-height: 1.7;
}

.conteudo {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
}

.introducao {
  margin-bottom: 30px;
  text-align: center;
}

.etiqueta {
  color: #357bb5;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.introducao h1 {
  margin: 14px 0;
  color: #315c83;
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.2;
}

.introducao p {
  max-width: 620px;
  margin: 0 auto;
  color: #526777;
  line-height: 1.7;
}

.titulo-cartao {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.simbolo {
  display: grid;
  flex: 0 0 44px;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: 14px;
  background: #dcecf7;
  color: #315c83;
  font-size: 25px;
}

.titulo-cartao h2 {
  margin: 0 0 8px;
  color: #315c83;
  font-size: 23px;
}

.titulo-cartao p {
  margin: 0;
  color: #526777;
  line-height: 1.6;
  font-size: 14px;
}

.aviso {
  margin-top: 24px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #eaf5ff;
  color: #526777;
  font-size: 13px;
  line-height: 1.7;
}

.aviso strong {
  color: #315c83;
}

.lista-areas {
  display: grid;
  gap: 16px;
  margin-top: 26px;
}

.area {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  border: 1px solid #dcecf7;
  border-radius: 16px;
  background: #fff;
  box-sizing: border-box;
  min-width: 0;
}

.numero {
  display: grid;
  flex: 0 0 38px;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 12px;
  background: #4389cc;
  color: #fff;
  font-weight: 800;
}

.detalhes {
  flex: 1;
  min-width: 0;
}

.detalhes h3 {
  margin: 3px 0 8px;
  color: #315c83;
  font-size: 18px;
}

.detalhes p {
  margin: 0;
  color: #526777;
  font-size: 14px;
  line-height: 1.7;
}

.detalhes h4 {
  margin: 16px 0 10px;
  color: #315c83;
  font-size: 13px;
}

.etiquetas-profissoes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.etiqueta-profissao {
  padding: 7px 10px;
  border: 1px solid #d4e5f3;
  border-radius: 20px;
  background: #f5faff;
  color: #315c83;
  font-size: 12px;
}

.botao-explorar-area {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  padding: 11px 15px;
  border: 1px solid #4389cc;
  border-radius: 10px;
  background: #fff;
  color: #357bb5;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.botao-explorar-area:hover {
  background: #4389cc;
  color: #fff;
  transform: translateY(-1px);
}

.botao-explorar-area:focus-visible {
  outline: 3px solid #4389cc55;
  outline-offset: 3px;
}

.nota {
  margin: 24px 0 0;
  color: #526777;
  font-size: 13px;
  line-height: 1.7;
}

.acoes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  margin-top: 28px;
}

.botao-principal,
.botao-secundario {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 18px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.botao-principal {
  background: #4389cc;
  color: #fff;
}

.botao-principal:hover {
  background: #315c83;
}

.botao-secundario {
  border: 1px solid #d4e5f3;
  background: #fff;
  color: #315c83;
}

.botao-secundario:hover {
  background: #eaf5ff;
}

@media (max-width: 480px) {
  .pagina-resultados {
    padding: 40px 16px 65px;
  }

  .titulo-cartao h2 {
    font-size: 20px;
  }

  .area {
    gap: 12px;
    padding: 15px;
  }

  .acoes {
    flex-direction: column;
  }

  .botao-principal,
  .botao-secundario {
    width: 100%;
  }
}

.pontuacao {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin: 14px 0 8px;
  color: #526777;
  font-size: 12px;
}

.pontuacao strong {
  color: #315c83;
  font-size: 14px;
}

.barra-fundo {
  height: 8px;
  overflow: hidden;
  border-radius: 10px;
  background: #dcecf7;
}

.barra-preenchida {
  height: 100%;
  border-radius: inherit;
  background: #4389cc;
  transition: width 0.3s ease;
}

.motivos {
  margin-top: 14px;
  color: #526777;
  font-size: 13px;
  line-height: 1.7;
}

.motivos strong {
  color: #315c83;
}

.motivos ul {
  padding-left: 20px;
  margin-bottom: 0;
}

</style>
