import React from "react";

export const About: React.FC = () => {
  return (
    <section className="relative bg-[#0f1f2e] py-8 md:py-16 px-3 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a5c] via-[#0f1f2e] to-[#0a1420] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
          What is DropNote?
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#5ba7ff] font-light mb-8">
          A fast, native macOS menu bar app for frictionless note-taking.
        </p>

        {/* Main Text */}
        <p className="text-base md:text-lg text-gray-300 font-normal leading-relaxed mb-8">
          DropNote is a lightweight notes app designed to stay out of your way.
          It lives in the macOS menu bar and gives you instant access to your
          notes without opening a full app or breaking your focus. Built with
          SwiftUI, DropNote feels fast, native, and reliable, making it ideal
          for quick thoughts, todos, and temporary notes during daily work.
        </p>
      </div>
    </section>
  );
};
