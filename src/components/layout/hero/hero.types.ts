/**
 * Hero Section Types
 *
 * Tipos para a seção hero do site.
 * Os dados vêm do TinaCMS (src/content/sections/hero.json)
 */

/**
 * Slide individual do carrossel
 */
export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
}

/**
 * Conteúdo completo da Hero Section
 * Estes dados são editáveis via TinaCMS em /admin
 */
export interface HeroContent {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  slides: HeroSlide[];
}

/**
 * Props para componentes Hero
 */
export type HeroProps = {
  content?: HeroContent;
};
