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
          <div className="stats">
            <div className="stat">
              <div className="num">3M<sup>+</sup></div>
              <div className="lab">Tests Run</div>
              <div className="desc">Processed for patients across all 50 U.S. states.</div>
            </div>
            <div className="stat">
              <div className="num">12<sup>+</sup></div>
              <div className="lab">Specialty Panels</div>
              <div className="desc">Covering every major system — from gut to genome.</div>
            </div>
            <div className="stat">
              <div className="num">100<sup>+</sup></div>
              <div className="lab">Markers / Panel</div>
              <div className="desc">Delivered in one integrated, provider-ready report.</div>
            </div>
            <div className="stat">
              <div className="num">1,000<sup>+</sup></div>
              <div className="lab">Active Providers</div>
              <div className="desc">A growing network of trained, credentialed clinicians.</div>
            </div>
          </div>
        </div>
        <div className="about-photo" style={{ backgroundImage: "url('/assets/kit-lifestyle.jpg')" }} />
      </div>
    </section>
  );
}
