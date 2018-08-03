---
title: JHipster
sidebar: auto
lang: en-US
---
# JHipster

Prerequisites:

* JDK 8
* Node.js/npm
* Yarn

Then:

```bash
yarn global add yo # to use JHipster Marketplace
yarn global add generator-jhipster
```

## Create app

Don't use `git-bash` because it has problems with cursor control making it difficult to configure your app with _jhipster_ properly.

Instead use `powershell`.

```powershell
mkdir jhipster-demo && cd jhipster-demo
jhipster
```

## Build app

```bash
gradlew
```
