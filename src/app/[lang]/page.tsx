"use client";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();
  return (
    <main className="min-h-screen p-8 bg-app text-app">
      <h1 className="text-4xl font-bold">{t("hero_title")}</h1>
    </main>
  );
}
