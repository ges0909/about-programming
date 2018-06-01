---
title: Node
lang: en-US
---
# How to update node on Windows

Start a _PowerShell_ as **Administrator**:

```bash
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
npm install --global --production npm-windows-upgrade
npm-windows-upgrade [ --npm-version latest ]
```

See more at [npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade).