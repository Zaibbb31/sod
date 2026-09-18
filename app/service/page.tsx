"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import TilesBackground from "../components/tiles-bg";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "kitchen",
    title: "Kitchen Renovations",
    description:
      "Modern, functional kitchens designed around daily living and lasting quality. From custom cabinetry and premium stone surfaces to integrated appliances, we balance culinary workflow with refined elegance.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "bathroom",
    title: "Bathroom Fit-Outs",
    description:
      "Spa-inspired sanctuaries combining monolithic stone, bespoke brassware, and ambient illumination. We craft tranquil bathrooms that elevate everyday wellness rituals into timeless experiences.",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "loft",
    title: "Loft Conversions",
    description:
      "Transform unutilized attic volumes into light-filled master suites, private creative studios, or libraries. Seamless architectural staircases and panoramic dormers maximize every square foot.",
    image:
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "full-home",
    title: "Full Home Renovations",
    description:
      "End-to-end spatial transformations for period properties and modern residences alike. We handle structural reconfigurations, MEP upgrades, and bespoke finishes with uncompromising attention to detail.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "extensions",
    title: "Architectural Planning & Extensions",
    description:
      "Thoughtful architectural extensions that harmonize contemporary volumes with existing character. We navigate planning permissions, structural engineering, and seamless glass facades effortlessly.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "joinery",
    title: "Bespoke Joinery & Millwork",
    description:
      "Handcrafted architectural cabinetry, fluted wall paneling, and tailored storage solutions. Every piece is fabricated from premium sustainable timbers to fit your interior proportions flawlessly.",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function ServicesPage() {
  const [openServiceId, setOpenServiceId] = useState<string | null>("kitchen");

  const toggleService = (id: string) => {
    setOpenServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar theme="dark" />

      {/* Main Content with Tiles Background */}
      <TilesBackground className="flex-1 pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28">
        <main className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          {/* Header Section */}
          <div className="pb-12 sm:pb-16 lg:pb-20">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-500 uppercase mb-3 sm:mb-4">
              Our services
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-zinc-950 leading-[1.08]">
                  Built on craftsmanship, clarity, and care.
                </h1>
              </div>

              <div className="lg:col-span-4 lg:pt-3">
                <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-sm">
                  Choose the right solution for your home, property, or
                  development project.
                </p>
              </div>
            </div>
          </div>

          {/* Expandable Accordion Services List */}
          <div className="border-b border-zinc-300/90">
            {servicesList.map((service) => {
              const isOpen = openServiceId === service.id;

              return (
                <div
                  key={service.id}
                  className="border-t border-zinc-300/90 transition-colors duration-300"
                >
                  {/* Service Header Row (Always Accessible Trigger) */}
                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className="w-full py-7 sm:py-9 flex items-center justify-between gap-6 text-left group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 group-hover:text-black transition-colors duration-200">
                      {service.title}
                    </h2>

                    {/* Smooth Rotating Toggle Icon (+ to ✕) */}
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 text-3xl sm:text-4xl font-light text-zinc-600 group-hover:text-zinc-900 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex-shrink-0 leading-none ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Smooth Collapsible Drawer using CSS Grid */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-8 sm:pb-10"
                        : "grid-rows-[0fr] opacity-0 pb-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* Panoramic Banner Image (Non-rounded as requested) */}
                      <div className="relative w-full aspect-[16/8] sm:aspect-[21/9] overflow-hidden bg-zinc-200 shadow-sm rounded-none">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1200px) 100vw, 1400px"
                          priority={isOpen}
                          className="object-cover object-center rounded-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-102"
                        />
                      </div>

                      {/* 2-3 Lines Description Paragraph */}
                      <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl mt-5 sm:mt-6">
                        {service.description}
                      </p>

                      {/* CTA Button */}
                      <div className="mt-5 sm:mt-7">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#18181b] hover:bg-black text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
                        >
                          <span>Get In Touch</span>
                          <span className="text-sm">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </TilesBackground>

      {/* Footer */}
      <Footer />
    </div>
  );
}
