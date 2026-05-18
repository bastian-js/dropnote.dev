import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Github, Menu, X, Download, ExternalLink } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#4d7ef5] hover:bg-[#5d8ef7] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#4d7ef5]/30"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </button>
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
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:px-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Card */}
          <div className="relative w-full sm:max-w-sm rounded-t-3xl sm:rounded-2xl bg-[#0a1628] border border-[#1c3350] shadow-2xl shadow-black/60 overflow-hidden">
            {/* Glow top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#4d7ef5]/60 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-5">
              <div className="flex items-center gap-3">
                <img
                  src="/images/icon.png"
                  alt="DropNote"
                  className="w-10 h-10 rounded-xl shadow-lg shadow-[#4d7ef5]/20"
                />
                <div>
                  <p className="text-white text-sm font-semibold leading-none">DropNote</p>
                  <p className="text-[#4a6a8a] text-xs mt-1 leading-none">macOS Menu Bar App</p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-xl text-[#4a6a8a] hover:text-white hover:bg-[#111f30] transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#1c3350] mx-6" />

            {/* Options */}
            <div className="p-4 space-y-2.5">
              {/* App Store — primary */}
              <a
                href="https://apps.apple.com/app/dropnote-quick-notes/id6761221463?mt=12"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-4 w-full rounded-xl px-4 py-4 bg-[#4d7ef5] hover:bg-[#5a8bf7] transition-all duration-200 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#4d7ef5] to-[#6b9bff] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="relative flex items-center gap-4 w-full">
                  <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <Download className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white text-sm font-semibold leading-none">App Store</p>
                    <p className="text-[#c5d8ff] text-xs mt-1 leading-none">Available now · macOS</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/70 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
                </div>
              </a>

              {/* GitHub — secondary */}
              <a
                href="https://github.com/bastian-js/dropnote/releases/tag/v2.6.0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full rounded-xl px-4 py-4 bg-[#0d1a2b] hover:bg-[#111f30] border border-[#1c3350] hover:border-[#2a4060] transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#1c3350] flex items-center justify-center shrink-0">
                  <Github className="w-4 h-4 text-[#7a9bb8]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-white text-sm font-medium leading-none">GitHub Release</p>
                  <p className="text-[#4a6a8a] text-xs mt-1 leading-none">v2.6.0 · Direct download</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#4a6a8a] group-hover:translate-x-0.5 group-hover:text-[#7a9bb8] transition-all" />
              </a>
            </div>

            {/* Footer note */}
            <p className="text-center text-[#2d4a62] text-xs pb-5 px-6">
              Free · Open Source · macOS 10.15+
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};
