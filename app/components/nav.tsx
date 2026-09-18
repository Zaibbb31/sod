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

  // Monitor scroll position to collapse into the floating black bar
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
      {/* ---------------- 1. INITIAL TOP TRANSPARENT NAVBAR (Hero View) ---------------- */}
      <header
        className={`w-full bg-transparent absolute top-0 left-0 z-[100] transition-all duration-500 ${
          isScrolled ? "opacity-0 -translate-y-6 pointer-events-none" : "opacity-100 translate-y-0 pointer-events-auto"
        }`}
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

            {/* Mobile Initial Hamburger Toggle */}
            <div className="flex md:hidden items-center justify-end flex-1">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="p-2 text-white/90 hover:text-white focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16m-16 6h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown for Hero Section (Solid Opaque Black) */}
        {dropdownOpen && !isScrolled && (
          <div className="md:hidden border-t border-white/15 bg-black px-6 py-5 space-y-3 shadow-2xl relative z-[110]">
            {defaultNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setDropdownOpen(false)}
                className="block text-base font-normal text-white hover:text-zinc-300 py-1.5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* ---------------- 2. SCROLLED COLLAPSED FLOATING BLACK BAR (HIGHEST Z-INDEX) ---------------- */}
      <div
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-[9999] w-[92%] sm:w-[480px] md:w-[540px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-10 scale-95 pointer-events-none"
        }`}
      >
        {/* Main Floating Black Bar */}
        <div className="w-full bg-black text-white border border-white/20 px-5 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between relative z-[10000]">
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
              width={125}
              height={26}
              priority
            />
          </Link>

          {/* Hamburger on Right (Icon only) */}
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-center p-2 sm:p-2.5 border border-white/10 transition-all duration-200 cursor-pointer text-white"
            aria-label="Toggle Navigation Menu"
            aria-expanded={dropdownOpen}
          >
            {dropdownOpen ? (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown Menu (Solid Opaque Black with Ultra-High Z-Index) */}
        <div
          className={`mt-2 w-full bg-black text-white border border-white/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden relative z-[10001] ${
            dropdownOpen && isScrolled
              ? "opacity-100 max-h-[350px] scale-100 transform translate-y-0 p-3 sm:p-4 pointer-events-auto"
              : "opacity-0 max-h-0 scale-95 transform -translate-y-4 p-0 pointer-events-none border-transparent"
          }`}
        >
          <nav className="flex flex-col space-y-1">
            {defaultNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setDropdownOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm sm:text-base font-normal text-zinc-100 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-between group cursor-pointer"
              >
                <span>{link.label}</span>
                
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
