import { Github } from "lucide-react";
import React, { useState } from "react";
import { DownloadButton } from "./DownloadButton";
import { useIsMacOS } from "../hooks/useIsMacOS";

export const Hero: React.FC = () => {
  const [, setShowInfo] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#0f1f2e] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a5c] via-[#0f1f2e] to-[#0a1420] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 leading-tight tracking-tight">
          Drop your notes,
          <br />
          <span className="text-[#355d8e]">Access them instantly.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          A minimalist menu bar notes app for macOS. Fast, focused, always one
          click away.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <DownloadButton onUnavailableClick={() => setShowInfo(true)} />

          <a
            href="https://github.com/bastian-js/dropnote"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-8 py-3
              border border-gray-600
              text-white text-base font-medium
              rounded-lg
              transition-all duration-200 ease-out
              hover:border-gray-400 hover:scale-[1.02] hover:shadow-lg
              active:scale-95
            "
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">Version 1.3 • macOS</p>
      </div>
    </section>
  );
};
