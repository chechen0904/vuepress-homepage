module.exports = {
  title: "Che Chen",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Research", link: "/research/" },
      { text: "CV", link: "/cv/" },
      { text: "GitHub", link: "https://github.com/chechen0904" }
    ],
    sidebar: {
      '/cv/': genSidebarConfig('CV')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'Music',
      ]
    }
  ]
}

