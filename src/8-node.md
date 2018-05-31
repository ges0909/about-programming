---
title: Node
lang: en-US
---
# How to update node on Windows

* [npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade)

1. run _PowerShell_ as _Administrator_
2. `Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force`
3. `npm install --global --production npm-windows-upgrade`
4. `npm-windows-upgrade [ --npm-version latest ]`