"use client";

import { useState, useEffect, useRef } from "react";
import { NavbarContainer } from "./NavbarContainer";
import { NavbarContent } from "./NavbarContent";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarDesktopMenu } from "./NavbarDesktopMenu";
import { NavbarMobileButton } from "./NavbarMobileButton";
import { NavbarMobileMenu } from "./NavbarMobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle scroll to update navbar state
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Observe sections to highlight active link
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          console.log("Section visible:", id); // Debug log
          setActiveSection(id || "");
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      console.log("Observing section:", section.id); // Debug log
      sectionObserver.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <NavbarContainer scrolled={scrolled} menuOpen={menuOpen} ref={containerRef}>
      <NavbarContent>
        <div className="flex-shrink-0 logo-container">
          <NavbarLogo />
        </div>
        <div className="hidden lg:block">
          <NavbarDesktopMenu activeSection={activeSection} />
        </div>
        <div className="lg:hidden">
          <NavbarMobileButton onClick={() => setMenuOpen((open) => !open)} />
        </div>
      </NavbarContent>
      <NavbarMobileMenu
        open={menuOpen}
        onLinkClick={closeMenu}
        activeSection={activeSection}
      />
    </NavbarContainer>
  );
}
