---
title: JHipster
sidebar: auto
lang: en-US
---
# Gradle

Read [Getting Started With Gradle](https://www.petrikainulainen.net/getting-started-with-gradle/).

## Concepts

Terms and relations: **Build** 1&#10230;* **Project(s)** 1&#10230;* **Task(s)**.

Files: **build.gradle**, **gradle.properties**, **settings.gradle**. The last one is required for multi-project builds only.

Design philosophy: Features are provided by gradle plugins.

## Creating a Java project

```gradle
apply plugin: 'java'
```

## Setup Java Project

```bash
mkdir my-project && cd  my-project
git flow init
gradle init --type java-library
```

## Upgrade Gradle Installation with Gradle Wrapper

* `./gradlew wrapper --gradle-version=4.10.2 --distribution-type=bin`
  
The next invocation of `gradlew` will download and cache the specified version of Gradle.
