import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
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
        <NextIntlClientProvider locale={lang} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
