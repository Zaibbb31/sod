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
      className: "h-[340px]",
    },
    {
      id: "col1-2",
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      alt: "Designer Chair Accent",
      className: "h-[290px]",
    },
    {
      id: "col1-3",
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      alt: "Modern Villa Hallway",
      className: "h-[390px]",
    },
    {
      id: "col1-4",
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      alt: "Minimalist Dining Setup",
      className: "h-[320px]",
    },
  ],
  // Column 2
  [
    {
      id: "col2-1",
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury Master Studio",
      className: "h-[280px]",
    },
    {
      id: "col2-2",
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      alt: "Warm Open Kitchen",
      className: "h-[400px]",
    },
    {
      id: "col2-3",
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
      alt: "Terrace Panoramic View",
      className: "h-[350px]",
    },
    {
      id: "col2-4",
      src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
      alt: "Woodwork Finishes",
      className: "h-[310px]",
    },
  ],
  // Column 3
  [
    {
      id: "col3-1",
      src: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      alt: "Fluted Pendant Lamp",
      className: "h-[370px]",
    },
    {
      id: "col3-2",
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      alt: "Marble Island Kitchen",
      className: "h-[290px]",
    },
    {
      id: "col3-3",
      src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      alt: "Monolithic Bathroom",
      className: "h-[390px]",
    },
    {
      id: "col3-4",
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      alt: "Exterior Courtyard",
      className: "h-[290px]",
    },
  ],
  // Column 4
  [
    {
      id: "col4-1",
      src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80",
      alt: "Serene Bedroom Suite",
      className: "h-[390px]",
    },
    {
      id: "col4-2",
      src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
      alt: "Sculptural Lounge Chair",
      className: "h-[310px]",
    },
    {
      id: "col4-3",
      src: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
      alt: "Sunlit Reading Nook",
      className: "h-[270px]",
    },
    {
      id: "col4-4",
      src: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
      alt: "Ambient Light Fixture",
      className: "h-[370px]",
    },
  ],
  // Column 5
  [
    {
      id: "col5-1",
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      alt: "Covered Patio Lounge",
      className: "h-[310px]",
    },
    {
      id: "col5-2",
      src: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
      alt: "Contemporary Living Room",
      className: "h-[360px]",
    },
    {
      id: "col5-3",
      src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      alt: "Moody Architectural Space",
      className: "h-[300px]",
    },
    {
      id: "col5-4",
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      alt: "Dining Pavilion",
      className: "h-[370px]",
    },
  ],
  // Column 6
  [
    {
      id: "col6-1",
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      alt: "Minimalist Space",
      className: "h-[350px]",
    },
    {
      id: "col6-2",
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      alt: "Artisan Chair",
      className: "h-[280px]",
    },
    {
      id: "col6-3",
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      alt: "Modern Villa Hallway",
      className: "h-[390px]",
    },
    {
      id: "col6-4",
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      alt: "Kitchen Interior",
      className: "h-[320px]",
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
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);

  // Physics animation references for ultra-smooth 120fps glide
  const targetPos = useRef({ x: -200, y: -150 });
  const currentPos = useRef({ x: -200, y: -150 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastPointer = useRef({ x: 0, y: 0, time: 0 });
  const isDraggingRef = useRef(false);

  // Grid block dimensions
  const colWidth = 340;
  const gap = 16;
  const blockWidth = baseColumns.length * (colWidth + gap);
  const blockHeight = 1380;

  // 60/120fps Smooth Physics & LERP Loop
  useEffect(() => {
    let animationFrameId: number;

    const animateLoop = () => {
      if (!isDraggingRef.current) {
        // Inertia momentum with smooth decay
        targetPos.current.x += velocity.current.x;
        targetPos.current.y += velocity.current.y;
        velocity.current.x *= 0.94;
        velocity.current.y *= 0.94;
      }

      // High-performance smooth LERP interpolation
      const lerpFactor = isDraggingRef.current ? 0.35 : 0.15;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

      // Infinite modulo toroidal wrap
      const wrappedX = ((((currentPos.current.x % blockWidth) - blockWidth) % blockWidth) + blockWidth) % blockWidth - blockWidth;
      const wrappedY = ((((currentPos.current.y % blockHeight) - blockHeight) % blockHeight) + blockHeight) % blockHeight - blockHeight;

      if (canvasRef.current) {
        canvasRef.current.style.transform = `translate3d(${wrappedX}px, ${wrappedY}px, 0px)`;
      }

      animationFrameId = requestAnimationFrame(animateLoop);
    };

    animationFrameId = requestAnimationFrame(animateLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [blockWidth, blockHeight]);

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
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

    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      setHasDragged(true);
    }

    targetPos.current.x += dx;
    targetPos.current.y += dy;

    // Calculate throw velocity
    velocity.current = {
      x: (dx / dt) * 14,
      y: (dy / dt) * 14,
    };

    lastPointer.current = { x: e.clientX, y: e.clientY, time: now };
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  // Touch Handlers (Mobile Thumb / Swipe)
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

    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      setHasDragged(true);
    }

    targetPos.current.x += dx;
    targetPos.current.y += dy;

    velocity.current = {
      x: (dx / dt) * 14,
      y: (dy / dt) * 14,
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

  // Global listeners for uninterrupted drag
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

  return (
    <section
      id="portfolio"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className={`relative w-full h-[85vh] sm:h-[90vh] overflow-hidden bg-[#e5e5e8] select-none touch-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      {/* Endless 3x3 Hardware-Accelerated Tiled Canvas */}
      <div
        ref={canvasRef}
        className="absolute will-change-transform"
        style={{
          width: `${blockWidth * 3}px`,
          height: `${blockHeight * 3}px`,
        }}
      >
        {tileOffsets.map((offset) => (
          <div
            key={`${offset.xIndex}-${offset.yIndex}`}
            className="absolute flex gap-4 p-2 pointer-events-none"
            style={{
              left: `${(offset.xIndex + 1) * blockWidth}px`,
              top: `${(offset.yIndex + 1) * blockHeight}px`,
              width: `${blockWidth}px`,
            }}
          >
            {baseColumns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-4 w-[340px] flex-shrink-0">
                {col.map((item) => (
                  <div
                    key={`${offset.xIndex}-${offset.yIndex}-${item.id}`}
                    className={`relative w-full ${item.className} overflow-hidden bg-zinc-300 shadow-md`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="340px"
                      unoptimized
                      draggable={false}
                      className="object-cover object-center pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Center Floating Capsule Badge ("Drag to Explore our Latest Work") */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none transition-all duration-700 ease-out ${
          hasDragged ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
        }`}
      >
        <div className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#fdfbf7]/95 text-zinc-900 font-medium text-sm sm:text-base shadow-2xl border border-zinc-200/90 backdrop-blur-md flex items-center justify-center gap-2 select-none">
          <span>Drag to Explore our Latest Work</span>
        </div>
      </div>
    </section>
  );
}
