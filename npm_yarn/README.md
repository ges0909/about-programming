---
title: Node, npm and yarn
sidebar: auto
lang: en-US
---
# Npm vs. Yarn

Upgrade global packages

* `npm update -g`
* `npm update -g vuepress`

or

* `yarn global upgrade`
* `yarn global upgrade vuepress`

Upgrade all `package.json` dependencies

* `yarn upgrade --latest`

## Yarn vs. Npm

| yarn                          | npm                       |
| ----------------------------- | ------------------------- |
| `yarn global add vuepress`    | `npm install -g vuepress` |
| `yarn global remove vuepress` |                           |
| `yarn autoclean --force`      |                           |
| `yarn cache clean`            |                           |
|                               | `npm list -g`             |
