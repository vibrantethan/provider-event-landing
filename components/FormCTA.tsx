"use client";

import Image from "next/image";

interface FormCTAProps {
  onJump: (e: React.MouseEvent, id: string) => void;
}

const BENEFITS = [
  "Access 12+ specialty panels from a single CLIA-certified lab",
  "Direct-to-patient kits — no draw site required",
  "Clinical decision support from our credentialed team",
  "Dedicated account management and provider resources",
  "Fast 7–14 day turnaround without compromising accuracy",
];

export default function FormCTA({ onJump }: FormCTAProps) {
  return (
    <section className="section slate" id="cta">
      <div className="section-inner">
        <div className="formcta-wrap">
          <div className="formcta-card">
            <span className="eyebrow" style={{ color: "var(--vw-teal-soft)" }}>Ready to get started?</span>
            <h3>Bring precision testing to your practice.</h3>
            <p>Join a national network of integrative and functional providers using Vibrant Wellness to uncover root causes and build personalized treatment plans that actually work.</p>
            <ul className="formcta-benefits">
              {BENEFITS.map((b) => (
                <li key={b}>
                  <span className="formcta-check">
                    <svg width="10" height="8" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5l3.5 3.5L11 1" stroke="#5dbec6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <button className="btn-formcta" onClick={(e) => onJump(e, "form")}>
              Become a Provider
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="formcta-visual">
            <Image
              src="/assets/vw-unboxing.jpg"
              alt="Vibrant Wellness specimen collection kit"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
