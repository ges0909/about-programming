---
title: Git
sidebar: auto
lang: en-US
---
# Git

Looking for a fast and sleek Git client, then see [Fork](https://git-fork.com/).

## Setup _.gitconfig_

- `git config --global user.name "First Last"`
- `git config --global user.email First.Last@Mail.com`

## Init Repository

- `mkdir project && cd project`
- `git init` or `git flow init`
- `git remote add origin git@github.com:<account>/<repo>.git`
- `git add .`
- `git commit -a -m "initial commit"`
- `git push -u origin --all`

## Checkout Branch

- `git checkout -b develop`

## Remote

- `git remote -v`
- `git remote rm origin`
- `git remote add origin git@github.com:<account>/<repo>.git`

## Repository renaming

- If available edit `.git/description` to change the display name.
- Rename local repository folder with `mv <from> <to>` .
- Change remote URL with `git remote set-url origin git@github.com:<account>/<repo>.git`.
- Rename project on remote (see `Settings` on [Github](https://github.com/)).

Take care about the right git protocol `git` (may be also `ssh`) or `https`.

## Create public/private key pair

- `cd ~/.ssh && ssh-keygen`
- `cat id_rsa.pub | clip`
- add public key to Git server
