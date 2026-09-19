"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Select all major sections, cards, and explicit reveal targets
    const getTargets = () => {
      const selectors = [
        "section:not(.no-reveal)",
        ".reveal-on-scroll",
        "[data-reveal]",
        ".reveal-fade",
        "main > div.reveal-item",
      ];
      return Array.from(document.querySelectorAll(selectors.join(", ")));
    };

    const targets = getTargets();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        } else {
          // Re-animate when scrolling back into view as requested
          // Only remove if it has completely scrolled out (top or bottom)
          const rect = entry.boundingClientRect;
          const isAbove = rect.bottom < 0;
          const isBelow = rect.top > window.innerHeight;
          if (isAbove || isBelow) {
            entry.target.classList.remove("is-revealed");
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0, 0.08, 0.15],
      rootMargin: "0px 0px -40px 0px",
    });

    targets.forEach((target) => {
      // Add base class if not present
      if (!target.classList.contains("reveal-on-scroll")) {
        target.classList.add("reveal-on-scroll");
      }
      observer.observe(target);
    });

    // Also observe dynamically loaded or rendered items
    const mutationObserver = new MutationObserver(() => {
      const currentTargets = getTargets();
      currentTargets.forEach((target) => {
        if (!target.classList.contains("reveal-on-scroll")) {
          target.classList.add("reveal-on-scroll");
          observer.observe(target);
        }
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
