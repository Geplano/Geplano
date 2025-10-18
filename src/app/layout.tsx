import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import "@/styles/taruno-fonts.css";
import type { ReactNode } from "react";
import { ThemeProviderClient } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Geplano - Gestão e Consultoria de Obras",
  description:
    "Somos uma empresa especializada em gestão e consultoria de obras, preparada para atender clientes exigentes que valorizam qualidade, tranquilidade e economia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} font-montserrat antialiased`}
        suppressHydrationWarning
      >
        <ThemeProviderClient>{children}</ThemeProviderClient>
      </body>
    </html>
  );
}
