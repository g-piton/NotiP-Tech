import { Rocket, ShieldCheck } from "lucide-react";

export default function HeroVisual() {
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
