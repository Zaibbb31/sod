"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import TilesBackground from "../components/tiles-bg";

interface Project {
  id: string;
  title: string;
  client: string;
  type: string;
  category: "Residential" | "Commercial" | "Hospitality";
  image: string;
}

const projectsData: Project[] = [
  {
    id: "birchwood",
    title: "The Birchwood Residence",
    client: "The Whitfield Family",
    type: "Residential",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "kestrel",
    title: "Kestrel & Co Headquarters",
    client: "Kestrel & Co",
    type: "Commercial",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "marlowe",
    title: "Marlowe Coastal Retreat",
    client: "Marlowe Family",
    type: "Residential",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "sloane",
    title: "Sloane Square Penthouse",
    client: "Private Client",
    type: "Residential",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "aura",
    title: "Aura Wellness Sanctuary",
    client: "Aura Collective",
    type: "Commercial",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "kensington",
    title: "Kensington Villa & Garden",
    client: "Sterling Estate",
    type: "Residential",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "pavilion",
    title: "The Pavilion Studio",
    client: "Studio Arch Ltd",
    type: "Commercial",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "highland",
    title: "Highland Stone Residence",
    client: "The MacLeod Estate",
    type: "Residential",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "lumiere",
    title: "Lumière Boutique Atelier",
    client: "Maison Lumière",
    type: "Commercial",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Residential", "Commercial"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#e5e7eb] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar theme="dark" />

      {/* Main Content with Tiles Background */}
      <TilesBackground className="flex-1 pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28">
        <main className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          {/* Header Section: Title & Narrative */}
          <div className="pb-10 sm:pb-14">
            {/* Top Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal tracking-tight text-zinc-950 leading-[1.05] mb-8 sm:mb-12">
              Our projects
            </h1>

            {/* Subtle Divider Line */}
            <div className="w-full border-t border-zinc-300/80 mb-8 sm:mb-10" />

            {/* Subheader 2-Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
              <div className="md:col-span-3 lg:col-span-3">
                <p className="text-sm sm:text-base font-medium text-zinc-600 tracking-wide">
                  Human first
                </p>
              </div>
              <div className="md:col-span-9 lg:col-span-8">
                <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed">
                  We build for people who know the difference between a space
                  that looks curated and one that actually feels right. At
                  Interiia, every home begins where it should - with you. Your
                  routines, your values, your way of moving through the world.
                  The design follows from that. Always.
                </p>
              </div>
            </div>

            {/* Filter Buttons (Clean & Minimal) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-10 sm:mt-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "bg-white/80 hover:bg-white text-zinc-700 border border-zinc-200/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Projects Grid with 3:4 Aspect Ratio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group flex flex-col">
                {/* Image Container with 3:4 Aspect Ratio */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-200 shadow-sm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-medium tracking-tight text-zinc-900 mt-4 sm:mt-5 pb-3 border-b border-zinc-300/80">
                  {project.title}
                </h3>

                {/* Client & Type Row */}
                <div className="grid grid-cols-2 gap-4 pt-3 text-xs sm:text-sm">
                  <div>
                    <span className="block text-[11px] font-semibold tracking-wider text-zinc-400 uppercase mb-0.5">
                      Client
                    </span>
                    <span className="block text-zinc-900 font-normal">
                      {project.client}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold tracking-wider text-zinc-400 uppercase mb-0.5">
                      Type
                    </span>
                    <span className="block text-zinc-900 font-normal">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </TilesBackground>

      {/* Footer */}
      <Footer />
    </div>
  );
}
