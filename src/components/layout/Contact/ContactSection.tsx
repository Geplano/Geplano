"use client";

import { ContactContainer } from "./ContactContainer";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ContactSection() {
  useScrollReveal();

  return (
    <ContactContainer>
      <ContactInfo />
      <ContactForm />
    </ContactContainer>
  );
}
