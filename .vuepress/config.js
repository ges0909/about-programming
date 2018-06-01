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
      '/src/8-node',
      '/src/9-vue',
      '/src/contact',
      '/src/about'
    ],
    sidebarDepth: 0
  }
};