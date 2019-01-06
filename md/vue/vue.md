---
title: Vue
sidebar: auto
lang: en-US
---
# Vue

## Vue CLI

### Install Vue CLI

```sh
# install vue cli (version 3)
yarn global add @vue/cli
# test installation
vue --version
```

### Create project

```sh
# initial setup is comitted to branch 'master'
vue create demo-project
# change into project dir.
cd  demo-project
# optional: initialize repo for 'git flow'; checked-out branch will be 'develop'
git flow init
```

### Run project

```sh
# serve .js or .vue file in development mode
yarn serve
```

### Add Less pre-processor

```sh
yarn add less-loader less --save-dev
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

Components created using `Vue.component()` is globally registered and may used from anywhere in the application.

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

## Debugging a Vue app with VS Code

Install VS code extension [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and/or [Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-firefox-debug).

Add file `vue.config.js` to your project root.

```js
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  }
}
```

Add file `.vscode/launch.json` and insert launch configuration for _Chrome_ and/or _Firefox_.

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
    },
    {
      "type": "firefox",
      "request": "launch",
      "name": "vuejs: firefox",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src",
      "pathMappings": [
        {
          "url": "webpack:///src/",
          "path": "${webRoot}/"
        }
      ]
    }
  ]
}
```

Start _Vue_ development server.

```sh
yarn serve
```

Set breakpoint(s) and run debugging via launch configuration.
