module.exports = {
  base: '/',
  title: "How to",
  description: "A personal collection of my how to's",
  port: 2511,
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'JS',
        items: [
          { text: 'Vue', link: '/vue/' },
          { text: 'Vuepress', link: '/vuepress/' },
          { text: 'Node + Yarn + Npm', link: '/node_npm_yarn/' }
        ]
      },
      {
        text: 'Java',
        items: [
          { text: 'Date/Time', link: '/date_time/' },
          { text: 'Streams', link: '/streams/' }
        ]
      },
      {
        text: 'Git',
        items: [
          { text: 'Git', link: '/git/' },
          { text: 'Gitbook', link: '/gitbook/' }
        ]
      }
    ],
    sidebarDepth: 1
  }
};
