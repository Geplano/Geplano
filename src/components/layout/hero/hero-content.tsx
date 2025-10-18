import type { HeroContent as HeroContentType } from "./hero.types";

interface HeroContentProps {
  content: HeroContentType;
}

/**
 * Hero Content Component
 *
 * Exibe o conteúdo textual da hero section (título, descrição, CTA).
 * Recebe dados dinâmicos do TinaCMS via props.
 *
 * @param content - Conteúdo editável da hero section
 */
export function HeroContent({ content }: HeroContentProps) {
  const { title, description, ctaHref, ctaLabel } = content;

  return (
    <div className="text-center z-10 p-4">
      {/* Título Principal */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight md:tracking-normal leading-tight break-words text-white drop-shadow-lg">
        {title}
      </h1>

      {/* Descrição */}
      <p className="mt-4 w-full max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
        {description}
      </p>

      {/* Call to Action */}
      <a
        href={ctaHref}
        className="mt-8 inline-block bg-geplano-gold text-white font-bold py-3 px-8 rounded-lg uppercase tracking-widest hover:bg-opacity-90 transition-colors"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
