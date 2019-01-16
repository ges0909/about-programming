module.exports = {
  base: '/',
  title: 'About Programming',
  description: 'in Java, Spring Boot and Vue.',
  port: 9961,
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Java',
        items: [
          { text: 'Stream', link: '/md/java/stream' },
          { text: 'Optional', link: '/md/java/optional' },
          { text: 'Lambda', link: '/md/java/lambda' },
          { text: 'AOP', link: '/md/java/aop' },
          { text: 'Unit Test', link: '/md/java/unittest' }
        ]
      },
      {
        text: 'Spring',
        items: [
          { text: 'Spring Boot', link: '/md/spring/springboot' },
          { text: 'JHipster', link: '/md/spring/jhipster' }
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'Git', link: '/md/tools/git' },
          { text: 'Gradle', link: '/md/tools/gradle' },
          { text: 'Docker', link: '/md/tools/docker' },
          { text: 'Cmder', link: '/md/tools/cmder' }
          { text: 'Ghost', link: '/md/tools/ghost' }
        ]
      },
      {
        text: 'Vue',
        items: [ { text: 'Vue', link: '/md/vue/vue' }, { text: 'Vuepress', link: '/md/vue/vuepress' } ]
      },
      {
        text: 'Misc',
        items: [
          { text: 'Npm/Yarn', link: '/md/misc/npm-yarn' },
          { text: 'Elasticsearch', link: '/md/misc/elasticsearch' },
          { text: 'Serverless', link: '/md/misc/serverless' },
          { text: 'Gitbook', link: '/md/misc/gitbook' }
        ]
      }
    ],
    sidebarDepth: 1
  }
};
