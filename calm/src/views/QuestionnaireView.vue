
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import CloudBackground from '../components/CloudBackground.vue'
import BaseCard from '../components/BaseCard.vue'

const router = useRouter()

const etapaAtual = ref(0)

const respostas = ref([
  [],
  [],
  [],
  [],
  [],
])

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
    titulo: 'Quais áreas você gostaria de conhecer?',
    descricao: 'Esta é uma oportunidade para explorar caminhos, mesmo que ainda não conheça todos.',
    opcoes: [
      'Tecnologia e desenvolvimento de software',
      'Design, comunicação e produção audiovisual',
      'Saúde, bem-estar e qualidade de vida',
      'Educação, psicologia e ciências humanas',
      'Administração, negócios e empreendedorismo',
      'Engenharia, ciências e meio ambiente',
      'Ainda não sei. Quero conhecer possibilidades variadas.',
    ],
  },
]

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
    'calm-respostas',
    JSON.stringify(respostas.value)
  )

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
  color: #357bb5;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.cabecalho-pagina h1 {
  margin: 14px 0;
  color: #315c83;
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.2;
}

.cabecalho-pagina p {
  color: #526777;
  line-height: 1.7;
}

.informacoes-progresso {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: #526777;
  font-size: 13px;
}

.barra {
  height: 8px;
  margin: 12px 0 30px;
  overflow: hidden;
  border-radius: 20px;
  background: #dcecf7;
}

.barra-preenchida {
  height: 100%;
  border-radius: inherit;
  background: #4389cc;
  transition: width 0.3s ease;
}

.pergunta h2 {
  margin: 0 0 10px;
  color: #315c83;
  font-size: 23px;
  line-height: 1.45;
}

.pergunta p {
  color: #526777;
  line-height: 1.6;
}

.instrucao {
  display: inline-block;
  margin-top: 4px;
  color: #4389cc;
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
  border: 1px solid #d4e5f3;
  border-radius: 12px;
  background: #fff;
  color: #526777;
  text-align: left;
  line-height: 1.5;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}

.opcao:hover {
  border-color: #79b9eb;
  background: #f5faff;
}

.opcao.selecionada {
  border-color: #4389cc;
  background: #eaf5ff;
  color: #315c83;
}

.marcador {
  display: grid;
  flex: 0 0 22px;
  width: 22px;
  height: 22px;
  place-items: center;
  border: 1.5px solid #a9c7df;
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  font-weight: 800;
}

.selecionada .marcador {
  border-color: #4389cc;
  background: #4389cc;
}

.aviso {
  margin-top: 18px;
  color: #526777;
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
  padding: 13px 20px;
  border: 0;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
}

.botao-principal {
  background: #4389cc;
  color: #fff;
}

.botao-principal:hover:not(:disabled) {
  background: #315c83;
}

.botao-principal:disabled {
  background: #a8c8e3;
  cursor: not-allowed;
}

.botao-secundario {
  border: 1px solid #d4e5f3;
  background: #fff;
  color: #315c83;
}

.botao-secundario:hover {
  background: #eaf5ff;
}

.mensagem-final {
  margin: 24px 12px 0;
  color: #526777;
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
    padding: 12px;
    font-size: 13px;
  }
}
</style>
