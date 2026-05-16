import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/menubar_note.png",
    title: "Menu Bar — Notes",
    description:
      "Quick-drop a note from anywhere on your Mac, without switching apps.",
    cropTop: 10,
    cropLeft: 10,
  },
  {
    src: "/images/menubar_todo.png",
    title: "Menu Bar — Todos",
    description:
      "Check off tasks instantly from the menu bar. Stay in your flow.",
    cropTop: 10,
    cropLeft: 10,
  },
  {
    src: "/images/fullscreen_note.png",
    title: "Full Screen — Notes",
    description:
      "Expand into a focused, distraction-free writing mode when you need it.",
    cropTop: 0,
    cropLeft: 0,
  },
  {
    src: "/images/fullscreen_todo.png",
    title: "Full Screen — Todos",
    description:
      "Manage your entire to-do list in a clean, dedicated interface.",
    cropTop: 0,
    cropLeft: 0,
  },
  {
    src: "/images/search.png",
    title: "Quick Search",
    description: "Find any note in an instant with lightning-fast search.",
    cropTop: 0,
    cropLeft: 0,
  },
];

export const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  return (
    <section
      id="screenshots"
      className="relative bg-[#0a141f] py-24 px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#4d7ef5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1c3350] bg-[#0d1a2b] mb-5">
            <span className="text-[#4d7ef5] text-xs font-semibold tracking-widest uppercase">
              Screenshots
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            See it in action.
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Track container */}
          <div className="overflow-hidden rounded-2xl border border-[#1c3350]">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="carousel-slide">
                  <div className="relative bg-[#0d1a2b] aspect-video flex items-center justify-center p-4 md:p-8">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="max-h-[460px] w-auto object-contain rounded-xl shadow-2xl shadow-black/50 block"
                      style={
                        slide.cropTop || slide.cropLeft
                          ? {
                              clipPath: `inset(${slide.cropTop}px 0px 0px ${slide.cropLeft}px)`,
                            }
                          : undefined
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#0d1a2b]/90 border border-[#1c3350] flex items-center justify-center text-[#7a9bb8] hover:text-white hover:border-[#2a4a6a] transition-all duration-200 backdrop-blur-sm shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#0d1a2b]/90 border border-[#1c3350] flex items-center justify-center text-[#7a9bb8] hover:text-white hover:border-[#2a4a6a] transition-all duration-200 backdrop-blur-sm shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption + Dots */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Caption */}
          <div>
            <p className="text-white font-semibold text-base">
              {slides[current].title}
            </p>
            <p className="text-[#7a9bb8] text-sm mt-1">
              {slides[current].description}
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-[#4d7ef5]"
                    : "w-2 h-2 bg-[#1c3350] hover:bg-[#2a4a6a]"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
