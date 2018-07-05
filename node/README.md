---
title: Node
sidebar: auto
lang: en-US
---
# Node

## Update on windows

* start a _PowerShell_ as **Administrator** and run commands

```powershell
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
npm install --global --production npm-windows-upgrade
npm-windows-upgrade
```

* see more at [npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade)

## Upgrade other global packages

```bash
npm update -g
npm update -g vuepress
# or
yarn global upgrade
yarn global upgrade vuepress
```