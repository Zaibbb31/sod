"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export interface NavItem {
  label: string;
  href: string;
}

const defaultNavLinks: NavItem[] = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About us", href: "#about" },
  { label: "Contact us", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Monitor scroll position to collapse into the floating bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ---------------- 1. INITIAL TOP TRANSPARENT NAVBAR (Hero View) ---------------- */}
      <header
        className={`w-full bg-transparent absolute top-0 left-0 transition-all duration-500 pointer-events-auto ${
          isScrolled ? "opacity-0 -translate-y-6 pointer-events-none" : "opacity-100 translate-y-0"
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="w-full max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 py-6 md:py-8">
          <div className="flex items-center justify-between">
            {/* Left Links */}
            <nav className="hidden md:flex items-center gap-10 lg:gap-14 flex-1 justify-start">
              <Link
                href="#portfolio"
                className="text-sm lg:text-base font-normal tracking-wide text-white/90 hover:text-white transition-opacity duration-200"
              >
                Portfolio
              </Link>
              <Link
                href="#services"
                className="text-sm lg:text-base font-normal tracking-wide text-white/90 hover:text-white transition-opacity duration-200"
              >
                Services
              </Link>
            </nav>

            {/* Center Logo */}
            <div className="flex items-center justify-center flex-shrink-0">
              <Link
                href="/"
                className="flex items-center transition-opacity duration-200 hover:opacity-90"
              >
                <Image
                  src="/Clip path group.svg"
                  alt="Logoipsum"
                  width={150}
                  height={30}
                  priority
                />
              </Link>
            </div>

            {/* Right Links */}
            <div className="hidden md:flex items-center gap-10 lg:gap-14 flex-1 justify-end">
              <Link
                href="#about"
                className="text-sm lg:text-base font-normal tracking-wide text-white/90 hover:text-white transition-opacity duration-200"
              >
                About us
              </Link>
              <Link
                href="#contact"
                className="text-sm lg:text-base font-normal tracking-wide text-white/90 hover:text-white transition-opacity duration-200"
              >
                Contact us
              </Link>
            </div>

            {/* Mobile Initial 4-Dot Menu Toggle */}
            <div className="flex md:hidden items-center justify-end flex-1">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white focus:outline-none cursor-pointer transition-all"
                aria-label="Toggle menu"
              >
                {dropdownOpen ? (
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <div className="grid grid-cols-2 gap-[3px] w-4 h-4 p-[1px]">
                    <span className="w-[5px] h-[5px] bg-white rounded-[0.5px]" />
                    <span className="w-[5px] h-[5px] bg-white rounded-[0.5px]" />
                    <span className="w-[5px] h-[5px] bg-white rounded-[0.5px]" />
                    <span className="w-[5px] h-[5px] bg-white rounded-[0.5px]" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown for Hero Section */}
        {dropdownOpen && !isScrolled && (
          <div className="md:hidden border-t border-white/15 bg-black/95 backdrop-blur-xl px-6 py-5 space-y-2.5 shadow-2xl relative z-[110]">
            {defaultNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setDropdownOpen(false)}
                className="block text-sm font-semibold tracking-wider uppercase text-white hover:text-zinc-300 py-2 border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* ---------------- 2. SCROLLED FLOATING CARD WITH 4-DOT ICON & EXPANDED MENU ---------------- */}
      <div
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[480px] md:w-[520px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
        }`}
        style={{
          zIndex: 99999999,
          isolation: "isolate",
        }}
      >
        {/* Single Cohesive Floating Card (Matches User Reference Image) */}
        <div className="w-full bg-[#343230]/90 backdrop-blur-2xl text-white border border-white/20 rounded-2xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.65)] transition-all duration-300">
          {/* Top Bar Header (Always Visible in Scrolled Mode) */}
          <div className="flex items-center justify-between px-2 sm:px-3 py-1">
            {/* Logo on Left */}
            <Link
              href="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setDropdownOpen(false);
              }}
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <Image
                src="/Clip path group.svg"
                alt="Logoipsum"
                width={120}
                height={24}
                priority
              />
            </Link>

            {/* 4-Dot Square Icon on Right (Toggles to '✕' Close icon when expanded) */}
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-center p-2 sm:p-2.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-white"
              aria-label={dropdownOpen ? "Close menu" : "Open menu"}
              aria-expanded={dropdownOpen}
            >
              {dropdownOpen ? (
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <div className="grid grid-cols-2 gap-[4px] w-4 h-4">
                  <span className="w-[5px] h-[5px] bg-white rounded-[1px]" />
                  <span className="w-[5px] h-[5px] bg-white rounded-[1px]" />
                  <span className="w-[5px] h-[5px] bg-white rounded-[1px]" />
                  <span className="w-[5px] h-[5px] bg-white rounded-[1px]" />
                </div>
              )}
            </button>
          </div>

          {/* Expanded Menu Rows (Matching Reference Structure) */}
          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
              dropdownOpen && isScrolled
                ? "max-h-[400px] opacity-100 pt-3 mt-1 space-y-2 pointer-events-auto"
                : "max-h-0 opacity-0 pt-0 mt-0 space-y-0 pointer-events-none"
            }`}
          >
            {defaultNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setDropdownOpen(false)}
                className="block w-full px-5 py-3.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.15] border border-white/10 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
