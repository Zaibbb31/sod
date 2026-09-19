"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/nav";
import DraggableGallery from "./components/draggable-gallery";
import CTASection from "./components/cta-section";
import Footer from "./components/footer";
import { allServices } from "./service/services-data";

// Smooth Counting Number Component (Counts from 0 up to target)
function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
  duration = 1800,
  trigger = true,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  trigger?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth cubic ease-out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * target;
      setCount(current);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [target, duration, trigger]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Home() {
  const statsData = [
    { target: 320, unit: "K", symbol: "+", label: "Area Developed" },
    { target: 95, unit: "", symbol: "%", label: "On-Time Delivery" },
    { target: 40, unit: "", symbol: "+", label: "Industry Experts" },
    { target: 12, unit: "", symbol: "y", label: "Years Guaranteed" },
  ];

  const servicesList = Object.values(allServices);

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FFFFFF] font-sans selection:bg-black selection:text-white relative">
      {/* Global Top / Floating Scrolled Navbar (Z-[9999] above all sections) */}
      <Navbar />

      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="relative min-h-screen h-screen flex flex-col justify-end overflow-hidden bg-black text-white no-reveal hero-immediate">
        {/* Background Hero Image (z-0 ensures it stays above the parent bg-black) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2560&q=85"
            alt="Modern Luxury Interior Design Studio"
            fill
            priority
            unoptimized
            className="object-cover object-center w-full h-full"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40 pointer-events-none" />
        </div>

        {/* Bottom Hero Content */}
        <main className="w-full px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14 lg:pb-16 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
            {/* Left Column: Category Tag & Main Headline */}
            <div className="max-w-3xl">
              {/* Tag / Studio Label with Angled Accent Line */}
              <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                <span className="w-4 h-[1.5px] bg-white/80 rotate-[-45deg] origin-center inline-block" />
                <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-white/90 uppercase">
                  <span className="font-accent text-lg sm:text-xl text-white/95 normal-case tracking-normal mr-1.5 font-normal">
                    Art of
                  </span>
                  Interior Design Studio
                </p>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-white leading-[1.08] drop-shadow-md">
                Crafting spaces<br />that feel like home
              </h1>
            </div>

            {/* Right Column: "Explore our work →" with bottom underline */}
            <div className="flex items-center lg:pb-3">
              <Link
                href="#about"
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-normal text-white border-b border-white pb-1 hover:text-white/80 hover:border-white/80 transition-all duration-200"
              >
                <span>Explore our work</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </main>
      </section>

      {/* ----------------- 2. ABOUT US SECTION ----------------- */}
      <section
        id="about"
        className="flex items-center justify-center py-16 sm:py-24 lg:py-28 text-zinc-900 bg-[#FFFFFF]"
      >
        <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 w-full text-center relative">
          <div className="w-full flex flex-col items-center justify-center">
            {/* Header Tag */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-5 sm:mb-7">
              About Us
            </p>

            {/* Main Statement with Parisienne Script Accent */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-zinc-900 leading-[1.3] max-w-4xl mx-auto mb-14 sm:mb-20">
              We are an interior design studio creating{" "}
              <span className="font-accent text-3xl sm:text-5xl md:text-6xl text-[#c4643b] normal-case px-1 font-normal inline-block">
                warm, timeless
              </span>{" "}
              spaces shaped by thoughtful details, natural materials, and functionality.
            </h2>

            {/* Stats Bar with 4 Figures & Symmetrical Centered Layout */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 pt-12 sm:pt-16 max-w-8xl mx-auto items-center justify-items-center">
              {statsData.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center text-center w-full"
                >
                  <div className="flex items-start justify-center font-normal tracking-tight leading-none mb-2 sm:mb-3">
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-normal tracking-tight text-zinc-950 leading-none">
                      <AnimatedCounter
                        target={stat.target}
                        duration={1800}
                        trigger={true}
                      />
                      {stat.unit}
                    </span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-[#c4643b] leading-none ml-1 sm:ml-1.5 -mt-1 sm:-mt-2 lg:-mt-2.5 select-none">
                      {stat.symbol}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-normal text-zinc-500 tracking-normal">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 3. INSPIRATION BANNER SECTION ----------------- */}
      <section className="relative w-full min-h-[180px] sm:min-h-[220px] lg:min-h-[260px] flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Background Image: Architectural Lighting Fixture */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=2560&q=85"
            alt="Illuminated Architectural Fluted Glass Pendant Lamp"
            fill
            sizes="100vw"
            unoptimized
            className="object-cover object-center w-full h-full opacity-95"
          />
          {/* Subtle gradient vignette to blend deep dark left area with the lighting on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none" />
        </div>

        {/* Text Content Centered */}
        <div className="relative z-10 w-full max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-14 flex items-center justify-center text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-medium tracking-tight text-white uppercase leading-none drop-shadow-2xl text-center whitespace-normal lg:whitespace-nowrap">
            We design spaces that inspire
          </h2>
        </div>
      </section>

      {/* ----------------- 4. 2D DRAGGABLE WORK GALLERY SECTION ----------------- */}
      <DraggableGallery />

      {/* ----------------- 5. WHAT WE DO / SERVICES SECTION ----------------- */}
      <section
        id="services"
        className="py-24 sm:py-32 text-zinc-900 bg-[#FFFFFF]"
      >
        <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section Header: Left Tag & Right Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-zinc-600 uppercase">
                What We Do
              </p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
                Thoughtful Interior Design, From Concept to Completion
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-4 max-w-2xl font-normal leading-relaxed">
                From the first idea to the final detail, we create refined spaces that balance beauty, comfort, and everyday functionality.
              </p>
            </div>
          </div>

          {/* 3-Column Services / Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((service) => (
              <div
                key={service.slug}
                className="group flex flex-col bg-[#FFFFFF] border border-zinc-200/90 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image Link */}
                <Link
                  href={`/service/${service.slug}`}
                  className="relative aspect-square w-full overflow-hidden bg-zinc-200 mb-5 block cursor-pointer"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight mb-2">
                  <Link
                    href={`/service/${service.slug}`}
                    className="hover:text-black transition-colors"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 flex-1">
                  {service.shortDescription}
                </p>

                {/* Button */}
                <Link
                  href={`/service/${service.slug}`}
                  className="w-full py-3 bg-white text-zinc-900 border border-zinc-200/90 text-sm font-medium hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all text-center shadow-xs block"
                >
                  View More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. GET IN TOUCH / CONTACT FORM SECTION (FULL WIDTH END-TO-END) ----------------- */}
      <CTASection />

      {/* ----------------- 7. FOOTER SECTION (TILES BACKGROUND) ----------------- */}
      <Footer />
    </div>
  );
}
