import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Github, Menu, X, Download } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07101c]/90 backdrop-blur-2xl border-b border-[#1c3350]/50 shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src="/images/icon.png"
            alt="DropNote"
            className="w-8 h-8 rounded-xl shadow-lg shadow-[#4d7ef5]/20"
          />
          <span className="text-white font-semibold text-lg tracking-tight">
            DropNote
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {[
            { href: "/#features", label: "Features" },
            { href: "/#screenshots", label: "Screenshots" },
            { href: "/#about", label: "About" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[#7a9bb8] text-sm font-medium hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/bastian-js/dropnote"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#7a9bb8] text-sm font-medium hover:text-white transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://github.com/bastian-js/dropnote/releases/tag/v2.6.0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#4d7ef5] hover:bg-[#5d8ef7] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#4d7ef5]/30"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#7a9bb8] hover:text-white transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07101c]/95 backdrop-blur-2xl border-b border-[#1c3350]/50">
          <div className="flex flex-col gap-1 p-4">
            {[
              { href: "/#features", label: "Features" },
              { href: "/#screenshots", label: "Screenshots" },
              { href: "/#about", label: "About" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-3 py-2.5 text-[#7a9bb8] hover:text-white hover:bg-[#111f30] rounded-lg transition-all text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="https://github.com/bastian-js/dropnote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 text-[#7a9bb8] hover:text-white hover:bg-[#111f30] rounded-lg transition-all text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://github.com/bastian-js/dropnote/releases/tag/v2.6.0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 px-3 py-2.5 bg-[#4d7ef5] text-white text-sm font-medium rounded-lg text-center"
            >
              Download for macOS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
