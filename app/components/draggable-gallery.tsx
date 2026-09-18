"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  className: string;
}

const baseColumns: GalleryItem[][] = [
  // Column 1
  [
    {
      id: "col1-1",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      alt: "Architectural Living Room",
      className: "h-[238px] sm:h-[340px]",
    },
    {
      id: "col1-2",
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      alt: "Designer Chair Accent",
      className: "h-[203px] sm:h-[290px]",
    },
    {
      id: "col1-3",
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      alt: "Modern Villa Hallway",
      className: "h-[273px] sm:h-[390px]",
    },
    {
      id: "col1-4",
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      alt: "Minimalist Dining Setup",
      className: "h-[224px] sm:h-[320px]",
    },
  ],
  // Column 2
  [
    {
      id: "col2-1",
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury Master Studio",
      className: "h-[196px] sm:h-[280px]",
    },
    {
      id: "col2-2",
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      alt: "Warm Open Kitchen",
      className: "h-[280px] sm:h-[400px]",
    },
    {
      id: "col2-3",
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
      alt: "Terrace Panoramic View",
      className: "h-[245px] sm:h-[350px]",
    },
    {
      id: "col2-4",
      src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
      alt: "Woodwork Finishes",
      className: "h-[217px] sm:h-[310px]",
    },
  ],
  // Column 3
  [
    {
      id: "col3-1",
      src: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      alt: "Fluted Pendant Lamp",
      className: "h-[259px] sm:h-[370px]",
    },
    {
      id: "col3-2",
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      alt: "Marble Island Kitchen",
      className: "h-[203px] sm:h-[290px]",
    },
    {
      id: "col3-3",
      src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      alt: "Monolithic Bathroom",
      className: "h-[273px] sm:h-[390px]",
    },
    {
      id: "col3-4",
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      alt: "Exterior Courtyard",
      className: "h-[203px] sm:h-[290px]",
    },
  ],
  // Column 4
  [
    {
      id: "col4-1",
      src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80",
      alt: "Serene Bedroom Suite",
      className: "h-[273px] sm:h-[390px]",
    },
    {
      id: "col4-2",
      src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
      alt: "Sculptural Lounge Chair",
      className: "h-[217px] sm:h-[310px]",
    },
    {
      id: "col4-3",
      src: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
      alt: "Sunlit Reading Nook",
      className: "h-[189px] sm:h-[270px]",
    },
    {
      id: "col4-4",
      src: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
      alt: "Ambient Light Fixture",
      className: "h-[259px] sm:h-[370px]",
    },
  ],
  // Column 5
  [
    {
      id: "col5-1",
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      alt: "Covered Patio Lounge",
      className: "h-[217px] sm:h-[310px]",
    },
    {
      id: "col5-2",
      src: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
      alt: "Contemporary Living Room",
      className: "h-[252px] sm:h-[360px]",
    },
    {
      id: "col5-3",
      src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      alt: "Moody Architectural Space",
      className: "h-[210px] sm:h-[300px]",
    },
    {
      id: "col5-4",
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      alt: "Dining Pavilion",
      className: "h-[259px] sm:h-[370px]",
    },
  ],
  // Column 6
  [
    {
      id: "col6-1",
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      alt: "Minimalist Space",
      className: "h-[245px] sm:h-[350px]",
    },
    {
      id: "col6-2",
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      alt: "Artisan Chair",
      className: "h-[196px] sm:h-[280px]",
    },
    {
      id: "col6-3",
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      alt: "Modern Villa Hallway",
      className: "h-[273px] sm:h-[390px]",
    },
    {
      id: "col6-4",
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      alt: "Kitchen Interior",
      className: "h-[224px] sm:h-[320px]",
    },
  ],
];

// 3x3 repetition of base grid columns for endless seamless 2D tiling
const tileOffsets = [
  { xIndex: -1, yIndex: -1 },
  { xIndex: 0, yIndex: -1 },
  { xIndex: 1, yIndex: -1 },
  { xIndex: -1, yIndex: 0 },
  { xIndex: 0, yIndex: 0 },
  { xIndex: 1, yIndex: 0 },
  { xIndex: -1, yIndex: 1 },
  { xIndex: 0, yIndex: 1 },
  { xIndex: 1, yIndex: 1 },
];

export default function DraggableGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const fullscreenCanvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [isMobileFullscreen, setIsMobileFullscreen] = useState(false);

  // Responsive Dimensions State & Ref for 60/120fps physics loop
  const dimensionsRef = useRef({
    colWidth: 340,
    gap: 16,
    blockWidth: baseColumns.length * (340 + 16),
    blockHeight: 1380,
    isMobile: false,
  });

  // Track responsive screen resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      const colW = mobile ? 238 : 340; // 30% reduction on mobile
      const g = mobile ? 12 : 16;
      dimensionsRef.current = {
        colWidth: colW,
        gap: g,
        blockWidth: baseColumns.length * (colW + g),
        blockHeight: mobile ? 966 : 1380,
        isMobile: mobile,
      };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Physics animation references for ultra-smooth buttery glide
  const targetPos = useRef({ x: -180, y: -120 });
  const currentPos = useRef({ x: -180, y: -120 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastPointer = useRef({ x: 0, y: 0, time: 0 });
  const isDraggingRef = useRef(false);

  // Lock body scroll when mobile fullscreen gallery is open
  useEffect(() => {
    if (isMobileFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileFullscreen]);

  // Ultra-Smooth 60/120fps Physics & Fluid LERP Loop
  useEffect(() => {
    let animationFrameId: number;

    const animateLoop = () => {
      const { blockWidth, blockHeight } = dimensionsRef.current;

      if (!isDraggingRef.current) {
        // Inertia momentum with silky glide decay
        targetPos.current.x += velocity.current.x;
        targetPos.current.y += velocity.current.y;
        velocity.current.x *= 0.955;
        velocity.current.y *= 0.955;

        // Subpixel stop threshold
        if (Math.abs(velocity.current.x) < 0.02) velocity.current.x = 0;
        if (Math.abs(velocity.current.y) < 0.02) velocity.current.y = 0;
      }

      // Responsive buttery LERP interpolation
      const lerpFactor = isDraggingRef.current ? 0.38 : 0.12;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

      // Infinite modulo toroidal wrap
      const wrappedX = ((((currentPos.current.x % blockWidth) - blockWidth) % blockWidth) + blockWidth) % blockWidth - blockWidth;
      const wrappedY = ((((currentPos.current.y % blockHeight) - blockHeight) % blockHeight) + blockHeight) % blockHeight - blockHeight;

      if (canvasRef.current) {
        canvasRef.current.style.transform = `translate3d(${wrappedX}px, ${wrappedY}px, 0px)`;
      }
      if (fullscreenCanvasRef.current) {
        fullscreenCanvasRef.current.style.transform = `translate3d(${wrappedX}px, ${wrappedY}px, 0px)`;
      }

      animationFrameId = requestAnimationFrame(animateLoop);
    };

    animationFrameId = requestAnimationFrame(animateLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    lastPointer.current = { x: e.clientX, y: e.clientY, time: performance.now() };
    velocity.current = { x: 0, y: 0 };
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const dt = Math.max(now - lastPointer.current.time, 10);
    const dx = e.clientX - lastPointer.current.x;
    const dy = e.clientY - lastPointer.current.y;

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      setHasDragged(true);
    }

    targetPos.current.x += dx;
    targetPos.current.y += dy;

    // Throw velocity with smooth dampening
    const speedX = (dx / dt) * 16;
    const speedY = (dy / dt) * 16;
    velocity.current = {
      x: Math.max(Math.min(speedX, 35), -35),
      y: Math.max(Math.min(speedY, 35), -35),
    };

    lastPointer.current = { x: e.clientX, y: e.clientY, time: now };
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  // Touch Handlers (Dedicated for Fullscreen Mobile Mode with Butter-Smooth Thumb Interaction)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      setIsDragging(true);
      lastPointer.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: performance.now(),
      };
      velocity.current = { x: 0, y: 0 };
    }
  };

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const now = performance.now();
    const dt = Math.max(now - lastPointer.current.time, 10);
    const dx = e.touches[0].clientX - lastPointer.current.x;
    const dy = e.touches[0].clientY - lastPointer.current.y;

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      setHasDragged(true);
    }

    targetPos.current.x += dx;
    targetPos.current.y += dy;

    // Silky throw velocity calculation
    const speedX = (dx / dt) * 16;
    const speedY = (dy / dt) * 16;
    velocity.current = {
      x: Math.max(Math.min(speedX, 35), -35),
      y: Math.max(Math.min(speedY, 35), -35),
    };

    lastPointer.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: now,
    };
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  // Global listeners for uninterrupted drag & flick
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // Reusable Gallery Grid Elements
  const renderGridContent = () =>
    tileOffsets.map((offset) => (
      <div
        key={`${offset.xIndex}-${offset.yIndex}`}
        className="absolute flex gap-3 sm:gap-4 p-1.5 sm:p-2 pointer-events-none"
        style={{
          left: `${(offset.xIndex + 1) * dimensionsRef.current.blockWidth}px`,
          top: `${(offset.yIndex + 1) * dimensionsRef.current.blockHeight}px`,
          width: `${dimensionsRef.current.blockWidth}px`,
        }}
      >
        {baseColumns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-3 sm:gap-4 w-[238px] sm:w-[340px] flex-shrink-0">
            {col.map((item) => (
              <div
                key={`${offset.xIndex}-${offset.yIndex}-${item.id}`}
                className={`relative w-full ${item.className} overflow-hidden bg-zinc-300 shadow-md rounded-sm sm:rounded-none`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 238px, 340px"
                  unoptimized
                  draggable={false}
                  className="object-cover object-center pointer-events-none"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    ));

  return (
    <>
      {/* ---------------- 1. INLINE PAGE SECTION ---------------- */}
      <section
        id="portfolio"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        className={`relative w-full h-[65vh] sm:h-[90vh] overflow-hidden bg-[#e5e5e8] select-none ${
          isDragging ? "sm:cursor-grabbing" : "sm:cursor-grab"
        }`}
      >
        {/* Endless 3x3 Tiled Canvas */}
        <div
          ref={canvasRef}
          className="absolute will-change-transform pointer-events-none"
          style={{
            width: `${dimensionsRef.current.blockWidth * 3}px`,
            height: `${dimensionsRef.current.blockHeight * 3}px`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {renderGridContent()}
        </div>

        {/* Mobile View Trigger: "Click to see projects" Button (Non-blocking page scroll) */}
        <div className="sm:hidden absolute inset-0 z-20 flex items-center justify-center bg-black/15 backdrop-blur-[1px] pointer-events-auto">
          <button
            type="button"
            onClick={() => {
              setIsMobileFullscreen(true);
              setHasDragged(false);
            }}
            className="px-6 py-3.5 rounded-full bg-black/90 text-white font-medium text-sm shadow-2xl border border-white/20 backdrop-blur-md flex items-center justify-center gap-2.5 active:scale-95 transition-all cursor-pointer"
            aria-label="Click to see projects in full screen"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>Click to see projects</span>
          </button>
        </div>

        {/* Desktop View Center Floating Badge */}
        <div
          className={`hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none transition-all duration-700 ease-out ${
            hasDragged ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
          }`}
        >
          <div className="px-8 py-4 rounded-full bg-[#fdfbf7]/95 text-zinc-900 font-medium text-base shadow-2xl border border-zinc-200/90 backdrop-blur-md flex items-center justify-center gap-2 select-none">
            <span>Drag to Explore our Latest Work</span>
          </div>
        </div>
      </section>

      {/* ---------------- 2. FULLSCREEN MOBILE POPUP DRAGGABLE GALLERY ---------------- */}
      {isMobileFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Interactive Projects Gallery"
          onTouchStart={handleTouchStart}
          onMouseDown={handleMouseDown}
          className="fixed inset-0 z-[99999999] w-screen h-screen bg-[#e5e5e8] select-none touch-none overflow-hidden"
          style={{ isolation: "isolate" }}
        >
          {/* Top Bar with Close ('✕') Button */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 pointer-events-auto">
            <button
              type="button"
              onClick={() => setIsMobileFullscreen(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/85 text-white text-xs font-semibold tracking-wider uppercase shadow-2xl backdrop-blur-md border border-white/20 active:scale-95 transition-all cursor-pointer"
              aria-label="Close fullscreen gallery"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Close</span>
            </button>
          </div>

          {/* Fullscreen Interactive Canvas with GPU acceleration */}
          <div
            ref={fullscreenCanvasRef}
            className="absolute will-change-transform pointer-events-none"
            style={{
              width: `${dimensionsRef.current.blockWidth * 3}px`,
              height: `${dimensionsRef.current.blockHeight * 3}px`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {renderGridContent()}
          </div>

          {/* Floating Mobile Thumb Interaction Hint */}
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-700 ease-out ${
              hasDragged ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
            }`}
          >
            <div className="px-5 py-2.5 rounded-full bg-black/75 text-white/90 font-normal text-xs shadow-xl backdrop-blur-md border border-white/10 flex items-center justify-center gap-2 select-none">
              <span>Drag with your thumb to explore</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
