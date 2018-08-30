---
title: JHipster
sidebar: auto
lang: en-US
---
# JHipster

Before you start read [The JHipster Mini-Book](https://www.infoq.com/minibooks/jhipster-4x-mini-book).

::: tip
Don't use `git-bash` for [JHipster](https://www.jhipster.tech/) console commands because it has some problems with cursor control making it difficult to configure your application properly. Instead donwload [Cmder](http://cmder.net/) and execute `.\cmder.exe /REGISTER ALL` as administrator.
:::

## Installation

Prerequisites:

* [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* [Node.js + npm](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/)
* [Docker for Windows](https://docs.docker.com/docker-for-windows/install/) (requires Win 10 Pro or higher)

Install _Yeoman_ and _JHipster_:

```bash
yarn global add yo # install 'yeoman' globally
yarn global add generator-jhipster
```

Upgrade to new _JHipster_ version:

```bash
yarn global upgrade generator-jhipster
```

## Scaffolding

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

#### 4. Non-embedded development database

```docker
docker-compose -f src/main/docker/mariadb.yml up [ --detach ]
docker-compose -f src/main/docker/mariadb.yml stop
```

#### 5. Create an entity

Define your entities with [JDL-Studio](https://start.jhipster.tech/jdl-studio/) or [JHipster Domain Language (JDL)](https://www.jhipster.tech/jdl/).

If defined with _JDL Studio_, download `jhipster-jdl.jh`, copy it to your project folder and rename it.

```bash
cd normality-generator
mv jhipster-jdl.jh normality.jdl
```

Generate entities:

```bash
jhipster import-jdl normality.jdl [ --force ]
```

More than one `*.jdl` file may be given on command line.

By default `import-jdl` regenerates only entities which have changed. Flag `--forced` generates all entities from scratch.

Update running database:

```bash
gradlew liquibaseClearCheckSums
gradlew liquibaseDiffChangelog
```

### Docker

To create a image of your application and push it into your _Docker_ registry.

* `cd ../consolidator`
* `gradlew clean bootWar -Pprod buildDocker`

To run this image, use the _Docker Compose_ configuration located in _src/main/docker_:

* `docker-compose -f src/main/docker/app.yml up`

The same applies to the _gateway_. It is reachable now on `http://localhost:8080`.

To generate a custom Docker-Compose configuration for multiple applications:

* `mkdir docker-compose && cd docker-compose`
* `jhipster docker-compose`
* `docker-compose up`

To scale:

* add port range to _docker-compose.yml_: `ports: ... - "8083-8085:8083"`
* `docker-compose up --scale normalitygenerator-app=3`

To scale 'out-of-the-box':

* `docker-compose --file src\main\docker\app.yml up --scale normalitygenerator-app=5`

### SonarQube

* start _SonarQube_ server with `docker-compose -f src/main/docker/sonar.yml up -d`
* build application and run tests with `gradlew -Pprod clean test sonarqube`
* navigate to `http://localhost:9000`

See more on [Code quality](https://www.jhipster.tech/code-quality/) and [Continuous Code Quality](https://www.sonarqube.org/).

### Upgrade application

See [Upgrading an application](https://www.jhipster.tech/upgrading-an-application/).

### IntelliJ

Load generated project with **_File_ > _Open_** to avoid trouble with _Spring_ annotation processing.
