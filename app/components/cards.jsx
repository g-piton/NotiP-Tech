import { getIcon } from "./icon-map";

export function ServiceCard({ service }) {
  const Icon = getIcon(service.icon);

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

export function BenefitItem({ item }) {
  const Icon = getIcon(item.icon);

  return (
    <li className="benefit-item reveal">
      <span className="benefit-icon">
        <Icon size={20} />
      </span>
      <span>{item.title}</span>
    </li>
  );
}

function PortfolioGallery({ item }) {
  const [primaryImage, ...supportImages] = item.images;

  return (
    <div className={`portfolio-preview portfolio-${item.variant}`} aria-label={`Exemplos de ${item.title}`}>
      <div className="browser-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="portfolio-gallery">
        <div className="portfolio-main-shot">
          <img src={primaryImage.src} alt={primaryImage.alt} loading="lazy" />
        </div>
        <div className="portfolio-thumbs" aria-hidden="true">
          {supportImages.map((image) => (
            <img key={image.src} src={image.src} alt="" loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortfolioCard({ item }) {
  const highlights = item.highlights ?? [];

  return (
    <article className="portfolio-card reveal">
      <PortfolioGallery item={item} />
      <div className="portfolio-card-body">
        <span>{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <div className="portfolio-tags" aria-label="Destaques do projeto">
          {highlights.map((highlight) => (
            <small key={highlight}>{highlight}</small>
          ))}
        </div>
      </div>
    </article>
  );
}
