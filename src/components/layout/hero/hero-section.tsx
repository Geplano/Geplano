import { HeroContainer } from "./hero-container";
import { HeroContent } from "./hero-content";
import { HeroOverlay } from "./hero-overlay";
import { HeroSlider } from "./hero-slider";
import { getHeroContent } from "@/lib/tina-client";

/**
 * Hero Section - Componente Principal
 *
 * Este componente é um Server Component que busca dados do TinaCMS.
 * Os dados podem ser editados em /admin na coleção "Hero Section".
 *
 * Fluxo:
 * 1. Busca conteúdo de src/content/sections/hero.json
 * 2. Passa dados para componentes client (HeroContent, HeroSlider)
 * 3. Em produção com TinaCloud, os dados virão da API do Tina
 */
export async function HeroSection() {
  // Busca conteúdo do TinaCMS
  const heroContent = await getHeroContent();

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-white relative w-full"
    >
      <HeroSlider slides={heroContent.slides} />
      <HeroOverlay />
      <HeroContainer>
        <HeroContent content={heroContent} />
      </HeroContainer>
    </section>
  );
}
