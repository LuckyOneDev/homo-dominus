import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Homo Dominus",
  tagline: "",
  favicon: "img/favicon.ico",

  // Enable Mermaid diagrams in Markdown/MDX
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true,
  },

  // Set the production url of your site here
  url: "https://luckyonedev.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/homo-dominus/",

  // GitHub pages deployment config.
  organizationName: "luckyonedev",
  projectName: "homo-dominus",
  deploymentBranch: "build",
  onBrokenLinks: "throw",
  trailingSlash: false,

  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  themeConfig: {
    image: "img/logo.webp",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Homo Dominus",
      logo: {
        alt: "Homo Dominus Logo",
        src: "img/logo.webp",
      },
      items: [],
    },
    footer: {
      style: "dark",
      copyright: `© Ivan Mokshin`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["mermaid"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
