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
* [Docker for Windows](https://docs.docker.com/docker-for-windows/install/) (requires Win 10 Pro or higher)

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

#### 1. Build registry

Download `war` from [here](https://github.com/jhipster/jhipster-registry/releases).

```bash
mkdir registry
java -jar jhipster-registry-4.0.0.war
```

Navigate to `http://localhost:8761`.

#### 2. Build gateway

... with Admin UI, Account database, etc.

```bash
cd ..
mkdir gateway && cd gateway

jhipster
# ... Microservice gateway, No service discovery, JWT, SQL, PostgreSQL, H2 with disk-based persistence, No cache (!), Gradle
# ...

# build back-end
gradlew
# build front-end
yarn start
```

"_At this point, it’s a good idea to check your project into Git so you can easily see what changes are made going forward._" ([here](https://developer.okta.com/blog/2017/06/20/develop-microservices-with-jhipster))

```bash
git init
git add .
git commit -m "Gateway created"
```

#### 3. Build your microservice

```bash
cd ..
mkdir consolidator && cd consolidator

jhipster
# ... Microservice application, consolidator, de.infinitservices.forge.serviceplatform, No service discovery, JWT, No database, Gradle
# ...

git flow init

gradlew
```

To avoid Eureka discovery procedure at startup add to `application-dev.yml`:

```yaml
eureka:
    client:
        enabled: false
```

### Containerization with docker

Containerization seems to be prepared for _prod_ profiles only.

```bash
cd ../consolidator
gradlew -Pprod clean bootWar buildDocker

cd ../gateway
gradlew -Pprod clean bootWar buildDocker

cd ..
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

### Upgrade

See [Upgrading an application](https://www.jhipster.tech/upgrading-an-application/).

### IntelliJ

Load generated project with **_File_ > _Open_** to avoid trouble with _Spring_ annotation processing.
