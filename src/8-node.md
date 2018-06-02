---
title: Node
lang: en-US
---
# Node

## How to update node on Windows

* Start a _PowerShell_ as **Administrator**.
* Run following commands in it:

```bash
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
npm install --global --production npm-windows-upgrade
npm-windows-upgrade
```

* See more at [npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade).

## How to upgrade other global packages

* `npm update -g vuepress`
* `npm update -g`
