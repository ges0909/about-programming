---
title: Vuepress
sidebar: auto
lang: en-US
# prev: /
# next: /node/
---
<!-- markdownlint-disable MD033 -->

# Vuepress

Where to start?

* :heart: [An Introduction to VuePress](https://alligator.io/vuejs/vuepress-introduction/)
* [VuePress - Vue-powered Static Site Generator](https://vuepress.vuejs.org/)
* [Getting Started with Vuepress](https://medium.com/@laurandidi21/getting-started-with-vuepress-ebf1b0ff6c0d)

::: tip
Before starting you have to install [Node.js](https://nodejs.org/en/)
with _npm_ on your local machine. If you prefer you can additionally
install [yarn](https://yarnpkg.com/lang/en/) as alternative to
[npm](https://www.npmjs.com/).
:::

## New project

* install _Vuepress_

```bash
# package.json will be created if not exist
yarn global add vuepress
# or for netlify deploy
yarn add vuepress --dev
```

* create a project folder and navigate to it
* create a file _README.md_ and edit it

```bash
# start web server with live reloading and browse to http://localhost:8080
vuepress dev
# build and store minified assets in `.vuepress/dist`
vuepress build
```

## Image

```js
![Freche Mira](./img/freche-mira.jpg)
```

renders to

![Freche Mira](./img/freche-mira.jpg)

## Component

```js
<template>
  <div class="number-modifier">
    <button @click="increment()">+</button>
    <strong> {{value}} </strong>
    <button @click="decrement()">-</button>
  </div>
</template>
<script>
export default {
  props: ['start'],
  data() {
    return {
      value: this.start
    }
  },
  methods: {
    increment() { this.value++ },
    decrement() { this.value-- }
  }
}
</script>
```

```js
<NumberModifier :start="5"></NumberModifier>
```

renders to

<NumberModifier :start="5"></NumberModifier>

Components will be stored and detected automatically in `.vuepress/components`.

## Template

```js
<ul>
  <li v-for="i of 3"> {{i}} </li>
</ul>
```

renders to

<ul>
  <li v-for="i of 3"> {{i}} </li>
</ul>

## Expression

```js
{{ 1 + 2 + 3 + 4 + 5 }}
```

renders to

{{ 1 + 2 + 3 +4  +5 }}

## Custom container

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

## Loader

```bash
yarn add sass-loader node-sass --dev
```

## Other modules

### Vue Cute Timeline

```bash
yarn add vue-cute-timeline
```

Register component in file `.vuepress/enhance.App.js`.

```js
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('Timeline', Timeline);
  Vue.component('TimelineItem', TimelineItem);
  Vue.component('TimelineTitle', TimelineTitle);
};
```

### Framework 7

```bash
yarn add framework7
yarn add framework7-vue
```

## Custom theme

```bash
yarn vuepress eject
```

```bash
cd .vuepress
yarn add quasar
```

See more:

* [How to create a custom VuePress theme with Vuetify](https://medium.com/vue-mastery/how-to-create-a-custom-vuepress-theme-with-vuetify-651b7d7e5092)
* [Custom theme](https://vuepress.vuejs.org/guide/custom-themes.html#site-and-page-metadata)

## Netlify

Add _vuepress_ as local dependency.

```bash
yarn add vuepress --dev
```

Edit _scripts_ section to generated _package.json_.

```json
{
  "scripts": {
    "dev": "vuepress dev",
    "build": "vuepress build"
  },
  "devDependencies": {
    "vuepress": "^0.10.2"
  }
}
```

Configure deploy settings on [netlify](https://www.netlify.com/).

| Deploy settings   |                  |
| ----------------- | ---------------- |
| Build command     | `yarn build`     |
| Publish directory | `.vuepress/dist` |
| Production branch | `develop`        |
