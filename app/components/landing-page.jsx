import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Menu,
  MessageCircle,
  Phone,
} from "lucide-react";

import BrandMark from "./brand-mark";
import { BenefitItem, PortfolioCard, ServiceCard } from "./cards";
import ContactForm from "./contact-form";
import HeroVisual from "./hero-visual";
import { getIcon } from "./icon-map";
import SectionHeader from "./section-header";
import {
  aboutHighlights,
  benefits,
  contact,
  navLinks,
  portfolioItems,
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
  );
}

function BenefitsSection() {
  return (
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
            <h2>Tecnologia com direção, estética e resultado.</h2>
          </div>
        </div>
        <div className="about-text reveal">
          <p>
            A NotiP Tech nasceu para transformar ideias em soluções digitais de alto impacto. Unimos
            tecnologia, design e estratégia para criar experiências que conectam marcas aos seus
            clientes e geram resultados reais.
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
  );
}

function PortfolioSection() {
  return (
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
  );
}

function CtaSection() {
  return (
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
  );
}

function ContactSection() {
  return (
    <section className="section contact-section" id="contato">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <SectionHeader
            eyebrow="Contato"
            title="Conte sobre o projeto que você quer construir"
            text="Preencha o formulário e a conversa será iniciada pelo WhatsApp com as principais informações do seu projeto."
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
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandMark compact />
          <p>Transformando ideias em presença digital.</p>
        </div>
        <div className="footer-column">
          <h3>Links rápidos</h3>
          <nav className="footer-links" aria-label="Links rápidos">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-column">
          <h3>Serviços</h3>
          <nav className="footer-links" aria-label="Serviços">
            {services.slice(0, 4).map((service) => (
              <a key={service.title} href="#servicos">
                {service.title}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-column footer-contact">
          <h3>Contato</h3>
          <div className="footer-links">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={buildWhatsAppUrl("Olá, NotiP Tech! Quero conversar sobre um projeto.")}>
              {contact.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} NotiP Tech. Todos os direitos reservados.</span>
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
        <BenefitsSection />
        <AboutSection />
        <ProcessSection />
        <PortfolioSection />
        <CtaSection />
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
