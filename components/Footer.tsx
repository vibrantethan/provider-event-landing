import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="https://vibrant-wellness.com" target="_blank" rel="noreferrer">
            <Image src="/assets/vw-logo.png" alt="Vibrant Wellness" width={140} height={38} />
          </a>
          <p>Advanced specialty lab testing for integrative and functional providers. CLIA-certified, CAP-accredited, run in Santa Clara, California.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Vibrant Wellness · <a href="https://vibrant-wellness.com/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></span>
        <span><a href="https://vibrant-wellness.com" target="_blank" rel="noreferrer">vibrant-wellness.com</a></span>
      </div>
    </footer>
  );
}
