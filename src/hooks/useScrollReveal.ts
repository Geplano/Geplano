"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    scrollRevealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      scrollRevealElements.forEach((el) => {
        revealObserver.unobserve(el);
      });
    };
  }, []);
}
