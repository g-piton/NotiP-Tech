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

export function PortfolioCard({ item }) {
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
