export const contact = {
  whatsappNumber: "5519999999999",
  whatsappDisplay: "(19) 99999-9999",
  email: "contato@notiptech.com.br",
};

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
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
    text: "Conexões com ferramentas, automações, pagamentos, CRM, WhatsApp e outros serviços.",
    icon: "link",
  },
  {
    title: "Consultoria em Tecnologia",
    text: "Direcionamento técnico para escolher soluções digitais mais eficientes e escaláveis.",
    icon: "workflow",
  },
];

export const benefits = [
  { title: "Design moderno e responsivo", icon: "pen" },
  { title: "Performance e carregamento rápido", icon: "gauge" },
  { title: "SEO básico configurado", icon: "search" },
  { title: "Integração com WhatsApp", icon: "message" },
  { title: "Código limpo e escalável", icon: "code" },
  { title: "Atendimento próximo e personalizado", icon: "users" },
];

export const processSteps = [
  "Entendimento da ideia",
  "Planejamento da solução",
  "Design e desenvolvimento",
  "Revisão e ajustes",
  "Publicação e suporte",
];

export const portfolioItems = [
  {
    title: "Site institucional",
    category: "Presença digital",
    text: "Estrutura elegante para negócios locais que precisam transmitir confiança desde o primeiro clique.",
    variant: "institutional",
  },
  {
    title: "Landing page comercial",
    category: "Captação de leads",
    text: "Página direta, estratégica e preparada para transformar campanhas em oportunidades reais.",
    variant: "commercial",
  },
  {
    title: "Sistema web personalizado",
    category: "Operação digital",
    text: "Interface sob medida para centralizar informações, reduzir tarefas manuais e ganhar velocidade.",
    variant: "system",
  },
];

export const trustItems = [
  { icon: "code", text: "Desenvolvimento de sites e sistemas" },
  { icon: "globe", text: "Presença digital que conecta" },
  { icon: "network", text: "Soluções que geram resultados" },
  { icon: "shield", text: "Tecnologia com segurança" },
];

export const aboutHighlights = [
  { icon: "sparkles", text: "Inovação" },
  { icon: "gauge", text: "Foco" },
  { icon: "users", text: "Parceria" },
];

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NotiP Tech",
  slogan: "Transformando ideias em presença digital.",
  description:
    "Criação de sites institucionais, landing pages, sistemas web e soluções digitais para pequenas empresas, prestadores de serviço e negócios locais.",
  url: "https://notiptech.com.br",
  email: contact.email,
  telephone: contact.whatsappDisplay,
  areaServed: "Brasil",
  sameAs: [],
  serviceType: services.map((service) => service.title),
};
