"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  theme?: "light" | "dark";
}

const defaultNavLinks: NavItem[] = [
  { label: "Portfolio", href: "/Project" },
  { label: "Services", href: "/service" },
  { label: "About us", href: "/aboutus" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar({ theme = "light" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isDarkHero = theme === "dark";

  // Monitor scroll position to collapse into the floating bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
      {/* ---------------- 1. INITIAL TOP NAVBAR WITH SUBTLE WHITE-TONED BLURRED BG (NOT END-TO-END) ---------------- */}
      <header
        className={`absolute top-4 sm:top-6 left-4 sm:left-8 lg:left-12 right-4 sm:right-8 lg:right-12 max-w-7xl mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto rounded-none ${
          isDarkHero
            ? "bg-white/85 backdrop-blur-md border border-zinc-200/90 shadow-sm"
            : "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
        } ${
          isScrolled
            ? "opacity-0 -translate-y-2 scale-[0.99] pointer-events-none"
            : "opacity-100 translate-y-0 scale-100"
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="w-full px-6 sm:px-10 lg:px-12 py-4 md:py-5">
          <div className="flex items-center justify-between">
            {/* Left Links */}
            <nav className="hidden md:flex items-center gap-10 lg:gap-14 flex-1 justify-start">
              <Link
                href="/Project"
                className={`text-sm lg:text-base font-normal tracking-wide transition-opacity duration-200 ${
                  isDarkHero ? "text-zinc-800 hover:text-black" : "text-white/90 hover:text-white"
                }`}
              >
                Portfolio
              </Link>
              <Link
                href="/service"
                className={`text-sm lg:text-base font-normal tracking-wide transition-opacity duration-200 ${
                  isDarkHero ? "text-zinc-800 hover:text-black" : "text-white/90 hover:text-white"
                }`}
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
                  style={{ width: "auto" }}
                  className={`h-6 lg:h-7 w-auto object-contain transition-all duration-300 ${
                    isDarkHero ? "brightness-0" : ""
                  }`}
                  priority
                />
              </Link>
            </div>

            {/* Right Links */}
            <div className="hidden md:flex items-center gap-10 lg:gap-14 flex-1 justify-end">
              <Link
                href="/aboutus"
                className={`text-sm lg:text-base font-normal tracking-wide transition-opacity duration-200 ${
                  isDarkHero ? "text-zinc-800 hover:text-black" : "text-white/90 hover:text-white"
                }`}
              >
                About us
              </Link>
              <Link
                href="/contact"
                className={`text-sm lg:text-base font-normal tracking-wide transition-opacity duration-200 ${
                  isDarkHero ? "text-zinc-800 hover:text-black" : "text-white/90 hover:text-white"
                }`}
              >
                Contact us
              </Link>
            </div>

            {/* Mobile Initial 4-Dot Menu Toggle */}
            <div className="flex md:hidden items-center justify-end flex-1">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`p-2.5 rounded-lg border focus:outline-none cursor-pointer transition-all ${
                  isDarkHero
                    ? "bg-black/5 hover:bg-black/10 border-black/15 text-zinc-900"
                    : "bg-white/10 hover:bg-white/20 border-white/15 text-white"
                }`}
                aria-label="Toggle menu"
              >
                {dropdownOpen ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <div className="grid grid-cols-2 gap-[3px] w-4 h-4 p-[1px]">
                    <span className={`w-[5px] h-[5px] rounded-[0.5px] ${isDarkHero ? "bg-zinc-900" : "bg-white"}`} />
                    <span className={`w-[5px] h-[5px] rounded-[0.5px] ${isDarkHero ? "bg-zinc-900" : "bg-white"}`} />
                    <span className={`w-[5px] h-[5px] rounded-[0.5px] ${isDarkHero ? "bg-zinc-900" : "bg-white"}`} />
                    <span className={`w-[5px] h-[5px] rounded-[0.5px] ${isDarkHero ? "bg-zinc-900" : "bg-white"}`} />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown for Hero Section with Smooth Transition */}
        <div
          className={`md:hidden grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            dropdownOpen && !isScrolled
              ? "grid-rows-[1fr] opacity-100 pointer-events-auto"
              : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`border-t px-6 py-5 space-y-2.5 shadow-2xl relative z-[110] backdrop-blur-xl ${
                isDarkHero
                  ? "border-zinc-200 bg-white/95 text-zinc-900"
                  : "border-white/15 bg-black/95 text-white"
              }`}
            >
              {defaultNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setDropdownOpen(false)}
                  className={`block text-sm font-semibold tracking-wider uppercase py-2 border-b ${
                    isDarkHero
                      ? "text-zinc-900 hover:text-zinc-600 border-zinc-100"
                      : "text-white hover:text-zinc-300 border-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ---------------- 2. SCROLLED FLOATING CARD WITH 4-DOT ICON & EXPANDED MENU ---------------- */}
      <div
        className={`fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 w-[88%] max-w-[360px] sm:max-w-[390px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-3 scale-[0.97] pointer-events-none"
        }`}
        style={{
          zIndex: 99999999,
          isolation: "isolate",
        }}
      >
        {/* Single Cohesive Floating Card - Minimal & Compact */}
        <div className="w-full bg-[#242424]/90 backdrop-blur-xl text-white border border-white/15 rounded-xl p-1.5 sm:p-2 shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-300">
          {/* Top Bar Header (Always Visible in Scrolled Mode) */}
          <div className="flex items-center justify-between px-2.5 py-0.5 sm:py-1">
            {/* Logo on Left */}
            <Link
              href="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setDropdownOpen(false);
              }}
              className="flex items-center hover:opacity-85 transition-opacity"
            >
              <Image
                src="/Clip path group.svg"
                alt="Logoipsum"
                width={100}
                height={20}
                style={{ width: "auto" }}
                className="h-4 sm:h-[18px] w-auto object-contain"
                priority
              />
            </Link>

            {/* 4-Dot Square Icon on Right (Toggles to '✕' Close icon when expanded) */}
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-center p-1.5 rounded-md hover:bg-white/10 active:scale-95 transition-all cursor-pointer text-white"
              aria-label={dropdownOpen ? "Close menu" : "Open menu"}
              aria-expanded={dropdownOpen}
            >
              {dropdownOpen ? (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <div className="grid grid-cols-2 gap-[3px] w-3.5 h-3.5 p-[0.5px]">
                  <span className="w-[4px] h-[4px] bg-white rounded-[0.5px]" />
                  <span className="w-[4px] h-[4px] bg-white rounded-[0.5px]" />
                  <span className="w-[4px] h-[4px] bg-white rounded-[0.5px]" />
                  <span className="w-[4px] h-[4px] bg-white rounded-[0.5px]" />
                </div>
              )}
            </button>
          </div>

          {/* Expanded Menu Rows (Matching Reference Structure) */}
          <div
            className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
              dropdownOpen && isScrolled
                ? "max-h-[350px] opacity-100 pt-2 mt-1 space-y-1.5 pointer-events-auto"
                : "max-h-0 opacity-0 pt-0 mt-0 space-y-0 pointer-events-none"
            }`}
          >
            {defaultNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setDropdownOpen(false)}
                className="block w-full px-3.5 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-medium text-xs tracking-wider uppercase transition-all duration-200 shadow-sm"
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
