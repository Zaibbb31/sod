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
}: TilesBackgroundProps) {
  return (
    <section id={id} className={`relative w-full bg-[#FFFFFF] ${className}`}>
      {children && <div className="relative z-10 w-full">{children}</div>}
    </section>
  );
}
