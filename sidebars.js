// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "index",
    "list",
    "grid",
    "api",
    {
      type: "category",
      label: "Recipes",
      collapsed: false,
      items: [
        "recipes/infinite-scrolling",
        "recipes/combo-box",
        "recipes/chat-channel",
        "recipes/virtualized-masonry",
      ],
    },
  ],
}

module.exports = sidebars
