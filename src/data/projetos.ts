// Dados centralizados dos projetos — usados tanto na landing page pública quanto no admin.
// Quando conectarmos o Firebase, este arquivo será substituído por chamadas ao Firestore.

export type Projeto = {
  id: string;
  title: string;
  categoria: string;
  tipo: "publico" | "privado";
  img: string;
  galeria: string[];
  status: "Em construção" | "Concluído" | "Planejamento" | "Atrasado";
  progresso: number;
  prazo: string;
  valor: string;
  local: string;
  area: string;
  responsavel: string;
  resumo: string;
  detalhes: string;
  diferenciais: string[];
  etapas: { nome: string; status: "concluida" | "andamento" | "pendente" | "atrasada" }[];
};

export const projetos: Projeto[] = [
  {
    id: "edificio-infinity",
    title: "Edifício Infinity",
    categoria: "Alto Padrão Residencial",
    tipo: "privado",
    img: "/images/projeto-infinity.png",
    galeria: [
      "/images/projeto-infinity.png",
      "/images/infinity-interior.png",
      "/images/infinity-rooftop.png",
    ],
    status: "Em construção",
    progresso: 45,
    prazo: "Dez/2026",
    valor: "R$ 45.000.000",
    local: "São Paulo, SP - Zona Sul",
    area: "12.500 m²",
    responsavel: "Eng. Carlos",
    resumo:
      "Torre de 30 pavimentos com certificação LEED, automação residencial e área de lazer completa. Luxo, eficiência energética e isolamento acústico em todas as unidades.",
    detalhes:
      "O Edifício Infinity é um marco de arquitetura moderna na zona sul de São Paulo. Contando com 30 pavimentos, área de lazer completa e certificação sustentável (LEED), o projeto une luxo e responsabilidade ambiental. Utilizamos tecnologias construtivas avançadas como formas trepantes e concreto autoadensável para garantir isolamento acústico e eficiência energética em todas as unidades. As áreas comuns incluem salão de festas, academia, spa, coworking e uma piscina com borda infinita no rooftop com vista panorâmica de 360° da cidade.",
    diferenciais: [
      "Certificação LEED",
      "Automação Residencial",
      "Piscina Borda Infinita no Rooftop",
      "4 vagas por apartamento",
      "Concreto autoadensável",
      "Esquadrias com isolamento acústico",
    ],
    etapas: [
      { nome: "Fundações e Contenções", status: "concluida" },
      { nome: "Estrutura (Lajes 1-15)", status: "concluida" },
      { nome: "Estrutura (Lajes 16-30)", status: "andamento" },
      { nome: "Alvenaria e Vedação", status: "andamento" },
      { nome: "Instalações Hidrossanitárias", status: "pendente" },
      { nome: "Acabamento e Pintura", status: "pendente" },
      { nome: "Paisagismo e Entrega", status: "pendente" },
    ],
  },
  {
    id: "galpao-rodoanel",
    title: "Galpão Logístico Rodoanel",
    categoria: "Infraestrutura Corporativa",
    tipo: "privado",
    img: "/images/projeto-galpao.png",
    galeria: [
      "/images/projeto-galpao.png",
      "/images/galpao-interior.png",
      "/images/galpao-construcao.png",
    ],
    status: "Em construção",
    progresso: 80,
    prazo: "Out/2026",
    valor: "R$ 12.500.000",
    local: "Osasco, SP",
    area: "8.000 m²",
    responsavel: "Eng. Maria",
    resumo:
      "Complexo logístico com pé direito de 12m, piso nivelado a laser (6t/m²) e amplo pátio de manobras. Acesso estratégico às principais rodovias do estado.",
    detalhes:
      "Complexo logístico projetado para operações de alta performance. O galpão conta com pé direito de 12 metros, piso nivelado a laser com capacidade para 6 ton/m² e amplo pátio de manobras, permitindo fluxo eficiente de carretas. Localização estratégica com acesso imediato ao Rodoanel e às rodovias Anhanguera, Bandeirantes e Castelo Branco. O sistema de drenagem sustentável capta água pluvial para reuso em lavagem de pátios e irrigação, reduzindo o consumo hídrico em 40%.",
    diferenciais: [
      "Piso nivelado a laser (6t/m²)",
      "Pé direito de 12m",
      "Docas sider e convencionais",
      "Sistema de reuso de água",
      "Sprinklers automáticos (NFPA)",
      "Iluminação LED com sensores",
    ],
    etapas: [
      { nome: "Terraplanagem", status: "concluida" },
      { nome: "Fundações (Sapatas e Blocos)", status: "concluida" },
      { nome: "Estrutura Metálica e Cobertura", status: "concluida" },
      { nome: "Piso Industrial", status: "concluida" },
      { nome: "Instalações Elétricas e SPDA", status: "andamento" },
      { nome: "Docas e Portaria", status: "andamento" },
      { nome: "Pavimentação externa e entrega", status: "pendente" },
    ],
  },
  {
    id: "complexo-norte",
    title: "Complexo Empresarial Norte",
    categoria: "Comercial de Grande Porte",
    tipo: "privado",
    img: "/images/projeto-complexo.png",
    galeria: [
      "/images/projeto-complexo.png",
      "/images/complexo-lobby.png",
      "/images/complexo-aerial.png",
    ],
    status: "Concluído",
    progresso: 100,
    prazo: "Mai/2025",
    valor: "R$ 80.000.000",
    local: "Santana, São Paulo - SP",
    area: "35.000 m²",
    responsavel: "Eng. João",
    resumo:
      "Centro empresarial com 3 torres corporativas conectadas por shopping térreo. Estrutura pré-moldada e metálica executada em tempo recorde. Novo polo de negócios da zona norte.",
    detalhes:
      "Um centro empresarial completo com 3 torres corporativas conectadas por um shopping térreo. A estrutura foi executada em tempo recorde utilizando pré-moldados e estrutura metálica, finalizando a obra 2 meses antes do prazo previsto. Este complexo abriga grandes empresas de tecnologia e finanças, sendo um novo polo de negócios na zona norte de São Paulo. A certificação AQUA comprova o compromisso com práticas sustentáveis em todas as fases do empreendimento, desde a concepção até a operação.",
    diferenciais: [
      "3 Torres Interligadas",
      "Shopping no térreo",
      "Heliponto certificado",
      "Certificação AQUA",
      "Entregue 2 meses antes do prazo",
      "Ar condicionado central VRF",
    ],
    etapas: [
      { nome: "Fundações Profundas (Estacas)", status: "concluida" },
      { nome: "Estrutura Pré-moldada", status: "concluida" },
      { nome: "Fechamento e Fachada Pele de Vidro", status: "concluida" },
      { nome: "Instalações Prediais", status: "concluida" },
      { nome: "Acabamentos e Fit-out", status: "concluida" },
      { nome: "Paisagismo e Entrega", status: "concluida" },
    ],
  },
  {
    id: "condominio-reserva",
    title: "Condomínio Reserva",
    categoria: "Residencial Horizontal",
    tipo: "privado",
    img: "/images/projeto-reserva.png",
    galeria: [
      "/images/projeto-reserva.png",
      "/images/reserva-clubhouse.png",
      "/images/reserva-houses.png",
    ],
    status: "Em construção",
    progresso: 25,
    prazo: "Fev/2027",
    valor: "R$ 35.000.000",
    local: "Campinas, SP",
    area: "150.000 m²",
    responsavel: "Eng. Ana",
    resumo:
      "Empreendimento horizontal de altíssimo padrão envolto por natureza nativa. Infraestrutura completa: terraplanagem, saneamento, pavimentação e clube resort de 2.000 m².",
    detalhes:
      "Empreendimento horizontal de altíssimo padrão envolto por natureza nativa preservada. A Ampla é responsável pela infraestrutura completa: terraplanagem de 150.000 m², redes de água e esgoto, pavimentação intertravada, cabeamento subterrâneo de energia e dados, e construção do clube resort privativo de 2.000 m² com piscinas, academia, salão gourmet e quadras esportivas. O projeto exige profundo respeito ao meio ambiente com licenciamento ambiental rigoroso e técnicas de contenção de terra que preservam a vegetação nativa do entorno.",
    diferenciais: [
      "Cabeamento Subterrâneo",
      "Clube Resort Privativo (2.000 m²)",
      "Lagos Artificiais",
      "Segurança Perimetral Inteligente",
      "Pavimentação Intertravada",
      "Licenciamento Ambiental completo",
    ],
    etapas: [
      { nome: "Licenciamento Ambiental", status: "concluida" },
      { nome: "Terraplanagem e Contenções", status: "concluida" },
      { nome: "Redes de Água e Esgoto", status: "andamento" },
      { nome: "Cabeamento Subterrâneo", status: "pendente" },
      { nome: "Pavimentação Intertravada", status: "pendente" },
      { nome: "Construção do Clube Resort", status: "pendente" },
      { nome: "Paisagismo e Entrega", status: "pendente" },
    ],
  },
];
