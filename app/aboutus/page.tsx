"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import CTASection from "../components/cta-section";

// Smooth Counting Number Component
function AnimatedCounter({
  target,
  duration = 1800,
  trigger = true,
}: {
  target: number;
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

  return <span>{Math.floor(count)}</span>;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "ethan",
    name: "Ethan Carter",
    role: "Principal Architect",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "sophia",
    name: "Sophia Bennett",
    role: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "liam",
    name: "Liam Anderson",
    role: "Construction Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "olivia",
    name: "Olivia Turner",
    role: "Project Strategist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function AboutUsPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0]);

  const statsData = [
    { target: 320, unit: "K", symbol: "+", label: "Area Developed" },
    { target: 95, unit: "", symbol: "%", label: "On-Time Delivery" },
    { target: 40, unit: "", symbol: "+", label: "Industry Experts" },
    { target: 12, unit: "", symbol: "y", label: "Years Guaranteed" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar theme="dark" />

      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 w-full bg-[#FFFFFF]">
        <main className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          {/* Top Header Section */}
          <div className="pb-12 sm:pb-16 lg:pb-20">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-500 uppercase mb-3 sm:mb-4">
              About Us
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-zinc-950 leading-[1.08]">
                  We&apos;ve reworked 300+ rooms into spaces people actually live in.
                </h1>
              </div>

              <div className="lg:col-span-4 lg:pt-3">
                <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-sm mb-6">
                  Every project &mdash; staged, renovated, or redesigned, starts the same way. Understand the space, then work around it.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/Project"
                    className="px-6 py-3 bg-black text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-zinc-800 transition-colors shadow-xs"
                  >
                    Our Works
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-[#c4643b] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#b0552f] transition-colors inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Book A Call</span>
                    <span className="text-base leading-none">&nearr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Panoramic Image */}
          <div className="relative w-full aspect-[16/8] sm:aspect-[21/9] lg:aspect-[24/10] overflow-hidden bg-zinc-200 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=2560&q=85"
              alt="Illuminated Architectural Modern Studio Interior"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1600px"
              className="object-cover object-center"
            />
          </div>
        </main>
      </section>

      {/* ----------------- 2. PHILOSOPHY & STATS SECTION ----------------- */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] border-t border-zinc-100">
        <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          {/* Main Statement */}
          <div className="max-w-4xl mx-auto text-left sm:text-left mb-16 sm:mb-24 space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-normal leading-[1.35] text-zinc-900 tracking-tight">
              <span className="font-bold text-zinc-950">
                At Cerette, we believe architecture should create meaningful experiences while balancing functionality, aesthetics, and sustainability.
              </span>{" "}
              <span className="text-zinc-600 font-normal">
                Our team combines architectural creativity with technical expertise to deliver spaces designed for modern living and long-term performance.
              </span>
            </p>
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              From luxury residences to commercial developments and interior environments, every project is approached with careful planning, precision, and attention to detail. We focus on creating spaces that not only look exceptional but also improve how people live, work, and interact.
            </p>
          </div>

          {/* Symmetrical Centered Stats Row */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 pt-8 max-w-8xl mx-auto items-center justify-items-center">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center text-center w-full"
              >
                <div className="flex items-start justify-center font-normal tracking-tight leading-none mb-2 sm:mb-3">
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-normal tracking-tight text-zinc-950 leading-none">
                    <AnimatedCounter target={stat.target} duration={1800} trigger={true} />
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
      </section>

      {/* ----------------- 3. FOUNDER / CEO QUOTE BANNER ----------------- */}
      <section className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-center overflow-hidden bg-black text-white">
        {/* Background Atmosphere Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2560&q=85"
            alt="Cerette Luxury Living Room Architecture"
            fill
            sizes="100vw"
            unoptimized
            className="object-cover object-center w-full h-full opacity-65"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        {/* Quote Content with Left Accent Line */}
        <div className="relative z-10 w-full max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <div className="flex items-start gap-6 sm:gap-8 max-w-4xl">
            {/* White Quote Left Border Line */}
            <div className="w-[3px] self-stretch bg-white/70 flex-shrink-0" />

            <div className="space-y-6 sm:space-y-8">
              <blockquote className="text-lg sm:text-2xl md:text-3xl font-normal leading-relaxed text-white drop-shadow-md tracking-tight">
                &ldquo;Architecture is not only about building spaces, but about creating experiences that inspire people and endure for generations. At Cerette, every project is designed with purpose, precision, and timeless craftsmanship.&rdquo;
              </blockquote>

              {/* Founder Profile */}
              <div className="flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/40 bg-zinc-700 flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=85"
                    alt="Adrian Varell"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-white leading-tight">
                    Adrian Varell
                  </p>
                  <p className="text-xs text-white/75 font-normal">
                    Founder & CEO, Cerette
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 4. MISSION, VISION & PRINCIPLES SECTION ----------------- */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] border-t border-zinc-100">
        <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          {/* Header Title with Clean Standard Design */}
          <div className="mb-10 sm:mb-14 pb-6 border-b border-zinc-200/80">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
              Mission, Vision &amp; Principles
            </h2>
          </div>

          {/* 2x2 Alternating Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Top-Left: Image 1 */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-zinc-200 shadow-sm group">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85"
                alt="Organic modern architectural interior with sculpted curved walls"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
            </div>

            {/* Top-Right: Our Mission Card */}
            <div className="flex flex-col justify-center bg-[#FBF9F5] border border-zinc-200/60 p-8 sm:p-12 lg:p-14 aspect-[4/3] sm:aspect-[16/11]">
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-zinc-950 mb-4 sm:mb-6 leading-tight">
                Our Mission: Designing Timeless Spaces
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-lg">
                Our mission is to create timeless interiors that seamlessly blend beauty, functionality, and comfort. Through thoughtful design, refined craftsmanship, and close collaboration, we craft spaces that enrich everyday living.
              </p>
            </div>

            {/* Bottom-Left: Our Vision Card */}
            <div className="flex flex-col justify-center bg-[#FBF9F5] border border-zinc-200/60 p-8 sm:p-12 lg:p-14 aspect-[4/3] sm:aspect-[16/11] order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-zinc-950 mb-4 sm:mb-6 leading-tight">
                Our Vision: Shaping The Future Of Living
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-lg">
                Our vision is to redefine modern luxury through interiors that inspire, endure, and evolve with contemporary lifestyles. We strive to create spaces that balance innovation, elegance, and human-centered design while setting new standards.
              </p>
            </div>

            {/* Bottom-Right: Image 2 */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-zinc-200 shadow-sm group order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
                alt="Travertine stone vaulted architecture with warm lighting"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 5. INTERACTIVE TEAM SECTION ("MEET THE TEAM") ----------------- */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#FFFFFF]">
        <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          {/* Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-500 uppercase mb-3 sm:mb-4">
              Meet The Team
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.12] mb-5">
              The creative experts behind Cerette’s modern architecture
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-zinc-600 font-normal leading-relaxed">
              Meet the architects, designers, planners, and construction specialists who collaborate to create modern spaces through innovative thinking, technical expertise, and detail-focused execution.
            </p>
          </div>

          {/* Interactive 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Team Names & Roles */}
            <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
              {teamMembers.map((member) => {
                const isSelected = selectedMember.id === member.id;
                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    onMouseEnter={() => setSelectedMember(member)}
                    className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 text-left cursor-pointer focus:outline-none transition-all duration-300"
                  >
                    {/* Role Label */}
                    <span className="text-xs sm:text-sm font-medium text-zinc-500 sm:w-44 flex-shrink-0">
                      {member.role}
                    </span>

                    {/* Member Name */}
                    <span
                      className={`text-3xl sm:text-5xl md:text-6xl tracking-tight transition-colors duration-300 ${
                        isSelected
                          ? "font-bold text-zinc-950"
                          : "font-normal text-zinc-400 group-hover:text-zinc-700"
                      }`}
                    >
                      {member.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Person Image Display with Smooth Transition */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] bg-zinc-100 overflow-hidden shadow-lg">
                <Image
                  key={selectedMember.id}
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center animate-in fade-in zoom-in-95 duration-500"
                />

                {/* Subtle Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-white">
                  <p className="text-lg sm:text-xl font-bold tracking-tight">
                    {selectedMember.name}
                  </p>
                  <p className="text-xs sm:text-sm text-white/80">
                    {selectedMember.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 5. GET IN TOUCH CTA SECTION ----------------- */}
      <CTASection />

      {/* ----------------- 6. FOOTER ----------------- */}
      <Footer />
    </div>
  );
}
