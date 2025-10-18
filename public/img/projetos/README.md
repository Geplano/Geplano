# Imagens dos Projetos

Este diretório contém as imagens dos projetos exibidos na seção "Projetos" do
site.

## Estrutura

- Imagens devem estar em formato otimizado (WebP recomendado, JPEG/PNG
  aceitável)
- Tamanho recomendado: 1200x800px (aspect ratio 3:2)
- Nomeação: use kebab-case descritivo (ex: `residencia-luxo-sao-mateus.jpg`)

## Como adicionar novas imagens

1. Adicione a imagem neste diretório
2. Atualize o array `PROJECTS` em
   `src/components/layout/Projetos/projects.types.ts`
3. Use o caminho relativo: `/img/projetos/nome-da-imagem.jpg`

## Placeholders

Enquanto as imagens reais não são adicionadas, usamos placeholders do
placehold.co que são automaticamente otimizados pelo Next.js Image Optimization.
