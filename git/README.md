---
title: Git
sidebar: auto
lang: en-US
---
<!-- markdownlint-disable MD033 -->

# Git

## Init repo

```bash
  mkdir project && cd project
  git init
  git remote add origin https://github.com/ges0909/<project>.git
  git add .
  git commit -a -m "initial commit"
  git push -u origin --all
```

## Gitflow

See [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/).

[Sourcetree](https://www.sourcetreeapp.com/) has built-in _git-flow_ support.

```bash
mkdir project && cd project
git flow init
```

## Branching

```bash
git checkout -b develop
```

## Remote

```bash
git remote -v
git remote rm origin
git remote add origin https://github.com/ges0909/spring-demo.git
```

## Repo renaming

1. If available edit `.git/description` to change the display name.
2. Rename local repo folder with `mv <from> <to>` <sup>1</sup>.
3. Change remote URL with `git remote set-url origin git@github.com:ges0909/howto.git`.
4. Rename project on remote (see `Settings` on [Github](https://github.com/)).

  ::: tip
  Take care about the right git protocol `git` or `https`.
  :::

<span style="font-size:smaller">[1]: `<..>` denotes placeholders</span>
