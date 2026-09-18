"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import TilesBackground from "../components/tiles-bg";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Top Navigation */}
      <Navbar theme="dark" />

      {/* Hero Section with Responsive Background Tiles */}
      <TilesBackground className="flex-1 pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 flex flex-col justify-between">
        <main className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex-1 flex flex-col justify-between">
          {/* Top Headline Section */}
          <div className="pt-4 sm:pt-6">
            {/* Tag Badge */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <span className="w-2 h-2 bg-zinc-900 rounded-[1px]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-zinc-800 uppercase">
                ABOUT US
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-normal tracking-tight text-[#242424] leading-[1.08] max-w-4xl">
              We&apos;ve reworked 300+ rooms into spaces people actually live in.
            </h1>
          </div>

          {/* Bottom Right Image & Editorial Note */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-end gap-6 sm:gap-8 mt-14 sm:mt-20 lg:mt-24 pt-6">
            {/* Modern Architecture Villa Image */}
            <div className="relative w-full sm:w-[380px] md:w-[440px] lg:w-[480px] aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-zinc-200">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Architectural modern villa with illuminated steps"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 440px, 480px"
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Caption Narrative */}
            <div className="max-w-[260px] pb-1">
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                Every project &mdash; staged, renovated, or redesigned, starts the
                same way. Understand the space, then work around it.
              </p>
            </div>
          </div>
        </main>
      </TilesBackground>

      {/* Footer */}
      <Footer />
    </div>
  );
}
