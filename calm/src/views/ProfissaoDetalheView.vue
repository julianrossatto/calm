<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { profissoes } from '../data/profissoes.js'

const route = useRoute()

// Busca a profissão usando o identificador presente na URL.
const profissao = computed(() =>
  profissoes.find((item) => item.id === route.params.id),
)

// Sugere outras profissões da mesma área.
const profissoesRelacionadas = computed(() => {
  if (!profissao.value) return []

  return profissoes
    .filter(
      (item) =>
        item.areaId === profissao.value.areaId &&
        item.id !== profissao.value.id,
    )
    .slice(0, 3)
})
</script>

<template>
  <main class="pagina-detalhe">
    <div class="conteudo-detalhe">
      <RouterLink class="voltar-catalogo" to="/profissoes">
        <span aria-hidden="true">←</span>
        Voltar ao catálogo
      </RouterLink>

      <section v-if="profissao" class="detalhe-principal">
        <header class="cabecalho-detalhe">
          <span class="etiqueta-area">{{ profissao.area }}</span>
          <p class="sobretitulo">CONHEÇA UMA POSSIBILIDADE</p>
          <h1>{{ profissao.nome }}</h1>
          <p class="descricao-principal">{{ profissao.descricao }}</p>
        </header>

        <div class="grade-detalhes">
          <section class="bloco-detalhe bloco-destaque">
            <span class="icone-bloco" aria-hidden="true">✦</span>
            <h2>O que faz essa profissão?</h2>
            <p>{{ profissao.rotina || 'As atividades podem variar conforme a área de atuação, a empresa e a experiência profissional.' }}</p>
          </section>

          <section class="bloco-detalhe">
            <span class="icone-bloco" aria-hidden="true">⌁</span>
            <h2>Formação e estudos</h2>
            <p>{{ profissao.formacao || 'Os caminhos de formação dependem da função e dos requisitos de cada empregador ou órgão profissional.' }}</p>
          </section>

          <section class="bloco-detalhe">
            <span class="icone-bloco" aria-hidden="true">◎</span>
            <h2>Habilidades relacionadas</h2>
            <ul class="lista-habilidades">
              <li v-for="habilidade in profissao.habilidades || []" :key="habilidade">
                {{ habilidade }}
              </li>
            </ul>
          </section>

          <section class="bloco-detalhe">
            <span class="icone-bloco" aria-hidden="true">⌂</span>
            <h2>Onde pode atuar?</h2>
            <ul class="lista-locais">
              <li v-for="local in profissao.locaisAtuacao || []" :key="local">
                {{ local }}
              </li>
            </ul>
          </section>
        </div>

        <section v-if="profissoesRelacionadas.length" class="relacionadas">
          <div class="titulo-relacionadas">
            <div>
              <span class="sobretitulo">CONTINUE EXPLORANDO</span>
              <h2>Outras profissões dessa área</h2>
            </div>
            <span class="area-relacionada">{{ profissao.area }}</span>
          </div>

          <div class="grade-relacionadas">
            <article
              v-for="relacionada in profissoesRelacionadas"
              :key="relacionada.id"
              class="card-relacionada"
            >
              <h3>{{ relacionada.nome }}</h3>
              <p>{{ relacionada.descricao }}</p>
              <RouterLink
                :to="{ name: 'profissao-detalhe', params: { id: relacionada.id } }"
              >
                Ver detalhes <span aria-hidden="true">→</span>
              </RouterLink>
            </article>
          </div>
        </section>

        <p class="aviso-informativo">
          As informações da Calm são introdutórias e servem como ponto de partida
          para sua pesquisa. Requisitos de formação, registro profissional e rotina
          podem variar conforme a função, a região e a legislação aplicável.
        </p>
      </section>

      <section v-else class="nao-encontrada">
        <span class="icone-nao-encontrada" aria-hidden="true">☁</span>
        <h1>Não encontramos essa profissão.</h1>
        <p>Talvez o endereço esteja incorreto ou essa profissão não esteja mais no catálogo.</p>
        <RouterLink class="botao-voltar" to="/profissoes">
          Explorar profissões
        </RouterLink>
      </section>
    </div>
  </main>
</template>

<style scoped>
.pagina-detalhe {
  min-height: 100vh;
  padding: 45px 24px 80px;
  background: var(--color-canvas-alt);
  color: var(--color-brand-dark);
}

.conteudo-detalhe {
  max-width: 1050px;
  margin: 0 auto;
}

.voltar-catalogo {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 28px;
  color: var(--color-brand);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.voltar-catalogo:hover {
  color: var(--color-brand-strong);
}

.cabecalho-detalhe {
  padding: 42px 34px;
  border: 1px solid var(--color-border-soft);
  border-radius: 24px;
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-gradient) 100%);
  box-shadow: 0 12px 35px rgba(49, 92, 131, 0.06);
  text-align: center;
}

.etiqueta-area {
  display: inline-block;
  padding: 7px 12px;
  border-radius: 20px;
  background: var(--color-sky-150);
  color: var(--color-brand-hover);
  font-size: 12px;
  font-weight: 700;
}

.sobretitulo {
  margin: 20px 0 10px;
  color: var(--color-brand);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.cabecalho-detalhe h1 {
  margin: 0 auto 14px;
  font-size: clamp(32px, 5vw, 48px);
  line-height: 1.15;
  letter-spacing: -1.2px;
}

.descricao-principal {
  max-width: 700px;
  margin: 0 auto;
  color: var(--color-text-muted);
  font-size: 16px;
  line-height: 1.8;
}

.grade-detalhes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 22px;
}

.bloco-detalhe {
  min-width: 0;
  padding: 26px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  background: var(--color-surface);
  box-shadow: 0 8px 24px rgba(49, 92, 131, 0.04);
}

.bloco-destaque {
  background: var(--color-surface-cool);
}

.icone-bloco {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: var(--color-sky-200);
  color: var(--color-brand-hover);
  font-size: 22px;
}

.bloco-detalhe h2 {
  margin: 16px 0 10px;
  font-size: 19px;
  line-height: 1.35;
}

.bloco-detalhe p {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 1.8;
}

.lista-habilidades,
.lista-locais {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.lista-habilidades li,
.lista-locais li {
  padding: 7px 10px;
  border: 1px solid var(--color-border-blue-soft);
  border-radius: var(--button-radius);
  background: var(--color-surface-tinted);
  color: var(--color-text-blue);
  font-size: 12px;
  line-height: 1.4;
}

.relacionadas {
  margin-top: 38px;
}

.titulo-relacionadas {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.titulo-relacionadas .sobretitulo {
  display: block;
  margin: 0 0 8px;
}

.titulo-relacionadas h2 {
  margin: 0;
  font-size: clamp(21px, 3vw, 27px);
}

.area-relacionada {
  color: var(--color-text-subtle);
  font-size: 12px;
}

.grade-relacionadas {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 15px;
}

.card-relacionada {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: var(--color-surface);
}

.card-relacionada h3 {
  margin: 0 0 9px;
  font-size: 16px;
  line-height: 1.4;
}

.card-relacionada p {
  margin: 0 0 18px;
  color: var(--color-text-muted);
  font-size: 13px;
  line-height: 1.6;
}

.card-relacionada a {
  margin-top: auto;
  color: var(--color-brand-hover);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.card-relacionada a:hover {
  text-decoration: underline;
}

.aviso-informativo {
  margin: 26px 4px 0;
  color: var(--color-text-subtle);
  font-size: 12px;
  line-height: 1.8;
}

.nao-encontrada {
  padding: 70px 24px;
  border: 1px solid var(--color-border);
  border-radius: 24px;
  background: var(--color-surface);
  text-align: center;
}

.icone-nao-encontrada {
  color: var(--color-brand);
  font-size: 42px;
}

.nao-encontrada h1 {
  margin: 16px 0 10px;
  font-size: clamp(25px, 4vw, 34px);
}

.nao-encontrada p {
  max-width: 520px;
  margin: 0 auto;
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 1.8;
}

.botao-voltar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
  padding: 12px 18px;
  border-radius: var(--button-radius);
  background: var(--color-brand);
  color: var(--color-surface);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.botao-voltar:hover {
  background: var(--color-brand-hover);
}

@media (max-width: 760px) {
  .pagina-detalhe {
    padding: 32px 16px 55px;
  }

  .cabecalho-detalhe {
    padding: 32px 20px;
    border-radius: 20px;
  }

  .grade-detalhes {
    grid-template-columns: 1fr;
  }

  .bloco-detalhe {
    padding: 22px;
  }

  .grade-relacionadas {
    grid-template-columns: 1fr;
  }

  .titulo-relacionadas {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
