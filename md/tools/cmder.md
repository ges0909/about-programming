---
title: Cmder
sidebar: auto
lang: en-US
---
# Cmder

## Installation

Download latest _cmder\_mini.zip_ from [here](https://github.com/cmderdev/cmder/releases/), unzip and save it where ever you want (e.g. `%USERPROFILE%\Programme`) and run `cmder /REGISTER` for context menu integration.

## Configure auto-answer terminate prompt

Open `%USERPROFILE%\Programme\cmder_mini\config\settings` and change to `terminate_autoanswer = 1`.

## Configure enable forward slash completion

Create file `%USERPROFILE%\Programme\cmder_mini\config\cmder.lua`.

```lua
local function force_fwd_slashes(text, first, last)
  clink.slash_translation(1)
  return false
end
clink.register_match_generator(force_fwd_slashes, -1)
```

Details see [Cmder tip: enable forward slash completion](https://keathmilligan.net/cmder-tip-enable-forward-slash-completion/).

## Add wget command

Download _wget-1.20-win64.zip_ from [here](https://eternallybored.org/misc/wget/), unzip and copy all files to _cmder\_mini/bin_ folder.
