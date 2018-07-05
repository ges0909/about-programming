---
title: Vuepress
sidebar: auto
lang: en-US
# prev: /
# next: /node/
---
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

* install _vuepress_ globally

```bash
npm install -g vuepress
# or
yarn global add vuepress
```

* create a project folder and navigate to it
* create a file _README.md_ and edit it
* starts a web server with live reloading and deploys your assets to it

```bash
vuepress dev
```

* browse to [http://localhost:8080](http://localhost:8080)
* build to static files and stores your minified assets in `.vuepress/dist`

```bash
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

## Netlify

| Deploy settings   |                  |
| ----------------- | ---------------- |
| Build command     | `npm run build`  |
| Publish directory | `.vuepress/dist` |
| Production branch | `develop`        |
