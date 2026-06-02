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
            Become a <span className="accent">Vibrant</span> Provider Today
          </h1>
          <p className="hero-sub">
            Vibrant Wellness gives integrative and functional providers access to 12 advanced specialty panels — covering cardiovascular, gut, hormone, neural, cellular, toxin, immune health, and more — all run in a single CLIA-certified, CAP-accredited lab. One platform. Actionable reports. Real clinical support.
          </p>
        </div>
        <div className="hero-form-wrap">
          <ProviderForm />
        </div>
      </div>
    </section>
  );
}
