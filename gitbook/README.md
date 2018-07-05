---
title: Gitbook
sidebar: auto
lang: en-US
---
# Gitbook

```bash
# install gitbook cli
yarn add gitbook-cli --dev
# create 'docs' folder and initialize project
yarn gitbook init docs
# run server
yarn gitbook serve docs
# build static website
yarn gitbook build [--debug] docs
```

See [gitbook toolchain documentation](https://toolchain.gitbook.com/).

## Pdf

* install [calibre-ebook](https://calibre-ebook.com/download_windows64) locally
* following commands require new shell because of updated _path_ variable

```bash
yarn add ebook-convert --dev
yarn gitbook pdf docs/ docs/mybook.pdf
```

## Webpack

Copy generated _gitbook_ files as static assets to your project's `dist` folder.

```bash
yarn add copy-webpack-plugin --dev
```

Add to _webpack.config.js_.

```js
plugins: [ 
  new CopyWebpackPlugin([ 
    {
      from: path.resolve(__dirname, '../docs/_book'),
      to: config.dev.assetsSubDirectory + '/docs',
      ignore: ['.*']
    }
  ])
]
```
