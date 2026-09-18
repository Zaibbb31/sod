"use client";

import React, { useState, useEffect, useRef, use } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import { getProjectBySlug, allProjects, ProjectDetail } from "../projects-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectSlugPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const project: ProjectDetail = getProjectBySlug(slug);

  // Find next project in dictionary
  const projectKeys = Object.keys(allProjects);
  const currentIndex = projectKeys.indexOf(project.id);
  const nextKey =
    currentIndex !== -1 && currentIndex < projectKeys.length - 1
      ? projectKeys[currentIndex + 1]
      : projectKeys[0];
  const nextProject = allProjects[nextKey];

  // ---------------- CAROUSEL INTERACTIVE DRAG & AUTO-SCROLL LOGIC ----------------
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isInteractingRef = useRef(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll animation
  useEffect(() => {
    let animationFrameId: number;
    const speed = 0.6; // Subtle smooth drift speed

    const step = () => {
      if (carouselRef.current && !isInteractingRef.current) {
        const el = carouselRef.current;
        el.scrollLeft += speed;

        // Infinite loop wrap: if scrolled past halfway, loop back seamlessly
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 2) {
          el.scrollLeft = 1;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    isInteractingRef.current = true;
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 1200);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    isInteractingRef.current = true;
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Global Top Navbar */}
      <Navbar theme="light" />

      {/* ---------------- 1. HERO SECTION (FULL VIEWPORT WITH METADATA & STATEMENT) ---------------- */}
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white">
        {/* Background Hero Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            unoptimized
            className="object-cover object-center w-full h-full brightness-[0.88]"
          />
          {/* Subtle cinematic gradient overlay for high contrast readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/60 pointer-events-none" />
        </div>

        {/* Top 4-Column Metadata Section (Positioned below navbar) */}
        <div className="relative z-10 w-full max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 sm:pt-40 lg:pt-44">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 border-b border-white/20 pb-8 sm:pb-10">
            {/* Client */}
            <div>
              <span className="block text-xs sm:text-sm font-normal text-white/70 uppercase tracking-wider mb-1.5">
                Client
              </span>
              <span className="block text-sm sm:text-base md:text-lg font-medium text-white tracking-tight">
                {project.client}
              </span>
            </div>

            {/* Size */}
            <div>
              <span className="block text-xs sm:text-sm font-normal text-white/70 uppercase tracking-wider mb-1.5">
                Size
              </span>
              <span className="block text-sm sm:text-base md:text-lg font-medium text-white tracking-tight">
                {project.size}
              </span>
            </div>

            {/* Location */}
            <div>
              <span className="block text-xs sm:text-sm font-normal text-white/70 uppercase tracking-wider mb-1.5">
                Location
              </span>
              <span className="block text-sm sm:text-base md:text-lg font-medium text-white tracking-tight">
                {project.location}
              </span>
            </div>

            {/* Completed */}
            <div>
              <span className="block text-xs sm:text-sm font-normal text-white/70 uppercase tracking-wider mb-1.5">
                Completed
              </span>
              <span className="block text-sm sm:text-base md:text-lg font-medium text-white tracking-tight">
                {project.completed}
              </span>
            </div>
          </div>
        </div>

        {/* Center Editorial Quote Statement */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 my-auto py-16 sm:py-24 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-light text-white leading-[1.35] tracking-tight drop-shadow-md">
            <span className="font-normal">intr ® designed {project.title}</span>{" "}
            &mdash; {project.heroQuote}
          </p>
        </div>

        {/* Bottom spacer to balance hero layout */}
        <div className="relative z-10 pb-8 sm:pb-12 text-center">
          <span className="inline-block w-5 h-8 rounded-full border border-white/40 p-1 opacity-75 animate-bounce">
            <span className="block w-1 h-2 bg-white rounded-full mx-auto" />
          </span>
        </div>
      </section>

      {/* ---------------- 2. WHITE BACKGROUND CONTENT SPACE (PROCESS & NARRATIVE) ---------------- */}
      <section className="w-full bg-[#FFFFFF] py-20 sm:py-28 lg:py-36">
        <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Column: Process Steps List */}
            <div className="lg:col-span-4 space-y-6">
              <span className="block text-xs sm:text-sm font-semibold tracking-[0.25em] text-zinc-400 uppercase">
                Process
              </span>

              <ul className="space-y-2.5 sm:space-y-3">
                {project.process.map((step) => (
                  <li
                    key={step}
                    className="text-sm sm:text-base font-medium text-zinc-900 tracking-tight"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Large Editorial Statement & Deep Narrative */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal tracking-tight text-zinc-950 leading-[1.22] max-w-3xl">
                {project.mainHeadline}
              </h2>

              <div className="max-w-2xl space-y-5 text-sm sm:text-base text-zinc-700 font-normal leading-relaxed">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. HORIZONTAL DRAGGABLE & AUTO-MOVING CAROUSEL ---------------- */}
      <section className="w-full bg-[#FFFFFF] pb-24 sm:pb-32 overflow-hidden select-none relative">
        <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 mb-6 flex items-center justify-between">
          <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
            Spatial Journey
          </p>

          {/* Drag Pill Indicator */}
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-medium tracking-wider shadow-sm pointer-events-none">
            <span>&lsaquo;</span>
            <span>Drag</span>
            <span>&rsaquo;</span>
          </div>
        </div>

        {/* Draggable Carousel Container */}
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUpOrLeave}
          className={`flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-6 sm:px-10 lg:px-16 scroll-smooth ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Double slides list for seamless infinite feeling */}
          {[...project.carousel, ...project.carousel].map((slide, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[85vw] sm:w-[540px] md:w-[640px] lg:w-[720px] flex flex-col group"
            >
              {/* Image Card */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 shadow-sm">
                <Image
                  src={slide.image}
                  alt={slide.caption}
                  fill
                  sizes="(max-width: 768px) 85vw, 720px"
                  unoptimized
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>

              {/* Caption */}
              <p className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed mt-3.5 sm:mt-4 max-w-xl">
                {slide.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 4. BENTO GRID "SELECTED VIEWS" SECTION ---------------- */}
      <section className="w-full bg-[#FFFFFF] py-16 sm:py-24 border-t border-zinc-200/80">
        <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-zinc-950">
                Selected views
              </h3>
            </div>
            <div className="max-w-md">
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
                A collection of images documenting the completed interior,
                highlighting materiality, bespoke detailing, and the quality of
                the client-facing spaces.
              </p>
            </div>
          </div>

          {/* 2-Row Asymmetric Bento Grid with Ultra-Low Gaps */}
          <div className="space-y-2 sm:space-y-2.5">
            {/* Row 1: 1/3 Detail Crop + 2/3 Wide Panoramic */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-2.5 items-stretch">
              {/* Card 1 (1/3 Width) */}
              <div className="md:col-span-4 relative aspect-[4/3] md:aspect-auto md:min-h-[380px] overflow-hidden bg-zinc-100 shadow-xs group">
                <Image
                  src={project.bento[0]?.image || project.heroImage}
                  alt={project.bento[0]?.alt || "Detail view"}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>

              {/* Card 2 (2/3 Width Panoramic) */}
              <div className="md:col-span-8 relative aspect-[16/9] md:aspect-auto md:min-h-[380px] overflow-hidden bg-zinc-100 shadow-xs group">
                <Image
                  src={project.bento[1]?.image || project.heroImage}
                  alt={project.bento[1]?.alt || "Panoramic terrace view"}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
            </div>

            {/* Row 2: 3/5 Wide Bedroom + 2/5 Living Perspective */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-2.5 items-stretch">
              {/* Card 3 (3/5 Width) */}
              <div className="md:col-span-7 relative aspect-[16/10] md:aspect-auto md:min-h-[420px] overflow-hidden bg-zinc-100 shadow-xs group">
                <Image
                  src={project.bento[2]?.image || project.heroImage}
                  alt={project.bento[2]?.alt || "Bedroom interior view"}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>

              {/* Card 4 (2/5 Width) */}
              <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden bg-zinc-100 shadow-xs group">
                <Image
                  src={project.bento[3]?.image || project.heroImage}
                  alt={project.bento[3]?.alt || "Lounge perspective"}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 5. UP NEXT SECTION (2-COLUMN SHOWCASE) ---------------- */}
      <section className="w-full bg-[#FFFFFF] border-t border-zinc-200/80 py-20 sm:py-28">
        <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-8 mb-10 sm:mb-14">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-950">
                Up Next
              </h2>
            </div>
            <div className="max-w-sm sm:max-w-md sm:text-right">
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                More projects from our portfolio &mdash; each space a new story, a
                different client, a different vision brought to life.
              </p>
            </div>
          </div>

          {/* 2-Column Next Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {[
              allProjects[projectKeys[(currentIndex + 1) % projectKeys.length]],
              allProjects[projectKeys[(currentIndex + 2) % projectKeys.length]],
            ].map((nextProj) => (
              <Link
                key={nextProj.id}
                href={`/Project/${nextProj.id}`}
                className="group flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 shadow-sm">
                  <Image
                    src={nextProj.heroImage}
                    alt={nextProj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                    className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>

                {/* Bottom Row: Title on Left, Location on Right */}
                <div className="flex items-center justify-between mt-3.5 sm:mt-4 text-sm sm:text-base">
                  <h3 className="font-medium text-zinc-950 tracking-tight group-hover:text-zinc-600 transition-colors">
                    {nextProj.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-zinc-500 font-normal">
                    {nextProj.location}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 6. GLOBAL FOOTER ---------------- */}
      <Footer />
    </div>
  );
}
