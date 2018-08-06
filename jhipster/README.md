---
title: JHipster
sidebar: auto
lang: en-US
---
# JHipster

Before you start read [The JHipster Mini-Book](https://www.infoq.com/minibooks/jhipster-4x-mini-book).

::: tip
Don't use `git-bash` for [JHipster](https://www.jhipster.tech/) console commands because it has some problems with cursor control making it difficult to configure your application properly. Instead try [Cmder](http://cmder.net/).
:::

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

## Project scaffolding with JHipster

JHipster knows two types of projects: _Monolithic_- and _Microservice applications_.

### Monolithic

```bash
mkdir jhipster-monolithic-demo && cd jhipster-monolithic-demo

jhipster
# ... Monolithic application, JWT authentication, SQL, MySQL, Angular 6
# ...

git flow init

# build back-end
gradlew
# build front-end
yarn start

# build docker image
gradlew -Pprod bootWar buildDocker

mkdir docker
cd docker/
jhipster docker-compose

docker-compose
```

### Microservice

Read [Building A Simple Microservice With JHipster In 20 Minutes](http://blog.avenuecode.com/building-a-microservice-in-20-minutes-with-jhipster).

---

::: tip
_Docker_ must be running and TLS must be **disabled** (_Settings_ > _General_ > _Expose daemon ... without TLS_).
:::

---

#### Create project folder

```bash
mkdir jhipster-microservice-demo && cd jhipster-microservice-demo
```

#### Microservice

```bash
mkdir consolidator && cd consolidator

jhipster
# ... Microservice application, consolidator, de.infinitservices.forge.serviceplatform, No service discovery, JWT, No database, Gradle
# ...

git flow init

gradlew
```

#### Gateway

... with Admin UI, Account database, etc.

```bash
cd ../
mkdir gateway && cd gateway

jhipster
# ... Microservice gateway, No service discovery, JWT, SQL, PostgreSQL, H2 with disk-based persistence, No cache (!), Gradle
# ...

git flow init

# build back-end
gradlew
# build front-end
yarn start
```

#### Docker

Containerization is prepared only for _prod_ profiles.

```bash
cd ../consolidator
gradlew -Pprod bootWar buildDocker

cd ../gateway
gradlew -Pprod bootWar buildDocker

cd ../
mkdir docker && cd docker/

jhipster docker-compose
# ... Microservice application, JHipster gateway based on Netflix Zuul
# ...
```

Run all services database.

```bash
docker-compose up
```

Gateway is reachable now on `http://localhost:8080`.

### Tips

* IntelliJ: Load generated project with **_File_ > _Open_** to avoid trouble with _Spring_ annotation processing.
