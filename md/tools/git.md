---
title: Git
sidebar: auto
lang: en-US
---
# Git

Looking for a fast and sleek Git client, see [Fork](https://git-fork.com/).

## Git config

1. `git config --global user.name "First Last"`
1. `git config --global user.email first.last@gmail.com`

## Init repo

1. `mkdir project && cd project`
1. `git init`
1. `git remote add origin git@github.com:<account>/<repo>.git`
1. `git add .`
1. `git commit -a -m "initial commit"`
1. `git push -u origin --all`

## Git flow

1. `git flow init`

## Branching

1. `git checkout -b develop`

## Remote

1. `git remote -v`
1. `git remote rm origin`
1. `git remote add origin git@github.com:<account>/<repo>.git`

## Repo renaming

1. If available edit `.git/description` to change the display name.
2. Rename local repo folder with `mv <from> <to>` .
3. Change remote URL with `git remote set-url origin git@github.com:<account>/<repo>.git`.
4. Rename project on remote (see `Settings` on [Github](https://github.com/)).

::: tip
Take care about the right git protocol `git` (may be also `ssh`) or `https`.
:::