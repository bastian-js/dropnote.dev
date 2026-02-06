import React from "react";
import { Link } from "react-router-dom";
import { Github, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a1420] overflow-hidden">
      {/* Top border with gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#355d8e]/50 to-transparent" />

      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* Main content */}
        <div className="flex flex-col items-center justify-center gap-8 mb-12">
          {/* Credits */}
          <div className="text-center">
            {/* Textzeile */}
            <p className="mb-4 text-gray-400 text-sm font-light inline-flex items-center gap-2">
              <span>Crafted with</span>
              <Heart className="w-5 h-5 text-[#355d8e] fill-[#355d8e] animate-pulse" />
              <span>by</span>
            </p>

            {/* GitHub Button */}
            <div className="flex justify-center">
              <Link
                to="https://github.com/bastian-js"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 relative"
              >
                {/* Glow */}
                <div className="absolute -inset-3 bg-gradient-to-r from-[#355d8e]/20 to-[#1a3a5c]/20 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />

                {/* Content */}
                <div className="relative flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-800/50 group-hover:border-[#355d8e]/50 transition-all duration-300">
                  <Github className="w-5 h-5 text-[#355d8e] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-white font-semibold group-hover:text-[#355d8e] transition-colors duration-300">
                    bastian-js
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Social / Links section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500">
            <a
              href="https://github.com/bastian-js/dropnote"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-all duration-300 hover:text-[#355d8e]"
            >
              <span className="relative">
                GitHub
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#355d8e] group-hover:w-full transition-all duration-300" />
              </span>
            </a>
            <span className="hidden sm:inline text-gray-700">•</span>
            <a
              href="https://github.com/bastian-js"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-all duration-300 hover:text-[#355d8e]"
            >
              <span className="relative">
                More Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#355d8e] group-hover:w-full transition-all duration-300" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800/50 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-xs font-light tracking-wide">
            © {currentYear} DropNote. All rights reserved. Built with SwiftUI
            for macOS.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#355d8e]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1a3a5c]/5 rounded-full blur-3xl pointer-events-none -z-10" />
    </footer>
  );
};
