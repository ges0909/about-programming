---
title: Node
lang: en-US
---
# How to update node on Windows

* [npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade)
* run _PowerShell_ as _Administrator_

```bash
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
npm install --global --production npm-windows-upgrade
npm-windows-upgrade [ --npm-version latest ]
```