import { Project } from "@/types";

export const featuredProjects: Project[] = [
  {
    id: "nandana",
    name: "Nandana Terapias",
    company: "Nandana Terapias",
    description:
      "Sistema completo para gestão de profissionais e pacientes na área de saúde mental.",
    solution:
      "Plataforma web com agendamentos, planos de tratamento, controle de pedidos e integração com gateways de pagamento.",
    features: [
      "Gestão de agendamentos e planos",
      "Integração com gateways de pagamento",
      "Controle de pedidos e usuários",
      "API REST estruturada",
    ],
    period: "Fev 2025 – Atual",
    link: "https://nandanda.com.br",
    image: "/images/projects/featured/nandana.png",
    imageFit: "contain",
    technologies: ["/icons/laravel.svg", "/icons/php.svg", "/icons/mysql.svg"],
    category: "Sistema",
    group: "featured",
  },
  {
    id: "formosa-rh",
    name: "Formosa RH",
    company: "Formosa Net",
    description: "Plataforma de recrutamento e seleção.",
    solution:
      "Sistema de vagas e candidaturas com controle de usuários, permissões e arquitetura escalável em Laravel.",
    features: [
      "Gestão de vagas e candidaturas",
      "Sistema de usuários e permissões",
      "Estrutura escalável com Laravel",
    ],
    period: "Jan 2025 – Atual",
    link: "https://vagas.formosanet.com.br",
    image: "/images/projects/featured/formosa.webp",
    imageFit: "contain",
    technologies: ["/icons/laravel.svg", "/icons/php.svg", "/icons/mysql.svg"],
    category: "Plataforma",
    group: "featured",
  },
  {
    id: "spazio",
    name: "Sistema de Orçamentos",
    company: "Spazio Del Bagno",
    description: "Sistema interno para gestão comercial e operacional.",
    solution:
      "Controle de produtos, estoque, emissão de orçamentos e integração com notas fiscais.",
    features: [
      "Controle de produtos e estoque",
      "Emissão e controle de orçamentos",
      "Integração com notas fiscais",
    ],
    period: "Jul 2024 – Atual",
    image: "/images/projects/featured/spazio.png",
    imageFit: "contain",
    technologies: ["/icons/laravel.svg", "/icons/php.svg", "/icons/mysql.svg"],
    category: "Sistema",
    group: "featured",
  },
  {
    id: "lider-rh",
    name: "Líder RH",
    company: "Grupo Líder",
    description: "Plataforma de recrutamento e seleção do maior grupo varejista do Norte.",
    solution:
      "Portal Trabalhe Conosco com gestão de vagas por cidade, candidaturas e área do candidato.",
    features: [
      "Gestão de vagas por unidade",
      "Sistema de candidaturas online",
      "Área do candidato",
    ],
    period: "2024 – Atual",
    link: "https://www.grupolideronline.com.br/trabalhe-conosco",
    image: "/images/projects/featured/grupo-lider.webp",
    imageFit: "contain",
    technologies: ["/icons/laravel.svg", "/icons/php.svg", "/icons/react.svg"],
    category: "Plataforma",
    group: "featured",
  },
  {
    id: "maxima",
    name: "Máxima Segurança",
    company: "Máxima Segurança",
    description:
      "Site e aplicativo da maior empresa de segurança e monitoramento do Pará.",
    solution:
      "Plataforma online com serviços, área restrita do cliente, emissão de boletos e contracheques.",
    features: [
      "Informações institucionais",
      "Emissão de boleto",
      "Emissão de contracheques",
      "Abertura de OS",
    ],
    period: "2024 – Atual",
    link: "https://www.maximaseguranca.com.br/",
    image: "/images/projects/featured/maxima.png",
    imageFit: "contain",
    technologies: ["/icons/laravel.svg", "/icons/react.svg", "/icons/node.svg"],
    category: "App",
    group: "featured",
  },
];

export const brediProjects: Project[] = [
  {
    id: "assembleia",
    name: "Assembleia Paraense",
    company: "Assembleia Paraense",
    description: "Um dos maiores clubes sociais do estado do Pará.",
    solution:
      "Painel de gestão e APP com React Native integrado ao ERP interno do clube.",
    features: [
      "Notificações Push",
      "2ª via de Boleto",
      "Emissão de Convite",
      "Compra de Estacionamento",
    ],
    category: "App",
    country: "BR",
    group: "bredi",
    image: "/images/projects/assembleia.webp",
  },
  {
    id: "certify",
    name: "Certify Teacher",
    company: "Certify Teacher",
    description:
      "Uma das maiores empresas de simulados para certificações da rede de ensino no Texas/EUA.",
    solution: "E-commerce para venda de produtos em todos os Estados Unidos.",
    features: [
      "Integração com gateways americanos",
      "Notificações via e-mail automatizadas",
      "Dashboard Backoffice para time interno",
    ],
    category: "E-commerce",
    country: "US",
    group: "bredi",
    image: "/images/projects/certify.webp",
  },
  {
    id: "porto-dias",
    name: "Hospital Porto Dias",
    company: "Hospital Porto Dias",
    description:
      "Um dos maiores hospitais da Amazônia Brasileira, situado em Belém/PA.",
    solution:
      "Plataforma online pública e intranet para colaboradores.",
    features: [
      "Resultado de Exames",
      "Informações institucionais",
      "Comunicados Internos",
    ],
    category: "Sistema",
    country: "BR",
    group: "bredi",
    image: "/images/projects/porto.webp",
  },
  {
    id: "maxima-bredi",
    name: "Máxima Segurança",
    company: "Máxima Segurança",
    description:
      "A maior empresa de segurança e monitoramento do estado do Pará.",
    solution:
      "APP para clientes e plataforma online com área restrita.",
    features: [
      "Informações Institucionais",
      "Emissão de Boleto",
      "Emissão de Contracheques",
      "Abertura de OS",
    ],
    category: "App",
    country: "BR",
    group: "bredi",
    image: "/images/projects/maxima.webp",
  },
  {
    id: "quadra",
    name: "Quadra Engenharia",
    company: "Quadra Engenharia",
    description:
      "Uma das maiores construtoras do Norte do Brasil, com empreendimentos de alto padrão.",
    solution:
      "Plataforma online para clientes e parceiros com catálogo de empreendimentos.",
    features: [
      "Plataforma web com busca avançada",
      "Landing Pages",
      "Intranet",
    ],
    category: "Site",
    country: "BR",
    group: "bredi",
    image: "/images/projects/quadra.webp",
  },
  {
    id: "moovapp",
    name: "Moovapp",
    company: "Moovapp",
    description: "Startup de Mobilidade Urbana.",
    solution:
      "Plataforma regional de transporte sob demanda com chamadas em tempo real e pagamentos digitais.",
    features: [
      "Geolocalização em tempo real",
      "Solicitação e aceitação de corridas",
      "Cálculo automático de tarifa",
      "Pagamento digital integrado",
      "Painel administrativo",
    ],
    category: "App",
    country: "BR",
    group: "bredi",
    image: "/images/projects/moovapp.png",
  },
  {
    id: "paysandu",
    name: "Paysandu",
    company: "Paysandu Sport Club",
    description: "Time de futebol brasileiro.",
    solution:
      "Cadastro de biometria facial com mais de 80 mil faces usando IA para validação.",
    features: [
      "Integração com ingressos digitais (QR Code e reconhecimento facial)",
      "Cadastro e validação facial com IA",
      "Painel de gestão de sócios torcedores",
      "Acesso em estádios via biometria",
      "Gateway de pagamento para planos",
    ],
    category: "App",
    country: "BR",
    group: "bredi",
    image: "/images/projects/paysandu.png",
  },
  {
    id: "cirio",
    name: "Círio de Nazaré",
    company: "Diretoria da Festa de Nazaré",
    description: "Site e aplicativo oficiais da maior festa religiosa do Brasil.",
    solution:
      "Acervo histórico, liturgia diária, credenciamento de imprensa e registro de peregrinos.",
    features: [
      "Acervo digital de cartazes e mantos",
      "Liturgia diária e notícias oficiais",
      "Credenciamento de imprensa online",
      "Registro e acompanhamento de peregrinos",
      "Integração site e app em tempo real",
    ],
    category: "App",
    country: "BR",
    group: "bredi",
    image: "/images/projects/cirio.png",
  },
  {
    id: "akeos",
    name: "AKEOS",
    company: "AKEOS",
    description: "Plataforma digital focada na preparação para a 1ª fase da OAB.",
    solution:
      "Site de vendas, área do aluno e painel de gestão com questões, simulados e cronogramas.",
    features: [
      "Cronograma de estudos",
      "Banco de questões comentadas",
      "Simulados ilimitados",
      "Relatórios de performance",
      "Assinatura online com pagamento integrado",
    ],
    category: "Plataforma",
    country: "BR",
    group: "bredi",
    image: "/images/projects/akeos.png",
  },
  {
    id: "cenario",
    name: "Cenário News",
    company: "Cenário News",
    description:
      "Portal digital de notícias focado em política, economia e sustentabilidade na Amazônia.",
    solution:
      "Novo portal com layout moderno, navegação ágil e estrutura para leitores e anunciantes.",
    features: [
      "Portal bilíngue (PT, EN, ES)",
      "Seções segmentadas (Pará 360, Política, Economia)",
      "Destaque para reportagens e colunas",
      "Gestão de notícias em tempo real",
      "Área para anunciantes",
    ],
    category: "Portal",
    country: "BR",
    group: "bredi",
    image: "/images/projects/cenario-news.png",
  },
];

export const allProjects = [...featuredProjects, ...brediProjects];
