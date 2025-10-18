import type { ReactNode } from "react";
import { IntlProvider } from "next-intl";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  const supported = ["pt-BR", "en"];
  if (!supported.includes(lang)) return notFound();

  const messagesPath = path.join(
    process.cwd(),
    "src",
    "locales",
    lang,
    "common.json",
  );
  const messages = JSON.parse(fs.readFileSync(messagesPath, "utf-8"));

  return (
    <html lang={lang}>
      <body>
        {/* Se preferir usar NextIntlClientProvider = import dynamic se for client */}
        <IntlProvider locale={lang} messages={messages}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
