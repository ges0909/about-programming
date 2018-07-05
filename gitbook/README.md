---
title: Gitbook
sidebar: auto
lang: en-US
---
# Gitbook

```bash
# install gitbook cli
yarn add gitbook-cli --dev
# install http-server
yarn add http-server
# initialize project
yarn gitbook init
# run server
yarn gitbook serve
# build static website
yarn gitbook build --debug
# run website (requires 'node.js')
yarn http-server _book 
```

See more [Gitbook Toolchain](https://toolchain.gitbook.com/) and [http-server](https://github.com/indexzero/http-server)

## Pdf

* install [calibre-ebook](https://calibre-ebook.com/download_windows64) locally
* following commands require new shell because of updated _path_ variable

```bash
yarn add ebook-convert --dev
yarn gitbook pdf docs/ docs/mybook.pdf
```

## Optional: Webpack

Copy generated _gitbook_ files as static assets to your project's `dist` folder.

```bash
yarn add copy-webpack-plugin --dev
```

Add to _webpack.config.js_.

```js{4,5}
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
