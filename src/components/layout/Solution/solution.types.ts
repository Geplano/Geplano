export type TabId = "pilares" | "vantagens" | "o-que-entregamos";

export interface TabButton {
  id: TabId;
  label: string;
}

export interface PillarItem {
  title: string;
  description: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
}

export interface DeliverableItem {
  number: string;
  description: string;
}

export const TAB_BUTTONS: TabButton[] = [
  { id: "pilares", label: "Os 3 Pilares" },
  { id: "vantagens", label: "Suas Vantagens" },
  { id: "o-que-entregamos", label: "O que Entregamos" },
];

export const PILLARS: PillarItem[] = [
  {
    title: "Gestão Completa",
    description:
      "Assumimos toda a gestão da obra, do pré-obra ao pós-obra, cuidando de cada detalhe operacional e burocrático. Com total transparência e foco no melhor custo-benefício, entregamos tranquilidade para o cliente e também para o arquiteto, que pode confiar que seu projeto será executado conforme foi idealizado.",
  },
  {
    title: "Faturamento Direto",
    description:
      "Todas as despesas referentes à aprovação, execução e regularização da obra são faturados diretamente em nome do cliente. Isso garante controle total e visibilidade dos custos. O cliente paga exatamente o preço de custo, sem qualquer margem de lucro e impostos embutidos pela Geplano, inexistindo nessa parceria a bitributação.",
  },
  {
    title: "Taxa de Administração",
    description:
      "A remuneração da Geplano é clara e justa, sendo definida por uma taxa de administração calculada sobre o custo total da obra ou por um valor fixo mensal. Nossa transparência é nossa força: não vendemos produtos ou serviços com margem de lucro ao cliente, ele paga exatamente o que sua obra vale e com uma gestão especializada.",
  },
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    title: "Acompanhamento do Custo Real",
    description:
      "Como o cliente participa de todos pagamentos, ele tem acesso a informações detalhadas sobre tudo o que está sendo utilizado e seus custos efetivos, garantindo conhecimento do custo real da obra.",
  },
  {
    title: "Economia no Custo da Obra",
    description:
      "Como não ocorre a bitributação e a inclusão de margem de lucro sobre materiais, mão de obra e equipamentos, o cliente paga exatamente pelo que está utilizando, resultando em uma economia significativa.",
  },
  {
    title: "Flexibilidade de Alterações",
    description:
      "Nossa solução oferece máxima flexibilidade, permitindo alterações no projeto sem a necessidade de aditivos na remuneração da Geplano. O custo de qualquer alteração é assumido pelo cliente a preço de custo.",
  },
  {
    title: "Redução na Perda de Materiais",
    description:
      "Nossa gestão especializada garante o controle rigoroso sobre o uso e armazenamento de materiais e a redução do desvio e desperdício, assegurando que cada item seja utilizado de maneira eficiente e econômica.",
  },
];

export const DELIVERABLES: DeliverableItem[] = [
  {
    number: "01",
    description:
      "Contratação / Análise de Projetos e Acompanhamento das Aprovações",
  },
  {
    number: "02",
    description: "Orçamento, Planejamento e Controle Financeiro da Obra",
  },
  {
    number: "03",
    description: "Planilhas do Financiamento e Gerenciamento das Medições",
  },
  {
    number: "04",
    description: "Recrutamento e Seleção da M.O e Prestadores de Serviços",
  },
  {
    number: "05",
    description:
      "Regularização na Prefeitura, Receita Federal e no Cartório de R.I.",
  },
  {
    number: "06",
    description: "Supervisão da M.O. e dos demais Prestadores de Serviços",
  },
  {
    number: "07",
    description: "Suprimentos (Cotação, Negociação, Compra e Locação)",
  },
  {
    number: "08",
    description: "Monitoramento da Qualidade (Processos Produtivos)",
  },
  {
    number: "09",
    description: "Monitoramento da Saúde e Segurança no Trabalho",
  },
  {
    number: "10",
    description: "Elaboração do Manual do Proprietário",
  },
];
