---
title: Vue
sidebar: auto
lang: en-US
---
# Vue

* see [The Vue Handbook: a thorough introduction to Vue.js](https://medium.freecodecamp.org/the-vue-handbook-a-thorough-introduction-to-vue-js-1e86835d8446)

## Vue cli

→ [Vue CLI 3 — the deep dive](https://blog.logrocket.com/vue-cli-3-the-deep-dive-41dff070ac4a)

```bash
# install vue cli (version 3)
yarn global add @vue/cli
# test installation
vue -V
# create new project => !!! initial setup is comitted on 'master' !!!
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

Root:

```js
new Vue({
  /* options */
})
```

Global:

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

Local:

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

Single File:

`.vue` files cannot be used without a Webpack setup.

## Deployment

### Netlify

→ [How to deploy your Vue app with Netlify in less than 2 min!](https://medium.com/vuejoy/how-to-deploy-your-vue-app-with-netlify-in-less-than-2-min-d6ab26c6557d)

### Firebase

→ [Deploy a Vue.js App with Firebase Hosting](https://medium.com/@ShayneOSullivan/deploy-a-vue-js-app-with-firebase-hosting-3fc420cf3998)

Install [firebase-tools](https://github.com/firebase/firebase-tools) to get [Firebase CLI](https://firebase.google.com/docs/cli).

```bash
yarn global add firebase-tools
```

Build application into `./dist` folder.

```bash
cd <app-dir>
yarn build
```

Connect local machine to Firebase account and grant access to projects.

```bash
# if running in 'bash' use option '--interactive'
firebase login --interactive
# if selection will not work in bash use powershell or other
firebase init
```

Deploy application.

```bash
firebase deploy
```

## Debug

→ [Vue.js debugging in Chrome and VS Code](https://github.com/Microsoft/vscode-recipes/blob/master/vuejs-cli/README.md)

[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension has to be installed.

### Update `config/index.js`

```js
devtool: 'source-map',
```

### Configue `.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "vuejs: chrome",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src",
      "breakOnLoad": true,
        "sourceMapPathOverrides": {
          "webpack:///src/*": "${webRoot}/*"
        }
    }
  ]
}
```
