"use client";

import Image from "next/image";

interface PanelProps {
  onJump: (e: React.MouseEvent, id: string) => void;
}

const PANELS = [
  {
    id: "cardio",
    name: "Cardio Zoomer",
    blurb: "Goes beyond standard lipid panels to evaluate metabolic risk, endothelial function, ceramide levels, inflammation, and genetic cardiovascular drivers — giving providers a complete picture to personalize prevention.",
    tags: ["Lipid Profile", "Inflammation", "Genetics"],
    icon: "/assets/zoomers/cardio-zoomer.png",
  },
  {
    id: "gut",
    name: "Gut Zoomer",
    blurb: "The most comprehensive gut panel available — covering microbiome balance, pathogens, gut barrier integrity, inflammation, digestion, detox metabolites, and neurotransmitters in a single report.",
    tags: ["Microbiome", "Gut Barrier", "Neurotransmitters"],
    icon: "/assets/zoomers/gut-zoomer.png",
  },
  {
    id: "hormone",
    name: "Hormone Zoomer",
    blurb: "Measures sex and adrenal hormones, metabolites, ratios, and endocrine disruptors alongside bone turnover markers — giving providers the full hormonal and detoxification picture.",
    tags: ["Hormones", "Adrenal", "Detox Pathways"],
    icon: "/assets/zoomers/hormone-zoomer.png",
  },
  {
    id: "neural",
    name: "Neural Zoomer",
    blurb: "Identifies autoimmune reactivity against brain, myelin, peripheral nerve, and blood–brain barrier antigens — essential for complex neurological and cognitive presentations.",
    tags: ["Autoimmunity", "BBB Integrity", "Neuroinflammation"],
    icon: "/assets/zoomers/neural-zoomer.png",
  },
  {
    id: "cellular",
    name: "Cellular Zoomer",
    blurb: "Assesses energy metabolism, oxidative stress, detoxification capacity, microbial chemistry, neurochemistry, and nutrient utilization — pinpointing upstream drivers of fatigue and chronic illness.",
    tags: ["Mitochondria", "Oxidative Stress", "Detox"],
    icon: "/assets/zoomers/cellular-zoomer.png",
  },
  {
    id: "toxin",
    name: "Toxin Zoomer",
    blurb: "Screens for heavy metals, mycotoxins, PFAS, and environmental chemicals alongside detoxification capacity — enabling providers to quantify and address toxic burden systematically.",
    tags: ["Heavy Metals", "Mycotoxins", "PFAS"],
    icon: "/assets/zoomers/toxin-zoomer.png",
  },
  {
    id: "immune",
    name: "Immune Zoomer",
    blurb: "A whole-body immune evaluation spanning gut, neuro, musculoskeletal, vascular, and endocrine immunity — ideal for complex multi-system presentations and autoimmune workups.",
    tags: ["Autoimmunity", "Gut Immunity", "Neuroimmune"],
    icon: "/assets/zoomers/immune-zoomer.png",
  },
  {
    id: "food",
    name: "Food Zoomer",
    blurb: "Identifies immune reactivity to food proteins, peptides, and lectins across all major food groups — moving beyond IgE to capture the full spectrum of food-driven inflammation.",
    tags: ["Food Sensitivity", "IgG / IgA", "Lectins"],
    icon: "/assets/zoomers/food-zoomer.png",
  },
  {
    id: "nutrient",
    name: "Nutrient Zoomer",
    blurb: "Combines functional nutrient status with key genetic variants to reveal deficiencies in vitamins, minerals, amino acids, fatty acids, and metabolic cofactors driving patient symptoms.",
    tags: ["Vitamins", "Minerals", "Nutrigenomics"],
    icon: "/assets/zoomers/nutrient-zoomer.png",
  },
  {
    id: "foundation",
    name: "Foundation Zoomer",
    blurb: "A comprehensive baseline panel covering metabolic function, cardiovascular health, hormone balance, immune activity, nutritional status, and barrier integrity — the ideal first panel for new patients.",
    tags: ["Metabolic", "Hormones", "Immune"],
    icon: "/assets/zoomers/foundation-zoomer.png",
  },
  {
    id: "infections",
    name: "Infection Tests",
    blurb: "High-sensitivity pathogen panels detecting hidden tickborne diseases, opportunistic infections, and viral triggers that may underlie chronic fatigue, inflammation, and autoimmune presentations.",
    tags: ["Tickborne", "Opportunistic", "Viral"],
    icon: "/assets/zoomers/infections-test.png",
  },
  {
    id: "genetics",
    name: "Genetic Tests",
    blurb: "Identifies inherited variants affecting clotting (Factor II/V), methylation (MTHFR), cardiovascular risk (ApoE), and nutrient metabolism — enabling personalized, genotype-informed treatment strategies.",
    tags: ["MTHFR", "ApoE", "Nutrigenomics"],
    icon: "/assets/zoomers/genetics-test.png",
  },
];

export default function Panels({ onJump }: PanelProps) {
  return (
    <section className="section tint" id="panels">
      <div className="section-inner">
        <span className="eyebrow">Our Test Menu</span>
        <h2 className="section-title">12 specialty panels. One integrated platform.</h2>
        <p className="section-lede">Every Vibrant Zoomer combines dozens of related markers into a single, provider-ready report — so you spend less time ordering and more time acting on insight that actually moves the needle for your patients.</p>
        <div className="panels-grid">
          {PANELS.map((p) => (
            <div className="panel-card" key={p.id} onClick={(e) => onJump(e as unknown as React.MouseEvent, "form")}>
              <div className="panel-card-head">
                <h4>{p.name}</h4>
                <Image src={p.icon} alt={p.name} width={52} height={52} className="panel-icon" />
              </div>
              <p>{p.blurb}</p>
              <div className="panel-tags">
                {p.tags.map((t) => <span className="panel-tag" key={t}>{t}</span>)}
              </div>
              <span className="panel-more">
                Learn more
                <svg width="12" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
