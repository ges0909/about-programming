module.exports = {
  base: '/',
  title: 'Howto about programming',
  description: 'A personal collection of Howto about programming in Java, etc.',
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
          { text: 'Vue', link: '/js/vue' },
          { text: 'Vuepress', link: '/js/vuepress' },
          { text: 'Npm vs. Yarn', link: '/js/npm-yarn' },
          { text: 'Serverless', link: '/js/serverless' }
        ]
      },
      {
        text: 'Java',
        items: [
          { text: 'Stream', link: '/java/stream' },
          { text: 'Optional', link: '/java/optional' },
          { text: 'Unit Test', link: '/java/unit-test' }
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'Git', link: '/tools/git' },
          { text: 'Gradle', link: '/tools/gradle' },
          { text: 'JHipster', link: '/tools/jhipster' },
          { text: 'Docker', link: '/tools/docker' },
          { text: 'Gitbook', link: '/tools/gitbook' }
        ]
      }
    ],
    sidebarDepth: 1
  }
};
