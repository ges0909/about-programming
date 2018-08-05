---
title: JHipster
sidebar: auto
lang: en-US
---
# JHipster

Before you start read [The JHipster Mini-Book](https://www.infoq.com/minibooks/jhipster-4x-mini-book).

## Installation

Prerequisites:

* [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* [Node.js + npm](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/)

Install:

```bash
yarn global add yo # install 'yeoman' globally
yarn global add generator-jhipster
```

## Create a (monolithic) app

Don't use `git-bash` because it has problems with cursor control making it difficult to configure your app with _jhipster_ properly.

Instead use [Cmder](http://cmder.net/).

```cmd
mkdir jhipster-app-demo
cd jhipster-app-demo
jhipster # scaffold monolith
./gradlew
```

## Create a microservice

Read [Building A Simple Microservice With JHipster In 20 Minutes](http://blog.avenuecode.com/building-a-microservice-in-20-minutes-with-jhipster).

_Docker_ must be running and TLS must be disabled (_Settings_ > _General_ > _Expose daemon ... without TLS_).

```cmd
# 1. create project folder
mkdir jhipster-microservice-demo
cd jhipster-microservice-demo

# 2. create microservice with any business logic
mkdir consolidator
cd consolidator
jhipster
# ... Microservice application, de.infinitservices.forge.serviceplatform, No service discovery, No database, Gradle
gradlew

# 3. create gateway (Admin UI, Account database, ...)
cd ../
mkdir gateway
cd gateway/
jhipster
... Microservice gateway, No service discovery, Gradle
# buold back-end
gradlew
# build front-end
yarn start

# docker-compose
cd ../consolidator
gradlew -Pprod bootWar buildDocker
cd ../gateway
gradlew -Pprod bootWar buildDocker
cd ../
mkdir docker
cd docker/
jhipster docker-compose
# ... Microservice application, JHipster gateway based on Netflix Zuul
docker-compose up

# gateway access
http://localhost:8080
```
