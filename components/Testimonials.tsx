const TESTIMONIALS = [
  {
    quote: "Using Vibrant testing has helped me identify the exact root cause driving chronic symptoms.",
    name: "Angela Pifer",
    title: "Clinician · 20 Years in Practice",
  },
  {
    quote: "I've been using Vibrant for almost 5 years and can't say enough good things.",
    name: "Lauren Fitzgerald, MD",
    title: "Medical Doctor",
  },
  {
    quote: "The best thing about Vibrant tests is the accuracy and consistency between tests.",
    name: "Sarah Urbanec",
    title: "Integrative Healthcare Provider",
  },
];

export default function Testimonials() {
  return (
    <section className="section tint" id="testimonials">
      <div className="section-inner">
        <span className="eyebrow">What Providers Say</span>
        <h2 className="section-title">Trusted by providers across the country.</h2>
        <p className="section-lede">Thousands of functional, integrative, and conventional providers rely on Vibrant Wellness to deliver the precision their patients need.</p>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-title">{t.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
