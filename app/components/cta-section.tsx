"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function CTASection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    emailAddress: "",
    projectType: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: "",
        contactNumber: "",
        emailAddress: "",
        projectType: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="relative w-full min-h-[640px] flex items-center overflow-hidden">
      {/* Full Bleed End-to-End Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/cta.jpg"
          alt="Interior Architecture Studio Atmosphere"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Inner Content Centered in Max-W-8xl */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Description at Top Left */}
        <div className="lg:col-span-6 text-white space-y-4 sm:space-y-6 pt-1 lg:pt-2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            Get in touch
          </h2>
          <p className="text-base sm:text-lg text-white/95 max-w-md leading-relaxed font-normal drop-shadow-sm">
            Let’s create a space you’ll love. Reach out and let’s design something extraordinary together.
          </p>
        </div>

        {/* Right Column: White Contact Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="bg-white p-6 sm:p-10 shadow-2xl w-full max-w-lg">
            <p className="text-sm sm:text-base font-normal text-zinc-700 mb-6 leading-relaxed">
              Leave us a message here, and we’ll reach out with personalised support.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-sm text-center animate-in fade-in duration-300">
                <p className="font-semibold text-base mb-1">Thank you for reaching out!</p>
                <p className="text-sm text-emerald-700">We have received your message and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-3.5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#242424] text-white placeholder:text-zinc-300/80 px-4 py-3.5 sm:py-4 border-0 focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    className="w-full bg-[#242424] text-white placeholder:text-zinc-300/80 px-4 py-3.5 sm:py-4 border-0 focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    className="w-full bg-[#242424] text-white placeholder:text-zinc-300/80 px-4 py-3.5 sm:py-4 border-0 focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Project Type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#242424] text-white placeholder:text-zinc-300/80 px-4 py-3.5 sm:py-4 border-0 focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell Us About Your Project"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#242424] text-white placeholder:text-zinc-300/80 px-4 py-3.5 sm:py-4 border-0 focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm sm:text-base resize-none"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 bg-[#242424] text-white font-semibold text-sm sm:text-base hover:bg-[#181818] active:scale-[0.99] transition-all cursor-pointer shadow-md tracking-wider uppercase"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
