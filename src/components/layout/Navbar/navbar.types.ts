export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#solucao", label: "Nossa Solução" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
  {
    href: "https://www.obraprimaweb.com.br/portalcliente/geplanoengenharia",
    label: "Portal do Cliente",
    external: true,
  },
];
