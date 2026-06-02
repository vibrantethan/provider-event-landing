"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Panels from "@/components/Panels";
import Credentials from "@/components/Credentials";
import Testimonials from "@/components/Testimonials";
import FormCTA from "@/components/FormCTA";
import Footer from "@/components/Footer";

export default function Page() {
  const jump = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <Nav onJump={jump} />
      <Hero onJump={jump} />
      <About />
      <Panels onJump={jump} />
      <section className="photo-strip" style={{ backgroundImage: "url('/assets/kit-flatlay.jpg')" }} />
<Credentials />
      <Testimonials />
      <FormCTA onJump={jump} />
      <Footer />
    </>
  );
}
