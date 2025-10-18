import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "hero",
        label: "Hero Section",
        path: "src/content/sections",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "hero",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título Principal",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descrição",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "ctaLabel",
            label: "Texto do Botão",
            required: true,
          },
          {
            type: "string",
            name: "ctaHref",
            label: "Link do Botão",
            required: true,
          },
          {
            type: "object",
            name: "slides",
            label: "Slides",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.alt || "Slide" };
              },
            },
            fields: [
              {
                type: "string",
                name: "id",
                label: "ID",
                required: true,
              },
              {
                type: "string",
                name: "image",
                label: "URL da Imagem",
                required: true,
                description:
                  "Cole a URL da imagem (ex: https://images.unsplash.com/...) ou faça upload",
              },
              {
                type: "string",
                name: "alt",
                label: "Texto Alternativo",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
