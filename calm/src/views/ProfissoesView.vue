<script setup>
import { computed, ref } from 'vue'

const busca = ref('')
const areaSelecionada = ref('Todas')

const areas = [
  'Todas',
  'Tecnologia',
  'Criatividade',
  'Saúde',
  'Educação',
  'Negócios',
  'Engenharia',
]

const profissoes = [
  {
    nome: 'Desenvolvedor de Software',
    area: 'Tecnologia',
    descricao: 'Cria sistemas, sites e aplicativos para resolver problemas.',
    habilidades: 'Lógica, programação e resolução de problemas',
  },
  {
    nome: 'Analista de Segurança da Informação',
    area: 'Tecnologia',
    descricao: 'Ajuda a proteger sistemas, redes e dados contra ameaças.',
    habilidades: 'Análise, atenção e segurança digital',
  },
  {
    nome: 'Designer Gráfico',
    area: 'Criatividade',
    descricao: 'Cria identidades visuais, peças gráficas e conteúdos visuais.',
    habilidades: 'Criatividade, comunicação e composição visual',
  },
  {
    nome: 'Psicólogo',
    area: 'Saúde',
    descricao: 'Atua na compreensão do comportamento e dos processos mentais.',
    habilidades: 'Escuta, empatia e análise',
  },
  {
    nome: 'Professor',
    area: 'Educação',
    descricao: 'Compartilha conhecimentos e auxilia no processo de aprendizagem.',
    habilidades: 'Comunicação, didática e organização',
  },
  {
    nome: 'Administrador',
    area: 'Negócios',
    descricao: 'Ajuda a planejar, organizar e acompanhar atividades de organizações.',
    habilidades: 'Planejamento, liderança e organização',
  },
  {
    nome: 'Engenheiro Civil',
    area: 'Engenharia',
    descricao: 'Planeja e acompanha obras, estruturas e projetos de construção.',
    habilidades: 'Matemática, planejamento e análise',
  },
  {
    nome: 'Analista de Dados',
    area: 'Tecnologia',
    descricao: 'Analisa dados para identificar padrões e apoiar decisões.',
    habilidades: 'Raciocínio lógico, estatística e análise',
  },
  {
    nome: 'Publicitário',
    area: 'Criatividade',
    descricao: 'Desenvolve campanhas e estratégias de comunicação para marcas.',
    habilidades: 'Criatividade, comunicação e estratégia',
  },
]

const profissoesFiltradas = computed(() => {
  const termo = busca.value.trim().toLowerCase()

  return profissoes.filter((profissao) => {
    const correspondeArea =
      areaSelecionada.value === 'Todas' ||
      profissao.area === areaSelecionada.value

    const correspondeBusca =
      profissao.nome.toLowerCase().includes(termo) ||
      profissao.descricao.toLowerCase().includes(termo) ||
      profissao.area.toLowerCase().includes(termo)

    return correspondeArea && correspondeBusca
  })
})
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
            :key="area"
            type="button"
            :class="{ ativo: areaSelecionada === area }"
            :aria-pressed="areaSelecionada === area"
            @click="areaSelecionada = area"
          >
            {{ area }}
          </button>
        </div>
      </div>

      <div class="resumo">
        <h2>Profissões para explorar</h2>
        <span>{{ profissoesFiltradas.length }} encontradas</span>
      </div>

      <div v-if="profissoesFiltradas.length" class="grade-profissoes">
        <article
          v-for="profissao in profissoesFiltradas"
          :key="profissao.nome"
          class="card-profissao"
        >
          <span class="area">{{ profissao.area }}</span>

          <h3>{{ profissao.nome }}</h3>

          <p>{{ profissao.descricao }}</p>

          <div class="habilidades">
            <strong>Habilidades relacionadas</strong>
            <span>{{ profissao.habilidades }}</span>
          </div>
        </article>
      </div>

      <div v-else class="sem-resultados">
        <h3>Nenhuma profissão encontrada</h3>
        <p>Tente outro termo ou selecione uma área diferente.</p>

        <button
          type="button"
          @click="busca = ''; areaSelecionada = 'Todas'"
        >
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