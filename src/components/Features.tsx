import React from "react";

import { StickyNote, Lock, Sparkles, Command, Cloud } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: <StickyNote />,
      title: "Instant Notes",
      description: "Write and access notes in seconds from your menu bar.",
    },
    {
      icon: <Lock />,
      title: "Secure by Design",
      description: "Lock your notes with a password or Touch ID.",
    },
    {
      icon: <Sparkles />,
      title: "Clean & Minimal",
      description: "A distraction-free interface that stays out of your way.",
    },
    {
      icon: <Command />,
      title: "Keyboard Friendly",
      description: "Navigate and manage notes using simple shortcuts.",
    },
    {
      icon: <Cloud />,
      title: "Always Available",
      description: "Your notes are ready whenever inspiration strikes.",
    },
  ];

  return (
    <section
      id="features"
      className="relative bg-[#0f1f2e] py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c] via-[#0f1f2e] to-[#0a1420] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-tight">
            Why DropNote?
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Everything you need, nothing you don't.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-gray-800 bg-[#1a3a5c] bg-opacity-20 backdrop-blur-sm
                hover:border-gray-700 hover:bg-opacity-30 transition-all duration-300
                flex flex-col items-start"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Icon */}
              <div className="text-3xl text-[#355d8e] mb-4 font-light group-hover:scale-110 hover:translate-y-0.5 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-medium text-base mb-2 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm font-normal leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
