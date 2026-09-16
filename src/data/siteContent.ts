import type {
  ContactInfo,
  FAQ,
  Media,
  Result,
  Technology,
  Testimonial,
  Treatment,
} from "../types";
const photo = (label: string): Media => ({ src: "", alt: label, label });

const image = (file: string) =>
  `${import.meta.env.BASE_URL}images/${file}`;

const base = {
  cta: "Agendar minha avaliaÃ§Ã£o",
  image: photo("FOTOGRAFIA DO TRATAMENTO"),
  gallery: [],
  detail: true,
  benefits: ["Planejamento personalizado", "Respeito Ã  identidade"],
  howItWorks:
    "A avaliaÃ§Ã£o orienta a escolha das tÃ©cnicas, a sequÃªncia de cuidados e o acompanhamento. O protocolo Ã© definido individualmente e pode ser ajustado conforme a evoluÃ§Ã£o.",
  audience:
    "Para quem deseja cuidar dos sinais descritos com um planejamento individual. A indicaÃ§Ã£o depende da avaliaÃ§Ã£o, do histÃ³rico de saÃºde e dos objetivos de cada pessoa.",
};
export const treatments: Treatment[] = [
  {
    ...base,
    slug: "lifting-essencial",
    name: "Lifting Essencial",
    eyebrow: "SustentaÃ§Ã£o & contorno",
    headline: "Um rosto mais firme sem transformar seus traÃ§os.",
    shortDescription: "SustentaÃ§Ã£o, com naturalidade.",
    image: {
      src: image("lifting-essencial.png"),
      alt: "Lifting Essencial",
      label: "Lifting Essencial",
    },
    longDescription:
      "Com o passar do tempo, mudanÃ§as na produÃ§Ã£o de colÃ¡geno e na estrutura da face podem alterar contorno, sustentaÃ§Ã£o e aparÃªncia. O Lifting Essencial foi pensado para trabalhar esses sinais de maneira integrada.",
    indications: [
      "Perda de definiÃ§Ã£o do contorno facial",
      "Flacidez leve ou moderada",
      "RegiÃ£o mandibular",
      "Linhas de expressÃ£o",
      "Sinais iniciais do envelhecimento",
    ],
    technologies: [
      "Ultrassom microfocado",
      "Toxina botulÃ­nica",
      "Protocolos complementares",
    ],
    price: 3900,
  },
  {
    ...base,
    slug: "arquitetura-facial",
    name: "Arquitetura Facial",
    eyebrow: "ProporÃ§Ã£o & identidade",
    headline: "Harmonia nÃ£o significa padronizaÃ§Ã£o.",
    shortDescription: "EquilÃ­brio que preserva seus traÃ§os.",
    image: {
      src: image("arquitetura-facial.png"),
      alt: "Arquitetura Facial",
      label: "Arquitetura Facial",
    },
    longDescription:
      "Cada rosto possui proporÃ§Ãµes prÃ³prias. Na Arquitetura Facial, analisamos essas proporÃ§Ãµes antes de decidir se algum ponto realmente precisa ser tratado.",
    indications: [
      "Contorno mandibular",
      "Queixo",
      "LÃ¡bios",
      "Sulcos",
      "ProporÃ§Ãµes faciais",
      "Assimetrias",
      "Linhas de expressÃ£o",
    ],
    technologies: [
      "Ãcido hialurÃ´nico",
      "Toxina botulÃ­nica",
      "Planejamento facial",
    ],
    price: 3500,
  },
  {
    ...base,
    slug: "colageno-ativo",
    name: "ColÃ¡geno Ativo",
    eyebrow: "EstÃ­mulo & firmeza",
    headline: "O tratamento acontece hoje. O processo continua na sua pele.",
    shortDescription: "Um cuidado que continua na pele.",
    image: {
      src: image("colageno-ativo.png"),
      alt: "ColÃ¡geno Ativo",
      label: "ColÃ¡geno Ativo",
    },
    longDescription:
      "A reduÃ§Ã£o progressiva de colÃ¡geno influencia firmeza, textura e sustentaÃ§Ã£o. ColÃ¡geno Ativo utiliza estÃ­mulos planejados para desencadear um processo gradual de remodelaÃ§Ã£o da pele.",
    indications: [
      "Flacidez",
      "Textura irregular",
      "Poros",
      "Linhas finas",
      "Cicatrizes de acne",
      "Perda de qualidade da pele",
    ],
    technologies: [
      "RadiofrequÃªncia microagulhada",
      "Bioestimuladores",
      "Protocolos regenerativos",
    ],
    price: 4200,
  },
  {
    ...base,
    slug: "pele-de-luz",
    name: "Pele de Luz",
    eyebrow: "Textura & luminosidade",
    headline: "Quando a pele melhora, o rosto inteiro muda.",
    shortDescription: "A qualidade da pele em primeiro plano.",
    image: {
      src: image("pele-de-luz.png"),
      alt: "Pele de Luz",
      label: "Pele de Luz",
    },
    longDescription:
      "Manchas, textura, poros e falta de luminosidade podem interferir na percepÃ§Ã£o geral da aparÃªncia. Pele de Luz foi criado para trabalhar justamente a qualidade da pele.",
    indications: [
      "Manchas superficiais",
      "Aspecto opaco",
      "Textura irregular",
      "Poros aparentes",
      "Linhas finas",
      "Fotoenvelhecimento",
    ],
    technologies: [
      "Laser de Thulium",
      "Skinbooster",
      "Protocolos regenerativos",
    ],
    price: 2600,
  },
  {
    ...base,
    slug: "olhar-renovado",
    name: "Olhar Renovado",
    eyebrow: "ExpressÃ£o & delicadeza",
    headline: "Um olhar cansado nem sempre precisa de uma grande mudanÃ§a.",
    shortDescription: "AtenÃ§Ã£o aos detalhes do seu olhar.",
    image: {
      src: image("olhar-renovado.png"),
      alt: "Olhar Renovado",
      label: "Olhar Renovado",
    },
    longDescription:
      "A regiÃ£o dos olhos possui caracterÃ­sticas prÃ³prias e precisa ser avaliada de maneira especÃ­fica.",
    indications: [
      "Linhas ao redor dos olhos",
      "Flacidez",
      "Textura",
      "Aspecto cansado",
      "Qualidade da pele",
    ],
    technologies: [
      "RadiofrequÃªncia microagulhada",
      "Toxina botulÃ­nica",
      "Tratamentos complementares",
    ],
    price: 2300,
  },
  // No price supplied for this complementary care.
  {
    ...base,
    slug: "limpeza-de-pele",
    name: "Limpeza de Pele",
    eyebrow: "Cuidado essencial",
    headline: "O cuidado comeÃ§a pela pele.",
    shortDescription: "Um momento de atenÃ§Ã£o Ã  sua pele.",
    image: {
      src: image("limpeza-de-pele.png"),
      alt: "Limpeza de Pele",
      label: "Limpeza de Pele",
    },
    longDescription:
      "Cuidado complementar planejado conforme as necessidades da sua pele e a avaliaÃ§Ã£o individual.",
    indications: [],
    technologies: [],
    price: 180,
    detail: false,
  },
];
export const technologies: Technology[] = [
  {
    slug: "ultrassom",
    name: "Ultrassom Microfocado",
    description:
      "Estimula colÃ¡geno e atua na sustentaÃ§Ã£o e definiÃ§Ã£o do contorno facial.",
    applications: [
      "SustentaÃ§Ã£o",
      "DefiniÃ§Ã£o do contorno",
      "EstÃ­mulo de colÃ¡geno",
    ],
    related: ["lifting-essencial"],
    image: {
      src: image("ultrassom-microfocado.png"),
      alt: "Ultrassom Microfocado",
      label: "Ultrassom Microfocado",
    },
  },
  {
    slug: "radiofrequencia",
    name: "Plataforma de RadiofrequÃªncia Completa",
    description:
      "Combina microagulhamento e energia para estimular remodelaÃ§Ã£o, firmeza e melhora da textura da pele.",
    applications: [
      "RadiofrequÃªncia microagulhada",
      "Firmeza e textura",
      "RemodelaÃ§Ã£o da pele",
    ],
    related: ["colageno-ativo", "olhar-renovado"],
    image: {
      src: image("radiofrequencia-microagulhada.png"),
      alt: "RadiofrequÃªncia Microagulhada",
      label: "RadiofrequÃªncia Microagulhada",
    },
  },
  {
    slug: "thulium",
    name: "Laser de Thulium",
    description:
      "Tecnologia voltada para renovaÃ§Ã£o, luminosidade, textura e uniformidade da pele.",
    applications: ["Luminosidade", "Textura", "Uniformidade"],
    related: ["pele-de-luz"],
    image: {
      src: image("laser-thulium.png"),
      alt: "Laser de Thulium",
      label: "Laser de Thulium",
    },
  },
];
export const contact: ContactInfo = {
  phone: "(15) XXXX-XXXX",
  whatsapp: "(15) 9XXXX-XXXX",
  instagram: "@[inserir perfil real]",
  address: ["Av. das MagnÃ³lias, 480", "Jardim Campolim", "Sorocaba â€” SP"],
  addressNote: "EndereÃ§o fictÃ­cio â€” projeto conceitual",
  hours: [
    { day: "Segunda a sexta", time: "08h Ã s 20h" },
    { day: "SÃ¡bado", time: "08h Ã s 15h" },
    { day: "Domingo", time: "Fechado" },
  ],
};
export const faqs: FAQ[] = [
  [
    "Como sei qual tratamento devo fazer?",
    "ComeÃ§amos pela avaliaÃ§Ã£o da sua pele, estrutura facial, histÃ³rico e objetivos para construir um planejamento individual.",
  ],
  [
    "Preciso fazer vÃ¡rios procedimentos?",
    "NÃ£o necessariamente. A avaliaÃ§Ã£o considera o que faz sentido para vocÃª, inclusive quando a indicaÃ§Ã£o Ã© um Ãºnico cuidado.",
  ],
  [
    "Os resultados sÃ£o imediatos?",
    "A evoluÃ§Ã£o depende do tratamento e da resposta individual. Alguns cuidados tÃªm evoluÃ§Ã£o gradual; o prazo esperado serÃ¡ explicado na avaliaÃ§Ã£o.",
  ],
  [
    "Quantas sessÃµes sÃ£o necessÃ¡rias?",
    "A quantidade Ã© definida apÃ³s a avaliaÃ§Ã£o e pode ser ajustada durante o acompanhamento.",
  ],
  [
    "Vou ficar com aparÃªncia artificial?",
    "O planejamento busca respeitar suas proporÃ§Ãµes e identidade. Objetivos, limites e expectativas sÃ£o conversados antes de qualquer indicaÃ§Ã£o.",
  ],
  [
    "Os procedimentos doem?",
    "A sensibilidade varia conforme a pessoa e a tÃ©cnica. Os cuidados para conforto e as sensaÃ§Ãµes esperadas sÃ£o explicados antes do procedimento.",
  ],
  [
    "Existe tempo de recuperaÃ§Ã£o?",
    "Pode existir, dependendo da tÃ©cnica. Os cuidados e o retorno Ã s atividades sÃ£o explicados na avaliaÃ§Ã£o.",
  ],
  [
    "Posso fazer mais de um tratamento?",
    "Em alguns planejamentos, sim. A combinaÃ§Ã£o e os intervalos dependem da avaliaÃ§Ã£o individual e da compatibilidade das tÃ©cnicas.",
  ],
  [
    "Como funciona a primeira consulta?",
    "Conversamos sobre suas queixas, objetivos e histÃ³rico, avaliamos seu rosto e apresentamos as possibilidades de cuidado.",
  ],
  [
    "Como saber o valor exato?",
    "Os valores apresentados sÃ£o iniciais. O investimento final depende da avaliaÃ§Ã£o e do protocolo indicado.",
  ],
].map(([question, answer]) => ({ question, answer }));
// Replace with verified, authorized patient testimonials and actual Google ratings before launch.
export const testimonials: Testimonial[] = [
  {
    id: "mariana",
    quote:
      "Eu queria me cuidar sem mudar meu rosto. Desde a primeira avaliaÃ§Ã£o, senti que cada indicaÃ§Ã£o tinha um motivo e respeitava o que eu realmente precisava. O resultado ficou leve, natural e muito mais alinhado com o que eu imaginava.",
    name: "Mariana Tavares",
    role: "42 anos Â· Paciente Vellune",
    rating: "â˜…â˜…â˜…â˜…â˜…",
    image: {
      src: image("depoimento-mariana.png"),
      alt: "Mariana Tavares",
      label: "Mariana Tavares",
    },
  },

  {
    id: "juliana",
    quote:
      "O que mais gostei foi nÃ£o sentir que estavam tentando me vender procedimentos. A proposta foi construÃ­da aos poucos, com muita clareza. Minha pele melhorou, meu rosto ficou mais descansado e continuo me reconhecendo completamente.",
    name: "Juliana Rocha",
    role: "38 anos Â· Paciente Vellune",
    rating: "â˜…â˜…â˜…â˜…â˜…",
    image: {
      src: image("depoimento-juliana.png"),
      alt: "Juliana Rocha",
      label: "Juliana Rocha",
    },
  },

  {
    id: "fernanda",
    quote:
      "Depois de algumas experiÃªncias que nÃ£o me deixaram satisfeita, encontrei uma abordagem muito mais cuidadosa. A avaliaÃ§Ã£o foi detalhada e o resultado ficou sofisticado, discreto e natural. Era exatamente o que eu procurava.",
    name: "Fernanda Nogueira",
    role: "47 anos Â· Paciente Vellune",
    rating: "â˜…â˜…â˜…â˜…â˜…",
    image: {
      src: image("depoimento-fernanda.png"),
      alt: "Fernanda Nogueira",
      label: "Fernanda Nogueira",
    },
  },
];
// Layout categories only; no patients, clinical outcomes or periods are fabricated.
export const results: Result[] = [
  {
    id: "lifting",
    beforeImage: {
      src: image("resultado-lifting.png"),
      alt: "Antes e depois do tratamento Lifting",
      label: "Resultado Lifting",
    },
    afterImage: photo(""),
    treatment: "Lifting",
    objective: "Melhora da sustentaÃ§Ã£o e definiÃ§Ã£o do contorno facial.",
    period: "",
    category: "Lifting",
  },

  {
    id: "harmonizacao",
    beforeImage: {
      src: image("resultado-harmonizacao.png"),
      alt: "Antes e depois da HarmonizaÃ§Ã£o Facial",
      label: "Resultado HarmonizaÃ§Ã£o",
    },
    afterImage: photo(""),
    treatment: "HarmonizaÃ§Ã£o",
    objective: "EquilÃ­brio das proporÃ§Ãµes preservando a identidade facial.",
    period: "",
    category: "HarmonizaÃ§Ã£o",
  },

  {
    id: "pele",
    beforeImage: {
      src: image("resultado-pele.png"),
      alt: "Antes e depois do tratamento de pele",
      label: "Resultado Pele",
    },
    afterImage: photo(""),
    treatment: "Pele",
    objective: "Melhora da textura, uniformidade e luminosidade da pele.",
    period: "",
    category: "Pele",
  },

  {
    id: "colageno",
    beforeImage: {
      src: image("resultado-colageno.png"),
      alt: "Antes e depois do tratamento para estÃ­mulo de colÃ¡geno",
      label: "Resultado ColÃ¡geno",
    },
    afterImage: photo(""),
    treatment: "ColÃ¡geno",
    objective: "Melhora progressiva da firmeza e da qualidade da pele.",
    period: "",
    category: "ColÃ¡geno",
  },

  {
    id: "olhar",
    beforeImage: {
      src: image("resultado-olhar.png"),
      alt: "Antes e depois do tratamento Olhar Renovado",
      label: "Resultado Olhar",
    },
    afterImage: photo(""),
    treatment: "Olhar",
    objective: "Aspecto mais descansado e cuidado da regiÃ£o dos olhos.",
    period: "",
    category: "Olhar",
  },

  {
    id: "limpeza",
    beforeImage: {
      src: image("resultado-limpeza.png"),
      alt: "Antes e depois da limpeza de pele",
      label: "Resultado Limpeza de Pele",
    },
    afterImage: photo(""),
    treatment: "Limpeza de Pele",
    objective: "Pele mais limpa, uniforme e com aspecto renovado.",
    period: "",
    category: "Limpeza de Pele",
  },
];

export const siteContent = {
  brand: {
    name: "VELLUNE",
    fullName: "Vellune ClÃ­nica EstÃ©tica",
    descriptor: "CLÃNICA ESTÃ‰TICA",
    slogan: "Sua beleza nÃ£o precisa mudar. Precisa ser bem cuidada.",
    location: "ESTÃ‰TICA FACIAL Â· SOROCABA, SP",
    portfolio: "Projeto conceitual desenvolvido para portfÃ³lio.",
    credit: "Design & estratÃ©gia por Nimbus",
  },
  nav: [
    { label: "InÃ­cio", to: "/" },
    { label: "Tratamentos", to: "/tratamentos" },
    { label: "Tecnologias", to: "/tecnologias" },
    { label: "Resultados", to: "/resultados" },
    { label: "DÃºvidas Frequentes", to: "/duvidas-frequentes" },
    { label: "Contato", to: "/contato" },
  ],
  ctas: {
    schedule: "Agendar avaliaÃ§Ã£o",
    hero: "Agendar minha avaliaÃ§Ã£o",
    treatments: "Conhecer tratamentos",
    details: "Conhecer tratamento",
    allResults: "Ver todos os resultados",
    personal: "Quero agendar minha avaliaÃ§Ã£o",
    back: "Voltar ao inÃ­cio",
  },
  ui: {
    skip: "Pular para o conteÃºdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menu: "NavegaÃ§Ã£o principal",
    home: "InÃ­cio",
    from: "A partir de",
    onRequest: "Investimento sob consulta",
    priceNote:
      "O investimento final depende da avaliaÃ§Ã£o e do protocolo indicado.",
    photo: "Fotografia â€” substituir posteriormente",
    all: "Todos",
    related: "Tratamentos relacionados",
    indications: "O que podemos tratar",
    how: "Como funciona",
    techniques: "Tecnologias e tÃ©cnicas utilizadas",
    audience: "Para quem Ã©",
    investment: "Investimento",
    others: "Outros tratamentos",
    applications: "Principais aplicaÃ§Ãµes",
    stars: "EspaÃ§o reservado para avaliaÃ§Ã£o",
    contact: "Contato",
    social: "Redes sociais",
    hours: "HorÃ¡rios de atendimento",
    map: "MAPA â€” inserir posteriormente",
    mapSub: "Sorocaba Â· SÃ£o Paulo",
    phone: "Telefone",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    pendingContact: "Contatos de demonstraÃ§Ã£o â€” inserir dados reais.",
    gallery: "Galeria do tratamento",
  },
  hero: {
    headline: "O tempo muda. VocÃª nÃ£o precisa deixar de se reconhecer.",
    text: "Nossos tratamentos faciais personalizam, previnem, harmonizam e cuidam da sua pele de forma natural",
    videoSrc: "",
    poster: "",
    placeholder: "VÃDEO HERO â€” substituir posteriormente",
    caption: "UM NOVO OLHAR PARA O SEU TEMPO",
    pause: "Pausar vÃ­deo",
    play: "Reproduzir vÃ­deo",
  },
  hook: {
    eyebrow: "A ESSÃŠNCIA VELLUNE",
    headline:
      "Harmonizar. Prevenir. Reposicionar. Estimular. Suavizar. Iluminar.",
    paragraphs: [
      "NÃ£o existe um Ãºnico tratamento para todos os rostos.",
      "Na Vellune, avaliamos proporÃ§Ãµes, pele, estrutura facial e processo de envelhecimento para criar protocolos que tratam o que realmente faz sentido para cada pessoa.",
    ],
    highlight:
      "NÃ£o buscamos transformar rostos. Buscamos preservar identidade enquanto cuidamos do tempo.",
  },
  care: {
    eyebrow: "CUIDADO EM CADA DETALHE",
    title: "O que cuidamos",
    items: [
      ["HarmonizaÃ§Ã£o", "EquilÃ­brio entre proporÃ§Ãµes e identidade."],
      ["PrevenÃ§Ã£o", "Cuidado que acompanha cada fase."],
      ["Contorno", "AtenÃ§Ã£o Ã  estrutura e Ã  definiÃ§Ã£o facial."],
      ["ColÃ¡geno", "EstÃ­mulo Ã  firmeza e Ã  sustentaÃ§Ã£o."],
      ["Qualidade da pele", "Textura, uniformidade e luminosidade."],
      ["ExpressÃ£o", "Suavidade que respeita seus movimentos."],
      ["Olhar", "Cuidado especÃ­fico para uma regiÃ£o delicada."],
    ],
  },
  sections: {
    treatments: {
      eyebrow: "PROTOCOLOS PERSONALIZADOS",
      title: "Tratamentos planejados para diferentes momentos do seu rosto.",
    },
    technologies: {
      eyebrow: "CIÃŠNCIA A SERVIÃ‡O DO CUIDADO",
      title: "Tecnologia com propÃ³sito.",
    },
    results: {
      eyebrow: "NATURALIDADE EM PRIMEIRO LUGAR",
      title: "Resultados que respeitam cada rosto.",
    },
    testimonials: {
      eyebrow: "CONFIANÃ‡A QUE SE CONSTRÃ“I",
      title: "ExperiÃªncias Vellune",
    },
    location: {
      eyebrow: "UM ESPAÃ‡O PARA CUIDAR DE VOCÃŠ",
      title: "Nos encontramos em Sorocaba.",
    },
  },
  cta: {
    headline: "Seu rosto nÃ£o precisa de tudo. Precisa do tratamento certo.",
    text: "Antes de indicar qualquer procedimento, avaliamos sua pele, estrutura facial, queixas e objetivos para construir uma proposta personalizada.",
  },
  pages: {
    treatments: {
      title: "NÃ£o comeÃ§amos pelo procedimento. ComeÃ§amos pelo seu rosto.",
      description:
        "Cada pessoa envelhece de uma maneira diferente. Por isso, nossos protocolos podem combinar tecnologias e procedimentos conforme anatomia, qualidade da pele, objetivos e momento de vida.",
    },
    technologies: {
      title: "Tecnologia sÃ³ faz sentido quando existe indicaÃ§Ã£o.",
      description:
        "Tecnologias sÃ£o ferramentas dentro de um planejamento. A escolha considera sua pele, estrutura facial e objetivos, com acompanhamento individual.",
    },
    results: {
      title: "Resultados reais comeÃ§am com expectativas reais.",
      description:
        "Cada rosto responde de maneira diferente. Por isso, nÃºmero de sessÃµes, evoluÃ§Ã£o e resultados podem variar de pessoa para pessoa.",
      disclaimer:
        "Resultados individuais podem variar. Fotografias de pacientes sÃ³ devem ser utilizadas mediante autorizaÃ§Ã£o.",
    },
    faq: {
      title: "InformaÃ§Ã£o tambÃ©m Ã© cuidado.",
      description:
        "Respostas para comeÃ§ar sua jornada com mais clareza e confianÃ§a.",
    },
    contact: {
      title: "Comece pela avaliaÃ§Ã£o.",
      description:
        "Conte o que vocÃª procura. O primeiro passo Ã© conhecer vocÃª.",
    },
    notFound: {
      title: "Este caminho ainda nÃ£o existe.",
      description: "A pÃ¡gina que vocÃª procura nÃ£o foi encontrada.",
    },
  },
  form: {
    title: "Sua avaliaÃ§Ã£o comeÃ§a aqui.",
    description:
      "Compartilhe seus objetivos. Vamos comeÃ§ar pelo que importa para vocÃª.",
    name: "Nome",
    whatsapp: "WhatsApp",
    email: "E-mail",
    treatment: "Tratamento de interesse",
    message: "Mensagem",
    period: "Melhor perÃ­odo para atendimento",
    choose: "Selecione uma opÃ§Ã£o",
    undecided: "Quero orientaÃ§Ã£o na avaliaÃ§Ã£o",
    periods: ["ManhÃ£", "Tarde", "Noite"],
    consent: "Autorizo o contato atravÃ©s dos dados informados.",
    submit: "Solicitar avaliaÃ§Ã£o",
    success:
      "Recebemos sua solicitaÃ§Ã£o. Em uma implementaÃ§Ã£o real, a equipe entraria em contato atravÃ©s dos dados informados.",
    mock: "FormulÃ¡rio demonstrativo. Os dados nÃ£o sÃ£o enviados nem armazenados.",
    errors: {
      name: "Informe seu nome.",
      whatsapp: "Informe um WhatsApp com DDD e 10 ou 11 dÃ­gitos.",
      email: "Informe um e-mail vÃ¡lido.",
      treatment: "Escolha um tratamento ou solicite orientaÃ§Ã£o.",
      period: "Escolha um perÃ­odo.",
      consent: "Autorize o contato para continuar.",
    },
  },
  seo: {
    home: {
      title: "EstÃ©tica facial em Sorocaba",
      description:
        "Cuidado facial personalizado, naturalidade e tecnologia. ConheÃ§a a Vellune ClÃ­nica EstÃ©tica. Projeto conceitual.",
    },
    openGraph: { image: "", siteUrl: "" },
  },
};
export const formatPrice = (price: number | null) =>
  price === null
    ? siteContent.ui.onRequest
    : `${siteContent.ui.from} ${new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(price)}`;


