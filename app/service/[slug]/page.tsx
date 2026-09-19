"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import CTASection from "../../components/cta-section";
import { getServiceBySlug, ServiceDetail, allServices } from "../services-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceSlugPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const service: ServiceDetail = getServiceBySlug(slug);

  // Other services for explore/navigation
  const otherServices = Object.values(allServices).filter(
    (s) => s.slug !== service.slug
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Global Top Navbar */}
      <Navbar theme="dark" />

      {/* Main Service Content with Clean White Background */}
      <div className="flex-1 bg-[#FFFFFF] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
        <main className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          {/* Top Header Section */}
          <div className="pb-8 sm:pb-12 max-w-4xl">
            {/* Tag / Category Badge (e.g. ◉ SERVICE) */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-zinc-700">
                <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full" />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-zinc-600 uppercase">
                {service.tag || "SERVICE"}
              </span>
            </div>

            {/* Main Service Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-4 sm:mb-6">
              {service.title}
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-600 font-normal leading-relaxed max-w-3xl">
              {service.shortDescription}
            </p>
          </div>

          {/* Panoramic Hero Banner Image */}
          <div className="relative w-full aspect-[16/8] sm:aspect-[21/9] lg:aspect-[24/10] overflow-hidden bg-zinc-200 shadow-sm mb-16 sm:mb-20">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1600px"
              className="object-cover object-center"
            />
          </div>

          {/* Editorial Content Sections */}
          <div className="max-w-4xl space-y-16 sm:space-y-20 pb-8 sm:pb-12">
            {/* 1. About Service */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-5 sm:mb-6">
                {service.aboutHeading || "About service"}
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed whitespace-pre-line">
                {service.aboutDescription}
              </p>
            </div>

            {/* 2. What's Included in the Services */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-5 sm:mb-6">
                {service.whatsIncludedHeading || "What’s include in the services?"}
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed mb-8 sm:mb-10 whitespace-pre-line">
                {service.whatsIncludedDescription}
              </p>

              {/* Deliverables Bullet List */}
              <ul className="space-y-6 sm:space-y-8 pl-1">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="text-zinc-900 font-bold text-xl leading-none mt-1 select-none flex-shrink-0">
                      •
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-zinc-900 tracking-tight">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Explore Other Services Row */}
          <div className="border-t border-zinc-200/90 pt-12 sm:pt-16 mt-8 sm:mt-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                Explore Other Services
              </h3>
              <Link
                href="/service"
                className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-600 hover:text-black uppercase transition-colors"
              >
                All Services &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.slice(0, 3).map((other) => (
                <Link
                  key={other.slug}
                  href={`/service/${other.slug}`}
                  className="group flex flex-col bg-white border border-zinc-200/90 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-200 mb-4">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-zinc-900 tracking-tight group-hover:text-black mb-1.5">
                    {other.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed mb-4 flex-1">
                    {other.shortDescription}
                  </p>
                  <span className="text-xs sm:text-sm font-medium text-zinc-900 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <span>&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Reusable Full-Bleed Contact CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
