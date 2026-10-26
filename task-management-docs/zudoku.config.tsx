import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  metadata: {
    title: "Task Management API",
    description:
      "Documentation for the Task Management REST API and TypeScript SDK.",
  },

  docs: {
    files: "/pages/**/*.{md,mdx}",
  },

  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],

  navigation: [
    {
      type: "category",
      label: "Documentation",
      icon: "book-open",
      items: [
        {
          type: "doc",
          file: "index",
          path: "/",
          label: "Home",
        },
        {
          type: "doc",
          file: "installation",
          path: "/installation",
          label: "Installation",
        },
        {
          type: "doc",
          file: "authorization",
          path: "/authorization",
          label: "Authorization",
        },
        {
          type: "doc",
          file: "about",
          path: "/about",
          label: "About",
        },
      ],
    },
    {
      type: "link",
      label: "API Reference",
      to: "/api",
      icon: "code",
    },
  ],
};

export default config;