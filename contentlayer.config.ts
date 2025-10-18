import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    coverImage: { type: "string", required: false },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Project],
});
