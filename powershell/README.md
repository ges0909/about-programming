---
title: PowerShell
sidebar: auto
lang: en-US
---
# PowerShell

## Prompt

Edit profile (`notepad $profile`):

```powershell
function prompt {
  $p = Split-Path -leaf -path (Get-Location)
  "$p> "
}
```

See [Configure the Windows Powershell to display only the current folder name in the shell prompt](https://superuser.com/questions/446827/configure-the-windows-powershell-to-display-only-the-current-folder-name-in-the).
