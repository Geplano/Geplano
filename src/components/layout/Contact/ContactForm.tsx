"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL, CONTACT_FORM_TEXTS } from "./contact.types";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      // Criar o corpo do email formatado
      const emailBody = `
Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}

Mensagem:
${formData.message}
			`.trim();

      // Enviar via API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: CONTACT_EMAIL,
          subject: `Novo contato de ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          emailBody: emailBody,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl scroll-reveal">
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
        {CONTACT_FORM_TEXTS.title}
      </h3>
      <p className="text-center text-gray-600 text-sm mb-6">
        Preencha o formulário abaixo e entraremos em contato
      </p>

      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
          ✓ {CONTACT_FORM_TEXTS.successMessage}
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
          ✗ {CONTACT_FORM_TEXTS.errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md text-gray-800 border border-gray-300 focus:ring-2 focus:ring-geplano-gold focus:border-geplano-gold transition-all"
            placeholder={CONTACT_FORM_TEXTS.namePlaceholder}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md text-gray-800 border border-gray-300 focus:ring-2 focus:ring-geplano-gold focus:border-geplano-gold transition-all"
            placeholder={CONTACT_FORM_TEXTS.emailPlaceholder}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Telefone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md text-gray-800 border border-gray-300 focus:ring-2 focus:ring-geplano-gold focus:border-geplano-gold transition-all"
            placeholder={CONTACT_FORM_TEXTS.phonePlaceholder}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md text-gray-800 border border-gray-300 focus:ring-2 focus:ring-geplano-gold focus:border-geplano-gold transition-all resize-none"
            placeholder={CONTACT_FORM_TEXTS.messagePlaceholder}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-geplano-gold text-white font-bold py-4 px-6 rounded-lg uppercase tracking-widest hover:bg-opacity-90 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </span>
            ) : (
              CONTACT_FORM_TEXTS.submitButton
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
