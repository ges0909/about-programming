---
title: Vue
sidebar: auto
lang: en-US
---
# Vue

Read [The Vue Handbook: a thorough introduction to Vue.js](https://medium.freecodecamp.org/the-vue-handbook-a-thorough-introduction-to-vue-js-1e86835d8446).

## Install Vue CLI

Read [Vue CLI 3 — the deep dive](https://blog.logrocket.com/vue-cli-3-the-deep-dive-41dff070ac4a)!

```bash
# install vue cli (version 3)
yarn global add @vue/cli
# test installation
vue -V
# create new project
vue create <project name>
# or create with presets stored in ~/.vue
vue create -p <preset name> <project name>
# serve .js or .vue file in development mode
vue serve <file name>
# build production ready bundle .js or .vue file
vue build <file name>
```

## Directives

| Directive |
|:----------|
| v-text    |
| v-html    |
| v-once    |
| v-bind    |
| v-model   |
| v-show    |
| v-if      |
| v-for     |
| v-on      |

## Components

### Root

```js
new Vue({
  /* options */
})
```

### Global

Components created using `Vue.component()` is globally registered and may used
from anywhere in the application.

```js
<div id="app">
  <user-name name="Flavio"></user-name>
</div>

// use camel or pascal case for naming
Vue.component('component-name', {
  /* options */
})
```

### Local

```js
const Sidebar = {
  template: '<aside>Sidebar</aside>'
}

new Vue({
  el: '#app',
  components: {
    Sidebar
  }
})
```

### Single File

`.vue` files cannot be used without a Webpack setup.
