
<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

import CloudBackground from '../components/CloudBackground.vue'
import BaseCard from '../components/BaseCard.vue'
import {
  opcoesProjetoFinal,
  opcaoAreaIndefinida,
} from '../utils/recomendacoes.js'

const router = useRouter()


const etapas = [
  {
    titulo: 'O que desperta sua curiosidade?',
    descricao: 'Pense nas atividades que você gosta ou gostaria de experimentar.',
    opcoes: [
      'Resolver problemas usando tecnologia',
      'Criar desenhos, vídeos ou projetos visuais',
      'Ajudar e orientar outras pessoas',
      'Organizar projetos e tomar decisões',
      'Investigar assuntos e descobrir como as coisas funcionam',
      'Construir, consertar ou trabalhar com atividades práticas',
    ],
  },
  {
    titulo: 'Quais atividades combinam com você?',
    descricao: 'Selecione as habilidades que você reconhece em si ou deseja desenvolver.',
    opcoes: [
      'Analisar informações e encontrar soluções',
      'Ter ideias criativas e originais',
      'Explicar assuntos e compartilhar conhecimentos',
      'Planejar tarefas e organizar detalhes',
      'Trabalhar com ferramentas, equipamentos ou sistemas',
      'Ouvir pessoas e compreender suas necessidades',
    ],
  },
  {
    titulo: 'O que você valoriza em uma profissão?',
    descricao: 'Escolha os aspectos que seriam importantes no seu futuro.',
    opcoes: [
      'Estabilidade e segurança financeira',
      'Criatividade e liberdade para inovar',
      'Ajudar pessoas e contribuir com a sociedade',
      'Aprender coisas novas constantemente',
      'Ter autonomia para tomar decisões',
      'Crescer profissionalmente e assumir desafios',
    ],
  },
  {
    titulo: 'Em qual ambiente você se imagina trabalhando?',
    descricao: 'Não precisa ter certeza. Escolha os ambientes que despertam seu interesse.',
    opcoes: [
      'Em equipe, colaborando com outras pessoas',
      'De forma independente, concentrado nas minhas tarefas',
      'Em contato direto com pessoas e clientes',
      'Com computadores, tecnologia e dados',
      'Em ambientes práticos, oficinas ou laboratórios',
      'Em ambientes criativos, desenvolvendo ideias e projetos',
    ],
  },
  {
    titulo: 'Se pudesse participar de um projeto, qual despertaria sua curiosidade?',
    descricao: 'Escolha as propostas que você teria vontade de experimentar, mesmo que ainda não conheça essas profissões.',
    opcoes: [
      ...opcoesProjetoFinal.map((opcao) => opcao.texto),
      opcaoAreaIndefinida,
    ],
  },
]

const CHAVE_PROGRESSO = 'horizonte-questionario-progresso'

function criarRespostasVazias() {
  return etapas.map(() => [])
}

function recuperarProgresso() {
  try {
    const salvo = localStorage.getItem(CHAVE_PROGRESSO)
    if (!salvo) return null

    const dados = JSON.parse(salvo)
    const estruturaValida =
      Number.isInteger(dados.etapaAtual) &&
      dados.etapaAtual >= 0 &&
      dados.etapaAtual < etapas.length &&
      Array.isArray(dados.respostas) &&
      dados.respostas.length === etapas.length &&
      dados.respostas.every(
        (respostasEtapa, indice) =>
          Array.isArray(respostasEtapa) &&
          respostasEtapa.every((resposta) => etapas[indice].opcoes.includes(resposta)),
      )

    if (!estruturaValida) return null

    return {
      etapaAtual: dados.etapaAtual,
      respostas: dados.respostas.map((respostasEtapa) => [...respostasEtapa]),
    }
  } catch {
    return null
  }
}

const progressoSalvo = recuperarProgresso()
const etapaAtual = ref(progressoSalvo?.etapaAtual ?? 0)
const respostas = ref(progressoSalvo?.respostas ?? criarRespostasVazias())

function salvarProgresso() {
  try {
    localStorage.setItem(
      CHAVE_PROGRESSO,
      JSON.stringify({
        etapaAtual: etapaAtual.value,
        respostas: respostas.value,
      }),
    )
  } catch {
    // O questionário continua funcionando se o navegador bloquear o armazenamento.
  }
}

watch([etapaAtual, respostas], salvarProgresso, { deep: true })
const etapa = computed(() => etapas[etapaAtual.value])

const progresso = computed(
  () => ((etapaAtual.value + 1) / etapas.length) * 100
)

const podeAvancar = computed(
  () => respostas.value[etapaAtual.value].length > 0
)

const ultimaEtapa = computed(
  () => etapaAtual.value === etapas.length - 1
)

function alternarResposta(opcao) {
  const selecionadas = respostas.value[etapaAtual.value]

  if (selecionadas.includes(opcao)) {
    respostas.value[etapaAtual.value] =
      selecionadas.filter((item) => item !== opcao)
  } else {
    respostas.value[etapaAtual.value] = [
      ...selecionadas,
      opcao,
    ]
  }
}

function voltar() {
  if (etapaAtual.value > 0) {
    etapaAtual.value--
  } else {
    router.push('/')
  }
}

function continuar() {
  if (!podeAvancar.value) return

  if (!ultimaEtapa.value) {
    etapaAtual.value++
    return
  }

  // Guarda as respostas nesta sessão do navegador.
  sessionStorage.setItem(
    'horizonte-respostas',
    JSON.stringify(respostas.value)
  )

  localStorage.removeItem(CHAVE_PROGRESSO)
  router.push('/resultados')
}
</script>

<template>
  <main class="pagina-questionario">
    <CloudBackground />

    <div class="conteudo">
      <header class="cabecalho-pagina">
        <span class="etiqueta">EXPLORE SEUS INTERESSES</span>

        <h1>Vamos descobrir possibilidades?</h1>

        <p>
          Não existe resposta certa ou errada.
          Descubra o que combina com você, no seu tempo.
        </p>

        <p class="mensagem-salvamento">
          Seu progresso é salvo automaticamente neste navegador.
        </p>
      </header>

      <BaseCard>
        <div class="informacoes-progresso">
          <span>Etapa {{ etapaAtual + 1 }} de {{ etapas.length }}</span>
          <span>{{ Math.round(progresso) }}% concluído</span>
        </div>

        <div
          class="barra"
          role="progressbar"
          :aria-valuenow="Math.round(progresso)"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Progresso do questionário"
        >
          <div
            class="barra-preenchida"
            :style="{ width: `${progresso}%` }"
          ></div>
        </div>

        <div class="pergunta">
          <h2>{{ etapa.titulo }}</h2>
          <p>{{ etapa.descricao }}</p>
          <span class="instrucao">Selecione uma ou mais opções.</span>
        </div>

        <div class="opcoes">
          <button
            v-for="opcao in etapa.opcoes"
            :key="opcao"
            type="button"
            class="opcao"
            :class="{
              selecionada: respostas[etapaAtual].includes(opcao)
            }"
            :aria-pressed="respostas[etapaAtual].includes(opcao)"
            @click="alternarResposta(opcao)"
          >
            <span class="marcador">
              <span v-if="respostas[etapaAtual].includes(opcao)">
                ✓
              </span>
            </span>

            <span>{{ opcao }}</span>
          </button>
        </div>

<Transition name="aviso">
  <p v-if="!podeAvancar" class="aviso">
    Selecione pelo menos uma opção para continuar.
  </p>
</Transition>

        <div class="acoes">
          <button
            type="button"
            class="botao-secundario"
            @click="voltar"
          >
            ← {{ etapaAtual === 0 ? 'Início' : 'Voltar' }}
          </button>

          <button
            type="button"
            class="botao-principal"
            :disabled="!podeAvancar"
            @click="continuar"
          >
            {{ ultimaEtapa ? 'Ver possibilidades' : 'Continuar →' }}
          </button>
        </div>
      </BaseCard>

      <p class="mensagem-final">
        Cada descoberta é um passo. Não precisa decidir seu futuro agora.
      </p>
    </div>
  </main>
</template>

<style scoped>
.pagina-questionario {
  position: relative;
  isolation: isolate;
  min-height: 680px;
  overflow: hidden;
  padding: 60px 24px 90px;
}

.conteudo {
  position: relative;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
}

.cabecalho-pagina {
  margin-bottom: 30px;
  text-align: center;
}

.etiqueta {
  color: var(--color-brand-hover);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.cabecalho-pagina h1 {
  margin: 14px 0;
  color: var(--color-brand-dark);
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.2;
}

.cabecalho-pagina p {
  color: var(--color-text);
  line-height: 1.7;
}

.mensagem-salvamento {
  margin: 12px 0 0;
  color: var(--color-text-subtle);
  font-size: 13px;
  text-align: center;
}
.informacoes-progresso {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--color-text);
  font-size: 13px;
}

.barra {
  height: 8px;
  margin: 12px 0 30px;
  overflow: hidden;
  border-radius: 20px;
  background: var(--color-sky-100);
}

.barra-preenchida {
  height: 100%;
  border-radius: inherit;
  background: var(--color-brand);
  transition: width 0.3s ease;
}

.pergunta h2 {
  margin: 0 0 10px;
  color: var(--color-brand-dark);
  font-size: 23px;
  line-height: 1.45;
}

.pergunta p {
  color: var(--color-text);
  line-height: 1.6;
}

.instrucao {
  display: inline-block;
  margin-top: 4px;
  color: var(--color-brand);
  font-size: 13px;
  font-weight: 700;
}

.opcoes {
  display: grid;
  gap: 12px;
  margin-top: 24px;
}

.opcao {
  display: flex;
  align-items: center;
  gap: 13px;
  width: 100%;
  padding: 15px;
  border: 1px solid var(--color-border-blue);
  border-radius: 12px;
  background: var(--color-surface);
  color: var(--color-text);
  text-align: left;
  line-height: 1.5;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}

.opcao:hover {
  border-color: var(--color-brand-soft);
  background: var(--color-canvas);
}

.opcao.selecionada {
  border-color: var(--color-brand);
  background: var(--color-sky-50);
  color: var(--color-brand-dark);
}

.marcador {
  display: grid;
  flex: 0 0 22px;
  width: 22px;
  height: 22px;
  place-items: center;
  border: 1.5px solid var(--color-sky-450);
  border-radius: 6px;
  color: var(--color-surface);
  font-size: 14px;
  font-weight: 800;
}

.selecionada .marcador {
  border-color: var(--color-brand);
  background: var(--color-brand);
}

.aviso {
  margin-top: 18px;
  color: var(--color-text);
  font-size: 13px;
  line-height: 1.5;
  overflow: hidden;
}

.aviso-enter-active,
.aviso-leave-active {
  transition:
    opacity 0.3s ease,
    max-height 0.3s ease,
    margin-top 0.3s ease;
}

.aviso-enter-from,
.aviso-leave-to {
  opacity: 0;
  max-height: 0;
  margin-top: 0;
}

.aviso-enter-to,
.aviso-leave-from {
  opacity: 1;
  max-height: 40px;
  margin-top: 18px;
}

.acoes {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 30px;
}

.botao-principal,
.botao-secundario {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--button-padding-y) var(--button-padding-x);
  border: 0;
  border-radius: var(--button-radius);
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
}

.botao-principal {
  background: var(--color-brand);
  color: var(--color-surface);
}

.botao-principal:hover:not(:disabled) {
  background: var(--color-brand-dark);
}

.botao-principal:disabled {
  background: var(--color-sky-400);
  cursor: not-allowed;
}

.botao-secundario {
  border: 1px solid var(--color-border-blue);
  background: var(--color-surface);
  color: var(--color-brand-dark);
}

.botao-secundario:hover {
  background: var(--color-sky-50);
}

.mensagem-final {
  margin: 24px 12px 0;
  color: var(--color-text);
  font-size: 13px;
  line-height: 1.7;
  text-align: center;
}

@media (max-width: 480px) {
  .pagina-questionario {
    padding: 40px 16px 65px;
  }

  .pergunta h2 {
    font-size: 20px;
  }

  .opcao {
    padding: 13px;
  }

  .acoes {
    align-items: stretch;
  }

  .botao-principal,
  .botao-secundario {
    padding: var(--button-padding-y) var(--button-padding-x);
    font-size: 13px;
  }
}
</style>
