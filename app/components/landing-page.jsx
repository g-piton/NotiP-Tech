import { Mail, Menu, Phone } from "lucide-react";

import BrandMark from "./brand-mark";
import { ServiceCard } from "./cards";
import ContactForm from "./contact-form";
import { getIcon } from "./icon-map";
import SectionHeader from "./section-header";
import {
  aboutHighlights,
  contact,
  navLinks,
  processSteps,
  services,
  structuredData,
  trustItems,
} from "../lib/site-content";
import { buildWhatsAppUrl } from "../lib/whatsapp";

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.93 9.93 0 0 0-8.6 14.9L2 22l5.24-1.37A9.93 9.93 0 0 0 12 22a10 10 0 0 0 7.05-17.06ZM12 20.18a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.11.81.83-3.03-.2-.31A8.11 8.11 0 1 1 12 20.18Zm4.45-6.07c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.56 4.07 3.59.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.4-.57 1.6-1.13.2-.56.2-1.04.14-1.13-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
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
          <WhatsAppIcon width="18" height="18" />
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
        </div>
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

function AboutSection() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-grid">
        <div className="about-text reveal">
          <SectionHeader
            eyebrow="Sobre a NotiP Tech"
            title="Tecnologia com direção, estética e estratégia comercial."
            text="A NotiP Tech nasceu para transformar ideias em soluções digitais de alto impacto. Unimos design, desenvolvimento e estratégia para criar experiências que posicionam melhor a marca, facilitam o contato e apoiam o crescimento do negócio."
            center
          />
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
            text="Preencha o formulário para iniciar a conversa com contexto. Assim fica mais fácil indicar a melhor estrutura, prazo e escopo ideal."
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
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
              <InstagramIcon width="20" height="20" />
              {contact.instagramDisplay}
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
            <a className="footer-contact-item" href={contact.instagramUrl} target="_blank" rel="noreferrer">
              <InstagramIcon width="20" height="20" />
              <span>{contact.instagramDisplay}</span>
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
        <AboutSection />
        <ServicesSection />
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
        <WhatsAppIcon width="40" height="40" />
      </a>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script dangerouslySetInnerHTML={{ __html: interactionScript }} />
    </>
  );
}
