import React from "react";
import { Github, Download, Zap, Lock } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#07101c] flex items-center overflow-hidden pt-16">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4d7ef5]/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1e3d6e]/20 rounded-full blur-3xl pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left — Text */}
          <div className="flex flex-col items-start animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1c3350] bg-[#0d1a2b] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4d7ef5] animate-pulse" />
              <span className="text-[#7a9bb8] text-xs font-medium tracking-wide">
                macOS Menu Bar App · v2.6
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Drop your notes,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d7ef5] to-[#7eb4ff]">
                access them
              </span>
              <br />
              instantly.
            </h1>

            <p className="text-[#7a9bb8] text-lg leading-relaxed mb-10 max-w-lg">
              A minimalist notes app that lives in your macOS menu bar. Fast,
              focused, and always one click away — never lose a thought again.
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-md">
              <a
                href="https://apps.apple.com/app/dropnote-quick-notes/id6761221463?mt=12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#4d7ef5] hover:bg-[#5d8ef7] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#4d7ef5]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-5 h-5" />
                App Store
              </a>

              <a
                href="https://github.com/bastian-js/dropnote/releases/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 border border-[#1c3350] hover:border-[#2a4a6a] bg-[#0d1a2b]/50 hover:bg-[#0d1a2b] text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-5 h-5 text-[#7a9bb8]" />
                GitHub
              </a>

              <a
                href="https://github.com/bastian-js/dropnote"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 inline-flex items-center justify-center gap-2.5 px-5 py-3 border border-[#1c3350] hover:border-[#2a4a6a] bg-transparent hover:bg-[#0d1a2b]/50 text-[#7a9bb8] hover:text-white font-medium rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] text-sm"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>

            <p className="mt-6 text-[#3a5a78] text-sm">
              Free · Open Source · macOS 10.15+
            </p>
          </div>

          {/* Right — App Screenshot */}
          <div
            className="flex justify-center lg:justify-end"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 -m-8 bg-gradient-to-r from-[#4d7ef5]/20 via-[#1e3d6e]/30 to-[#4d7ef5]/20 rounded-3xl blur-3xl" />

              {/* Floating image */}
              <div className="relative animate-float">
                <div className="relative rounded-2xl overflow-hidden border border-[#1c3350]/80 shadow-2xl shadow-black/60">
                  <img
                    src="/images/app-screenshot.png"
                    alt="DropNote App"
                    className="w-full max-w-[280px] md:max-w-[320px] h-auto block -mt-3"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101c]/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating badge — top right */}
                <div className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 bg-[#0d1a2b]/90 backdrop-blur-md border border-[#1c3350] rounded-xl shadow-xl">
                  <Zap className="w-4 h-4 text-[#4d7ef5]" />
                  <div>
                    <p className="text-white text-xs font-semibold leading-none">
                      Instant access
                    </p>
                    <p className="text-[#7a9bb8] text-xs leading-none mt-0.5">
                      Menu bar ready
                    </p>
                  </div>
                </div>

                {/* Floating badge — bottom left */}
                <div className="absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-2 bg-[#0d1a2b]/90 backdrop-blur-md border border-[#1c3350] rounded-xl shadow-xl">
                  <Lock className="w-4 h-4 text-[#4d7ef5]" />
                  <div>
                    <p className="text-white text-xs font-semibold leading-none">
                      Touch ID
                    </p>
                    <p className="text-[#7a9bb8] text-xs leading-none mt-0.5">
                      Secure by design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
