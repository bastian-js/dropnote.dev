import React from "react";

type Props = {
  imageUrl?: string;
  imageAlt?: string;
};

export const AppShowcase: React.FC<Props> = ({
  imageUrl = "/images/app-screenshot.png",
  imageAlt = "DropNote App Screenshot",
}) => {
  return (
    <section className="relative bg-[#0a1420] py-8 md:py-16 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c] via-[#0a1420] to-[#0f1f2e] opacity-20 pointer-events-none" />

      <div className="relative z-10 flex justify-center items-center min-h-[600px]">
        {/* Image Container with animations */}
        <div className="relative group w-full max-w-sm">
          {/* Glow effect background */}
          <div className="absolute -inset-6 bg-gradient-to-r from-[#355d8e] via-[#1a3a5c] to-[#355d8e] rounded-3xl blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-700" />

          {/* Main image - optimized for 636x960 */}
          <div className="relative rounded-3xl overflow-hidden border border-gray-800/50 group-hover:border-[#355d8e]/60 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_60px_rgba(53,93,142,0.4)]">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 aspect-[636/960]"
            />

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1420]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Top decorative glow */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#355d8e]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#355d8e]/10 transition-all duration-700" />

          {/* Bottom decorative glow */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#1a3a5c]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#1a3a5c]/10 transition-all duration-700" />
        </div>
      </div>

      {/* Caption */}
      <div className="relative z-10 text-center mt-6">
        <p className="text-gray-400 text-sm font-light">
          Built with SwiftUI • Optimized for macOS
        </p>
      </div>
    </section>
  );
};
