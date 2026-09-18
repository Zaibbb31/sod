import React from "react";

interface TilesBackgroundProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  tileSize?: number;
  patternClassName?: string;
}

export default function TilesBackground({
  children,
  id,
  className = "",
  tileSize = 380,
  patternClassName = "",
}: TilesBackgroundProps) {
  return (
    <section id={id} className={`relative w-full ${className}`}>
      {/* Fixed Tile Grid Pattern (Sticks to viewport while content scrolls) */}
      <div
        className={`absolute inset-0 w-full h-full bg-[url('/tile-grid.svg')] bg-repeat bg-fixed pointer-events-none z-0 ${patternClassName}`}
        style={{
          backgroundSize: `${tileSize}px ${tileSize}px`,
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />
      {/* Foreground Content that scrolls over the static background */}
      {children && <div className="relative z-10 w-full">{children}</div>}
    </section>
  );
}
