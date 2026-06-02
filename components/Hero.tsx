"use client";

import ProviderForm from "./ProviderForm";

interface HeroProps {
  onJump: (e: React.MouseEvent, id: string) => void;
}

export default function Hero({ onJump }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="pulse" />
            Vibrant Wellness · Provider Network
          </div>
          <h1 className="hero-title">
            The lab infrastructure<br />
            your patients <span className="accent">deserve.</span>
          </h1>
          <p className="hero-sub">
            Vibrant Wellness gives integrative and functional providers access to 12 advanced specialty panels — covering cardiovascular, gut, hormone, neural, cellular, toxin, immune health, and more — all run in a single CLIA-certified, CAP-accredited lab. One platform. Actionable reports. Real clinical support.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">3M<sup>+</sup></div>
              <div className="lbl">Tests Run</div>
            </div>
            <div className="hero-stat">
              <div className="num">12<sup>+</sup></div>
              <div className="lbl">Specialty Panels</div>
            </div>
            <div className="hero-stat">
              <div className="num">100<sup>+</sup></div>
              <div className="lbl">Markers / Panel</div>
            </div>
            <div className="hero-stat">
              <div className="num">1,000<sup>+</sup></div>
              <div className="lbl">Active Providers</div>
            </div>
          </div>
        </div>
        <div className="hero-form-wrap">
          <ProviderForm />
        </div>
      </div>
    </section>
  );
}
