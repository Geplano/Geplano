import { CONTACT_INFO } from "./contact.types";

export function ContactInfo() {
  return (
    <div className="scroll-reveal">
      <h2 className="text-4xl md:text-5xl font-bold uppercase">
        Vamos Construir Juntos?
      </h2>
      <p className="mt-4 text-lg text-gray-200">
        Se você busca uma parceria baseada em confiança, transparência e
        excelência para seu próximo projeto de alto padrão, entre em contato.
        Nossa equipe está pronta para transformar sua visão em realidade.
      </p>
      <div className="mt-8 space-y-4">
        {CONTACT_INFO.map((info, index) => (
          <p key={index} className="flex items-center">
            <span className="text-geplano-gold mr-3">{info.icon}</span>
            {info.text}
          </p>
        ))}
      </div>
    </div>
  );
}
