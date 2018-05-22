module.exports = {
  title: 'VuePress Doc Pipeline',
  description: 'Proof of Concept for a document pipeline using VuePress and Pandoc.',
  port: 2511,
  themeConfig: {
    sidebar: [
      '/',
      '/src/1-images',
      '/src/2-components',
      '/src/3-templates',
      '/src/4-containers',
      '/src/9-vuejs',
      '/src/contact',
      '/src/about',
      '/src/sonarlint',
    ],
    sidebarDepth: 0
  }
};