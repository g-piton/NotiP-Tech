import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Menu,
  MessageCircle,
  Phone,
} from "lucide-react";

import BrandMark from "./brand-mark";
import { PricingCard, ServiceCard } from "./cards";
import ContactForm from "./contact-form";
import HeroVisual from "./hero-visual";
import { getIcon } from "./icon-map";
import SectionHeader from "./section-header";
import {
  aboutHighlights,
  contact,
  heroProof,
  navLinks,
  packages,
  processSteps,
  services,
  structuredData,
  trustItems,
} from "../lib/site-content";
import { buildWhatsAppUrl } from "../lib/whatsapp";

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

        <button className="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-lines" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content reveal is-visible">
          <span className="eyebrow">Sites e soluções digitais para vender melhor</span>
          <h1>Transformamos ideias em presença digital.</h1>
          <p>
            Criamos sites, landing pages e sistemas com estrutura profissional, foco em conversão e
            caminho claro para sua empresa captar mais contatos.
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
            {heroProof.map((item) => (
              <span key={item}>
                <CheckCircle2 size={18} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Diferenciais NotiP Tech">
      <div className="container trust-grid">
        {trustItems.map((item) => {
          const Icon = getIcon(item.icon);

          return (
            <div key={item.text}>
              <Icon size={30} />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section services-section" id="servicos">
      <div className="container">
        <SectionHeader
          eyebrow="Serviços"
          title="O que a NotiP Tech pode colocar no ar para o seu negócio"
          text="Da presença institucional ao sistema sob medida, cada entrega nasce com objetivo comercial, acabamento profissional e base técnica pronta para crescer."
          center
        />
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="section pricing-section" id="investimento">
      <div className="container">
        <SectionHeader
          eyebrow="Investimento"
          title="Faixas de entrada para os projetos mais pedidos"
          text="Valores iniciais para orientar a decisão com mais clareza. Escopo final, integrações e volume de conteúdo podem ajustar o investimento."
          center
        />
        <div className="pricing-grid">
          {packages.map((item) => (
            <PricingCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-grid">
        <div className="about-panel reveal">
          <img className="np-watermark-logo" src="/brand/notip-np.png" alt="" aria-hidden="true" />
          <div>
            <span className="eyebrow">Sobre a NotiP Tech</span>
            <h2>Tecnologia com direção, estética e estratégia comercial.</h2>
          </div>
        </div>
        <div className="about-text reveal">
          <p>
            A NotiP Tech nasceu para transformar ideias em soluções digitais de alto impacto. Unimos
            design, desenvolvimento e estratégia para criar experiências que posicionam melhor a marca,
            facilitam o contato e apoiam o crescimento do negócio.
          </p>
          <div className="about-highlights">
            {aboutHighlights.map((item) => {
              const Icon = getIcon(item.icon);

              return (
                <span key={item.text}>
                  <Icon size={18} />
                  {item.text}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section process-section" id="processo">
      <div className="container">
        <SectionHeader
          eyebrow="Processo"
          title="Um caminho simples do briefing até a publicação"
          text="A jornada foi desenhada para dar previsibilidade, velocidade e espaço para ajustes sem perder foco no resultado."
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
  );
}

function ContactSection() {
  return (
    <section className="section contact-section" id="contato">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <SectionHeader
            eyebrow="Contato"
            title="Conte qual resultado você quer gerar com seu projeto"
            text="Preencha o formulário para iniciar a conversa com contexto. Assim fica mais fácil indicar a melhor estrutura, prazo e faixa de investimento."
          />
          <div className="contact-methods">
            <a href={`mailto:${contact.email}`}>
              <Mail size={20} />
              {contact.email}
            </a>
            <a href={buildWhatsAppUrl("Olá, NotiP Tech! Vim pelo site.")} target="_blank" rel="noreferrer">
              <Phone size={20} />
              {contact.whatsappDisplay}
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-contact-card">
        <BrandMark compact />
        <div className="footer-column footer-contact">
          <div className="footer-contact-list">
            <a
              className="footer-contact-item"
              href={buildWhatsAppUrl("Olá, NotiP Tech! Quero conversar sobre um projeto.")}
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={20} />
              <span>WhatsApp {contact.whatsappDisplay}</span>
            </a>
            <a className="footer-contact-item" href={`mailto:${contact.email}`}>
              <Mail size={20} />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} NotiP Tech. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

const interactionScript = `
(() => {
  const whatsappNumber = "${contact.whatsappNumber}";
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

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />

      <a
        className="whatsapp-float"
        href={buildWhatsAppUrl("Olá, NotiP Tech! Vim pelo site e quero solicitar um orçamento.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar a NotiP Tech no WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script dangerouslySetInnerHTML={{ __html: interactionScript }} />
    </>
  );
}
