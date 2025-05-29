export default function preset(context, opts = {}) {
  return {
    themes: [["docusaurus-theme-awesome", opts.theme]],
    plugins: [
      // Using three docs plugins at the same time!
      // Assigning a unique ID for each without asking the user to do it
      ["@docusaurus/plugin-content-docs", { ...opts.docs1, id: "docs1" }],
      ["@docusaurus/plugin-content-docs", { ...opts.docs2, id: "docs2" }],
      ["@docusaurus/plugin-content-docs", { ...opts.docs3, id: "docs3" }],
    ],
  };
}
