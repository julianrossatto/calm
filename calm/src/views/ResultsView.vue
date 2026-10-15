<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import CloudBackground from '../components/CloudBackground.vue'
import BaseCard from '../components/BaseCard.vue'
import { gerarRecomendacoes } from '../utils/recomendacoes.js'

const router = useRouter()
const explicacaoAberta = ref(false)

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

// ===== Animação do accordion (altura medida em JS) =====
const DURACAO = 320
const TRANSICAO = `height ${DURACAO}ms ease, margin-top ${DURACAO}ms ease, opacity 240ms ease`

function reduzMovimento() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function limparEstilos(el) {
  el.style.transition = ''
  el.style.height = ''
  el.style.marginTop = ''
  el.style.opacity = ''
}

function aoEntrar(el, done) {
  if (reduzMovimento()) return done()

  // Mede a altura real do conteúdo com a altura livre (auto)
  el.style.transition = 'none'
  el.style.height = 'auto'
  el.style.marginTop = '10px'
  const alturaFinal = el.getBoundingClientRect().height

  // Volta ao estado inicial da animação
  el.style.height = '0px'
  el.style.marginTop = '0px'
  el.style.opacity = '0'
  void el.offsetHeight // força o navegador a registrar o estado inicial

  el.style.transition = TRANSICAO
  el.style.height = `${alturaFinal}px`
  el.style.marginTop = '10px'
  el.style.opacity = '1'

  setTimeout(done, DURACAO)
}

function aoSair(el, done) {
  if (reduzMovimento()) return done()

  el.style.transition = 'none'
  el.style.height = `${el.offsetHeight}px`
  void el.offsetHeight

  el.style.transition = TRANSICAO
  el.style.height = '0px'
  el.style.marginTop = '0px'
  el.style.opacity = '0'

  setTimeout(done, DURACAO)
}

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
                  <span>Correspondência entre etapas</span>
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
                  <span>Correspondência entre etapas</span>
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

        <section class="explicacao-recomendacoes" aria-labelledby="titulo-explicacao">
          <button
            id="titulo-explicacao"
            class="controle-explicacao"
            type="button"
            :aria-expanded="explicacaoAberta"
            aria-controls="conteudo-explicacao"
            @click="explicacaoAberta = !explicacaoAberta"
          >
            <span>Como as respostas viram sugestões?</span>
            <span
              class="seta-explicacao"
              :class="{ 'seta-aberta': explicacaoAberta }"
              aria-hidden="true"
            ></span>
          </button>

          <Transition
            :css="false"
            @enter="aoEntrar"
            @after-enter="limparEstilos"
            @leave="aoSair"
          >
            <div
              v-if="explicacaoAberta"
              id="conteudo-explicacao"
              class="explicacao-conteudo"
              role="region"
              aria-labelledby="titulo-explicacao"
            >
              <div class="texto-explicacao">
                <p>
                  Cada resposta selecionada é associada a uma ou mais áreas. Em cada etapa,
                  uma área pode receber no máximo um ponto, mesmo que você marque várias
                  respostas relacionadas a ela.
                </p>
                <p>
                  A porcentagem compara as etapas em que suas respostas combinaram com a
                  área com as etapas que tinham opções capazes de apontar para ela. Ela
                  não representa chance de sucesso, aptidão ou uma decisão sobre seu futuro.
                </p>
                <p>
                  As afinidades são regras editoriais do projeto. O retorno de estudantes
                  pode orientar futuras revisões dessas relações e das descrições. Esta
                  versão não coleta nem envia esse retorno.
                </p>
              </div>
            </div>
          </Transition>
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
  color: var(--color-brand-dark);
  font-size: 20px;
}

.descricao-grupo {
  margin: 0 0 18px;
  color: var(--color-text);
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
  color: var(--color-brand-hover);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.introducao h1 {
  margin: 14px 0;
  color: var(--color-brand-dark);
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.2;
}

.introducao p {
  max-width: 620px;
  margin: 0 auto;
  color: var(--color-text);
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
  background: var(--color-sky-100);
  color: var(--color-brand-dark);
  font-size: 25px;
}

.titulo-cartao h2 {
  margin: 0 0 8px;
  color: var(--color-brand-dark);
  font-size: 23px;
}

.titulo-cartao p {
  margin: 0;
  color: var(--color-text);
  line-height: 1.6;
  font-size: 14px;
}

.aviso {
  margin-top: 24px;
  padding: 14px 16px;
  border-radius: 12px;
  background: var(--color-sky-50);
  color: var(--color-text);
  font-size: 13px;
  line-height: 1.7;
}

.aviso strong {
  color: var(--color-brand-dark);
}

/* ===== Accordion "Como as respostas viram sugestões?" ===== */
.explicacao-recomendacoes {
  margin-top: 28px;
  padding: 15px 16px;
  border: 1px solid var(--color-border-blue);
  border-radius: var(--button-radius);
  background: var(--color-surface-soft);
  color: var(--color-text);
  font-size: 13px;
  line-height: 1.7;
}

.controle-explicacao {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--color-brand-dark);
  font: inherit;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}

.controle-explicacao:focus-visible {
  border-radius: 4px;
  outline: 3px solid var(--color-focus-ring);
  outline-offset: 4px;
}

.seta-explicacao {
  flex: 0 0 9px;
  width: 9px;
  height: 9px;
  margin-top: -4px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  transition: transform 0.28s ease;
}

.seta-aberta {
  transform: rotate(225deg);
}

/* A animação de altura/opacidade é feita em JS (aoEntrar / aoSair) */
.explicacao-conteudo {
  display: block;
  margin-top: 10px;
  overflow: hidden;
}

.texto-explicacao p {
  margin: 10px 0 0;
}

.texto-explicacao p:first-child {
  margin-top: 0;
}

@media (prefers-reduced-motion: reduce) {
  .seta-explicacao {
    transition-duration: 0.01ms;
  }
}

/* ===== Lista de áreas ===== */
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
  border: 1px solid var(--color-sky-100);
  border-radius: 16px;
  background: var(--color-surface);
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
  background: var(--color-brand);
  color: var(--color-surface);
  font-weight: 800;
}

.detalhes {
  flex: 1;
  min-width: 0;
}

.detalhes h3 {
  margin: 3px 0 8px;
  color: var(--color-brand-dark);
  font-size: 18px;
}

.detalhes p {
  margin: 0;
  color: var(--color-text);
  font-size: 14px;
  line-height: 1.7;
}

.detalhes h4 {
  margin: 16px 0 10px;
  color: var(--color-brand-dark);
  font-size: 13px;
}

.etiquetas-profissoes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.etiqueta-profissao {
  padding: 7px 10px;
  border: 1px solid var(--color-border-blue);
  border-radius: 20px;
  background: var(--color-canvas);
  color: var(--color-brand-dark);
  font-size: 12px;
}

.botao-explorar-area {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  padding: 11px 15px;
  border: 1px solid var(--color-brand);
  border-radius: var(--button-radius);
  background: var(--color-surface);
  color: var(--color-brand-hover);
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.botao-explorar-area:hover {
  background: var(--color-brand);
  color: var(--color-surface);
  transform: translateY(-1px);
}

.botao-explorar-area:focus-visible {
  outline: 3px solid var(--color-focus-ring);
  outline-offset: 3px;
}

.nota {
  margin: 24px 0 0;
  color: var(--color-text);
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
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--button-radius);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.botao-principal {
  background: var(--color-brand);
  color: var(--color-surface);
}

.botao-principal:hover {
  background: var(--color-brand-dark);
}

.botao-secundario {
  border: 1px solid var(--color-border-blue);
  background: var(--color-surface);
  color: var(--color-brand-dark);
}

.botao-secundario:hover {
  background: var(--color-sky-50);
}

.pontuacao {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin: 14px 0 8px;
  color: var(--color-text);
  font-size: 12px;
}

.pontuacao strong {
  color: var(--color-brand-dark);
  font-size: 14px;
}

.barra-fundo {
  height: 8px;
  overflow: hidden;
  border-radius: var(--button-radius);
  background: var(--color-sky-100);
}

.barra-preenchida {
  height: 100%;
  border-radius: inherit;
  background: var(--color-brand);
  transition: width 0.3s ease;
}

.motivos {
  margin-top: 14px;
  color: var(--color-text);
  font-size: 13px;
  line-height: 1.7;
}

.motivos strong {
  color: var(--color-brand-dark);
}

.motivos ul {
  padding-left: 20px;
  margin-bottom: 0;
}

/* Media query no fim para sobrescrever as regras base */
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
</style>
