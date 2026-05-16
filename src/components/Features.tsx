import React from "react";
import { StickyNote, Lock, Sparkles, Command, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    label: "Speed",
    title: "Instant Access",
    description:
      "Open and dismiss DropNote in under a second. Always one click away from your menu bar — no app switching needed.",
    accent: "#4d7ef5",
    bg: "from-[#4d7ef5]/10 to-transparent",
    border: "border-[#4d7ef5]/20 hover:border-[#4d7ef5]/40",
    span: "lg:col-span-2",
  },
  {
    icon: Lock,
    label: "Security",
    title: "Secure by Design",
    description:
      "Lock notes with Touch ID or a password. Your data stays private.",
    accent: "#34d399",
    bg: "from-[#34d399]/10 to-transparent",
    border: "border-[#34d399]/20 hover:border-[#34d399]/40",
    span: "lg:col-span-2",
  },
  {
    icon: Sparkles,
    label: "Design",
    title: "Clean & Minimal",
    description:
      "A distraction-free interface that stays out of your way.",
    accent: "#a78bfa",
    bg: "from-[#a78bfa]/10 to-transparent",
    border: "border-[#a78bfa]/20 hover:border-[#a78bfa]/40",
    span: "lg:col-span-2",
  },
  {
    icon: Command,
    label: "Shortcuts",
    title: "Keyboard Friendly",
    description:
      "Navigate your notes and todos purely with the keyboard. Power-user shortcuts built in.",
    accent: "#f59e0b",
    bg: "from-[#f59e0b]/10 to-transparent",
    border: "border-[#f59e0b]/20 hover:border-[#f59e0b]/40",
    span: "lg:col-span-3",
  },
  {
    icon: StickyNote,
    label: "Notes & Todos",
    title: "Notes & Todos",
    description:
      "Seamlessly switch between free-form notes and structured todo lists — all in the same lightweight app.",
    accent: "#fb7185",
    bg: "from-[#fb7185]/10 to-transparent",
    border: "border-[#fb7185]/20 hover:border-[#fb7185]/40",
    span: "lg:col-span-3",
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative bg-[#07101c] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1c3350] bg-[#0d1a2b] mb-5">
            <span className="text-[#4d7ef5] text-xs font-semibold tracking-widest uppercase">
              Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Everything you need,
            <br />
            <span className="text-[#7a9bb8] font-normal">nothing you don't.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-2xl border ${feature.border} bg-[#0d1a2b] p-6 transition-all duration-300 hover:bg-[#111f30] overflow-hidden ${feature.span}`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Label */}
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-4 relative z-10"
                  style={{ color: feature.accent }}
                >
                  {feature.label}
                </p>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${feature.accent}18` }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: feature.accent }}
                  />
                </div>

                {/* Text */}
                <h3 className="text-white font-semibold text-lg mb-2 relative z-10 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[#7a9bb8] text-sm leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
