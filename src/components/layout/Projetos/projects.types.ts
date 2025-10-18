export type ProjectCategory =
  | "all"
  | "residencial"
  | "corporativo"
  | "industrial";

export interface FilterButton {
  id: ProjectCategory;
  label: string;
}

export interface Project {
  id: number;
  category: Exclude<ProjectCategory, "all">;
  image: string;
  title: string;
  location: string;
}

export const FILTER_BUTTONS: FilterButton[] = [
  { id: "all", label: "Todos" },
  { id: "residencial", label: "Residencial" },
  { id: "corporativo", label: "Corporativo" },
  { id: "industrial", label: "Industrial" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    category: "residencial",
    image:
      "https://placehold.co/1200x800/1e3a8a/ffffff?text=Residencia+de+Luxo",
    title: "Residência de Luxo",
    location: "São Mateus, ES",
  },
  {
    id: 2,
    category: "corporativo",
    image:
      "https://placehold.co/1200x800/0f766e/ffffff?text=Edificio+Comercial",
    title: "Edifício Comercial",
    location: "Linhares, ES",
  },
  {
    id: 3,
    category: "industrial",
    image: "https://placehold.co/1200x800/78716c/ffffff?text=Galpao+Industrial",
    title: "Galpão Industrial",
    location: "Sul da Bahia",
  },
  {
    id: 4,
    category: "residencial",
    image: "https://placehold.co/1200x800/1e3a8a/ffffff?text=Casa+de+Campo",
    title: "Casa de Campo",
    location: "São Mateus, ES",
  },
  {
    id: 5,
    category: "corporativo",
    image: "https://placehold.co/1200x800/0f766e/ffffff?text=Clinica+Medica",
    title: "Clínica Médica",
    location: "São Mateus, ES",
  },
  {
    id: 6,
    category: "residencial",
    image:
      "https://placehold.co/1200x800/1e3a8a/ffffff?text=Condominio+Horizontal",
    title: "Condomínio Horizontal",
    location: "Guriri, ES",
  },
  {
    id: 7,
    category: "corporativo",
    image:
      "https://placehold.co/1200x800/0f766e/ffffff?text=Centro+Empresarial",
    title: "Centro Empresarial",
    location: "Vitória, ES",
  },
  {
    id: 8,
    category: "industrial",
    image: "https://placehold.co/1200x800/78716c/ffffff?text=Planta+Industrial",
    title: "Planta Industrial",
    location: "Serra, ES",
  },
  {
    id: 9,
    category: "industrial",
    image: "https://placehold.co/1200x800/78716c/ffffff?text=Armazem+Logistico",
    title: "Armazém Logístico",
    location: "Cariacica, ES",
  },
];
