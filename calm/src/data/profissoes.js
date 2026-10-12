// Catálogo inicial da Calm: 100 profissões organizadas em 10 áreas.
// As descrições são introdutórias. Requisitos de formação e registro podem variar conforme a profissão e a legislação.

export const areasProfissionais = [
  {
    "id": "tecnologia-dados",
    "nome": "Tecnologia e Dados",
    "descricao": "Criação de sistemas, análise de dados e soluções digitais."
  },
  {
    "id": "arte-design-comunicacao",
    "nome": "Arte, Design e Comunicação",
    "descricao": "Criação visual, produção de conteúdo e comunicação."
  },
  {
    "id": "saude-bem-estar",
    "nome": "Saúde e Bem-estar",
    "descricao": "Promoção da saúde, prevenção e cuidado com as pessoas."
  },
  {
    "id": "educacao-desenvolvimento",
    "nome": "Educação e Desenvolvimento Humano",
    "descricao": "Ensino, aprendizagem e desenvolvimento de pessoas."
  },
  {
    "id": "negocios-gestao-financas",
    "nome": "Negócios, Gestão e Finanças",
    "descricao": "Gestão de empresas, pessoas, recursos e resultados."
  },
  {
    "id": "engenharia-industria",
    "nome": "Engenharia e Indústria",
    "descricao": "Projetos, processos industriais e soluções técnicas."
  },
  {
    "id": "meio-ambiente-agro",
    "nome": "Meio Ambiente e Agropecuária",
    "descricao": "Natureza, produção agropecuária e sustentabilidade."
  },
  {
    "id": "direito-sociedade-servico-publico",
    "nome": "Direito, Sociedade e Serviço Público",
    "descricao": "Leis, direitos, políticas públicas e questões sociais."
  },
  {
    "id": "logistica-comercio-servicos",
    "nome": "Logística, Comércio e Serviços",
    "descricao": "Distribuição, vendas, compras e operações."
  },
  {
    "id": "gastronomia-turismo-hospitalidade",
    "nome": "Gastronomia, Turismo e Hospitalidade",
    "descricao": "Alimentação, viagens, hospedagem e atendimento."
  }
];

// Os dados são organizados por área e combinados abaixo com o nome/ID da área.
const profissoesPorArea = {
  "tecnologia-dados": [
    {
      "id": "desenvolvedor-software",
      "nome": "Desenvolvedor de Software",
      "descricao": "Cria, testa e mantém sistemas e aplicações.",
      "formacao": "Graduação em Ciência da Computação, Engenharia de Software ou Sistemas de Informação; tecnólogo em Análise e Desenvolvimento de Sistemas; curso técnico ou estudos práticos com projetos. Portfólio e experiência contam bastante.",
      "habilidades": [
        "Lógica de programação",
        "Resolução de problemas",
        "Trabalho em equipe"
      ],
      "rotina": "Transforma necessidades em sistemas: planeja soluções, escreve e revisa código, testa funcionalidades, corrige falhas e mantém aplicações funcionando.",
      "locaisAtuacao": [
        "Empresas de software",
        "Bancos e fintechs",
        "Comércio eletrônico",
        "Indústrias",
        "Consultorias",
        "Órgãos públicos"
      ]
    },
    {
      "id": "desenvolvedor-web",
      "nome": "Desenvolvedor Web",
      "descricao": "Desenvolve sites e aplicações que funcionam na internet.",
      "formacao": "Graduação ou tecnólogo em Computação, Sistemas de Informação ou Análise e Desenvolvimento de Sistemas; cursos técnicos, cursos livres e projetos próprios também são caminhos comuns.",
      "habilidades": [
        "HTML",
        "CSS",
        "JavaScript",
        "Resolução de problemas"
      ],
      "rotina": "Cria sites e aplicações para a internet. Pode cuidar da interface (front-end), dos serviços e dados (back-end) ou integrar as duas partes, além de testar e publicar atualizações.",
      "locaisAtuacao": [
        "Agências digitais",
        "Empresas de tecnologia",
        "Lojas virtuais",
        "Startups",
        "Equipes digitais de empresas",
        "Trabalho remoto ou autônomo"
      ]
    },
    {
      "id": "analista-suporte-ti",
      "nome": "Analista de Suporte de TI",
      "descricao": "Ajuda usuários e mantém computadores, sistemas e redes funcionando.",
      "formacao": "Curso técnico em Informática, Redes ou Suporte; tecnólogo ou graduação em TI; cursos de sistemas operacionais e redes. Certificações podem complementar o preparo.",
      "habilidades": [
        "Comunicação",
        "Diagnóstico técnico",
        "Organização"
      ],
      "rotina": "Atende chamados sobre computadores, programas e conexões, diagnostica causas, configura equipamentos e orienta usuários; encaminha incidentes complexos às equipes responsáveis.",
      "locaisAtuacao": [
        "Empresas de vários setores",
        "Escolas e universidades",
        "Hospitais",
        "Provedores de internet",
        "Prestadoras de TI"
      ]
    },
    {
      "id": "analista-seguranca-informacao",
      "nome": "Analista de Segurança da Informação",
      "descricao": "Ajuda a proteger sistemas, redes e informações contra ameaças.",
      "formacao": "Graduação ou tecnólogo em Segurança da Informação, Redes ou Computação; cursos práticos de redes, sistemas e segurança. Certificações variam conforme a especialidade e a vaga.",
      "habilidades": [
        "Atenção aos detalhes",
        "Redes",
        "Análise de riscos"
      ],
      "rotina": "Ajuda a prevenir ataques e vazamentos: acompanha alertas, avalia vulnerabilidades, controla acessos, apoia a resposta a incidentes e recomenda melhorias de proteção.",
      "locaisAtuacao": [
        "Empresas de tecnologia",
        "Bancos",
        "Hospitais",
        "Consultorias de segurança",
        "Indústrias",
        "Órgãos públicos"
      ]
    },
    {
      "id": "analista-dados",
      "nome": "Analista de Dados",
      "descricao": "Transforma dados em informações úteis para decisões.",
      "formacao": "Graduação em Estatística, Matemática, Computação, Administração ou Economia; tecnólogo ou cursos de análise de dados. Excel, SQL e ferramentas de visualização são competências úteis.",
      "habilidades": [
        "Raciocínio lógico",
        "Estatística",
        "Planilhas e SQL"
      ],
      "rotina": "Organiza e analisa dados para responder perguntas do negócio. Cria consultas, identifica padrões, prepara indicadores e painéis e explica resultados para apoiar decisões.",
      "locaisAtuacao": [
        "Bancos",
        "Varejo e comércio eletrônico",
        "Hospitais",
        "Indústrias",
        "Consultorias",
        "Órgãos públicos"
      ]
    },
    {
      "id": "administrador-banco-dados",
      "nome": "Administrador de Banco de Dados",
      "descricao": "Organiza, mantém e protege bancos de dados usados por sistemas.",
      "formacao": "Graduação ou tecnólogo em Banco de Dados, Computação ou Sistemas de Informação; cursos de SQL e de plataformas de banco de dados. Certificações específicas podem ajudar.",
      "habilidades": [
        "SQL",
        "Organização",
        "Atenção à segurança"
      ],
      "rotina": "Mantém bancos de dados disponíveis, seguros e rápidos. Configura acessos e cópias de segurança, acompanha desempenho, planeja recuperação e ajuda equipes a organizar informações.",
      "locaisAtuacao": [
        "Empresas de tecnologia",
        "Bancos",
        "Comércio eletrônico",
        "Telecomunicações",
        "Hospitais",
        "Grandes organizações"
      ]
    },
    {
      "id": "analista-redes",
      "nome": "Analista de Redes",
      "descricao": "Implanta e mantém redes de computadores e conectividade.",
      "formacao": "Curso técnico ou tecnólogo em Redes, Telecomunicações ou Informática; graduação em Redes ou Computação. Cursos e certificações de fabricantes podem complementar a formação.",
      "habilidades": [
        "Redes",
        "Diagnóstico",
        "Resolução de problemas"
      ],
      "rotina": "Configura e monitora redes que conectam computadores, servidores e serviços em nuvem. Investiga lentidão e interrupções e implementa melhorias de estabilidade e segurança.",
      "locaisAtuacao": [
        "Provedores de internet",
        "Operadoras",
        "Empresas de TI",
        "Bancos",
        "Universidades",
        "Equipes de infraestrutura"
      ]
    },
    {
      "id": "engenheiro-cloud",
      "nome": "Engenheiro de Cloud",
      "descricao": "Projeta e mantém ambientes e serviços de computação em nuvem.",
      "formacao": "Graduação ou tecnólogo em Computação, Sistemas, Redes ou Engenharia; experiência em infraestrutura e cursos de nuvem. Certificações AWS, Azure ou Google Cloud são complementos possíveis.",
      "habilidades": [
        "Computação em nuvem",
        "Automação",
        "Segurança"
      ],
      "rotina": "Projeta e opera serviços em nuvem, automatiza a criação de infraestrutura, monitora disponibilidade e segurança e ajuda a controlar custos e capacidade.",
      "locaisAtuacao": [
        "Empresas de tecnologia",
        "Bancos e fintechs",
        "Comércio eletrônico",
        "Consultorias",
        "Startups",
        "Equipes digitais"
      ]
    },
    {
      "id": "cientista-dados",
      "nome": "Cientista de Dados",
      "descricao": "Usa estatística e programação para investigar dados e desenvolver modelos.",
      "formacao": "Graduação em Estatística, Matemática, Computação, Engenharia ou Economia; pós-graduação pode ajudar em pesquisa e modelos avançados. Prática em programação e estatística é essencial.",
      "habilidades": [
        "Estatística",
        "Programação",
        "Pensamento analítico"
      ],
      "rotina": "Investiga problemas usando estatística e programação. Prepara dados, testa hipóteses e modelos, avalia limites dos resultados e comunica o que as análises permitem concluir.",
      "locaisAtuacao": [
        "Centros de pesquisa",
        "Bancos e seguradoras",
        "Empresas de tecnologia",
        "Hospitais",
        "Indústrias",
        "Consultorias"
      ]
    },
    {
      "id": "analista-qualidade-software",
      "nome": "Analista de Qualidade de Software",
      "descricao": "Verifica se sistemas funcionam como esperado e ajuda a prevenir defeitos.",
      "formacao": "Graduação, tecnólogo ou curso técnico em Computação ou Sistemas; cursos de testes e automação. Lógica, ferramentas de teste e projetos práticos ajudam a demonstrar preparo.",
      "habilidades": [
        "Atenção aos detalhes",
        "Testes",
        "Pensamento crítico"
      ],
      "rotina": "Planeja testes para verificar se programas funcionam como esperado, registra defeitos, valida correções e pode automatizar verificações para prevenir falhas antes da publicação.",
      "locaisAtuacao": [
        "Empresas de software",
        "Bancos e fintechs",
        "Comércio eletrônico",
        "Consultorias de TI",
        "Equipes digitais"
      ]
    }
  ],
  "arte-design-comunicacao": [
    {
      "id": "designer-grafico",
      "nome": "Designer Gráfico",
      "descricao": "Cria peças visuais para comunicar ideias, marcas e produtos.",
      "formacao": "Graduação ou tecnólogo em Design Gráfico, Design ou Comunicação; cursos de composição e ferramentas gráficas. Portfólio com trabalhos variados ajuda a demonstrar habilidades.",
      "habilidades": [
        "Criatividade",
        "Composição visual",
        "Comunicação"
      ],
      "rotina": "Transforma uma mensagem em materiais visuais. Define cores, tipografia e imagens e prepara peças digitais ou impressas adequadas ao público, à marca e ao canal.",
      "locaisAtuacao": [
        "Estúdios e agências",
        "Departamentos de marketing",
        "Editoras",
        "Gráficas",
        "Produtoras",
        "Trabalho autônomo"
      ]
    },
    {
      "id": "designer-ux-ui",
      "nome": "Designer UX/UI",
      "descricao": "Planeja experiências e interfaces fáceis de entender e utilizar.",
      "formacao": "Graduação ou tecnólogo em Design, Design Digital, Computação ou áreas próximas; cursos de UX, pesquisa, prototipação e acessibilidade. Portfólio deve mostrar decisões e resultados.",
      "habilidades": [
        "Empatia",
        "Prototipação",
        "Organização visual"
      ],
      "rotina": "Pesquisa como as pessoas usam um produto digital e projeta seus fluxos e telas. Cria protótipos, testa soluções e considera acessibilidade e clareza de uso.",
      "locaisAtuacao": [
        "Empresas de tecnologia",
        "Bancos",
        "Comércio eletrônico",
        "Consultorias de produto",
        "Startups",
        "Equipes digitais"
      ]
    },
    {
      "id": "profissional-marketing-digital",
      "nome": "Profissional de Marketing Digital",
      "descricao": "Planeja ações digitais para divulgar marcas, produtos e serviços.",
      "formacao": "Graduação ou tecnólogo em Marketing, Publicidade, Comunicação ou Administração; cursos de SEO, mídia paga, conteúdo e análise de métricas. A formação depende do canal de atuação.",
      "habilidades": [
        "Comunicação",
        "Criatividade",
        "Análise de resultados"
      ],
      "rotina": "Planeja campanhas e conteúdos em canais digitais, como busca, redes sociais e e-mail. Acompanha métricas e ajusta ações para alcançar objetivos de divulgação e relacionamento.",
      "locaisAtuacao": [
        "Agências",
        "Departamentos de marketing",
        "Lojas virtuais",
        "Startups",
        "Produtoras de conteúdo",
        "Trabalho autônomo"
      ]
    },
    {
      "id": "jornalista",
      "nome": "Jornalista",
      "descricao": "Apura informações e produz conteúdos jornalísticos.",
      "formacao": "Graduação em Jornalismo é um caminho frequente; cursos de comunicação, escrita, audiovisual e checagem também ajudam. Requisitos formais devem ser conferidos conforme a atividade e a vaga.",
      "habilidades": [
        "Escrita",
        "Pesquisa",
        "Comunicação"
      ],
      "rotina": "Apura informações e produz notícias, entrevistas e reportagens. Consulta fontes, verifica dados, escreve ou apresenta conteúdos e adapta a publicação ao veículo e ao público.",
      "locaisAtuacao": [
        "Jornais, revistas e sites",
        "Rádio e TV",
        "Assessorias de comunicação",
        "Podcasts",
        "Órgãos públicos e empresas"
      ]
    },
    {
      "id": "produtor-audiovisual",
      "nome": "Produtor Audiovisual",
      "descricao": "Participa da criação e produção de vídeos e outros conteúdos audiovisuais.",
      "formacao": "Cursos técnicos ou tecnólogos em Audiovisual, Cinema, Rádio e TV ou Produção Multimídia; graduação em Cinema ou Comunicação. Projetos práticos contam muito.",
      "habilidades": [
        "Criatividade",
        "Planejamento",
        "Edição de vídeo"
      ],
      "rotina": "Organiza a produção de vídeos do planejamento à entrega: articula equipe e orçamento, prepara gravações, acompanha filmagem e coordena edição e finalização.",
      "locaisAtuacao": [
        "Produtoras de vídeo e cinema",
        "Emissoras",
        "Agências",
        "Empresas",
        "Instituições culturais e educativas",
        "Produção independente"
      ]
    },
    {
      "id": "fotografo",
      "nome": "Fotógrafo",
      "descricao": "Produz imagens para registrar acontecimentos, pessoas, produtos ou conceitos.",
      "formacao": "Cursos técnicos, tecnólogos ou graduação em Fotografia, Audiovisual ou Comunicação; cursos de iluminação e edição. Prática e portfólio ajudam a construir uma especialidade.",
      "habilidades": [
        "Composição visual",
        "Criatividade",
        "Conhecimento técnico"
      ],
      "rotina": "Planeja e produz imagens de pessoas, produtos, eventos ou lugares. Escolhe luz e enquadramento, orienta a sessão, trata os arquivos e entrega as fotos no formato combinado.",
      "locaisAtuacao": [
        "Estúdios",
        "Jornais e revistas",
        "Agências e produtoras",
        "Eventos",
        "Comércio eletrônico",
        "Trabalho autônomo"
      ]
    },
    {
      "id": "redator-conteudo",
      "nome": "Redator de Conteúdo",
      "descricao": "Produz textos para sites, campanhas, materiais informativos e outros canais.",
      "formacao": "Graduação em Jornalismo, Letras, Publicidade ou Comunicação pode ajudar; cursos de redação, revisão, SEO e conteúdo são outros caminhos. Amostras de escrita demonstram experiência.",
      "habilidades": [
        "Escrita",
        "Pesquisa",
        "Clareza"
      ],
      "rotina": "Pesquisa e escreve textos para informar, ensinar ou divulgar produtos e serviços. Ajusta linguagem ao público, revisa o material e pode criar páginas, roteiros e campanhas.",
      "locaisAtuacao": [
        "Agências",
        "Editoras e veículos digitais",
        "Departamentos de marketing",
        "Empresas de tecnologia",
        "Organizações sociais",
        "Trabalho autônomo"
      ]
    },
    {
      "id": "diretor-arte",
      "nome": "Diretor de Arte",
      "descricao": "Coordena a linguagem visual de campanhas, marcas e projetos criativos.",
      "formacao": "Graduação ou tecnólogo em Design, Publicidade, Artes Visuais ou Comunicação; cursos de direção de arte e repertório visual. Portfólio ajuda a mostrar processo e resultado.",
      "habilidades": [
        "Direção visual",
        "Criatividade",
        "Liderança"
      ],
      "rotina": "Define a linguagem visual de campanhas, publicações ou marcas e orienta a equipe para manter unidade entre as peças. Desenvolve conceitos, avalia referências e acompanha a execução.",
      "locaisAtuacao": [
        "Agências de publicidade",
        "Produtoras",
        "Estúdios de design",
        "Editoras",
        "Departamentos de marca e comunicação"
      ]
    },
    {
      "id": "social-media",
      "nome": "Profissional de Mídias Sociais",
      "descricao": "Planeja e acompanha a presença de marcas nas redes sociais.",
      "formacao": "Graduação ou tecnólogo em Marketing, Publicidade, Jornalismo ou Comunicação; cursos de redes sociais, conteúdo, edição e métricas. Prática com plataformas é importante.",
      "habilidades": [
        "Comunicação",
        "Planejamento",
        "Análise de métricas"
      ],
      "rotina": "Planeja e publica conteúdos em redes sociais, organiza calendário, conversa com a comunidade, acompanha comentários e indicadores e ajusta formatos conforme os resultados.",
      "locaisAtuacao": [
        "Agências digitais",
        "Empresas",
        "Veículos de comunicação",
        "Criadores de conteúdo",
        "Instituições públicas",
        "Trabalho autônomo"
      ]
    },
    {
      "id": "editor-video",
      "nome": "Editor de Vídeo",
      "descricao": "Organiza e edita imagens, áudio e efeitos para criar vídeos.",
      "formacao": "Cursos técnicos ou tecnólogos em Edição, Audiovisual, Cinema ou Produção Multimídia; cursos de softwares e prática com projetos. Graduação é outro caminho possível.",
      "habilidades": [
        "Atenção aos detalhes",
        "Narrativa visual",
        "Conhecimento técnico"
      ],
      "rotina": "Seleciona e organiza imagens e sons para construir um vídeo. Ajusta ritmo, áudio, cor e legendas, insere elementos gráficos e prepara versões para diferentes canais.",
      "locaisAtuacao": [
        "Produtoras e estúdios",
        "Emissoras",
        "Agências",
        "Plataformas digitais",
        "Equipes de comunicação",
        "Trabalho autônomo"
      ]
    }
  ],
  "saude-bem-estar": [
    {
      "id": "medico",
      "nome": "Médico",
      "descricao": "Avalia condições de saúde, realiza diagnósticos e propõe tratamentos.",
      "formacao": "Graduação em Medicina e registro no CRM são necessários para exercer a profissão. Residência ou formação reconhecida é necessária para diversas especialidades; requisitos dependem da área.",
      "habilidades": [
        "Raciocínio clínico",
        "Comunicação",
        "Responsabilidade"
      ],
      "rotina": "Investiga sintomas, examina pacientes, interpreta exames e conversa sobre prevenção e tratamento. Pode acompanhar a saúde ao longo do tempo ou seguir uma especialidade clínica ou cirúrgica.",
      "locaisAtuacao": [
        "Hospitais",
        "Unidades básicas de saúde",
        "Clínicas",
        "Consultórios",
        "Serviços de urgência",
        "Universidades e pesquisa"
      ]
    },
    {
      "id": "enfermeiro",
      "nome": "Enfermeiro",
      "descricao": "Planeja e presta cuidados de enfermagem a pessoas e comunidades.",
      "formacao": "Graduação em Enfermagem e registro no Coren são necessários para atuar como enfermeiro. Especializações podem aprofundar áreas como saúde da família, terapia intensiva ou obstetrícia.",
      "habilidades": [
        "Atenção",
        "Organização",
        "Trabalho em equipe"
      ],
      "rotina": "Avalia necessidades de cuidado, planeja a assistência e orienta pacientes, famílias e equipes. Também atua em prevenção, gestão, educação e vigilância em saúde.",
      "locaisAtuacao": [
        "Hospitais",
        "Unidades básicas",
        "Clínicas",
        "Atendimento domiciliar",
        "Escolas e empresas",
        "Gestão em saúde"
      ]
    },
    {
      "id": "psicologo",
      "nome": "Psicólogo",
      "descricao": "Estuda comportamento e processos mentais e realiza intervenções psicológicas.",
      "formacao": "Graduação em Psicologia e registro ativo no CRP são necessários para exercer a profissão. Pós-graduação e formação complementar podem aprofundar campos específicos.",
      "habilidades": [
        "Escuta",
        "Ética",
        "Comunicação"
      ],
      "rotina": "Avalia questões emocionais, comportamentais ou de aprendizagem e planeja intervenções. Pode realizar atendimentos, avaliações psicológicas, orientação e ações de prevenção em diferentes contextos.",
      "locaisAtuacao": [
        "Consultórios e clínicas",
        "Hospitais e unidades de saúde",
        "Escolas",
        "Empresas",
        "Assistência social",
        "Esporte"
      ]
    },
    {
      "id": "fisioterapeuta",
      "nome": "Fisioterapeuta",
      "descricao": "Ajuda na prevenção e recuperação de limitações do movimento e da função física.",
      "formacao": "Graduação em Fisioterapia e registro no Crefito são necessários para exercer a profissão. Cursos de especialização podem direcionar áreas como neurologia, ortopedia, saúde respiratória ou esporte.",
      "habilidades": [
        "Observação",
        "Planejamento",
        "Relacionamento interpessoal"
      ],
      "rotina": "Avalia movimento, dor e funcionalidade e propõe exercícios e outros recursos para recuperar ou preservar a capacidade de realizar atividades. Acompanha a evolução e adapta o cuidado.",
      "locaisAtuacao": [
        "Hospitais",
        "Clínicas de reabilitação",
        "Consultórios",
        "Atendimento domiciliar",
        "Centros esportivos",
        "Saúde do trabalho"
      ]
    },
    {
      "id": "nutricionista",
      "nome": "Nutricionista",
      "descricao": "Trabalha com alimentação, nutrição e promoção da saúde.",
      "formacao": "Graduação em Nutrição e registro no CRN são necessários para exercer a profissão. Especializações podem direcionar a atuação para clínica, esporte, saúde coletiva ou alimentação institucional.",
      "habilidades": [
        "Organização",
        "Comunicação",
        "Conhecimento científico"
      ],
      "rotina": "Avalia necessidades alimentares e orienta planos ou serviços de alimentação. Pode acompanhar pessoas, planejar cardápios e monitorar qualidade e segurança dos alimentos.",
      "locaisAtuacao": [
        "Consultórios",
        "Hospitais",
        "Escolas",
        "Restaurantes e cozinhas industriais",
        "Clubes",
        "Programas de saúde pública"
      ]
    },
    {
      "id": "dentista",
      "nome": "Cirurgião-Dentista",
      "descricao": "Previne, identifica e trata condições relacionadas à saúde bucal.",
      "formacao": "Graduação em Odontologia e inscrição no CRO são necessárias para exercer a profissão. Especializações exigem formação adicional conforme a área escolhida.",
      "habilidades": [
        "Precisão",
        "Comunicação",
        "Atenção aos detalhes"
      ],
      "rotina": "Examina a boca, identifica problemas nos dentes e tecidos relacionados e realiza ações de prevenção e tratamento. Orienta higiene e pode se especializar em diferentes áreas odontológicas.",
      "locaisAtuacao": [
        "Consultórios e clínicas",
        "Hospitais",
        "Unidades públicas de saúde",
        "Empresas",
        "Universidades",
        "Serviços de perícia"
      ]
    },
    {
      "id": "farmaceutico",
      "nome": "Farmacêutico",
      "descricao": "Atua com medicamentos, análises e serviços relacionados à saúde.",
      "formacao": "Graduação em Farmácia e registro no CRF são necessários para exercer a profissão. Habilitações e requisitos adicionais variam conforme a atividade, como análises clínicas ou indústria.",
      "habilidades": [
        "Atenção aos detalhes",
        "Conhecimento científico",
        "Organização"
      ],
      "rotina": "Trabalha com medicamentos e produtos para a saúde. Pode orientar o uso seguro, acompanhar tratamentos, analisar ou desenvolver produtos e controlar produção, qualidade e distribuição.",
      "locaisAtuacao": [
        "Farmácias e drogarias",
        "Hospitais",
        "Laboratórios",
        "Indústria farmacêutica e cosmética",
        "Vigilância sanitária",
        "Pesquisa"
      ]
    },
    {
      "id": "fonoaudiologo",
      "nome": "Fonoaudiólogo",
      "descricao": "Trabalha com comunicação humana, voz, audição, linguagem e deglutição.",
      "formacao": "Graduação em Fonoaudiologia e registro no Crefono são necessários para exercer a profissão. Cursos e especializações podem aprofundar linguagem, audiologia, voz ou motricidade orofacial.",
      "habilidades": [
        "Escuta",
        "Observação",
        "Comunicação"
      ],
      "rotina": "Avalia e trabalha com comunicação, audição, voz, linguagem, fala e funções relacionadas à alimentação. Planeja atendimentos e orienta famílias e equipes de cuidado ou educação.",
      "locaisAtuacao": [
        "Clínicas e consultórios",
        "Hospitais e maternidades",
        "Escolas",
        "Centros de reabilitação",
        "Serviços de audiologia",
        "Atendimento domiciliar"
      ]
    },
    {
      "id": "terapeuta-ocupacional",
      "nome": "Terapeuta Ocupacional",
      "descricao": "Ajuda pessoas a desenvolver ou recuperar autonomia nas atividades cotidianas.",
      "formacao": "Graduação em Terapia Ocupacional e registro no Crefito são necessários para exercer a profissão. Especializações podem aprofundar saúde mental, reabilitação, contexto escolar ou inclusão.",
      "habilidades": [
        "Criatividade",
        "Empatia",
        "Planejamento"
      ],
      "rotina": "Ajuda pessoas a realizar atividades importantes do cotidiano com mais autonomia. Avalia rotinas e barreiras, propõe adaptações e atividades terapêuticas e acompanha a participação.",
      "locaisAtuacao": [
        "Hospitais e centros de reabilitação",
        "Saúde mental",
        "Escolas",
        "Assistência social",
        "Atendimento domiciliar",
        "Serviços para idosos e pessoas com deficiência"
      ]
    },
    {
      "id": "biomedico",
      "nome": "Biomédico",
      "descricao": "Atua em áreas como análises laboratoriais, pesquisa e diagnóstico, conforme habilitação.",
      "formacao": "Graduação em Biomedicina e registro no CRBM são necessários. Cada campo de atuação exige habilitação profissional compatível com as regras do conselho.",
      "habilidades": [
        "Precisão",
        "Análise",
        "Conhecimento científico"
      ],
      "rotina": "Aplica conhecimentos biomédicos em análises, pesquisa e outros serviços de saúde conforme sua habilitação. Processa amostras, acompanha resultados técnicos e controla qualidade.",
      "locaisAtuacao": [
        "Laboratórios de análises",
        "Hospitais",
        "Bancos de sangue",
        "Centros de pesquisa",
        "Indústria de diagnóstico",
        "Serviços de imagem ou estética conforme habilitação"
      ]
    }
  ],
  "educacao-desenvolvimento": [
    {
      "id": "professor",
      "nome": "Professor",
      "descricao": "Ensina conteúdos e acompanha o processo de aprendizagem dos alunos.",
      "formacao": "Para educação básica, o caminho usual é licenciatura na disciplina ou Pedagogia para educação infantil e anos iniciais, conforme etapa e regras da rede. Ensino técnico e superior têm requisitos próprios.",
      "habilidades": [
        "Comunicação",
        "Didática",
        "Planejamento"
      ],
      "rotina": "Planeja aulas, explica conteúdos, propõe atividades e acompanha a aprendizagem. Adapta estratégias à turma, avalia o progresso e dialoga com famílias e equipe escolar.",
      "locaisAtuacao": [
        "Escolas públicas e privadas",
        "Institutos federais",
        "Cursos livres",
        "Educação de jovens e adultos",
        "Aulas particulares",
        "Ensino on-line"
      ]
    },
    {
      "id": "pedagogo",
      "nome": "Pedagogo",
      "descricao": "Atua em processos educativos, planejamento pedagógico e aprendizagem.",
      "formacao": "Graduação em Pedagogia é o caminho mais comum. Docência, gestão, orientação e cargos públicos podem ter exigências adicionais definidas por lei, rede ou edital.",
      "habilidades": [
        "Organização",
        "Didática",
        "Comunicação"
      ],
      "rotina": "Planeja e acompanha processos educativos, apoia docentes e pode organizar projetos, materiais ou ações de gestão escolar. As tarefas variam conforme o cargo e o contexto.",
      "locaisAtuacao": [
        "Escolas e redes de ensino",
        "Secretarias de educação",
        "Organizações sociais",
        "Editoras",
        "Hospitais com atendimento pedagógico",
        "Empresas de educação"
      ]
    },
    {
      "id": "instrutor-cursos",
      "nome": "Instrutor de Cursos",
      "descricao": "Ensina habilidades práticas ou conhecimentos específicos.",
      "formacao": "Formação técnica, graduação, certificação ou experiência comprovada no tema ensinado. Cursos de didática podem ajudar; instituição e assunto definem os requisitos.",
      "habilidades": [
        "Didática",
        "Comunicação",
        "Domínio técnico"
      ],
      "rotina": "Ensina uma habilidade ou conteúdo em cursos práticos. Demonstra procedimentos, prepara exercícios, acompanha participantes e adapta a explicação ao nível da turma.",
      "locaisAtuacao": [
        "Escolas técnicas",
        "Cursos livres",
        "Empresas que treinam equipes",
        "Oficinas culturais",
        "Plataformas on-line",
        "Organizações comunitárias"
      ]
    },
    {
      "id": "orientador-educacional",
      "nome": "Orientador Educacional",
      "descricao": "Apoia o desenvolvimento escolar e social dos estudantes.",
      "formacao": "Pedagogia é frequente; Psicologia e outras formações educacionais podem ser aceitas conforme o cargo. Especialização em orientação educacional pode ser solicitada pela instituição.",
      "habilidades": [
        "Escuta",
        "Mediação",
        "Organização"
      ],
      "rotina": "Acompanha estudantes em questões de aprendizagem, convivência e projeto de futuro. Escuta, articula ações com famílias e professores e encaminha situações a outros serviços quando necessário.",
      "locaisAtuacao": [
        "Escolas públicas e privadas",
        "Redes de ensino",
        "Programas de permanência",
        "Educação profissional",
        "Projetos socioeducativos"
      ]
    },
    {
      "id": "designer-instrucional",
      "nome": "Designer Instrucional",
      "descricao": "Planeja experiências e materiais para facilitar a aprendizagem.",
      "formacao": "Graduação em Pedagogia, Educação, Comunicação ou Design; cursos de design instrucional, aprendizagem on-line e ferramentas de autoria. Experiência de ensino é útil.",
      "habilidades": [
        "Planejamento",
        "Escrita",
        "Organização de conteúdo"
      ],
      "rotina": "Transforma objetivos de aprendizagem em cursos e materiais claros. Organiza conteúdo, atividades e avaliações, cria roteiros e colabora com especialistas e equipes de tecnologia educacional.",
      "locaisAtuacao": [
        "Empresas de educação",
        "Universidades",
        "Plataformas de cursos",
        "Treinamento corporativo",
        "Editoras",
        "Consultorias educacionais"
      ]
    },
    {
      "id": "coordenador-pedagogico",
      "nome": "Coordenador Pedagógico",
      "descricao": "Acompanha práticas de ensino e apoia o planejamento pedagógico de uma instituição.",
      "formacao": "Graduação em Pedagogia ou licenciatura e experiência em educação; pós-graduação em gestão pode ser solicitada. Redes públicas definem requisitos nos editais e normas locais.",
      "habilidades": [
        "Liderança",
        "Planejamento",
        "Comunicação"
      ],
      "rotina": "Apoia professores e organiza o planejamento pedagógico. Acompanha resultados de aprendizagem, promove formação docente e articula o currículo às necessidades dos estudantes.",
      "locaisAtuacao": [
        "Escolas públicas e privadas",
        "Redes de ensino",
        "Secretarias de educação",
        "Instituições profissionais",
        "Organizações sociais"
      ]
    },
    {
      "id": "bibliotecario",
      "nome": "Bibliotecário",
      "descricao": "Organiza acervos e facilita o acesso à informação e à leitura.",
      "formacao": "Graduação em Biblioteconomia e registro no CRB são necessários para atuar como bibliotecário. Cursos de preservação, gestão de acervos e tecnologias podem complementar a formação.",
      "habilidades": [
        "Organização",
        "Pesquisa",
        "Atendimento"
      ],
      "rotina": "Organiza coleções e sistemas de informação para que as pessoas encontrem livros, documentos e recursos digitais. Orienta pesquisas, promove leitura e cuida do acesso e da preservação do acervo.",
      "locaisAtuacao": [
        "Bibliotecas públicas e escolares",
        "Universidades",
        "Órgãos públicos",
        "Centros de documentação",
        "Empresas",
        "Instituições culturais"
      ]
    },
    {
      "id": "educador-social",
      "nome": "Educador Social",
      "descricao": "Desenvolve ações educativas e de convivência em contextos comunitários.",
      "formacao": "Não há um único percurso para todas as vagas. Serviço Social, Pedagogia, Ciências Sociais e cursos de direitos humanos são caminhos possíveis; empregadores definem requisitos próprios.",
      "habilidades": [
        "Empatia",
        "Comunicação",
        "Planejamento de atividades"
      ],
      "rotina": "Desenvolve atividades educativas e de convivência com pessoas e comunidades, fortalecendo vínculos, participação e acesso a direitos. Planeja oficinas e articula ações com a rede local.",
      "locaisAtuacao": [
        "Centros de assistência social",
        "Abrigos",
        "Organizações sociais",
        "Projetos culturais e esportivos",
        "Programas para juventude",
        "Ações comunitárias"
      ]
    },
    {
      "id": "tutor-aprendizagem",
      "nome": "Tutor de Aprendizagem",
      "descricao": "Acompanha estudantes e ajuda a esclarecer dúvidas durante os estudos.",
      "formacao": "Formação ou experiência no conteúdo; licenciatura ou Pedagogia são comuns em escolas. Cursos de educação a distância e ferramentas digitais ajudam na tutoria on-line.",
      "habilidades": [
        "Didática",
        "Escuta",
        "Organização"
      ],
      "rotina": "Acompanha estudantes, esclarece dúvidas, orienta atividades e ajuda a manter o ritmo de estudo. Pode apoiar um conteúdo específico ou facilitar turmas presenciais e on-line.",
      "locaisAtuacao": [
        "Plataformas de educação a distância",
        "Universidades",
        "Escolas",
        "Cursos preparatórios",
        "Reforço escolar",
        "Empresas de treinamento"
      ]
    },
    {
      "id": "professor-educacao-fisica",
      "nome": "Professor de Educação Física",
      "descricao": "Planeja atividades corporais e ensina práticas esportivas e de movimento.",
      "formacao": "Graduação em Educação Física. Para escolas, costuma ser necessária licenciatura; em outros campos, modalidade de formação e registro no CREF devem ser compatíveis com a atuação.",
      "habilidades": [
        "Comunicação",
        "Planejamento",
        "Motivação de grupos"
      ],
      "rotina": "Ensina práticas corporais e esportivas, planeja aulas e acompanha o desenvolvimento com atenção à segurança e inclusão. O trabalho muda entre escola, esporte, lazer e exercício físico.",
      "locaisAtuacao": [
        "Escolas",
        "Clubes e academias",
        "Projetos esportivos",
        "Centros de lazer",
        "Programas de saúde",
        "Treinamento individual"
      ]
    }
  ],
  "negocios-gestao-financas": [
    {
      "id": "administrador",
      "nome": "Administrador",
      "descricao": "Planeja e organiza recursos, equipes e processos de organizações.",
      "formacao": "Graduação em Administração é o percurso direto; tecnólogos e outras graduações preparam para áreas específicas. Cursos de projetos, processos e finanças ajudam; registro pode ser aplicável às atividades regulamentadas.",
      "habilidades": [
        "Organização",
        "Liderança",
        "Análise"
      ],
      "rotina": "Ajuda uma organização a definir objetivos e organizar pessoas, orçamento e processos. Analisa resultados, propõe melhorias e pode trabalhar com operações, recursos humanos ou estratégia.",
      "locaisAtuacao": [
        "Empresas",
        "Consultorias",
        "Organizações sociais",
        "Cooperativas",
        "Órgãos públicos",
        "Negócio próprio"
      ]
    },
    {
      "id": "contador",
      "nome": "Contador",
      "descricao": "Registra, analisa e interpreta informações contábeis e financeiras.",
      "formacao": "Graduação em Ciências Contábeis, aprovação no Exame de Suficiência e registro no CRC são necessários para atuar como contador. Cursos de tributos e auditoria aprofundam a formação.",
      "habilidades": [
        "Atenção aos detalhes",
        "Organização",
        "Análise numérica"
      ],
      "rotina": "Registra e analisa informações contábeis, prepara demonstrações e orienta sobre obrigações e controles financeiros. Também pode atuar com auditoria, perícia, custos ou tributos.",
      "locaisAtuacao": [
        "Escritórios contábeis",
        "Empresas",
        "Bancos",
        "Órgãos públicos",
        "Organizações sociais",
        "Auditorias"
      ]
    },
    {
      "id": "analista-recursos-humanos",
      "nome": "Analista de Recursos Humanos",
      "descricao": "Apoia processos de contratação, desenvolvimento e gestão de pessoas.",
      "formacao": "Tecnólogo em Gestão de RH ou graduação em Administração, Psicologia ou Gestão de Pessoas; cursos de recrutamento, legislação trabalhista, folha e desenvolvimento complementam o preparo.",
      "habilidades": [
        "Comunicação",
        "Organização",
        "Discrição"
      ],
      "rotina": "Apoia seleção, integração, treinamento, benefícios e indicadores de equipes. Orienta lideranças e participa de iniciativas para desenvolver pessoas e melhorar a experiência no trabalho.",
      "locaisAtuacao": [
        "Departamentos de RH",
        "Consultorias de recrutamento",
        "Empresas de trabalho temporário",
        "Órgãos públicos",
        "Organizações sociais"
      ]
    },
    {
      "id": "analista-financeiro",
      "nome": "Analista Financeiro",
      "descricao": "Analisa receitas, despesas, fluxo de caixa e resultados financeiros.",
      "formacao": "Graduação ou tecnólogo em Finanças, Administração, Contabilidade ou Economia. Excel, sistemas de gestão, demonstrações financeiras e finanças corporativas são competências úteis.",
      "habilidades": [
        "Raciocínio numérico",
        "Organização",
        "Análise"
      ],
      "rotina": "Acompanha receitas, despesas e resultados para apoiar decisões. Organiza previsões e relatórios e pode trabalhar com contas a pagar, tesouraria, crédito ou orçamento.",
      "locaisAtuacao": [
        "Empresas",
        "Bancos e fintechs",
        "Consultorias",
        "Escritórios contábeis",
        "Organizações sociais",
        "Órgãos públicos"
      ]
    },
    {
      "id": "empreendedor",
      "nome": "Empreendedor",
      "descricao": "Cria ou desenvolve um negócio para atender a uma necessidade do mercado.",
      "formacao": "Não existe uma graduação única obrigatória. Cursos de gestão, finanças, marketing, vendas e planejamento, além de programas de apoio a pequenos negócios, podem ajudar.",
      "habilidades": [
        "Iniciativa",
        "Planejamento",
        "Adaptação"
      ],
      "rotina": "Identifica uma necessidade e organiza uma iniciativa para oferecer um produto ou serviço. Testa a ideia, conversa com clientes, calcula custos, cuida das vendas e ajusta o negócio.",
      "locaisAtuacao": [
        "Pequenas empresas",
        "Comércio eletrônico",
        "Serviços profissionais",
        "Alimentação",
        "Cooperativas",
        "Negócios de impacto social"
      ]
    },
    {
      "id": "economista",
      "nome": "Economista",
      "descricao": "Analisa fenômenos econômicos, mercados e uso de recursos.",
      "formacao": "Graduação em Ciências Econômicas e registro no Corecon são o caminho profissional usual para atribuições regulamentadas. Cursos de econometria, dados e finanças podem direcionar a atuação.",
      "habilidades": [
        "Análise quantitativa",
        "Pesquisa",
        "Pensamento crítico"
      ],
      "rotina": "Analisa como recursos, preços, renda e políticas afetam famílias, empresas e governos. Trabalha com indicadores, cenários e estudos para apoiar decisões econômicas e financeiras.",
      "locaisAtuacao": [
        "Bancos e corretoras",
        "Empresas",
        "Consultorias",
        "Órgãos públicos",
        "Institutos de pesquisa",
        "Universidades"
      ]
    },
    {
      "id": "auditor",
      "nome": "Auditor",
      "descricao": "Examina registros, controles e processos para avaliar conformidade e riscos.",
      "formacao": "Ciências Contábeis é central para auditoria contábil independente; Administração, Economia, Direito e Tecnologia aparecem em outros focos. Concursos e auditoria independente podem ter requisitos próprios.",
      "habilidades": [
        "Atenção aos detalhes",
        "Ética",
        "Análise"
      ],
      "rotina": "Examina registros, controles e processos para verificar sua confiabilidade e conformidade. Documenta evidências, identifica riscos e recomenda melhorias; o foco muda entre auditoria contábil, interna, fiscal e pública.",
      "locaisAtuacao": [
        "Firmas de auditoria",
        "Empresas",
        "Bancos",
        "Órgãos de controle",
        "Administrações públicas",
        "Consultorias de riscos"
      ]
    },
    {
      "id": "analista-negocios",
      "nome": "Analista de Negócios",
      "descricao": "Investiga necessidades de uma organização e propõe melhorias em processos e soluções.",
      "formacao": "Graduação em Administração, Sistemas de Informação, Economia ou Engenharia de Produção; cursos de processos, requisitos e análise de dados. Conhecimento do setor é valioso.",
      "habilidades": [
        "Comunicação",
        "Análise de processos",
        "Resolução de problemas"
      ],
      "rotina": "Entende necessidades da organização e as traduz em requisitos para processos, produtos ou sistemas. Mapeia fluxos, entrevista equipes, analisa dados e ajuda a validar soluções.",
      "locaisAtuacao": [
        "Empresas de tecnologia",
        "Bancos e seguradoras",
        "Consultorias",
        "Comércio eletrônico",
        "Indústrias",
        "Áreas digitais"
      ]
    },
    {
      "id": "gerente-projetos",
      "nome": "Gerente de Projetos",
      "descricao": "Planeja e coordena projetos para atingir objetivos dentro de prazos e recursos.",
      "formacao": "Formação na área do projeto e experiência em equipes; cursos de métodos ágeis ou tradicionais e certificações como PMP ou Scrum são complementos, não exigências universais.",
      "habilidades": [
        "Planejamento",
        "Liderança",
        "Comunicação"
      ],
      "rotina": "Coordena um projeto para manter entregas, prazos, orçamento e responsabilidades claros. Acompanha riscos e dependências, alinha envolvidos e ajusta o plano quando surgem mudanças.",
      "locaisAtuacao": [
        "Empresas de tecnologia",
        "Construção e engenharia",
        "Consultorias",
        "Indústria",
        "Órgãos públicos",
        "Organizações sociais"
      ]
    },
    {
      "id": "consultor-empresarial",
      "nome": "Consultor Empresarial",
      "descricao": "Ajuda organizações a analisar desafios e melhorar resultados e processos.",
      "formacao": "A formação depende do tema: Administração, Economia, Engenharia, Contabilidade, Tecnologia ou outra área relacionada. Experiência no setor e cursos de análise e gestão ajudam.",
      "habilidades": [
        "Análise",
        "Comunicação",
        "Resolução de problemas"
      ],
      "rotina": "Estuda um desafio organizacional e propõe caminhos de melhoria. Pode apoiar estratégia, processos, finanças, tecnologia ou pessoas e acompanhar a implantação das recomendações.",
      "locaisAtuacao": [
        "Consultorias",
        "Empresas de vários setores",
        "Organizações sociais",
        "Órgãos públicos",
        "Atuação independente",
        "Projetos temporários"
      ]
    }
  ],
  "engenharia-industria": [
    {
      "id": "engenheiro-civil",
      "nome": "Engenheiro Civil",
      "descricao": "Planeja, projeta e acompanha obras e estruturas.",
      "formacao": "Graduação em Engenharia Civil e registro no CREA são necessários para atribuições profissionais de engenharia. Cada serviço exige habilitação compatível e responsabilidade técnica.",
      "habilidades": [
        "Matemática",
        "Planejamento",
        "Resolução de problemas"
      ],
      "rotina": "Projeta e acompanha obras e estruturas considerando segurança, uso, orçamento e normas. Calcula soluções, especifica materiais, fiscaliza execução e pode coordenar construção ou manutenção.",
      "locaisAtuacao": [
        "Construtoras",
        "Escritórios de projeto",
        "Infraestrutura",
        "Órgãos públicos",
        "Incorporadoras",
        "Fiscalização de obras"
      ]
    },
    {
      "id": "engenheiro-eletrico",
      "nome": "Engenheiro Eletricista",
      "descricao": "Projeta e acompanha sistemas elétricos e instalações.",
      "formacao": "Graduação em Engenharia Elétrica e registro no CREA para as atribuições profissionais. Cursos de potência, automação, energia renovável ou eletrônica podem direcionar a carreira.",
      "habilidades": [
        "Matemática",
        "Análise técnica",
        "Planejamento"
      ],
      "rotina": "Projeta, instala ou avalia sistemas de energia e instalações elétricas. Define equipamentos e proteções, acompanha testes e manutenção e verifica segurança e eficiência.",
      "locaisAtuacao": [
        "Concessionárias de energia",
        "Indústrias",
        "Construção",
        "Consultorias",
        "Empresas de energia solar",
        "Órgãos públicos"
      ]
    },
    {
      "id": "engenheiro-producao",
      "nome": "Engenheiro de Produção",
      "descricao": "Melhora processos produtivos, recursos, qualidade e produtividade.",
      "formacao": "Graduação em Engenharia de Produção e registro no CREA para atribuições correspondentes. Cursos de logística, qualidade, dados e melhoria contínua complementam o perfil.",
      "habilidades": [
        "Análise de processos",
        "Planejamento",
        "Raciocínio lógico"
      ],
      "rotina": "Melhora como produtos e serviços são planejados e entregues. Analisa processos, capacidade, qualidade, custos e suprimentos e coordena iniciativas de eficiência e segurança.",
      "locaisAtuacao": [
        "Indústrias",
        "Logística",
        "Consultorias",
        "Hospitais",
        "Varejo e comércio eletrônico",
        "Bancos e serviços"
      ]
    },
    {
      "id": "tecnico-seguranca-trabalho",
      "nome": "Técnico em Segurança do Trabalho",
      "descricao": "Ajuda a prevenir acidentes e promover ambientes de trabalho seguros.",
      "formacao": "Curso técnico em Segurança do Trabalho e registro profissional conforme as regras do Ministério do Trabalho são necessários. Atualizações em prevenção e normas complementam o preparo.",
      "habilidades": [
        "Observação",
        "Comunicação",
        "Prevenção de riscos"
      ],
      "rotina": "Ajuda a prevenir acidentes e doenças do trabalho. Inspeciona ambientes, identifica riscos, orienta equipes, acompanha medidas preventivas e contribui para treinamentos e registros.",
      "locaisAtuacao": [
        "Indústrias",
        "Construção civil",
        "Hospitais",
        "Logística",
        "Órgãos públicos",
        "Consultorias de saúde e segurança"
      ]
    },
    {
      "id": "tecnico-eletrotecnica",
      "nome": "Técnico em Eletrotécnica",
      "descricao": "Instala, testa e mantém sistemas e equipamentos elétricos.",
      "formacao": "Curso técnico reconhecido em Eletrotécnica. Registro no conselho profissional competente pode ser necessário conforme atividades e responsabilidades; cursos de comandos e segurança elétrica ajudam.",
      "habilidades": [
        "Conhecimento técnico",
        "Atenção",
        "Diagnóstico"
      ],
      "rotina": "Instala, testa e mantém circuitos e equipamentos elétricos dentro das atribuições técnicas. Lê projetos, localiza falhas e registra intervenções seguindo procedimentos de segurança.",
      "locaisAtuacao": [
        "Instalação elétrica",
        "Indústrias",
        "Concessionárias",
        "Construção civil",
        "Manutenção predial",
        "Energia renovável"
      ]
    },
    {
      "id": "engenheiro-mecanico",
      "nome": "Engenheiro Mecânico",
      "descricao": "Projeta e avalia máquinas, equipamentos e sistemas mecânicos.",
      "formacao": "Graduação em Engenharia Mecânica e registro no CREA para atribuições de engenharia. Especializações em energia, fabricação, refrigeração ou manutenção podem direcionar a carreira.",
      "habilidades": [
        "Matemática",
        "Projeto técnico",
        "Resolução de problemas"
      ],
      "rotina": "Projeta e acompanha máquinas, equipamentos e sistemas mecânicos. Faz cálculos e especificações, avalia materiais e desempenho e participa de instalação, manutenção e melhoria de produtos.",
      "locaisAtuacao": [
        "Indústrias",
        "Fabricantes de máquinas e veículos",
        "Energia",
        "Construção",
        "Consultorias",
        "Centros de pesquisa"
      ]
    },
    {
      "id": "engenheiro-automacao",
      "nome": "Engenheiro de Automação",
      "descricao": "Desenvolve sistemas que automatizam máquinas e processos.",
      "formacao": "Graduação em Engenharia de Controle e Automação, Elétrica, Mecatrônica ou área próxima e registro no CREA para atribuições correspondentes. Cursos de robótica e controle são úteis.",
      "habilidades": [
        "Lógica",
        "Programação",
        "Análise técnica"
      ],
      "rotina": "Projeta controles que integram sensores, equipamentos e programas para automatizar máquinas e processos. Acompanha testes e busca aumentar segurança, produtividade e confiabilidade.",
      "locaisAtuacao": [
        "Indústrias",
        "Empresas de automação",
        "Integradoras de sistemas",
        "Energia",
        "Mineração",
        "Fabricantes de equipamentos"
      ]
    },
    {
      "id": "tecnico-mecanica",
      "nome": "Técnico em Mecânica",
      "descricao": "Apoia projetos, fabricação, instalação e manutenção de sistemas mecânicos.",
      "formacao": "Curso técnico reconhecido em Mecânica. Registro no conselho profissional competente pode ser necessário conforme atividade; prática em desenho, metrologia e manutenção é valorizada.",
      "habilidades": [
        "Leitura de desenhos técnicos",
        "Precisão",
        "Diagnóstico"
      ],
      "rotina": "Monta, inspeciona e mantém máquinas e componentes mecânicos. Mede peças, identifica falhas, realiza ajustes e registra serviços de manutenção conforme projetos e procedimentos.",
      "locaisAtuacao": [
        "Oficinas industriais",
        "Fábricas",
        "Empresas de manutenção",
        "Fabricantes de máquinas",
        "Transportes",
        "Mineração"
      ]
    },
    {
      "id": "tecnologo-construcao-civil",
      "nome": "Tecnólogo em Construção de Edifícios",
      "descricao": "Atua em atividades técnicas de planejamento e acompanhamento de edificações.",
      "formacao": "Curso superior de tecnologia em Construção de Edifícios ou equivalente. Atribuições e registro profissional devem corresponder à formação e ao serviço técnico assumido.",
      "habilidades": [
        "Planejamento",
        "Leitura de projetos",
        "Organização"
      ],
      "rotina": "Apoia planejamento e execução de edificações. Lê projetos, acompanha serviços e materiais, mede quantidades e ajuda a controlar cronograma, qualidade e segurança dentro de suas atribuições.",
      "locaisAtuacao": [
        "Construtoras",
        "Reformas",
        "Escritórios de engenharia",
        "Incorporadoras",
        "Fiscalização",
        "Orçamento e planejamento de obras"
      ]
    },
    {
      "id": "arquiteto-urbanista",
      "nome": "Arquiteto e Urbanista",
      "descricao": "Planeja espaços, edificações e ambientes urbanos considerando uso, estética e função.",
      "formacao": "Graduação em Arquitetura e Urbanismo e registro no CAU são necessários para exercer a profissão. Cursos em patrimônio, paisagismo ou interiores podem complementar a formação.",
      "habilidades": [
        "Criatividade",
        "Desenho técnico",
        "Planejamento espacial"
      ],
      "rotina": "Planeja espaços e cidades conciliando uso, conforto, acessibilidade, estética e viabilidade. Desenvolve projetos de edificações, interiores ou urbanismo e pode acompanhar obras e patrimônio.",
      "locaisAtuacao": [
        "Escritórios de arquitetura",
        "Construtoras",
        "Órgãos públicos",
        "Planejamento urbano",
        "Instituições culturais",
        "Trabalho autônomo"
      ]
    }
  ],
  "meio-ambiente-agro": [
    {
      "id": "engenheiro-agronomo",
      "nome": "Engenheiro Agrônomo",
      "descricao": "Trabalha com produção agrícola, solo, cultivos e manejo de recursos.",
      "formacao": "Graduação em Agronomia ou Engenharia Agronômica e registro no CREA para as atribuições correspondentes. Cursos em culturas, solos, irrigação e agricultura de precisão podem direcionar a atuação.",
      "habilidades": [
        "Análise",
        "Planejamento",
        "Conhecimento ambiental"
      ],
      "rotina": "Usa conhecimentos de solo, clima e plantas para planejar cultivos e melhorar a produção. Recomenda manejo, acompanha safras, avalia insumos e orienta práticas produtivas e sustentáveis.",
      "locaisAtuacao": [
        "Fazendas e cooperativas",
        "Empresas de insumos",
        "Assistência rural",
        "Agroindústrias",
        "Pesquisa",
        "Extensão e fiscalização"
      ]
    },
    {
      "id": "medico-veterinario",
      "nome": "Médico-Veterinário",
      "descricao": "Cuida da saúde animal e pode atuar também na saúde pública e produção.",
      "formacao": "Graduação em Medicina Veterinária e registro no CRMV são necessários. Residência e especializações podem aprofundar áreas clínicas, cirúrgicas ou de saúde pública.",
      "habilidades": [
        "Observação",
        "Responsabilidade",
        "Conhecimento científico"
      ],
      "rotina": "Cuida da saúde e do bem-estar de animais, prevenindo e tratando doenças. Também pode trabalhar com saúde pública, inspeção de alimentos, produção animal, pesquisa e vigilância de zoonoses.",
      "locaisAtuacao": [
        "Clínicas e hospitais veterinários",
        "Fazendas",
        "Laboratórios",
        "Indústria de alimentos e medicamentos",
        "Vigilância",
        "Zoológicos"
      ]
    },
    {
      "id": "engenheiro-ambiental",
      "nome": "Engenheiro Ambiental",
      "descricao": "Desenvolve soluções para prevenir e reduzir impactos ambientais.",
      "formacao": "Graduação em Engenharia Ambiental ou formação de engenharia compatível e registro no CREA para atribuições correspondentes. Especializações em saneamento e gestão ambiental são opções.",
      "habilidades": [
        "Análise",
        "Planejamento",
        "Resolução de problemas"
      ],
      "rotina": "Avalia impactos e propõe soluções para reduzir danos ambientais e usar recursos com responsabilidade. Pode atuar com água, resíduos, saneamento, licenciamento e recuperação de áreas.",
      "locaisAtuacao": [
        "Consultorias",
        "Indústrias",
        "Saneamento",
        "Órgãos públicos",
        "Construção e infraestrutura",
        "Organizações de conservação"
      ]
    },
    {
      "id": "zootecnista",
      "nome": "Zootecnista",
      "descricao": "Atua na produção e no bem-estar de animais de interesse zootécnico.",
      "formacao": "Graduação em Zootecnia e registro no CRMV são necessários. Cursos em nutrição animal, pastagens, melhoramento e bem-estar podem orientar a especialização.",
      "habilidades": [
        "Planejamento",
        "Observação",
        "Conhecimento técnico"
      ],
      "rotina": "Planeja criação e manejo de animais de produção com foco em saúde, nutrição, bem-estar e eficiência. Analisa alimentação e instalações e acompanha indicadores da produção.",
      "locaisAtuacao": [
        "Fazendas e cooperativas",
        "Agroindústrias",
        "Empresas de nutrição e genética",
        "Consultorias rurais",
        "Pesquisa",
        "Extensão"
      ]
    },
    {
      "id": "tecnico-agropecuaria",
      "nome": "Técnico em Agropecuária",
      "descricao": "Apoia atividades técnicas de produção agrícola e criação animal.",
      "formacao": "Curso técnico reconhecido em Agropecuária. Registro profissional pode ser exigido para determinadas atribuições; cursos de culturas, manejo e mecanização ampliam o preparo.",
      "habilidades": [
        "Organização",
        "Observação",
        "Conhecimento prático"
      ],
      "rotina": "Acompanha atividades agrícolas e pecuárias, ajuda a planejar plantio e criação, coleta informações e apoia o uso de máquinas e insumos conforme sua formação.",
      "locaisAtuacao": [
        "Fazendas",
        "Cooperativas",
        "Assistência técnica",
        "Agroindústrias",
        "Lojas de insumos",
        "Extensão rural"
      ]
    },
    {
      "id": "engenheiro-florestal",
      "nome": "Engenheiro Florestal",
      "descricao": "Planeja o manejo de florestas e a conservação de recursos florestais.",
      "formacao": "Graduação em Engenharia Florestal e registro no CREA para as atribuições correspondentes. Cursos de geoprocessamento, silvicultura e conservação podem complementar a formação.",
      "habilidades": [
        "Conhecimento ambiental",
        "Planejamento",
        "Análise"
      ],
      "rotina": "Planeja o uso e a conservação de florestas e recursos naturais. Pode trabalhar com restauração, manejo, inventários, prevenção de incêndios e avaliação de impactos.",
      "locaisAtuacao": [
        "Empresas florestais",
        "Órgãos ambientais",
        "Consultorias",
        "Unidades de conservação",
        "Papel e celulose",
        "Restauração"
      ]
    },
    {
      "id": "tecnico-meio-ambiente",
      "nome": "Técnico em Meio Ambiente",
      "descricao": "Apoia ações de monitoramento e controle de impactos ambientais.",
      "formacao": "Curso técnico em Meio Ambiente ou área relacionada. Registro e limites de atuação dependem das atribuições e normas aplicáveis; cursos de monitoramento e legislação são úteis.",
      "habilidades": [
        "Observação",
        "Organização",
        "Conhecimento ambiental"
      ],
      "rotina": "Apoia monitoramento e gestão de impactos ambientais. Coleta amostras e dados, acompanha resíduos e licenças, registra ocorrências e orienta equipes sobre procedimentos.",
      "locaisAtuacao": [
        "Indústrias",
        "Consultorias",
        "Infraestrutura",
        "Saneamento",
        "Órgãos públicos",
        "Projetos de conservação"
      ]
    },
    {
      "id": "analista-agronegocio",
      "nome": "Analista de Agronegócio",
      "descricao": "Analisa mercados, custos e operações ligadas à cadeia agropecuária.",
      "formacao": "Graduação ou tecnólogo em Agronegócio, Administração, Economia, Agronomia ou Logística. Cursos de dados, commodities e gestão rural complementam o perfil.",
      "habilidades": [
        "Análise de dados",
        "Planejamento",
        "Conhecimento do setor"
      ],
      "rotina": "Analisa custos, mercado, produção e logística para apoiar empresas do agronegócio. Organiza dados, acompanha preços e safras e prepara estudos para planejamento e comercialização.",
      "locaisAtuacao": [
        "Cooperativas",
        "Tradings e exportadoras",
        "Agroindústrias",
        "Bancos e seguradoras rurais",
        "Consultorias",
        "Empresas de tecnologia agrícola"
      ]
    },
    {
      "id": "tecnico-irrigacao",
      "nome": "Técnico em Irrigação",
      "descricao": "Apoia a instalação e o manejo de sistemas de irrigação.",
      "formacao": "Curso técnico em Irrigação, Agropecuária ou área relacionada e prática em hidráulica e manejo de água. Registro e atividades permitidas dependem da formação e das regras profissionais.",
      "habilidades": [
        "Conhecimento técnico",
        "Planejamento",
        "Diagnóstico"
      ],
      "rotina": "Ajuda a planejar, instalar e acompanhar sistemas de irrigação. Verifica equipamentos, mede vazões, identifica falhas e orienta o uso eficiente da água conforme o projeto e sua atribuição.",
      "locaisAtuacao": [
        "Fazendas",
        "Empresas de irrigação",
        "Cooperativas",
        "Viveiros e horticultura",
        "Paisagismo",
        "Assistência rural"
      ]
    },
    {
      "id": "gestor-ambiental",
      "nome": "Gestor Ambiental",
      "descricao": "Planeja ações para reduzir impactos e melhorar o desempenho ambiental de organizações.",
      "formacao": "Tecnólogo ou graduação em Gestão Ambiental, Engenharia Ambiental, Biologia, Geografia ou Administração. Cursos de auditoria, sustentabilidade e legislação podem complementar o preparo.",
      "habilidades": [
        "Planejamento",
        "Comunicação",
        "Análise de indicadores"
      ],
      "rotina": "Organiza programas para reduzir impactos de empresas, cidades ou projetos. Define metas, acompanha indicadores e conformidade, coordena ações de resíduos e recursos e dialoga com equipes e comunidades.",
      "locaisAtuacao": [
        "Empresas e indústrias",
        "Consultorias",
        "Órgãos públicos",
        "Saneamento",
        "Organizações de conservação",
        "Projetos ESG"
      ]
    }
  ],
  "direito-sociedade-servico-publico": [
    {
      "id": "advogado",
      "nome": "Advogado",
      "descricao": "Orienta clientes sobre direitos e atua em questões jurídicas.",
      "formacao": "Graduação em Direito, aprovação no Exame da OAB e inscrição ativa são necessárias para exercer advocacia. Pós-graduação e cursos podem aprofundar uma área.",
      "habilidades": [
        "Argumentação",
        "Pesquisa",
        "Comunicação"
      ],
      "rotina": "Orienta sobre direitos e obrigações, negocia, elabora documentos e pode representar clientes em processos. A atuação pode se concentrar em áreas como família, trabalho, empresas ou setor público.",
      "locaisAtuacao": [
        "Escritórios",
        "Departamentos jurídicos",
        "Órgãos públicos",
        "Organizações sociais",
        "Sindicatos",
        "Atuação autônoma"
      ]
    },
    {
      "id": "assistente-social",
      "nome": "Assistente Social",
      "descricao": "Atua na garantia de direitos e no acesso a políticas e serviços sociais.",
      "formacao": "Graduação em Serviço Social e registro no CRESS são necessários para exercer a profissão. Formação continuada pode aprofundar saúde, educação, assistência ou direitos humanos.",
      "habilidades": [
        "Escuta",
        "Análise social",
        "Comunicação"
      ],
      "rotina": "Analisa necessidades sociais e orienta pessoas sobre direitos e acesso a políticas e serviços. Planeja atendimentos, articula encaminhamentos e acompanha situações com equipes e comunidades.",
      "locaisAtuacao": [
        "Centros de assistência social",
        "Hospitais e unidades de saúde",
        "Escolas",
        "Órgãos públicos",
        "Sistema de justiça",
        "Organizações sociais"
      ]
    },
    {
      "id": "servidor-publico",
      "nome": "Servidor Público",
      "descricao": "Executa atividades e serviços em órgãos da administração pública.",
      "formacao": "A formação depende do cargo e do edital: há vagas de nível médio, técnico e superior em muitas áreas. Confira escolaridade, etapas e qualificações específicas de cada carreira.",
      "habilidades": [
        "Organização",
        "Responsabilidade",
        "Atendimento"
      ],
      "rotina": "Presta serviços de interesse coletivo em órgãos municipais, estaduais ou federais. As tarefas variam entre atendimento, análise técnica, fiscalização, gestão, pesquisa e políticas públicas.",
      "locaisAtuacao": [
        "Prefeituras",
        "Governos estaduais",
        "Órgãos federais",
        "Escolas e universidades públicas",
        "Tribunais",
        "Autarquias"
      ]
    },
    {
      "id": "sociologo",
      "nome": "Sociólogo",
      "descricao": "Estuda relações sociais, grupos, instituições e transformações sociais.",
      "formacao": "Graduação em Ciências Sociais ou Sociologia com formação em pesquisa social. Pós-graduação pode ajudar em pesquisa especializada e docência; requisitos dependem do cargo.",
      "habilidades": [
        "Pesquisa",
        "Análise crítica",
        "Escrita"
      ],
      "rotina": "Estuda relações sociais, grupos, instituições e mudanças na sociedade. Planeja pesquisas, entrevista participantes, analisa dados e produz estudos que ajudam a compreender problemas e orientar projetos.",
      "locaisAtuacao": [
        "Universidades e centros de pesquisa",
        "Institutos de opinião",
        "Órgãos públicos",
        "Organizações sociais",
        "Consultorias",
        "Áreas de diversidade"
      ]
    },
    {
      "id": "gestor-politicas-publicas",
      "nome": "Gestor de Políticas Públicas",
      "descricao": "Planeja e acompanha programas e ações voltados à sociedade.",
      "formacao": "Graduação em Gestão ou Administração Pública, Administração, Economia, Direito ou Ciências Sociais. Cursos de avaliação, orçamento, dados e gestão pública podem direcionar a atuação.",
      "habilidades": [
        "Planejamento",
        "Análise",
        "Comunicação"
      ],
      "rotina": "Ajuda a desenhar, executar e avaliar programas públicos. Analisa necessidades e dados, coordena recursos e equipes, acompanha metas e articula órgãos e comunidades.",
      "locaisAtuacao": [
        "Prefeituras e governos",
        "Ministérios",
        "Institutos de pesquisa",
        "Consultorias",
        "Organizações sociais",
        "Organismos internacionais"
      ]
    },
    {
      "id": "defensor-publico",
      "nome": "Defensor Público",
      "descricao": "Presta assistência jurídica gratuita a pessoas que atendem aos critérios legais.",
      "formacao": "Graduação em Direito e aprovação em concurso para a Defensoria Pública. Experiência jurídica e outras condições variam conforme instituição, legislação e edital.",
      "habilidades": [
        "Argumentação",
        "Escuta",
        "Conhecimento jurídico"
      ],
      "rotina": "Presta assistência jurídica gratuita a quem não pode pagar advogado e atua na proteção de direitos. Atende, orienta, negocia e pode representar pessoas em processos judiciais.",
      "locaisAtuacao": [
        "Defensorias estaduais",
        "Defensoria Pública da União",
        "Unidades de atendimento",
        "Núcleos especializados",
        "Educação em direitos"
      ]
    },
    {
      "id": "delegado-policia",
      "nome": "Delegado de Polícia",
      "descricao": "Coordena atividades de investigação policial conforme suas atribuições legais.",
      "formacao": "Graduação em Direito e aprovação em concurso da carreira policial. Requisitos adicionais, como experiência, variam conforme corporação, estado e edital vigente.",
      "habilidades": [
        "Liderança",
        "Análise",
        "Tomada de decisão"
      ],
      "rotina": "Coordena investigações e equipes policiais e toma decisões jurídicas e operacionais dentro das atribuições do cargo. Registra ocorrências, conduz procedimentos e articula ações de apuração.",
      "locaisAtuacao": [
        "Polícias Civis",
        "Polícia Federal",
        "Unidades de investigação",
        "Delegacias especializadas",
        "Inteligência policial"
      ]
    },
    {
      "id": "oficial-justica",
      "nome": "Oficial de Justiça",
      "descricao": "Cumpre diligências e comunicações determinadas por autoridades judiciais.",
      "formacao": "Ingresso por concurso do tribunal. Escolaridade e formação jurídica exigidas variam conforme ramo da Justiça, estado e edital; Direito e procedimentos judiciais são temas comuns de preparação.",
      "habilidades": [
        "Organização",
        "Comunicação",
        "Responsabilidade"
      ],
      "rotina": "Cumpre ordens judiciais fora do fórum, como citações, intimações e outras diligências. Registra resultados com precisão e mantém contato com partes envolvidas.",
      "locaisAtuacao": [
        "Tribunais estaduais",
        "Justiça Federal",
        "Justiça do Trabalho",
        "Justiça Militar",
        "Centrais de mandados"
      ]
    },
    {
      "id": "cientista-politico",
      "nome": "Cientista Político",
      "descricao": "Pesquisa sistemas políticos, instituições, eleições e políticas públicas.",
      "formacao": "Graduação em Ciência Política, Ciências Sociais, Administração Pública, Direito ou Economia. Pós-graduação pode ser útil em pesquisa e docência; métodos e dados são competências importantes.",
      "habilidades": [
        "Pesquisa",
        "Análise crítica",
        "Comunicação"
      ],
      "rotina": "Analisa instituições, eleições, governos e relações de poder. Reúne dados, acompanha políticas e debates e produz pesquisas ou recomendações para decisões públicas e organizacionais.",
      "locaisAtuacao": [
        "Universidades",
        "Centros de pesquisa",
        "Órgãos públicos",
        "Institutos de opinião",
        "Campanhas",
        "Organizações sociais"
      ]
    },
    {
      "id": "diplomata",
      "nome": "Diplomata",
      "descricao": "Representa o Brasil e atua nas relações internacionais do país.",
      "formacao": "Ingresso pelo concurso CACD, que exige curso superior e outros critérios definidos no edital vigente. História, política, economia, Direito, idiomas e atualidades são temas importantes de estudo.",
      "habilidades": [
        "Comunicação",
        "Negociação",
        "Conhecimento internacional"
      ],
      "rotina": "Representa o Brasil e trabalha nas relações com outros países e organismos internacionais. Analisa temas políticos, econômicos e culturais, participa de negociações e prepara informações e serviços consulares.",
      "locaisAtuacao": [
        "Ministério das Relações Exteriores",
        "Embaixadas e consulados",
        "Missões internacionais",
        "Cooperação e negociação internacional"
      ]
    }
  ],
  "logistica-comercio-servicos": [
    {
      "id": "analista-logistica",
      "nome": "Analista de Logística",
      "descricao": "Organiza e acompanha o fluxo de materiais, produtos e entregas.",
      "formacao": "Tecnólogo ou graduação em Logística, Administração, Engenharia de Produção ou Comércio Exterior. Cursos de estoque, transporte, sistemas de gestão e dados podem complementar o preparo.",
      "habilidades": [
        "Organização",
        "Planejamento",
        "Análise de dados"
      ],
      "rotina": "Planeja o fluxo de produtos da compra à entrega. Acompanha estoques, transportes, prazos e custos, analisa indicadores e propõe ajustes para melhorar o serviço.",
      "locaisAtuacao": [
        "Centros de distribuição",
        "Transportadoras",
        "Indústrias",
        "Varejo e comércio eletrônico",
        "Portos e aeroportos",
        "Consultorias"
      ]
    },
    {
      "id": "comprador",
      "nome": "Comprador",
      "descricao": "Pesquisa fornecedores e negocia a aquisição de produtos e serviços.",
      "formacao": "Curso técnico ou graduação em Administração, Logística, Comércio Exterior, Economia ou Engenharia. Cursos de negociação, contratos, compras estratégicas e custos são úteis.",
      "habilidades": [
        "Negociação",
        "Organização",
        "Análise de custos"
      ],
      "rotina": "Pesquisa fornecedores, compara propostas e negocia preço, prazo e condições. Acompanha pedidos e contratos e verifica se as compras atendem necessidades, orçamento e padrões da organização.",
      "locaisAtuacao": [
        "Indústrias",
        "Varejo",
        "Hospitais",
        "Construção civil",
        "Órgãos públicos",
        "Empresas de logística e serviços"
      ]
    },
    {
      "id": "vendedor",
      "nome": "Vendedor",
      "descricao": "Apresenta produtos ou serviços e ajuda clientes a escolher soluções.",
      "formacao": "Ensino médio e treinamento sobre produtos, atendimento e técnicas de venda são comuns. Cursos de vendas, varejo, negociação ou gestão comercial e experiência prática ajudam.",
      "habilidades": [
        "Comunicação",
        "Negociação",
        "Atendimento"
      ],
      "rotina": "Entende o que o cliente procura e apresenta produtos ou serviços adequados. Demonstra opções, negocia condições, acompanha pedidos e mantém relacionamento com clientes.",
      "locaisAtuacao": [
        "Lojas e shopping centers",
        "Comércio eletrônico",
        "Concessionárias",
        "Empresas de serviços",
        "Vendas entre empresas",
        "Trabalho autônomo"
      ]
    },
    {
      "id": "corretor-imoveis",
      "nome": "Corretor de Imóveis",
      "descricao": "Intermedeia negociações de compra, venda e locação de imóveis.",
      "formacao": "Curso Técnico em Transações Imobiliárias ou formação superior em Gestão de Negócios Imobiliários e inscrição ativa no CRECI são caminhos para ingresso no Brasil. Confira regras do conselho regional.",
      "habilidades": [
        "Comunicação",
        "Negociação",
        "Relacionamento"
      ],
      "rotina": "Intermedeia compra, venda e locação de imóveis. Apresenta opções, organiza visitas, orienta as partes e acompanha propostas e documentação da negociação.",
      "locaisAtuacao": [
        "Imobiliárias",
        "Incorporadoras",
        "Construtoras",
        "Administração de imóveis",
        "Loteamentos",
        "Atuação autônoma"
      ]
    },
    {
      "id": "supervisor-operacoes",
      "nome": "Supervisor de Operações",
      "descricao": "Coordena atividades operacionais e acompanha o desempenho da equipe.",
      "formacao": "Experiência no setor é importante. Curso técnico ou graduação em Logística, Administração ou Produção pode ajudar; formação em liderança e melhoria contínua complementa o perfil.",
      "habilidades": [
        "Liderança",
        "Organização",
        "Resolução de problemas"
      ],
      "rotina": "Acompanha a rotina de uma equipe ou unidade para cumprir prazos e padrões. Distribui tarefas, resolve problemas, acompanha indicadores e orienta melhorias operacionais.",
      "locaisAtuacao": [
        "Centros de distribuição",
        "Fábricas",
        "Varejo",
        "Hospitais",
        "Empresas de transporte",
        "Centrais de atendimento"
      ]
    },
    {
      "id": "assistente-estoque",
      "nome": "Assistente de Estoque",
      "descricao": "Apoia o recebimento, a organização e o controle de mercadorias.",
      "formacao": "Ensino médio costuma bastar para muitas vagas; cursos de Logística, almoxarifado, estoque e sistemas de gestão são diferenciais. Requisitos variam com o empregador e os materiais.",
      "habilidades": [
        "Organização",
        "Atenção",
        "Controle de registros"
      ],
      "rotina": "Recebe, confere e organiza mercadorias. Registra entradas e saídas, separa pedidos e ajuda a manter o inventário e a área de armazenagem em ordem.",
      "locaisAtuacao": [
        "Lojas e supermercados",
        "Depósitos",
        "Centros de distribuição",
        "Fábricas",
        "Hospitais",
        "Almoxarifados públicos"
      ]
    },
    {
      "id": "motorista-caminhao",
      "nome": "Motorista de Caminhão",
      "descricao": "Transporta cargas entre fornecedores, empresas e destinos.",
      "formacao": "CNH na categoria compatível e requisitos profissionais aplicáveis. Cursos adicionais, como transporte de produtos perigosos, são exigidos para algumas cargas; confirme as regras para cada serviço.",
      "habilidades": [
        "Atenção",
        "Planejamento de rotas",
        "Responsabilidade"
      ],
      "rotina": "Transporta cargas, planeja o percurso, confere documentos e condições do veículo e protege a carga até a entrega, respeitando regras de trânsito e segurança.",
      "locaisAtuacao": [
        "Transportadoras",
        "Indústrias",
        "Construção civil",
        "Agronegócio",
        "Comércio e distribuição",
        "Cooperativas"
      ]
    },
    {
      "id": "analista-inventario",
      "nome": "Analista de Inventário",
      "descricao": "Acompanha a precisão dos estoques e investiga diferenças de quantidade.",
      "formacao": "Curso técnico ou graduação em Logística, Administração, Contabilidade ou área relacionada. Excel, sistemas de estoque e análise de dados são úteis.",
      "habilidades": [
        "Atenção aos detalhes",
        "Análise",
        "Organização"
      ],
      "rotina": "Compara registros de estoque com quantidades físicas e investiga diferenças. Analisa entradas, saídas, perdas e validade, prepara relatórios e recomenda ajustes para melhorar a precisão.",
      "locaisAtuacao": [
        "Varejo",
        "Indústrias",
        "Centros de distribuição",
        "Hospitais e farmácias",
        "Empresas de alimentos",
        "Operadores logísticos"
      ]
    },
    {
      "id": "planejador-rotas",
      "nome": "Planejador de Rotas",
      "descricao": "Organiza itinerários para tornar entregas e deslocamentos mais eficientes.",
      "formacao": "Curso técnico ou graduação em Logística, Transportes, Administração ou Engenharia. Conhecimentos de mapas, sistemas de roteirização, planilhas e dados são diferenciais.",
      "habilidades": [
        "Planejamento",
        "Análise de dados",
        "Resolução de problemas"
      ],
      "rotina": "Organiza itinerários considerando distância, prazo, capacidade, trânsito e restrições. Acompanha as entregas e ajusta rotas para usar melhor o tempo e os recursos disponíveis.",
      "locaisAtuacao": [
        "Transportadoras",
        "Empresas de entrega",
        "Comércio eletrônico",
        "Distribuidores",
        "Serviços de campo",
        "Transporte público ou fretado"
      ]
    },
    {
      "id": "despachante-aduaneiro",
      "nome": "Despachante Aduaneiro",
      "descricao": "Atua nos procedimentos de liberação aduaneira de mercadorias.",
      "formacao": "A atuação formal exige registro na Receita Federal. O percurso brasileiro inclui registro prévio como ajudante por pelo menos dois anos, ensino médio e aprovação em exame de qualificação, conforme regras vigentes.",
      "habilidades": [
        "Organização",
        "Conhecimento regulatório",
        "Comunicação"
      ],
      "rotina": "Representa importadores e exportadores nos procedimentos aduaneiros. Prepara declarações, confere documentos e acompanha exigências e liberação de mercadorias junto às autoridades.",
      "locaisAtuacao": [
        "Comissárias de despacho",
        "Agentes de carga",
        "Importadoras e exportadoras",
        "Operadores logísticos",
        "Empresas de comércio exterior",
        "Portos e aeroportos"
      ]
    }
  ],
  "gastronomia-turismo-hospitalidade": [
    {
      "id": "chef-cozinha",
      "nome": "Chef de Cozinha",
      "descricao": "Planeja cardápios e coordena a preparação de alimentos.",
      "formacao": "Cursos de Gastronomia ou cozinha e experiência progressiva são caminhos possíveis. Formação em segurança dos alimentos e custos é útil; não existe um único percurso para todas as vagas.",
      "habilidades": [
        "Criatividade",
        "Organização",
        "Trabalho em equipe"
      ],
      "rotina": "Planeja cardápios e organiza o preparo dos pratos. Coordena a equipe, distribui tarefas, controla ingredientes, acompanha apresentação e qualidade e cuida das boas práticas de higiene.",
      "locaisAtuacao": [
        "Restaurantes",
        "Hotéis e resorts",
        "Buffets e eventos",
        "Cozinhas industriais",
        "Cruzeiros",
        "Negócio próprio"
      ]
    },
    {
      "id": "confeiteiro",
      "nome": "Confeiteiro",
      "descricao": "Produz bolos, doces, sobremesas e outros produtos de confeitaria.",
      "formacao": "Cursos livres ou formação técnica em Confeitaria, Panificação ou Gastronomia e prática supervisionada. Higiene, segurança dos alimentos, precificação e decoração complementam o preparo.",
      "habilidades": [
        "Precisão",
        "Criatividade",
        "Organização"
      ],
      "rotina": "Prepara bolos, doces e sobremesas. Mede ingredientes, controla temperatura e tempo, cria acabamentos, cuida da conservação e organiza a produção conforme pedidos.",
      "locaisAtuacao": [
        "Confeitarias e padarias",
        "Restaurantes e hotéis",
        "Buffets",
        "Indústria de alimentos",
        "Cafeterias",
        "Produção sob encomenda"
      ]
    },
    {
      "id": "profissional-turismo",
      "nome": "Profissional de Turismo",
      "descricao": "Planeja ou organiza experiências, serviços e atividades turísticas.",
      "formacao": "Curso técnico ou graduação em Turismo, Hotelaria, Eventos ou áreas próximas pode ajudar. A formação depende da função; atividades regulamentadas têm requisitos próprios.",
      "habilidades": [
        "Comunicação",
        "Planejamento",
        "Atendimento"
      ],
      "rotina": "Planeja ou presta serviços para organizar viagens e experiências. Pode montar roteiros e produtos, apoiar operações turísticas ou divulgar destinos e atrações.",
      "locaisAtuacao": [
        "Agências e operadoras",
        "Hotéis e resorts",
        "Empresas de eventos",
        "Órgãos de turismo",
        "Parques e atrações",
        "Consultoria"
      ]
    },
    {
      "id": "guia-turismo",
      "nome": "Guia de Turismo",
      "descricao": "Acompanha visitantes e apresenta informações sobre destinos e atrações.",
      "formacao": "Para atuar regularmente no Brasil, é necessário curso técnico de Guia de Turismo na categoria correspondente e cadastro no Cadastur. Idiomas e primeiros socorros podem ser diferenciais.",
      "habilidades": [
        "Comunicação",
        "Organização",
        "Conhecimento cultural"
      ],
      "rotina": "Acompanha visitantes em passeios e apresenta informações sobre história, cultura e natureza do destino. Orienta o grupo e conduz o roteiro dentro de sua categoria de atuação.",
      "locaisAtuacao": [
        "Agências e operadoras",
        "Passeios culturais",
        "Trilhas e ecoturismo conforme habilitação",
        "Museus e atrações",
        "Atuação autônoma"
      ]
    },
    {
      "id": "gerente-hotel",
      "nome": "Gerente de Hotel",
      "descricao": "Coordena serviços, equipes e operações de hospedagem.",
      "formacao": "Tecnólogo ou graduação em Hotelaria, Turismo, Administração ou Gestão de Serviços; experiência operacional, idiomas e cursos de gestão financeira e atendimento ajudam.",
      "habilidades": [
        "Liderança",
        "Organização",
        "Atendimento"
      ],
      "rotina": "Coordena hospedagem, recepção, limpeza e manutenção. Acompanha reservas, ocupação, custos e avaliações, apoia equipes e resolve situações que afetam a experiência dos hóspedes.",
      "locaisAtuacao": [
        "Hotéis",
        "Pousadas",
        "Resorts",
        "Hostels",
        "Apart-hotéis",
        "Empresas de administração hoteleira"
      ]
    },
    {
      "id": "garcom",
      "nome": "Garçom",
      "descricao": "Atende clientes e serve alimentos e bebidas em estabelecimentos.",
      "formacao": "Não há uma graduação única. Treinamento no local, cursos de atendimento, serviço de salão ou segurança alimentar ajudam; experiência prática é valorizada.",
      "habilidades": [
        "Comunicação",
        "Agilidade",
        "Atenção ao cliente"
      ],
      "rotina": "Apresenta o cardápio, recebe pedidos, serve alimentos e bebidas e acompanha a experiência dos clientes. Articula o atendimento com a cozinha e segue práticas de higiene e serviço responsável.",
      "locaisAtuacao": [
        "Restaurantes",
        "Hotéis e resorts",
        "Bares e cafeterias",
        "Buffets",
        "Cruzeiros",
        "Eventos"
      ]
    },
    {
      "id": "recepcionista-hotel",
      "nome": "Recepcionista de Hotel",
      "descricao": "Recebe hóspedes e auxilia nos processos de hospedagem.",
      "formacao": "Ensino médio e treinamento em atendimento são comuns. Curso de Hotelaria ou Turismo, idiomas e familiaridade com sistemas de reserva são diferenciais.",
      "habilidades": [
        "Atendimento",
        "Organização",
        "Comunicação"
      ],
      "rotina": "Recebe hóspedes e organiza procedimentos de entrada e saída. Confere reservas, responde dúvidas, comunica pedidos às equipes e registra informações no sistema de hospedagem.",
      "locaisAtuacao": [
        "Hotéis",
        "Pousadas",
        "Resorts",
        "Hostels",
        "Apart-hotéis",
        "Centrais de reservas"
      ]
    },
    {
      "id": "organizador-eventos",
      "nome": "Organizador de Eventos",
      "descricao": "Planeja e coordena eventos sociais, culturais ou corporativos.",
      "formacao": "Curso técnico ou graduação em Eventos, Turismo, Produção Cultural, Relações Públicas ou Administração. Experiência, negociação e planejamento ajudam; algumas atividades têm requisitos locais.",
      "habilidades": [
        "Planejamento",
        "Negociação",
        "Organização"
      ],
      "rotina": "Planeja eventos do briefing à desmontagem. Define cronograma e orçamento, contrata fornecedores, coordena espaço e logística e acompanha a execução para resolver imprevistos.",
      "locaisAtuacao": [
        "Agências",
        "Centros de convenções",
        "Hotéis",
        "Empresas",
        "Universidades",
        "Festivais"
      ]
    },
    {
      "id": "comissario-voo",
      "nome": "Comissário de Voo",
      "descricao": "Cuida da segurança e do atendimento aos passageiros durante voos.",
      "formacao": "Licença da ANAC exige ensino médio, aptidão médica, treinamento inicial aprovado, experiência e aprovação em exame prático, além da habilitação aplicável. Companhias têm etapas próprias de seleção e treinamento.",
      "habilidades": [
        "Comunicação",
        "Trabalho em equipe",
        "Atenção à segurança"
      ],
      "rotina": "Cuida da segurança e do atendimento a passageiros durante o voo. Orienta procedimentos, verifica a cabine, presta assistência e responde a emergências conforme protocolos da companhia e da aeronave.",
      "locaisAtuacao": [
        "Companhias aéreas nacionais e internacionais",
        "Voos regulares",
        "Aviação regional",
        "Operações charter e executivas"
      ]
    },
    {
      "id": "agente-viagens",
      "nome": "Agente de Viagens",
      "descricao": "Ajuda clientes a planejar viagens e contratar serviços turísticos.",
      "formacao": "Curso técnico ou graduação em Turismo, Gestão de Turismo ou Hotelaria pode ajudar. Conhecimento de destinos, atendimento, idiomas e sistemas de reserva é valorizado.",
      "habilidades": [
        "Atendimento",
        "Organização",
        "Comunicação"
      ],
      "rotina": "Ajuda clientes a escolher e organizar viagens. Pesquisa destinos, monta roteiros, compara voos e hospedagens, faz reservas e orienta sobre documentos e condições dos serviços.",
      "locaisAtuacao": [
        "Agências",
        "Operadoras",
        "Atendimento corporativo",
        "Plataformas de viagem",
        "Hotéis e empresas de turismo",
        "Trabalho autônomo"
      ]
    }
  ]
};

export const profissoes = areasProfissionais.flatMap((area) =>
  profissoesPorArea[area.id].map((profissao) => ({
    ...profissao,
    areaId: area.id,
    area: area.nome,
  })),
)
