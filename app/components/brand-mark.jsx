export default function BrandMark({ compact = false }) {
  return (
    <a href="#inicio" className={`brand ${compact ? "brand-compact" : ""}`} aria-label="NotiP Tech">
      <img className="brand-logo" src="/brand/notip-tech.png" alt="NotiP Tech" />
    </a>
  );
}
