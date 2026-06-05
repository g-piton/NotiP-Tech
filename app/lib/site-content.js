export const contact = {
  whatsappNumber: "5519981348335",
  whatsappDisplay: "(19) 98134-8335",
  email: "gabrielnpiton@gmail.com",
  instagramUrl: "https://www.instagram.com/gabrielpiton1?utm_source=qr",
  instagramDisplay: "@gabrielpiton1",
};

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export const heroProof = [
  "Estrutura profissional para vender melhor",
  "WhatsApp e formulário prontos para captar",
  "SEO inicial e performance como base",
  "Projeto com suporte e evolução",
];

export const services = [
  {
    title: "Sites Institucionais",
    text: "Presença profissional para apresentar sua marca, serviços e diferenciais com clareza.",
    icon: "globe",
  },
  {
    title: "Landing Pages",
    text: "Páginas focadas em conversão para campanhas, lançamentos e captação de leads.",
    icon: "layout",
  },
  {
    title: "Sistemas Web",
    text: "Soluções sob medida para organizar processos, dados e rotinas do seu negócio.",
    icon: "monitor",
  },
  {
    title: "Manutenção e Melhorias",
    text: "Ajustes, evolução visual, correções e novas funcionalidades para projetos existentes.",
    icon: "wrench",
  },
  {
    title: "Integrações e APIs",
    text: "Conexões com CRM, pagamentos, automações, WhatsApp e outros serviços.",
    icon: "link",
  },
  {
    title: "Consultoria em Tecnologia",
    text: "Direcionamento técnico para escolher a melhor estrutura digital para crescer com segurança.",
    icon: "workflow",
  },
];

export const packages = [
  {
    name: "Landing de Conversão",
    audience: "Ideal para campanhas, tráfego pago e lançamentos locais.",
    price: "a partir de R$ 1.290",
    note: "Estrutura enxuta, copy orientada à ação e contato rápido.",
    badge: "Entrega ágil",
    featured: false,
    features: [
      "Página com oferta, prova social e CTA forte",
      "Formulário e botão de WhatsApp integrados",
      "SEO inicial e configuração de métricas",
      "Ajustes finos para mobile e performance",
    ],
  },
  {
    name: "Site Institucional Pro",
    audience: "Para empresas que precisam passar mais confiança online.",
    price: "a partir de R$ 1.890",
    note: "Melhor ponto de partida para fortalecer marca e gerar contatos.",
    badge: "Mais procurado",
    featured: true,
    features: [
      "Home, serviços, sobre e contato",
      "Layout responsivo com identidade visual aplicada",
      "WhatsApp, formulário e SEO inicial inclusos",
      "Estrutura pronta para futuras expansões",
    ],
  },
  {
    name: "Sistema sob Medida",
    audience: "Para operação, gestão interna e automação de processos.",
    price: "sob consulta",
    note: "Escopo definido por módulo, regra de negócio e integrações.",
    badge: "Projeto customizado",
    featured: false,
    features: [
      "Mapeamento da necessidade e proposta técnica",
      "Painel administrativo e fluxo personalizado",
      "Integrações, permissão de acesso e dados centralizados",
      "Roadmap de evolução e suporte pós-publicação",
    ],
  },
];

export const processSteps = [
  "Entendimento do objetivo e do público",
  "Definição da melhor estrutura de página",
  "Design, conteúdo e desenvolvimento",
  "Revisão final com ajustes essenciais",
  "Publicação, acompanhamento e suporte",
];

export const trustItems = [
  { icon: "code", text: "Projetos com base técnica sólida" },
  { icon: "message", text: "Contato rápido por WhatsApp e formulário" },
  { icon: "shield", text: "Evolução com segurança e suporte" },
];

export const aboutHighlights = [
  { icon: "sparkles", text: "Clareza" },
  { icon: "gauge", text: "Agilidade" },
  { icon: "users", text: "Parceria" },
];

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NotiP Tech",
  slogan: "Transformando ideias em presença digital.",
  description:
    "Criação de sites institucionais, landing pages, sistemas web e soluções digitais com foco em captação, performance e presença profissional.",
  url: "https://notiptech.com.br",
  email: contact.email,
  telephone: contact.whatsappDisplay,
  areaServed: "Brasil",
  sameAs: [contact.instagramUrl],
  serviceType: services.map((service) => service.title),
};
