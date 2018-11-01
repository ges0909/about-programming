---
title: JHipster
sidebar: auto
lang: en-US
---
# Gradle

* [Gradle: build.gradle vs. settings.gradle vs. gradle.properties](https://www.baeldung.com/gradle-build-settings-properties)

## Concepts

Terms and relations: **Build** 1&#10230;* **Project(s)** 1&#10230;* **Task(s)**.

Files: **build.gradle**, **gradle.properties**, **settings.gradle**. The last one is required for multi-project builds only.

Design philosophy: Features are provided by gradle plugins.

## Creating a Java project

1. `mkdir my-project && cd  my-project`
1. `gradle init –type java-application`

Types applicable are found in [Build Init Plugin](https://docs.gradle.org/current/userguide/build_init_plugin.html).

## Upgrade Gradle Installation with Gradle Wrapper

* `./gradlew wrapper --gradle-version=4.10.2 --distribution-type=bin`
  
The next invocation of `gradlew` will download and cache the specified version of Gradle.
