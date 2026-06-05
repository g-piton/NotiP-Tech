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
