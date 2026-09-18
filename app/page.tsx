"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/nav";
import TilesBackground from "./components/tiles-bg";
import DraggableGallery from "./components/draggable-gallery";
import Footer from "./components/footer";

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
  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    emailAddress: "",
    projectType: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: "",
        contactNumber: "",
        emailAddress: "",
        projectType: "",
        message: "",
      });
    }, 4000);
  };

  const statsData = [
    { label: "Clients served", target: 150, suffix: "+", decimals: 0 },
    { label: "Average rating", target: 4.9, suffix: "", decimals: 1 },
    { label: "Projects completed", target: 200, suffix: "+", decimals: 0 },
    { label: "Years of experience", target: 10, suffix: "+", decimals: 0 },
    { label: "Awards won", target: 12, suffix: "", decimals: 0 },
  ];

  const servicesData = [
    {
      id: 1,
      title: "Residential Interiors",
      description:
        "Designing warm, refined homes that reflect your lifestyle — through thoughtful layouts, natural materials, and timeless details.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Residential Interiors",
      description:
        "Designing warm, refined homes that reflect your lifestyle — through thoughtful layouts, natural materials, and timeless details.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Residential Interiors",
      description:
        "Designing warm, refined homes that reflect your lifestyle — through thoughtful layouts, natural materials, and timeless details.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Residential Interiors",
      description:
        "Designing warm, refined homes that reflect your lifestyle — through thoughtful layouts, natural materials, and timeless details.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Residential Interiors",
      description:
        "Designing warm, refined homes that reflect your lifestyle — through thoughtful layouts, natural materials, and timeless details.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Residential Interiors",
      description:
        "Designing warm, refined homes that reflect your lifestyle — through thoughtful layouts, natural materials, and timeless details.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FFFFFF] font-sans selection:bg-black selection:text-white relative">
      {/* Global Top / Floating Scrolled Navbar (Z-[9999] above all sections) */}
      <Navbar />

      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="relative min-h-screen h-screen flex flex-col justify-end overflow-hidden bg-black text-white">
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

      {/* ----------------- 2. ABOUT US SECTION WITH TILES BACKGROUND ----------------- */}
      <TilesBackground
        id="about"
        className="flex items-center justify-center py-16 sm:py-24 lg:py-28 text-zinc-900"
        tileSize={380}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 w-full text-center relative">
          <div className="w-full flex flex-col items-center justify-center">
            {/* Header Tag */}
            <p className="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-5 sm:mb-7">
              About Us
            </p>

            {/* Main Statement */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-zinc-900 leading-[1.25] max-w-3xl mx-auto mb-14 sm:mb-20">
              We are an interior design studio creating warm, timeless spaces shaped by thoughtful details, natural materials, and functionality.
            </h2>

            {/* Stats Bar with Vertical Divider Lines & Animated Counter Numbers */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 border-t border-zinc-200/80 pt-10 sm:pt-12">
              {statsData.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center justify-center px-4 ${
                    idx !== statsData.length - 1 ? "lg:border-r lg:border-zinc-200/90" : ""
                  }`}
                >
                  <span className="text-xs sm:text-sm font-medium text-zinc-500 mb-2">
                    {stat.label}
                  </span>
                  <span className="text-4xl sm:text-5xl md:text-6xl font-semibold text-zinc-900 tracking-tight">
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      duration={1800}
                      trigger={true}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TilesBackground>

      {/* ----------------- 3. INSPIRATION BANNER SECTION ----------------- */}
      <section className="relative w-full min-h-[42vh] sm:min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-black text-white">
        {/* Background Image: Architectural Lighting Fixture */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=2560&q=85"
            alt="Illuminated Architectural Fluted Glass Pendant Lamp"
            fill
            sizes="100vw"
            unoptimized
            className="object-cover object-right sm:object-center w-full h-full opacity-95"
          />
          {/* Subtle gradient vignette to blend deep dark left area with the lighting on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[92px] xl:text-[104px] font-medium tracking-tight text-white uppercase leading-[0.98] drop-shadow-2xl">
              We design<br />
              spaces<br />
              that inspire
            </h2>
          </div>
        </div>
      </section>

      {/* ----------------- 4. 2D DRAGGABLE WORK GALLERY SECTION ----------------- */}
      <DraggableGallery />

      {/* ----------------- 5. WHAT WE DO / SERVICES SECTION (TILES BACKGROUND) ----------------- */}
      <TilesBackground
        id="services"
        className="py-24 sm:py-32 text-zinc-900"
        tileSize={380}
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
            {servicesData.map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-[#FFFFFF] border border-zinc-200/90 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-zinc-200 mb-5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Button */}
                <Link
                  href="/contact"
                  className="w-full py-3 bg-white text-zinc-900 border border-zinc-200/90 text-sm font-medium hover:bg-zinc-100 transition-colors text-center shadow-xs block"
                >
                  View More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </TilesBackground>

      {/* ----------------- 6. GET IN TOUCH / CONTACT FORM SECTION (FULL WIDTH END-TO-END) ----------------- */}
      <section id="contact" className="relative w-full min-h-[640px] flex items-center overflow-hidden">
        {/* Full Bleed End-to-End Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/cta.jpg"
            alt="Interior Architecture Studio Atmosphere"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center w-full h-full"
          />
        </div>

        {/* Inner Content Centered in Max-W-8xl */}
        <div className="relative z-10 w-full max-w-8xl mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description at Top Left */}
          <div className="lg:col-span-6 text-white space-y-4 sm:space-y-6 pt-1 lg:pt-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              Get in touch
            </h2>
            <p className="text-base sm:text-lg text-white/95 max-w-md leading-relaxed font-normal drop-shadow-sm">
              Let’s create a space you’ll love. Reach out and let’s design something extraordinary together.
            </p>
          </div>

          {/* Right Column: White Contact Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white p-6 sm:p-10 shadow-2xl w-full max-w-lg">
              <p className="text-sm sm:text-base font-normal text-zinc-700 mb-6 leading-relaxed">
                Leave us a message here, and we’ll reach out with personalised support.
              </p>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-sm text-center animate-in fade-in duration-300">
                  <p className="font-semibold text-base mb-1">Thank you for reaching out!</p>
                  <p className="text-sm text-emerald-700">We have received your message and will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#242424] text-white placeholder:text-zinc-300/80 px-4 py-3.5 sm:py-4 border-0 focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Contact Number"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className="w-full bg-[#242424] text-white placeholder:text-zinc-300/80 px-4 py-3.5 sm:py-4 border-0 focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className="w-full bg-[#242424] text-white placeholder:text-zinc-300/80 px-4 py-3.5 sm:py-4 border-0 focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Project Type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#242424] text-white placeholder:text-zinc-300/80 px-4 py-3.5 sm:py-4 border-0 focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell Us About Your Project"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#242424] text-white placeholder:text-zinc-300/80 px-4 py-3.5 sm:py-4 border-0 focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm sm:text-base resize-none"
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 bg-[#242424] text-white font-semibold text-sm sm:text-base hover:bg-[#181818] active:scale-[0.99] transition-all cursor-pointer shadow-md tracking-wider uppercase"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 7. FOOTER SECTION (TILES BACKGROUND) ----------------- */}
      <Footer />
    </div>
  );
}
