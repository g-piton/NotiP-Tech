import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Gauge,
  Globe2,
  LayoutDashboard,
  Link2,
  Mail,
  Menu,
  MessageCircle,
  MonitorCog,
  Network,
  PenTool,
  Phone,
  Rocket,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

const whatsappNumber = "5519999999999";
const whatsappDisplay = "(19) 99999-9999";
const contactEmail = "contato@notiptech.com.br";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

const services = [
  {
    title: "Sites Institucionais",
    text: "Presença profissional para apresentar sua marca, serviços e diferenciais com clareza.",
    icon: Globe2,
  },
  {
    title: "Landing Pages",
    text: "Páginas focadas em conversão para campanhas, lançamentos e captação de leads.",
    icon: LayoutDashboard,
  },
  {
    title: "Sistemas Web",
    text: "Soluções sob medida para organizar processos, dados e rotinas do seu negócio.",
    icon: MonitorCog,
  },
  {
    title: "Manutenção e Melhorias",
    text: "Ajustes, evolução visual, correções e novas funcionalidades para projetos existentes.",
    icon: Wrench,
  },
  {
    title: "Integrações e APIs",
    text: "Conexões com ferramentas, automações, pagamentos, CRM, WhatsApp e outros serviços.",
    icon: Link2,
  },
  {
    title: "Consultoria em Tecnologia",
    text: "Direcionamento técnico para escolher soluções digitais mais eficientes e escaláveis.",
    icon: Workflow,
  },
];

const benefits = [
  { title: "Design moderno e responsivo", icon: PenTool },
  { title: "Performance e carregamento rápido", icon: Gauge },
  { title: "SEO básico configurado", icon: SearchCheck },
  { title: "Integração com WhatsApp", icon: MessageCircle },
  { title: "Código limpo e escalável", icon: Code2 },
  { title: "Atendimento próximo e personalizado", icon: Users },
];

const processSteps = [
  "Entendimento da ideia",
  "Planejamento da solução",
  "Design e desenvolvimento",
  "Revisão e ajustes",
  "Publicação e suporte",
];

const portfolioItems = [
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

function buildWhatsAppUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-header ${center ? "section-header-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function BrandMark({ compact = false }) {
  return (
    <a href="#inicio" className={`brand ${compact ? "brand-compact" : ""}`} aria-label="NotiP Tech">
      <img className="brand-logo" src="/brand/notip-tech.png" alt="NotiP Tech" />
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandMark />

        <nav className="main-nav" aria-label="Navegação principal">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-primary header-cta"
          href={buildWhatsAppUrl("Olá, NotiP Tech! Quero solicitar um orçamento.")}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} />
          Solicitar orçamento
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded="false"
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual reveal is-visible" aria-label="Visual tecnológico da NotiP Tech">
      <div className="visual-card visual-card-main">
        <div className="visual-card-top">
          <span />
          <span />
          <span />
        </div>
        <div className="visual-brand">
          <img className="visual-np-logo" src="/brand/notip-np.png" alt="NP" />
          <div>
            <img className="visual-wordmark-logo" src="/brand/notip-tech.png" alt="NotiP Tech" />
            <small>Presença digital que conecta</small>
          </div>
        </div>
        <div className="visual-grid">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="visual-status">
          <span>Performance</span>
          <strong>98%</strong>
        </div>
      </div>

      <div className="visual-card visual-card-side">
        <span className="small-label">Projeto digital</span>
        <strong>Design + Código + Estratégia</strong>
        <div className="signal-bars" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="visual-chip visual-chip-left">
        <ShieldCheck size={18} />
        Seguro
      </div>

      <div className="visual-chip visual-chip-right">
        <Rocket size={18} />
        Pronto para crescer
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-card reveal">
      <div className="icon-box">
        <Icon size={24} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </article>
  );
}

function BenefitItem({ item }) {
  const Icon = item.icon;

  return (
    <li className="benefit-item reveal">
      <span className="benefit-icon">
        <Icon size={20} />
      </span>
      <span>{item.title}</span>
    </li>
  );
}

function PortfolioPreview({ variant }) {
  return (
    <div className={`portfolio-preview portfolio-${variant}`}>
      <div className="browser-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-content">
        <div className="preview-sidebar" />
        <div className="preview-main">
          <span className="preview-line line-wide" />
          <span className="preview-line" />
          <span className="preview-button" />
          <div className="preview-blocks">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioCard({ item }) {
  return (
    <article className="portfolio-card reveal">
      <PortfolioPreview variant={item.variant} />
      <div className="portfolio-card-body">
        <span>{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  );
}

function ContactForm() {
  return (
    <form
      className="contact-form reveal"
      action={`https://wa.me/${whatsappNumber}`}
      method="get"
      target="_blank"
    >
      <input
        type="hidden"
        name="text"
        value="Olá, NotiP Tech! Quero conversar sobre um projeto."
      />
      <div className="form-row">
        <label>
          Nome
          <input name="name" type="text" placeholder="Seu nome" required />
        </label>
        <label>
          E-mail
          <input name="email" type="email" placeholder="voce@email.com" required />
        </label>
      </div>

      <div className="form-row">
        <label>
          WhatsApp
          <input name="phone" type="tel" placeholder="(00) 00000-0000" required />
        </label>
        <label>
          Tipo de projeto
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option>Site institucional</option>
            <option>Landing page</option>
            <option>Sistema web</option>
            <option>Manutenção ou melhorias</option>
            <option>Consultoria em tecnologia</option>
          </select>
        </label>
      </div>

      <label>
        Mensagem
        <textarea
          name="message"
          rows="5"
          placeholder="Conte brevemente o que você precisa."
          required
        />
      </label>

      <button className="btn btn-primary form-submit" type="submit">
        <Send size={18} />
        Enviar mensagem
      </button>

      <p className="form-feedback" role="status" hidden>
        Mensagem preparada no WhatsApp. A conversa pode ser enviada por lá.
      </p>
    </form>
  );
}

const interactionScript = `
(() => {
  const whatsappNumber = "${whatsappNumber}";
  const buildUrl = (message) => "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
  const nav = document.querySelector(".main-nav");
  const menuButton = document.querySelector(".menu-toggle");

  if (nav && menuButton) {
    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      menuButton.classList.toggle("is-open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    };

    menuButton.addEventListener("click", () => {
      setOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });
  }

  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(contactForm);
      const leadMessage = [
        "Olá, NotiP Tech! Quero conversar sobre um projeto.",
        "",
        "Nome: " + form.get("name"),
        "E-mail: " + form.get("email"),
        "WhatsApp: " + form.get("phone"),
        "Tipo de projeto: " + form.get("projectType"),
        "Mensagem: " + form.get("message")
      ].join("\\n");
      window.open(buildUrl(leadMessage), "_blank", "noopener,noreferrer");
      contactForm.reset();
      const feedback = contactForm.querySelector(".form-feedback");

      if (feedback) {
        feedback.hidden = false;
      }
    });
  }
})();
`;

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NotiP Tech",
    slogan: "Transformando ideias em presença digital.",
    description:
      "Criação de sites institucionais, landing pages, sistemas web e soluções digitais para pequenas empresas, prestadores de serviço e negócios locais.",
    url: "https://notiptech.com.br",
    email: contactEmail,
    telephone: whatsappDisplay,
    areaServed: "Brasil",
    sameAs: [],
    serviceType: [
      "Sites Institucionais",
      "Landing Pages",
      "Sistemas Web",
      "Manutenção e Melhorias",
      "Integrações e APIs",
      "Consultoria em Tecnologia",
    ],
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-lines" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-content reveal is-visible">
              <span className="eyebrow">Tecnologia para negócios que querem crescer</span>
              <h1>Transformamos ideias em presença digital.</h1>
              <p>
                Criamos sites, landing pages e soluções digitais modernas para empresas que querem se
                destacar na internet.
              </p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={buildWhatsAppUrl("Olá, NotiP Tech! Quero meu site profissional.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Quero meu site profissional
                  <ArrowRight size={18} />
                </a>
                <a className="btn btn-secondary" href="#servicos">
                  Ver serviços
                </a>
              </div>
              <div className="hero-proof">
                <span>
                  <CheckCircle2 size={18} />
                  Sites responsivos
                </span>
                <span>
                  <CheckCircle2 size={18} />
                  Foco em conversão
                </span>
                <span>
                  <CheckCircle2 size={18} />
                  Suporte próximo
                </span>
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section className="trust-strip" aria-label="Diferenciais NotiP Tech">
          <div className="container trust-grid">
            <div>
              <Code2 size={30} />
              <span>Desenvolvimento de sites e sistemas</span>
            </div>
            <div>
              <Globe2 size={30} />
              <span>Presença digital que conecta</span>
            </div>
            <div>
              <Network size={30} />
              <span>Soluções que geram resultados</span>
            </div>
            <div>
              <ShieldCheck size={30} />
              <span>Tecnologia com segurança</span>
            </div>
          </div>
        </section>

        <section className="section services-section" id="servicos">
          <div className="container">
            <SectionHeader
              eyebrow="Serviços"
              title="Soluções digitais para cada fase do seu negócio"
              text="Do primeiro site ao sistema personalizado, a NotiP Tech constrói experiências digitais com estratégia, visual premium e base técnica sólida."
              center
            />
            <div className="services-grid">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="section benefits-section">
          <div className="container benefits-grid">
            <div className="benefits-copy reveal">
              <SectionHeader
                eyebrow="Diferenciais"
                title="Por que escolher a NotiP Tech?"
                text="Unimos design, tecnologia e atendimento próximo para entregar projetos digitais que passam confiança e ajudam sua empresa a vender melhor."
              />
              <a className="btn btn-secondary" href="#contato">
                Conversar sobre meu projeto
              </a>
            </div>

            <ul className="benefits-list">
              {benefits.map((item) => (
                <BenefitItem key={item.title} item={item} />
              ))}
            </ul>
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <div className="container about-grid">
            <div className="about-panel reveal">
              <img className="np-watermark-logo" src="/brand/notip-np.png" alt="" aria-hidden="true" />
              <div>
                <span className="eyebrow">Sobre a NotiP Tech</span>
                <h2>Tecnologia com direção, estética e resultado.</h2>
              </div>
            </div>
            <div className="about-text reveal">
              <p>
                A NotiP Tech nasceu para transformar ideias em soluções digitais de alto impacto.
                Unimos tecnologia, design e estratégia para criar experiências que conectam marcas
                aos seus clientes e geram resultados reais.
              </p>
              <div className="about-highlights">
                <span>
                  <Sparkles size={18} />
                  Inovação
                </span>
                <span>
                  <Gauge size={18} />
                  Foco
                </span>
                <span>
                  <Users size={18} />
                  Parceria
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section process-section" id="processo">
          <div className="container">
            <SectionHeader
              eyebrow="Processo"
              title="Um caminho claro até a publicação"
              text="Cada etapa é conduzida com transparência para que sua ideia ganhe forma sem complicação."
              center
            />
            <div className="process-track">
              {processSteps.map((step, index) => (
                <article className="process-step reveal" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio">
          <div className="container">
            <SectionHeader
              eyebrow="Portfólio"
              title="Projetos preparados para diferentes objetivos"
              text="Modelos de entrega que representam o padrão visual e técnico aplicado nos próximos projetos da NotiP Tech."
              center
            />
            <div className="portfolio-grid">
              {portfolioItems.map((item) => (
                <PortfolioCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner reveal">
            <div>
              <span className="eyebrow">Vamos tirar sua ideia do papel</span>
              <h2>Pronto para levar sua empresa para o digital?</h2>
              <p>Vamos criar uma presença online profissional para o seu negócio.</p>
            </div>
            <div className="cta-actions">
              <a
                className="btn btn-primary"
                href={buildWhatsAppUrl("Olá, NotiP Tech! Quero solicitar um orçamento no WhatsApp.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                Solicitar orçamento no WhatsApp
              </a>
              <a className="btn btn-secondary" href="#contato">
                Enviar mensagem
              </a>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <SectionHeader
                eyebrow="Contato"
                title="Conte sobre o projeto que você quer construir"
                text="Preencha o formulário e a conversa será iniciada pelo WhatsApp com as principais informações do seu projeto."
              />
              <div className="contact-methods">
                <a href={`mailto:${contactEmail}`}>
                  <Mail size={20} />
                  {contactEmail}
                </a>
                <a href={buildWhatsAppUrl("Olá, NotiP Tech! Vim pelo site.")} target="_blank" rel="noreferrer">
                  <Phone size={20} />
                  {whatsappDisplay}
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <BrandMark compact />
            <p>Transformando ideias em presença digital.</p>
          </div>
          <div>
            <h3>Links rápidos</h3>
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <h3>Serviços</h3>
            {services.slice(0, 4).map((service) => (
              <a key={service.title} href="#servicos">
                {service.title}
              </a>
            ))}
          </div>
          <div>
            <h3>Contato</h3>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href={buildWhatsAppUrl("Olá, NotiP Tech! Quero conversar sobre um projeto.")}>
              {whatsappDisplay}
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} NotiP Tech. Todos os direitos reservados.</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={buildWhatsAppUrl("Olá, NotiP Tech! Vim pelo site e quero solicitar um orçamento.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar a NotiP Tech no WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script dangerouslySetInnerHTML={{ __html: interactionScript }} />
    </>
  );
}
