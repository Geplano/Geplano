"use client";

import { useEffect, useRef } from "react";
import type { HeroSlide } from "./hero.types";

interface HeroSliderProps {
  slides: HeroSlide[];
}

/**
 * Hero Slider Component
 *
 * Carrossel automático de imagens de fundo.
 * As imagens são editáveis via TinaCMS em /admin.
 *
 * Funcionalidade:
 * - Transição automática a cada 5 segundos
 * - Efeito fade entre slides
 * - Usa imagens configuradas no TinaCMS ou fallback para Unsplash
 *
 * @param slides - Array de slides do TinaCMS
 */
export function HeroSlider({ slides }: HeroSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Fallback para imagens caso o TinaCMS não tenha slides configurados
  const defaultSlides: HeroSlide[] = [
    {
      id: "default-1",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      alt: "Construção moderna",
    },
    {
      id: "default-2",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop",
      alt: "Arquitetura residencial",
    },
    {
      id: "default-3",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
      alt: "Projeto de construção",
    },
  ];

  const displaySlides = slides.length > 0 ? slides : defaultSlides;

  useEffect(() => {
    const slideElements = sliderRef.current?.querySelectorAll(".hero-slide");
    if (!slideElements) return;

    let currentSlide = 0;
    const interval = setInterval(() => {
      slideElements[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slideElements.length;
      slideElements[currentSlide].classList.add("active");
    }, 5000);

    return () => clearInterval(interval);
  }, [displaySlides.length]);

  return (
    <div
      id="hero-slider"
      ref={sliderRef}
      className="absolute top-0 left-0 w-full h-full overflow-hidden"
    >
      {displaySlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`hero-slide${idx === 0 ? " active" : ""}`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: idx === 0 ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            transform: idx === 0 ? "scale(1)" : "scale(1.05)",
          }}
          role="img"
          aria-label={slide.alt}
        />
      ))}
    </div>
  );
}
