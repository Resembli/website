// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "react-virtualized-window",
  url: "https://react-virtualized-window.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",
  favicon: "favicon.ico",
  organizationName: "Resembli",
  projectName: "Resembli UI",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Resembli/website/edit/main/docs/",
        },
        blog: {
          blogTitle: "Resembli Blog",
          blogDescription: "The Resembli organization blog",
          postsPerPage: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/main.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig;} */
    {
      algolia: {
        appId: "PZCG2I7O2N",
        apiKey: "b3f137f34026b6a169c4cfb67459553b",
        indexName: "le-ui",
      },
      defaultMode: "dark",
      announcementBar: {
        id: "Support Us",
        content:
          'Want to support us? Consider giving us a &#9733 on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Resembli/react-virtualized-window">GitHub</a>',
        textColor: "#1eff00",
        backgroundColor: "#18191a",
      },
      navbar: {
        title: "React Virtualized Window",
        logo: {
          alt: "Resembli logo",
          src: "resembli-icon.svg",
        },
        items: [
          { to: "blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Resembli/react-virtualized-window",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Resembli.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
}

module.exports = config
