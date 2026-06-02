export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">About Vibrant Wellness</span>
            <h2 className="section-title">Modern patient care demands more than routine lab testing.</h2>
            <p>For over a decade, Vibrant Wellness has been the specialty lab of choice for functional and integrative providers who need answers that standard panels can&apos;t deliver. Our proprietary multiplex protein arrays, mass spectrometry, and next-generation sequencing run in a single accredited facility in Santa Clara, California — so you get consistent, provider-grade results every time.</p>
            <p>Where traditional labs offer dozens of markers, our Zoomer panels combine hundreds of related data points into integrated, systems-based reports. That means fewer tests to order, deeper insight per panel, and a clearer starting point for personalized treatment — not another page of &quot;within normal range.&quot;</p>
          </div>
          <div className="about-photo" style={{ backgroundImage: "url('/assets/kit-lifestyle.jpg')" }} />
        </div>
      </div>
    </section>
  );
}
