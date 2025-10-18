/**
 * TinaCMS Client Helper
 *
 * Funções para buscar conteúdo do TinaCMS de forma tipada e segura.
 * Este arquivo centraliza todas as queries do Tina para facilitar manutenção.
 */

import fs from "fs";
import path from "path";

/**
 * Tipo do conteúdo da Hero Section
 */
export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  slides: Array<{
    id: string;
    image: string;
    alt: string;
  }>;
}

/**
 * Busca o conteúdo da Hero Section
 *
 * Em produção com TinaCloud, isso será substituído por:
 * ```ts
 * const client = createClient();
 * const data = await client.queries.hero({ relativePath: 'hero.json' });
 * return data.data.hero;
 * ```
 */
export async function getHeroContent(): Promise<HeroContent> {
  try {
    const filePath = path.join(process.cwd(), "src/content/sections/hero.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);
    return data;
  } catch (error) {
    console.error("Error loading hero content:", error);
    // Fallback para conteúdo padrão
    return {
      title: "Gestão e Consultoria de Obras",
      subtitle: "Transformando desafios em soluções eficientes",
      description:
        "Somos uma empresa especializada em gestão de projetos de construção civil.",
      ctaLabel: "Solicitar Orçamento",
      ctaHref: "#contato",
      slides: [],
    };
  }
}

/**
 * Tipo genérico para conteúdo de seções
 * Use este tipo como base para criar novos conteúdos editáveis
 */
export interface SectionContent {
  title: string;
  description?: string;
  [key: string]: unknown;
}

/**
 * Helper genérico para buscar conteúdo de seções
 *
 * @param sectionName - Nome do arquivo JSON (sem extensão)
 * @returns Conteúdo da seção
 */
export async function getSectionContent<T = SectionContent>(
  sectionName: string,
): Promise<T | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      "src/content/sections",
      `${sectionName}.json`,
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent) as T;
  } catch (error) {
    console.error(`Error loading ${sectionName} content:`, error);
    return null;
  }
}

/**
 * Utilitário para validar se o conteúdo está disponível
 */
export function hasContent<T>(content: T | null): content is T {
  return content !== null && content !== undefined;
}
