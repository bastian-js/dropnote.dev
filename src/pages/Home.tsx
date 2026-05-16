import React from "react";

import { Navbar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Carousel } from "../components/Carousel";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#07101c] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Carousel />
      <About />
      <Footer />
    </div>
  );
}
