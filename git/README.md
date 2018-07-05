---
title: Git
sidebar: auto
lang: en-US
---
# Git

## Init repo

```bash
  git init
  git remote add origin https://github.com/ges0909/<project>.git
  git add .
  git commit -a -m "initial commit"
  git push -u origin --all
```

## Branching

```bash
git checkout -b develop
```

## Rename repo

1. If available edit `.git/description` to change the display name.
2. Rename local repo folder with `mv <from> <to>` <sup>1</sup>.
3. Change remote URL with `git remote set-url origin https://github.com/ges0909/<to>.git`.
4. Rename project on remote (see `Settings` on [Github](https://github.com/)).

  ::: tip
  Take care about the right git protocol `git` or `https`.
  :::

<span style="font-size:smaller">[1]: `<..>` denotes placeholders</span>
