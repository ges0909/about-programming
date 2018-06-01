---
title: Vues 2
lang: en-US
---
# Vue 2

## Project scaffolding

1. Install vue command line interface globally.
2. `vue init`: Scaffold project with **webpack** template.
3. `install`: Install all dependencies.
4. `run dev`: Start web server in development mode and navigate to [http://localhost:8080](http://localhost:8080).
5. `run build`: Put all files in **dist** folder for production.

Npm

```bash
npm install -g vue-cli
vue init webpack vue-app
cd vue-app
npm install
npm run dev
npm run build
```

Yarn

```bash
yarn global ad vue-cli
vue init webpack vue-app
cd vue-app
yarn [install]
yarn run dev
yarn run build
```