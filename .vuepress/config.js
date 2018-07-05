module.exports = {
  title: "How to",
  description: "A personal collection of my how to's",
  port: 2511,
  serviceWorker: true,
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'JS',
        items: [
          { text: 'Vuepress', link: '/vuepress/' },
          { text: 'Node', link: '/node/' },
          { text: 'Yarn/Npm', link: '/yarn_npm/' }
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
