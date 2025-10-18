"use client";

import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";

export async function loadLocaleMessages(locale: string) {
  return (await import(`../locales/${locale}/common.json`)).default;
}

export function IntlProviderWrapper({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: string;
  messages: Record<string, unknown>;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
