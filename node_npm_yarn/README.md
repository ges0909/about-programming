---
title: Node, npm and yarn
sidebar: auto
lang: en-US
---
# Node, npm and yarn

## Node

### Update on windows

* start a _PowerShell_ as **Administrator** and run commands

```powershell
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
npm install --global --production npm-windows-upgrade
npm-windows-upgrade
```

See more:

* [npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade)

### Upgrade other global packages

```bash
npm update -g
npm update -g vuepress
# or
yarn global upgrade
yarn global upgrade vuepress
```

## Yarn vs. Npm

| yarn                          | npm                       |
| ----------------------------- | ------------------------- |
| `yarn global add vuepress`    | `npm install -g vuepress` |
| `yarn global remove vuepress` |                           |
| `yarn autoclean --force`      |                           |
| `yarn cache clean`            |                           |
|                               | `npm list -g`             |
