export interface ContactInfo {
  icon: string;
  text: string;
}

export const CONTACT_INFO: ContactInfo[] = [
  { icon: "●", text: "27 99724-7384" },
  { icon: "●", text: "contato@geplano.com.br" },
  { icon: "●", text: "São Mateus - ES" },
];

// Email de destino para o formulário de contato
export const CONTACT_EMAIL = "pedrolucasmota2005@gmail.com";

// Textos do formulário (podem ser movidos para i18n depois)
export const CONTACT_FORM_TEXTS = {
  title: "Entre em Contato Conosco",
  namePlaceholder: "Seu Nome",
  emailPlaceholder: "Seu E-mail",
  phonePlaceholder: "Seu Telefone",
  messagePlaceholder: "Sua Mensagem",
  submitButton: "Enviar Mensagem",
  successMessage: "Mensagem enviada com sucesso!",
  errorMessage: "Erro ao enviar mensagem. Tente novamente.",
};
