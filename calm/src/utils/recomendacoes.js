
const areasProfissionais = {
    tecnologia: {
        nome: 'Tecnologia e desenvolvimento',
        descricao:
            'Você demonstrou interesse em resolver problemas, explorar sistemas ou trabalhar com soluções digitais.',
        exemplos: [
            'Desenvolvimento de software',
            'Análise de sistemas',
            'Cibersegurança',
            'Ciência de dados',
        ],
    },

    criacao: {
        nome: 'Criatividade e comunicação',
        descricao:
            'Suas escolhas indicam curiosidade por criar, comunicar ideias e desenvolver projetos originais.',
        exemplos: [
            'Design gráfico',
            'Publicidade e propaganda',
            'Produção audiovisual',
            'Design digital',
        ],
    },

    pessoas: {
        nome: 'Saúde e bem-estar',
        descricao:
            'Você demonstrou interesse em compreender pessoas, apoiar necessidades e contribuir para o bem-estar.',
        exemplos: [
            'Enfermagem',
            'Fisioterapia',
            'Nutrição',
            'Terapia ocupacional',
        ],
    },

    educacao: {
        nome: 'Educação e ciências humanas',
        descricao:
            'Suas escolhas sugerem interesse em compartilhar conhecimentos e compreender pessoas e sociedade.',
        exemplos: [
            'Pedagogia',
            'Psicologia',
            'História',
            'Ciências sociais',
        ],
    },

    negocios: {
        nome: 'Gestão e negócios',
        descricao:
            'Você demonstrou interesse por organização, planejamento, decisões e desenvolvimento de projetos.',
        exemplos: [
            'Administração',
            'Ciências contábeis',
            'Gestão de projetos',
            'Empreendedorismo',
        ],
    },

    engenharia: {
        nome: 'Engenharia e ciências aplicadas',
        descricao:
            'Suas escolhas indicam curiosidade por investigar fenômenos e construir soluções práticas.',
        exemplos: [
            'Engenharia mecânica',
            'Engenharia elétrica',
            'Engenharia ambiental',
            'Física',
        ],
    },
}

// Cada alternativa pode contribuir para mais de uma área.
const afinidades = {
    'Resolver problemas usando tecnologia': ['tecnologia', 'engenharia'],
    'Criar desenhos, vídeos ou projetos visuais': ['criacao'],
    'Ajudar e orientar outras pessoas': ['pessoas', 'educacao'],
    'Organizar projetos e tomar decisões': ['negocios'],
    'Investigar assuntos e descobrir como as coisas funcionam': [
        'engenharia',
        'tecnologia',
    ],
    'Construir, consertar ou trabalhar com atividades práticas': [
        'engenharia',
    ],

    'Analisar informações e encontrar soluções': [
        'tecnologia',
        'engenharia',
        'negocios',
    ],
    'Ter ideias criativas e originais': ['criacao'],
    'Explicar assuntos e compartilhar conhecimentos': ['educacao'],
    'Planejar tarefas e organizar detalhes': ['negocios'],
    'Trabalhar com ferramentas, equipamentos ou sistemas': [
        'engenharia',
        'tecnologia',
    ],
    'Ouvir pessoas e compreender suas necessidades': ['pessoas', 'educacao'],

    'Estabilidade e segurança financeira': ['negocios'],
    'Criatividade e liberdade para inovar': ['criacao', 'tecnologia'],
    'Ajudar pessoas e contribuir com a sociedade': ['pessoas', 'educacao'],
    'Aprender coisas novas constantemente': [
        'tecnologia',
        'engenharia',
        'educacao',
    ],
    'Ter autonomia para tomar decisões': ['negocios'],
    'Crescer profissionalmente e assumir desafios': ['negocios', 'tecnologia'],

    'Em equipe, colaborando com outras pessoas': [
        'negocios',
        'educacao',
        'pessoas',
    ],
    'De forma independente, concentrado nas minhas tarefas': [
        'tecnologia',
        'criacao',
        'engenharia',
    ],
    'Em contato direto com pessoas e clientes': [
        'pessoas',
        'negocios',
        'educacao',
    ],
    'Com computadores, tecnologia e dados': ['tecnologia'],
    'Em ambientes práticos, oficinas ou laboratórios': [
        'engenharia',
        'pessoas',
    ],
    'Em ambientes criativos, desenvolvendo ideias e projetos': [
        'criacao',
        'tecnologia',
    ],

    'Tecnologia e desenvolvimento de software': ['tecnologia'],
    'Design, comunicação e produção audiovisual': ['criacao'],
    'Saúde, bem-estar e qualidade de vida': ['pessoas'],
    'Educação, psicologia e ciências humanas': ['educacao'],
    'Administração, negócios e empreendedorismo': ['negocios'],
    'Engenharia, ciências e meio ambiente': ['engenharia'],
}

// Alternativas possíveis em cada uma das cinco etapas.
// Os textos precisam corresponder aos utilizados no questionário.
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
        'Tecnologia e desenvolvimento de software',
        'Design, comunicação e produção audiovisual',
        'Saúde, bem-estar e qualidade de vida',
        'Educação, psicologia e ciências humanas',
        'Administração, negócios e empreendedorismo',
        'Engenharia, ciências e meio ambiente',
    ],
]

export function gerarRecomendacoes(respostas) {
    const idsAreas = Object.keys(areasProfissionais)

    const pontuacoes = Object.fromEntries(
        idsAreas.map((id) => [id, 0])
    )

    const maximos = Object.fromEntries(
        idsAreas.map((id) => [id, 0])
    )

    const motivos = Object.fromEntries(
        idsAreas.map((id) => [id, []])
    )

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

    // Calcula o máximo possível de cada área em cada etapa.
    // Cada etapa pode contribuir com, no máximo, um ponto por área.
    opcoesPorEtapa.forEach((opcoes) => {
        const areasPossiveis = new Set()

        opcoes.forEach((opcao) => {
            ; (afinidades[opcao] ?? []).forEach((id) => {
                areasPossiveis.add(id)
            })
        })

        areasPossiveis.forEach((id) => {
            maximos[id] += 1
        })
    })

    respostas.forEach((respostasEtapa, indiceEtapa) => {
        const opcoesValidas = new Set(opcoesPorEtapa[indiceEtapa])

        // Evita pontuar a mesma alternativa duas vezes na mesma etapa.
        const selecionadas = new Set(
            respostasEtapa.filter((resposta) => opcoesValidas.has(resposta))
        )

        // Uma área recebe no máximo um ponto por etapa.
        const areasDestaEtapa = new Set()

        selecionadas.forEach((resposta) => {
            ; (afinidades[resposta] ?? []).forEach((id) => {
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


    const classificacao = idsAreas
        .map((id) => ({
            id,
            ...areasProfissionais[id],
            pontos: pontuacoes[id],
            pontosPossiveis: maximos[id],
            percentual: maximos[id]
                ? Math.round((pontuacoes[id] / maximos[id]) * 100)
                : 0,
            motivos: motivos[id],
        }))
        .sort(
            (a, b) =>
                b.percentual - a.percentual ||
                b.pontos - a.pontos
        )

    const areasDestaque = classificacao.filter(
        (area) => area.pontos > 0 &&
            area.percentual === classificacao[0]?.percentual
    )

    const idsDestaque = new Set(
        areasDestaque.map((area) => area.id)
    )

    const outrasAreas = classificacao.filter(
        (area) => !idsDestaque.has(area.id)
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
