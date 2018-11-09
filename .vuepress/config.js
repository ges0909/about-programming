module.exports = {
  base: '/',
  title: 'How-to',
  description: "A personal collection of how-to's",
  port: 2511,
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Js',
        items: [
          { text: 'Vue', link: '/vue/' },
          { text: 'Vuepress', link: '/vuepress/' },
          { text: 'Yarn / Npm', link: '/npm_yarn/' }
        ]
      },
      {
        text: 'Java',
        items: [
          { text: 'Unit-Test', link: '/java/unittest/' },
          { text: 'Streams', link: '/java/streams/' }
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'Git', link: '/git/' },
          { text: 'Gradle', link: '/gradle/' },
          { text: 'JHipster', link: '/jhipster/' },
          { text: 'Docker', link: '/docker/' },
          { text: 'Gitbook', link: '/gitbook/' }
        ]
      }
    ],
    sidebarDepth: 1
  }
};
