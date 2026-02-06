import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a1420]/80 backdrop-blur-xl border-b border-gray-800/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-0.5 group cursor-pointer transition-transform duration-300 hover:scale-105">
          <img
            src="/images/icon.png"
            alt="DropNote Logo"
            className="w-10 h-10"
          />

          <span className="text-white font-semibold text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            DropNote
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#features"
            className="relative text-gray-300 text-base font-medium transition-colors duration-300 hover:text-white group"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#355d8e] to-transparent group-hover:w-full transition-all duration-300" />
          </a>

          <Link
            to="https://github.com/bastian-js/dropnote"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 font-medium transition-all duration-300 group overflow-hidden"
          >
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#355d8e]/20 to-[#1a3a5c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

            {/* Border animation */}
            <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-[#355d8e]/50 transition-all duration-300" />

            <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              GitHub
              <Github className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            </span>
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-300" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a1420]/95 backdrop-blur-xl border-b border-gray-800/50 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-4 p-6">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <Link
              to="https://github.com/bastian-js/dropnote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              GitHub
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
