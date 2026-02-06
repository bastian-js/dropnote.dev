import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Github } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // CSS für smooth scrolling auf html element setzen
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-[#1a3a5c] to-transparent backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
            <img src="/images/icon.png" alt="DropNote Logo" />
          </div>
          <span className="text-white font-medium text-3xl">DropNote</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a
            href="#features"
            className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
          >
            Features
          </a>
          <Link
            to="https://github.com/bastian-js/dropnote"
            className="inline-flex items-center gap-2 text-gray-300 text-lg transition-colors duration-200 hover:text-white"
          >
            GitHub
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
