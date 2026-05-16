import React from "react";

const stats = [
  { value: "v2.6", label: "Current release" },
  { value: "SwiftUI", label: "Built with" },
  { value: "macOS 10.15+", label: "Compatible" },
  { value: "Free", label: "Always" },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#07101c] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1c3350] bg-[#0d1a2b] mb-5">
              <span className="text-[#4d7ef5] text-xs font-semibold tracking-widest uppercase">
                About
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Built for focus,
              <br />
              <span className="text-[#7a9bb8] font-normal">not friction.</span>
            </h2>
            <p className="text-[#7a9bb8] text-lg leading-relaxed">
              DropNote lives in your macOS menu bar and gives you instant access
              to your notes and todos without opening a full app or breaking
              your focus. It's lightweight, native, and fast — designed to
              capture thoughts quickly and get out of your way.
            </p>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-[#1c3350] bg-[#0d1a2b] p-6 hover:border-[#2a4a6a] transition-all duration-200 hover:bg-[#111f30]"
              >
                <p className="text-3xl font-bold text-white mb-1">{value}</p>
                <p className="text-[#7a9bb8] text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
