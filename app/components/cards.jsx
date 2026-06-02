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

export function PricingCard({ item }) {
  return (
    <article className={`pricing-card reveal ${item.featured ? "pricing-card-featured" : ""}`}>
      <div className="pricing-card-top">
        <span className="pricing-badge">{item.badge}</span>
        <h3>{item.name}</h3>
        <p>{item.audience}</p>
      </div>

      <div className="pricing-value">
        <strong>{item.price}</strong>
        <small>{item.note}</small>
      </div>

      <ul className="pricing-features">
        {item.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
}
