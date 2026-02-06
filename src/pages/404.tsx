import React from "react";
import { Navbar } from "../components/NavBar";

export default function NotFound() {
  return (
    <div className="bg-[#0f1f2e] min-h-screen overflow-x-hidden">
      <Navbar />
      <section className="relative min-h-screen bg-[#0f1f2e] flex items-center justify-center overflow-hidden pt-20">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a5c] via-[#0f1f2e] to-[#0a1420] opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <span className="text-9xl md:text-[150px] font-light text-[#355d8e] block leading-none">
              404
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 leading-tight tracking-tight">
            Page not found
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 font-light max-w-xl mx-auto leading-relaxed">
            The page you're looking for doesn't exist. It might have been moved
            or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/"
              className="px-8 py-3 bg-[#355d8e] text-white rounded-lg font-medium text-base
                hover:scale-[1.02] hover:shadow-lg transition-all duration-200 ease-out
                active:scale-95 inline-block"
            >
              Back to Home
            </a>
            <a
              href="https://github.com"
              className="px-8 py-3 bg-transparent border border-gray-600 text-white rounded-lg font-medium text-base
                hover:border-gray-400 hover:scale-[1.02] hover:shadow-lg transition-all duration-200 ease-out
                active:scale-95 inline-block"
            >
              View GitHub
            </a>
          </div>

          {/* Decorative element */}
          <div className="mt-20 flex justify-center">
            <div className="w-32 h-32 rounded-full border border-gray-800 bg-[#1a3a5c] bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-4xl">✕</span>
            </div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#355d8e] rounded-full opacity-20 animate-pulse" />
        <div
          className="absolute bottom-1/3 right-10 w-2 h-2 bg-[#355d8e] rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#355d8e] rounded-full opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </section>
    </div>
  );
}
