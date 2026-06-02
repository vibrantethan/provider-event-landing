import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Partner with Vibrant Wellness — Provider Network",
  description: "Join 1,000+ integrative and functional providers who rely on Vibrant Wellness for 12+ specialty lab panels — gut, hormone, cardio, neural, toxin, immune health, and more. CLIA-certified, CAP-accredited.",
  icons: {
    icon: "/assets/vw-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
