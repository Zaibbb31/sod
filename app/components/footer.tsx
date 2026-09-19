import React from "react";
import Link from "next/link";
import Image from "next/image";
import TilesBackground from "./tiles-bg";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#FFFFFF] py-16 sm:py-20 text-[#242424] relative z-10">
      <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 mb-12 sm:mb-16">
          {/* Left Column: Logo & Studio Address */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/Clip path group.svg"
                alt="Logoipsum"
                width={150}
                height={30}
                style={{ width: "auto" }}
                className="brightness-0 object-contain"
                priority
              />
            </Link>
            <div className="text-sm sm:text-base text-zinc-800 font-normal leading-relaxed">
              <p>Studio 18, 42 Park Street</p>
              <p>Mayfair, London</p>
              <p>W1K 7AA, United Kingdom</p>
            </div>
          </div>

          {/* Right Column: Social Icons & Navigation Links */}
          <div className="flex flex-col items-start lg:items-end gap-8 w-full lg:w-auto">
            {/* Social Icons */}
            <div className="flex items-center gap-6 text-[#242424]">
              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:opacity-75 transition-opacity"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-75 transition-opacity"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:opacity-75 transition-opacity"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.66 1.64 1.63 1.63 0 0 0 1.66 1.63 1.63 1.63 0 0 0 1.65-1.63 1.64 1.64 0 0 0-1.65-1.64z" />
                </svg>
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm sm:text-base font-medium text-zinc-900">
              <Link href="/Project" className="hover:text-zinc-600 transition-colors">
                Portfolio
              </Link>
              <Link href="/service" className="hover:text-zinc-600 transition-colors">
                Services
              </Link>
              <Link href="/aboutus" className="hover:text-zinc-600 transition-colors">
                About us
              </Link>
              <Link href="/contact" className="hover:text-zinc-600 transition-colors">
                Contact us
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-zinc-200/90 pt-8 sm:pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-zinc-600">
          <p>©2026 Atelier. All rights reserved.</p>
          <p>Designed by Studio North</p>
        </div>
      </div>
    </footer>
  );
}
