export interface AppFeature {
  id: string;
  title: string;
  imageUrl: string;
}

export const APP_FEATURES: AppFeature[] = [
  {
    id: "cronograma",
    title: "Acompanhamento do Cronograma",
    imageUrl: "https://placehold.co/300x650/00613A/FFFFFF?text=Cronograma",
  },
  {
    id: "financeiro",
    title: "Relatórios Financeiros",
    imageUrl: "https://placehold.co/300x650/00613A/FFFFFF?text=Financeiro",
  },
  {
    id: "compras",
    title: "Aprovação de Compras",
    imageUrl: "https://placehold.co/300x650/00613A/FFFFFF?text=Compras",
  },
  {
    id: "fotos",
    title: "Diário de Obra com Fotos",
    imageUrl: "https://placehold.co/300x650/00613A/FFFFFF?text=Fotos",
  },
];
