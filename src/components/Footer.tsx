import React from "react";
import { Link } from "react-router-dom";
import { Github, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#07101c] border-t border-[#1c3350]/50">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/icon.png"
                alt="DropNote"
                className="w-7 h-7 rounded-lg"
              />
              <span className="text-white font-semibold text-base tracking-tight">
                DropNote
              </span>
            </div>
            <p className="text-[#3a5a78] text-sm">
              Notes, right where you need them.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#7a9bb8]">
            <a
              href="https://github.com/bastian-js/dropnote"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy
            </Link>
            <a
              href="https://bbastian.dev/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              More Projects
            </a>
          </div>

          {/* Made by */}
          <a
            href="https://github.com/bastian-js"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-[#1c3350] hover:border-[#2a4a6a] bg-[#0d1a2b] hover:bg-[#111f30] transition-all duration-200"
          >
            <Github className="w-4 h-4 text-[#4d7ef5] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-[#7a9bb8] group-hover:text-white text-sm transition-colors duration-200">
              bastian-js
            </span>
            <Heart className="w-3.5 h-3.5 text-[#4d7ef5] fill-[#4d7ef5]" />
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-[#1c3350]/40 text-center">
          <p className="text-[#3a5a78] text-xs">
            © {currentYear} DropNote · Built with SwiftUI for macOS
          </p>
        </div>
      </div>
    </footer>
  );
};
