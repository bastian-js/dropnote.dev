import React from "react";

import { Navbar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { AppShowcase } from "../components/AppShowcase";

export default function Home() {
  return (
    <div className="bg-[#0f1f2e] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <AppShowcase />
      <Footer />
    </div>
  );
}
