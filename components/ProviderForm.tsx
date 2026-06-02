import Script from "next/script";

export default function ProviderForm() {
  return (
    <div className="form-card" id="form">
      <div className="form-card-bar" />
      <div className="form-card-head">
        <h3>Join the Vibrant Provider Network</h3>
        <p className="sub">Fill out the form and our team will reach out.</p>
      </div>
      <Script src="https://js.hsforms.net/forms/embed/22446299.js" strategy="lazyOnload" />
      <div
        className="hs-form-frame"
        data-region="na1"
        data-form-id="3108560c-85e9-49bc-95b8-2c01c051e749"
        data-portal-id="22446299"
      />
    </div>
  );
}
