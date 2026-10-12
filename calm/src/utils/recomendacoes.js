import { areasProfissionais, profissoes } from '../data/profissoes.js'

const ids = {
  tecnologia: 'tecnologia-dados',
  arte: 'arte-design-comunicacao',
  saude: 'saude-bem-estar',
  educacao: 'educacao-desenvolvimento',
  negocios: 'negocios-gestao-financas',
  engenharia: 'engenharia-industria',
  ambiente: 'meio-ambiente-agro',
  sociedade: 'direito-sociedade-servico-publico',
  logistica: 'logistica-comercio-servicos',
  hospitalidade: 'gastronomia-turismo-hospitalidade',
}

export const opcaoAreaIndefinida =
  'Ainda não sei. Quero conhecer possibilidades variadas.'

const propostaProjetoPorArea = {
  [ids.tecnologia]: 'Criar uma ferramenta digital que torne uma tarefa mais fácil.',
  [ids.arte]: 'Criar imagens, vídeos ou campanhas para comunicar uma ideia.',
  [ids.saude]: 'Ajudar pessoas a cuidar da saúde e do bem-estar.',
  [ids.educacao]: 'Ensinar algo e apoiar o aprendizado de outras pessoas.',
  [ids.negocios]: 'Organizar projetos, equipes ou recursos para alcançar objetivos.',
  [ids.engenharia]: 'Projetar ou melhorar produtos, máquinas ou processos.',
  [ids.ambiente]: 'Encontrar formas de cuidar da natureza ou melhorar a produção no campo.',
  [ids.sociedade]: 'Pesquisar direitos e contribuir com serviços ou decisões públicas.',
  [ids.logistica]: 'Organizar compras, vendas, estoques ou entregas.',
  [ids.hospitalidade]: 'Criar experiências agradáveis com comida, viagens ou hospedagem.',
}

export const opcoesProjetoFinal = areasProfissionais.map((area) => ({
  areaId: area.id,
  texto: propostaProjetoPorArea[area.id],
}))

// Cada alternativa pode contribuir para uma ou mais áreas oficiais do catálogo.
const afinidades = {
  'Resolver problemas usando tecnologia': [ids.tecnologia, ids.engenharia],
  'Criar desenhos, vídeos ou projetos visuais': [ids.arte],
  'Ajudar e orientar outras pessoas': [
    ids.saude,
    ids.educacao,
    ids.sociedade,
    ids.hospitalidade,
  ],
  'Organizar projetos e tomar decisões': [
    ids.negocios,
    ids.logistica,
    ids.sociedade,
    ids.hospitalidade,
  ],
  'Investigar assuntos e descobrir como as coisas funcionam': [
    ids.tecnologia,
    ids.saude,
    ids.engenharia,
    ids.ambiente,
    ids.sociedade,
  ],
  'Construir, consertar ou trabalhar com atividades práticas': [
    ids.engenharia,
    ids.ambiente,
    ids.logistica,
    ids.hospitalidade,
  ],

  'Analisar informações e encontrar soluções': [
    ids.tecnologia,
    ids.negocios,
    ids.engenharia,
    ids.ambiente,
    ids.sociedade,
    ids.logistica,
  ],
  'Ter ideias criativas e originais': [ids.arte, ids.tecnologia, ids.hospitalidade],
  'Explicar assuntos e compartilhar conhecimentos': [
    ids.educacao,
    ids.sociedade,
    ids.hospitalidade,
  ],
  'Planejar tarefas e organizar detalhes': [
    ids.negocios,
    ids.educacao,
    ids.logistica,
    ids.hospitalidade,
  ],
  'Trabalhar com ferramentas, equipamentos ou sistemas': [
    ids.tecnologia,
    ids.saude,
    ids.engenharia,
    ids.ambiente,
    ids.logistica,
  ],
  'Ouvir pessoas e compreender suas necessidades': [
    ids.saude,
    ids.educacao,
    ids.sociedade,
    ids.hospitalidade,
  ],

  'Estabilidade e segurança financeira': [
    ids.saude,
    ids.educacao,
    ids.negocios,
    ids.sociedade,
    ids.logistica,
  ],
  'Criatividade e liberdade para inovar': [
    ids.arte,
    ids.tecnologia,
    ids.hospitalidade,
  ],
  'Ajudar pessoas e contribuir com a sociedade': [
    ids.saude,
    ids.educacao,
    ids.ambiente,
    ids.sociedade,
  ],
  'Aprender coisas novas constantemente': [
    ids.tecnologia,
    ids.saude,
    ids.educacao,
    ids.engenharia,
    ids.ambiente,
    ids.sociedade,
  ],
  'Ter autonomia para tomar decisões': [
    ids.arte,
    ids.negocios,
    ids.ambiente,
    ids.hospitalidade,
  ],
  'Crescer profissionalmente e assumir desafios': [
    ids.tecnologia,
    ids.negocios,
    ids.engenharia,
    ids.logistica,
  ],

  'Em equipe, colaborando com outras pessoas': [
    ids.saude,
    ids.educacao,
    ids.negocios,
    ids.engenharia,
    ids.sociedade,
    ids.logistica,
    ids.hospitalidade,
  ],
  'De forma independente, concentrado nas minhas tarefas': [
    ids.tecnologia,
    ids.arte,
    ids.ambiente,
    ids.sociedade,
  ],
  'Em contato direto com pessoas e clientes': [
    ids.saude,
    ids.educacao,
    ids.negocios,
    ids.sociedade,
    ids.logistica,
    ids.hospitalidade,
  ],
  'Com computadores, tecnologia e dados': [
    ids.tecnologia,
    ids.negocios,
    ids.sociedade,
    ids.logistica,
  ],
  'Em ambientes práticos, oficinas ou laboratórios': [
    ids.saude,
    ids.engenharia,
    ids.ambiente,
    ids.logistica,
    ids.hospitalidade,
  ],
  'Em ambientes criativos, desenvolvendo ideias e projetos': [
    ids.arte,
    ids.tecnologia,
    ids.hospitalidade,
  ],

  [opcaoAreaIndefinida]: [],
  ...Object.fromEntries(
    opcoesProjetoFinal.map(({ areaId, texto }) => [texto, [areaId]]),
  ),
}

// Alternativas válidas em cada uma das cinco etapas do questionário.
const opcoesPorEtapa = [
  [
    'Resolver problemas usando tecnologia',
    'Criar desenhos, vídeos ou projetos visuais',
    'Ajudar e orientar outras pessoas',
    'Organizar projetos e tomar decisões',
    'Investigar assuntos e descobrir como as coisas funcionam',
    'Construir, consertar ou trabalhar com atividades práticas',
  ],
  [
    'Analisar informações e encontrar soluções',
    'Ter ideias criativas e originais',
    'Explicar assuntos e compartilhar conhecimentos',
    'Planejar tarefas e organizar detalhes',
    'Trabalhar com ferramentas, equipamentos ou sistemas',
    'Ouvir pessoas e compreender suas necessidades',
  ],
  [
    'Estabilidade e segurança financeira',
    'Criatividade e liberdade para inovar',
    'Ajudar pessoas e contribuir com a sociedade',
    'Aprender coisas novas constantemente',
    'Ter autonomia para tomar decisões',
    'Crescer profissionalmente e assumir desafios',
  ],
  [
    'Em equipe, colaborando com outras pessoas',
    'De forma independente, concentrado nas minhas tarefas',
    'Em contato direto com pessoas e clientes',
    'Com computadores, tecnologia e dados',
    'Em ambientes práticos, oficinas ou laboratórios',
    'Em ambientes criativos, desenvolvendo ideias e projetos',
  ],
  [
    ...opcoesProjetoFinal.map((opcao) => opcao.texto),
    opcaoAreaIndefinida,
  ],
]

const profissoesPorArea = new Map(
  areasProfissionais.map((area) => [
    area.id,
    profissoes
      .filter((profissao) => profissao.areaId === area.id)
      .map((profissao) => profissao.nome),
  ]),
)

export function gerarRecomendacoes(respostas) {
  const idsAreas = areasProfissionais.map((area) => area.id)

  const pontuacoes = Object.fromEntries(idsAreas.map((id) => [id, 0]))
  const maximos = Object.fromEntries(idsAreas.map((id) => [id, 0]))
  const motivos = Object.fromEntries(idsAreas.map((id) => [id, []]))

  const estruturaValida =
    Array.isArray(respostas) &&
    respostas.length === opcoesPorEtapa.length &&
    respostas.every(Array.isArray)

  if (!estruturaValida) {
    return {
      personalizadas: false,
      destaque: [],
      outras: [],
      mensagem:
        'Não foi possível recuperar suas respostas. Faça o questionário novamente.',
    }
  }

  // Cada etapa pode contribuir com, no máximo, um ponto por área.
  opcoesPorEtapa.forEach((opcoes) => {
    const areasPossiveis = new Set()

    opcoes.forEach((opcao) => {
      ;(afinidades[opcao] ?? []).forEach((id) => areasPossiveis.add(id))
    })

    areasPossiveis.forEach((id) => {
      maximos[id] += 1
    })
  })

  respostas.forEach((respostasEtapa, indiceEtapa) => {
    const opcoesValidas = new Set(opcoesPorEtapa[indiceEtapa])
    const selecionadas = new Set(
      respostasEtapa.filter((resposta) => opcoesValidas.has(resposta)),
    )
    const areasDestaEtapa = new Set()

    selecionadas.forEach((resposta) => {
      ;(afinidades[resposta] ?? []).forEach((id) => {
        areasDestaEtapa.add(id)

        if (!motivos[id].includes(resposta)) {
          motivos[id].push(resposta)
        }
      })
    })

    areasDestaEtapa.forEach((id) => {
      pontuacoes[id] += 1
    })
  })

  const classificacao = areasProfissionais
    .map((area) => ({
      ...area,
      pontos: pontuacoes[area.id],
      pontosPossiveis: maximos[area.id],
      percentual: maximos[area.id]
        ? Math.round((pontuacoes[area.id] / maximos[area.id]) * 100)
        : 0,
      motivos: motivos[area.id],
      exemplos: (profissoesPorArea.get(area.id) ?? []).slice(0, 3),
    }))
    .sort(
      (a, b) =>
        b.percentual - a.percentual ||
        b.pontos - a.pontos ||
        a.nome.localeCompare(b.nome, 'pt-BR'),
    )

  const areasDestaque = classificacao.filter(
    (area) =>
      area.pontos > 0 &&
      area.percentual === classificacao[0]?.percentual,
  )

  const idsDestaque = new Set(areasDestaque.map((area) => area.id))
  const outrasAreas = classificacao.filter(
    (area) => !idsDestaque.has(area.id),
  )

  return {
    personalizadas: areasDestaque.length > 0,
    destaque: areasDestaque,
    outras: outrasAreas,
    mensagem: areasDestaque.length
      ? 'Estas áreas se destacaram a partir das suas respostas. Explore também outras possibilidades!'
      : 'Explore as áreas profissionais abaixo e descubra novos interesses.',
  }
}
