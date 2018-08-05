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

## Monolithic application

::: warning
Don't use `git-bash` because it has problems with cursor control making it difficult to configure your app with _jhipster_ properly. Instead use [Cmder](http://cmder.net/).
:::


```cmd
mkdir jhipster-app-demo
cd jhipster-app-demo
jhipster # scaffold monolith
./gradlew
```

## Microservices

Read [Building A Simple Microservice With JHipster In 20 Minutes](http://blog.avenuecode.com/building-a-microservice-in-20-minutes-with-jhipster).

::: warning
_Docker_ must be running and TLS must be disabled (_Settings_ > _General_ > _Expose daemon ... without TLS_).
:::

### Create project folder

```bash
mkdir jhipster-microservice-demo
cd jhipster-microservice-demo
```

### Create a microservice

```bash
mkdir consolidator
cd consolidator
jhipster
# ... Microservice application, de.infinitservices.forge.serviceplatform, No service discovery, No database, Gradle
gradlew
```

### Create a gateway

... with Admin UI, Account database, etc.

```bash
cd ../
mkdir gateway
cd gateway/
jhipster
... Microservice gateway, No service discovery, Gradle
# build back-end
gradlew
# build front-end
yarn start
```

### Docker

```bash
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
```

Gateway is reachable now on `http://localhost:8080`.

