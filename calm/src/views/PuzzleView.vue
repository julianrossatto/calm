<script setup>
import { computed, ref } from 'vue'
import CloudBackground from '../components/CloudBackground.vue'
import PuzzlePiece from '../components/PuzzlePiece.vue'

const dicas = ref([
  {
    id: 1,
    tituloCurto: 'Curiosidade',
    titulo: 'Repare no que desperta sua curiosidade',
    descricao: 'Assuntos que fazem você querer saber mais podem ser pistas sobre seus interesses. Anote o que costuma prender sua atenção no dia a dia.',
    icone: '/icones-puzzle/curiosidade.svg',
    revelada: false,
    top: 'flat', right: 'tab', bottom: 'tab', left: 'flat',
  },
  {
    id: 2,
    tituloCurto: 'Seus pontos fortes',
    titulo: 'Reconheça seus pontos fortes',
    descricao: 'Observe o que você aprende com facilidade e quais atividades fazem você se sentir capaz. Seus pontos fortes aparecem de muitos jeitos.',
    icone: '/icones-puzzle/pontos_fortes.svg',
    revelada: false,
    top: 'flat', right: 'tab', bottom: 'blank', left: 'blank',
  },
  {
    id: 3,
    tituloCurto: 'O que importa',
    titulo: 'Pense no que importa para você',
    descricao: 'Ajudar pessoas, criar, resolver problemas, ter autonomia ou trabalhar em equipe: seus valores também podem orientar suas escolhas.',
    icone: '/icones-puzzle/o_que_importa.svg',
    revelada: false,
    top: 'flat', right: 'flat', bottom: 'tab', left: 'blank',
  },
  {
    id: 4,
    tituloCurto: 'Experimente',
    titulo: 'Teste uma ideia em pequena escala',
    descricao: 'Uma atividade, um curso curto ou um projeto pessoal podem ajudar você a descobrir se um tema interessa na prática.',
    icone: '/icones-puzzle/experimente.svg',
    revelada: false,
    top: 'blank', right: 'blank', bottom: 'tab', left: 'flat',
  },
  {
    id: 5,
    tituloCurto: 'Boas conversas',
    titulo: 'Converse com quem já conhece a área',
    descricao: 'Ouvir pessoas que estudam ou trabalham em algo que chamou sua atenção ajuda a conhecer a rotina e fazer perguntas reais.',
    icone: '/icones-puzzle/boas_conversas.svg',
    revelada: false,
    top: 'tab', right: 'blank', bottom: 'blank', left: 'tab',
  },
  {
    id: 6,
    tituloCurto: 'Rotina real',
    titulo: 'Descubra como é o dia a dia',
    descricao: 'Pesquise tarefas, ambientes e desafios de diferentes profissões. A rotina real pode revelar coisas que o nome da profissão não conta.',
    icone: '/icones-puzzle/rotina_real.svg',
    revelada: false,
    top: 'blank', right: 'flat', bottom: 'blank', left: 'tab',
  },
  {
    id: 7,
    tituloCurto: 'Novos caminhos',
    titulo: 'Explore caminhos que você ainda não conhece',
    descricao: 'Uma mesma habilidade pode aparecer em áreas diferentes. Conhecer novas possibilidades amplia seu mapa de escolhas.',
    icone: '/icones-puzzle/novos_caminhos.svg',
    revelada: false,
    top: 'blank', right: 'tab', bottom: 'flat', left: 'flat',
  },
  {
    id: 8,
    tituloCurto: 'No seu ritmo',
    titulo: 'Respeite o seu tempo',
    descricao: 'Você não precisa descobrir tudo de uma vez. Cada pergunta que ajuda você a se conhecer melhor já é um passo.',
    icone: '/icones-puzzle/no_seu_ritmo.svg',
    revelada: false,
    top: 'tab', right: 'blank', bottom: 'flat', left: 'blank',
  },
  {
    id: 9,
    tituloCurto: 'Mudar faz parte',
    titulo: 'Lembre-se: você pode mudar de ideia',
    descricao: 'Conforme você aprende sobre si e sobre o mundo, novas vontades podem aparecer. Seu caminho pode ser construído aos poucos.',
    icone: '/icones-puzzle/mudar_faz_parte.svg',
    revelada: false,
    top: 'tab', right: 'flat', bottom: 'flat', left: 'tab',
  },
])

const descobertas = computed(() => dicas.value.filter((dica) => dica.revelada).length)
const progresso = computed(() => (descobertas.value / dicas.value.length) * 100)
const dicaSelecionadaId = ref(null)
const dicaSelecionada = computed(() =>
  dicas.value.find((dica) => dica.id === dicaSelecionadaId.value),
)

function revelarDica(id) {
  const dica = dicas.value.find((item) => item.id === id)
  if (!dica) return

  dica.revelada = true
  dicaSelecionadaId.value = id
}

function selecionarDica(id) {
  dicaSelecionadaId.value = id
}
</script>

<template>
  <main class="pagina-puzzle">
    <CloudBackground class="fundo-puzzle" />

    <div class="conteudo-puzzle">
      <section class="puzzle-cabecalho">
        <span class="etiqueta">UM PASSO DE CADA VEZ</span>
        <h1>Um puzzle de descobertas</h1>
        <p>
          Cada peça guarda uma pista para você explorar seus interesses e imaginar novos caminhos.
          Toque em uma peça para revelar a dica.
        </p>

        <div
          class="barra-progresso"
          role="progressbar"
          aria-label="Progresso das descobertas"
          :aria-valuenow="descobertas"
          aria-valuemin="0"
          :aria-valuemax="dicas.length"
        >
          <span :style="{ width: `${progresso}%` }"></span>
        </div>
        <div class="progresso-legenda" aria-live="polite">
          <span>{{ descobertas }} de {{ dicas.length }} peças descobertas</span>
          <span>{{ Math.round(progresso) }}%</span>
        </div>
      </section>

      <section class="puzzle-layout" aria-label="Puzzle de dicas">
        <div class="puzzle-grade" aria-label="Grade com nove peças">
          <PuzzlePiece
            v-for="dica in dicas"
            :key="dica.id"
            :index="dica.id"
            :title="dica.tituloCurto"
            :icon="dica.icone"
            :revealed="dica.revelada"
            :selected="dicaSelecionadaId === dica.id"
            :top="dica.top"
            :right="dica.right"
            :bottom="dica.bottom"
            :left="dica.left"
            @reveal="revelarDica(dica.id)"
            @select="selecionarDica(dica.id)"
          />
        </div>

        <aside class="painel-dica" aria-live="polite" aria-atomic="true">
          <template v-if="dicaSelecionada">
            <span class="painel-icone" aria-hidden="true">
              <img :src="dicaSelecionada.icone" alt="" />
            </span>
            <h2>{{ dicaSelecionada.titulo }}</h2>
            <p>{{ dicaSelecionada.descricao }}</p>
            <p v-if="descobertas === dicas.length" class="mensagem-conclusao">
              Você completou o puzzle. Leve com você as pistas que fizeram sentido e continue explorando no seu tempo.
            </p>
          </template>
          <div v-else class="painel-vazio">
            <h2>Escolha uma peça</h2>
            <p>A primeira dica aparece aqui. Você pode descobrir as peças na ordem que quiser.</p>
          </div>
        </aside>
      </section>

      <section class="proximo-passo">
        <div>
          <span class="etiqueta">QUANDO QUISER CONTINUAR</span>
          <h2>Uma descoberta pode levar a outra.</h2>
          <p>Explore profissões e encontre áreas que conversam com o que chama sua atenção.</p>
        </div>
        <RouterLink to="/profissoes" class="botao-puzzle">
          Conhecer profissões <span aria-hidden="true">➤</span>
        </RouterLink>
      </section>
    </div>
  </main>
</template>

<style scoped>
.pagina-puzzle {
  position: relative;
  isolation: isolate;
  width: 100%;
  margin: 0 auto;
  background: var(--color-home-background);
}

.conteudo-puzzle {
  position: relative;
  z-index: 1;
  width: min(100% - 48px, 1040px);
  margin: 0 auto;
  padding: 52px 0 76px;
}

.puzzle-cabecalho {
  max-width: 680px;
  margin: 0 auto 32px;
  text-align: center;
}

.etiqueta {
  display: inline-block;
  color: var(--color-brand);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.3px;
}

.puzzle-cabecalho h1 {
  margin: 12px 0 10px;
  color: var(--color-brand-dark);
  font-size: clamp(30px, 5vw, 46px);
  letter-spacing: -1.4px;
  line-height: 1.1;
}

.puzzle-cabecalho > p {
  max-width: 580px;
  margin: 0 auto;
  color: var(--color-text);
  font-size: 16px;
  line-height: 1.7;
}

.barra-progresso {
  height: 9px;
  margin-top: 26px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--color-sky-100);
}

.barra-progresso span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--color-brand), var(--color-brand-soft));
  transition: width 250ms ease;
}

.progresso-legenda {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: var(--color-text-muted);
  font-size: 13px;
  font-weight: 700;
}

.puzzle-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(260px, 0.75fr);
  align-items: center;
  gap: clamp(26px, 5vw, 60px);
}

.puzzle-grade {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  max-width: 620px;
  aspect-ratio: 1;
  margin: 0 auto;
  padding: 14px;
  filter: drop-shadow(0 12px 22px #315c8317);
}

.painel-dica {
  min-height: 290px;
  padding: 30px;
  border: 1px solid var(--color-border-blue-soft);
  border-radius: var(--radius-card);
  background: var(--color-card-background);
  box-shadow: var(--shadow-card);
}

.painel-icone {
  display: grid;
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  place-items: center;
  border-radius: 16px;
  background: var(--color-sky-50);
}

.painel-icone img {
  display: block;
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.painel-dica h2 {
  margin: 8px 0 10px;
  color: var(--color-brand-dark);
  font-size: 22px;
  line-height: 1.25;
}

.painel-dica p {
  margin: 0;
  color: var(--color-text);
  font-size: 15px;
  line-height: 1.7;
}

.painel-dica .mensagem-conclusao {
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--color-border-divider);
  color: var(--color-brand-strong);
  font-weight: 700;
}

.painel-vazio {
  display: flex;
  min-height: 228px;
  flex-direction: column;
  justify-content: center;
}

.painel-icone--vazio {
  color: var(--color-brand);
}

.painel-vazio h2 {
  margin-top: 0;
}

.proximo-passo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 46px;
  padding: 26px 30px;
  border: 1px solid var(--color-border-blue-soft);
  border-radius: var(--radius-card);
  background: linear-gradient(115deg, #ffffff, #f0f8ff);
}

.proximo-passo h2 {
  margin: 7px 0 4px;
  color: var(--color-brand-dark);
  font-size: 21px;
}

.proximo-passo p {
  margin: 0;
  color: var(--color-text);
  line-height: 1.6;
}

.botao-puzzle {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 12px;
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--button-radius);
  background: var(--color-brand);
  color: var(--color-white);
  font-weight: 700;
  text-decoration: none;
  transition: background 180ms ease, transform 180ms ease;
}

.botao-puzzle:hover {
  transform: translateY(-2px);
  background: var(--color-brand-dark);
}

.botao-puzzle:focus-visible {
  outline: 3px solid var(--color-brand-strong);
  outline-offset: 3px;
}

@media (max-width: 760px) {
  .pagina-puzzle :deep(.fundo-puzzle .cena-background) {
    transform: scale(0.8);
  }

  .conteudo-puzzle {
    width: min(100% - 32px, 560px);
    padding: 36px 0 54px;
  }

  .puzzle-cabecalho {
    margin-bottom: 24px;
  }

  .puzzle-layout {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .puzzle-grade {
    padding: 10px;
  }

  .painel-dica {
    min-height: unset;
    padding: 24px;
  }

  .painel-vazio {
    min-height: 180px;
  }

  .proximo-passo {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 30px;
    padding: 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .barra-progresso span,
  .botao-puzzle {
    transition: none;
  }
}
</style>
