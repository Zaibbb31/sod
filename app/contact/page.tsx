"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import TilesBackground from "../components/tiles-bg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", details: "" });
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar theme="dark" />

      {/* Main Split Section */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left Column: Headline & Studio Details on Visible Tiles Background */}
        <TilesBackground className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          {/* Top Headline & Description */}
          <div className="max-w-lg">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-zinc-950 leading-[1.05] mb-6 sm:mb-8">
              Begin the Dialogue
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 font-normal leading-relaxed">
              Connect with our studio to discuss an upcoming spatial
              transformation, bespoke fabrication, or general collaboration.
            </p>
          </div>

          {/* Bottom 2x2 Grid of Studio Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 pt-12 sm:pt-16 mt-8 border-t border-zinc-300/60 lg:border-t-0">
            {/* Address */}
            <div className="border-l border-zinc-400/80 pl-4 py-0.5">
              <span className="block text-[11px] font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-1">
                Address
              </span>
              <span className="block text-sm sm:text-base font-normal text-zinc-900">
                123 Studio District
              </span>
            </div>

            {/* Phone */}
            <div className="border-l border-zinc-400/80 pl-4 py-0.5">
              <span className="block text-[11px] font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-1">
                Phone
              </span>
              <a
                href="tel:+4402071234567"
                className="block text-sm sm:text-base font-normal text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                +44 (0) 20 7123 4567
              </a>
            </div>

            {/* Email */}
            <div className="border-l border-zinc-400/80 pl-4 py-0.5">
              <span className="block text-[11px] font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-1">
                Email
              </span>
              <a
                href="mailto:studio@kairn.com"
                className="block text-sm sm:text-base font-normal text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                studio@kairn.com
              </a>
            </div>

            {/* Press */}
            <div className="border-l border-zinc-400/80 pl-4 py-0.5">
              <span className="block text-[11px] font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-1">
                Press
              </span>
              <a
                href="mailto:press@kairn.com"
                className="block text-sm sm:text-base font-normal text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                press@kairn.com
              </a>
            </div>
          </div>
        </TilesBackground>

        {/* Right Column: Background Image with Floating White Form Card */}
        <div className="lg:col-span-6 xl:col-span-6 relative min-h-[580px] lg:min-h-screen flex items-center justify-center p-6 sm:p-10 md:p-14 lg:p-16">
          {/* Background Image */}
          <Image
            src="/cta.jpg"
            alt="Interior Architecture & Studio Atmosphere"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />

          {/* Floating Pure White Contact Form Card */}
          <div className="relative z-10 w-full max-w-[500px] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.22)] p-8 sm:p-10 md:p-12">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-zinc-200 text-zinc-900 mx-auto flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-zinc-900">
                  Enquiry Received
                </h3>
                <p className="text-sm text-zinc-600 max-w-xs mx-auto leading-relaxed">
                  Thank you for reaching out. A studio representative will review
                  your inquiry and respond shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-900 underline hover:text-zinc-600 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-zinc-200 py-3 text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 outline-none transition-colors bg-transparent rounded-none"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-zinc-200 py-3 text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 outline-none transition-colors bg-transparent rounded-none"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-zinc-200 py-3 text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 outline-none transition-colors bg-transparent rounded-none"
                  />
                </div>

                {/* Project Details Textarea */}
                <div>
                  <textarea
                    name="details"
                    placeholder="Project Details"
                    required
                    rows={3}
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full border-b border-zinc-200 py-3 text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 outline-none transition-colors bg-transparent resize-none rounded-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#242424] hover:bg-[#181818] active:scale-[0.99] text-white py-4 px-6 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-200 shadow-md cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? "SENDING..." : "SUBMIT ENQUIRY"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Bottom Footer with Background Tile Pattern */}
      <Footer />
    </div>
  );
}
