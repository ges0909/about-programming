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
        text: 'Java',
        items: [ { text: 'Streams', link: '/md/streams' }, { text: 'Unit Test', link: '/md/unit-test' } ]
      },
      {
        text: 'JHipster',
        items: [ { text: 'JHipster', link: '/md/jhipster' } ]
      },
      {
        text: 'Git',
        items: [ { text: 'Git', link: '/md/git' } ]
      },
      {
        text: 'Gradle',
        items: [ { text: 'Gradle', link: '/md/gradle' } ]
      },
      {
        text: 'Docker',
        items: [ { text: 'Docker', link: '/md/docker' } ]
      },
      {
        text: 'Javascript',
        items: [
          { text: 'Vue', link: '/md/vue' },
          { text: 'Vuepress', link: '/md/vuepress' },
          { text: 'Yarn/Npm', link: '/md/npm-yarn' },
          { text: 'Serverless', link: '/md/serverless' },
          { text: 'Gitbook', link: '/md/gitbook' }
        ]
      }
    ],
    sidebarDepth: 1
  }
};
