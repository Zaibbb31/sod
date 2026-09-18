import React from "react";

interface TilesBackgroundProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  tileSize?: number;
  mobileTileSize?: string | number;
  patternClassName?: string;
}

export default function TilesBackground({
  children,
  id,
  className = "",
  tileSize = 380,
  mobileTileSize,
  patternClassName = "",
}: TilesBackgroundProps) {
  // Mobile: 50vw ensures exactly 2 tiles fit per row across any mobile screen width
  const mobSize =
    typeof mobileTileSize === "number"
      ? `${mobileTileSize}px`
      : (mobileTileSize ?? "50vw");

  return (
    <section id={id} className={`relative w-full ${className}`}>
      {/* Responsive tile sizing: Exactly 2 tiles per row on mobile (50vw), desktop untouched (${tileSize}px) */}
      <style>{`
        .bg-tile-grid-${tileSize} {
          background-size: ${mobSize} ${mobSize};
        }
        @media (min-width: 640px) {
          .bg-tile-grid-${tileSize} {
            background-size: ${tileSize}px ${tileSize}px;
          }
        }
      `}</style>

      {/* Fixed Tile Grid Pattern (Sticks to viewport while content scrolls) */}
      <div
        className={`bg-tile-grid-${tileSize} absolute inset-0 w-full h-full bg-[url('/tile-grid.svg')] bg-repeat bg-fixed pointer-events-none z-0 ${patternClassName}`}
        style={{
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />
      {/* Foreground Content that scrolls over the static background */}
      {children && <div className="relative z-10 w-full">{children}</div>}
    </section>
  );
}
