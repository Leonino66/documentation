/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    { type: "doc", id: "intro" },
    {
      type: "category",
      label: "Getting Started",
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "getting-started" }],
    },
    {
      type: "category",
      label: "Tutorials",
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "tutorials" }],
    },
    {
      type: "category",
      label: "API",
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "api" }],
    },
  ],
  whitepaperSidebar: [{ type: "autogenerated", dirName: "whitepapers" }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
