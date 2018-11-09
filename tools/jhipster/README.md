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

* [OpenJDK 8](https://openjdk.java.net/)
* [Node.js + npm](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/) (deprecated)
* [Docker for Windows](https://docs.docker.com/docker-for-windows/install/) (requires Win 10 Pro or higher)

Install _Yeoman_ and _JHipster_:

```bash
yarn global add yo # install 'yeoman' globally
yarn global add generator-jhipster
```

Upgrade to new _JHipster_ version:

```bash
yarn global upgrade generator-jhipster
# or
yarn global remove generator-jhipster
yarn global add generator-jhipster
```

## Sub Generators

* `jhipster entity`
* `jhipster spring-controller`
* `jhipster spring-service`
* `jhipster kubernetes`
* `jhipster import-jdl *.jh`

## Generate a Monolithic Application

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

## Generate a Microservice

Read [Building A Simple Microservice With JHipster In 20 Minutes](http://blog.avenuecode.com/building-a-microservice-in-20-minutes-with-jhipster).

---

::: tip
_Docker_ must be running and TLS must be **disabled** (_Settings_ > _General_ > _Expose daemon ... without TLS_).
:::

---

### 1. Build a Microservice

```bash
mkdir demo && cd demo
jhipster
? Which *type* of application would you like to create? Microservice application
? What is the base name of your application? RecognizerOfRemarkablePatterns
? As you are running in a microservice architecture, on which port would like your server to run? It should be unique to avoid port conflicts. 8086
? What is your default Java package name? de.infinitservices.forge.serviceplatform.recognizerofremarkablepatterns
? Which service discovery server do you want to use? JHipster Registry (uses Eureka, provides Spring Cloud Config support and monitoring dashboards)
? Which *type* of authentication would you like to use? JWT authentication (stateless, with a token)
? Which *type* of database would you like to use? SQL (H2, MySQL, MariaDB, PostgreSQL, Oracle, MSSQL)
? Which *production* database would you like to use? MariaDB
? Which *development* database would you like to use? MariaDB
? Do you want to use the Spring cache abstraction? Yes, with the Hazelcast implementation (distributed cache, for multiple nodes)
? Do you want to use Hibernate 2nd level cache? Yes
? Would you like to use Maven or Gradle for building the backend? Gradle
? Which other technologies would you like to use?
? Would you like to enable internationalization support? No
? Besides JUnit and Jest, which testing frameworks would you like to use?
? Would you like to install other generators from the JHipster Marketplace? (y/N) No
```

```bash
git flow init

gradlew
```

### 2. Build the Registry

Download `war` from [here](https://github.com/jhipster/jhipster-registry/releases).

```bash
mkdir registry
java -jar jhipster-registry-4.0.0.war
```

Navigate to `http://localhost:8761`.

### 3. Build the Gateway

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

### 4. Configuration

```yml
# file: application*.yml
# avoid eureka discovery procedure at startup
eureka:
    client:
        enabled: false
```

```yml
# ribbon apps. incl. gateways => file: application*.yml
# see: https://stackoverflow.com/questions/39602627/spring-cloud-feign-hytrix-first-call-timeout
# When using Zuul each proxied request is wrapped automatically in a hystrix command.
# So you need to configure the hystrix timeouts to be slightly larger than the ribbon
# timeouts.
hystrix:
    threadpool:
        default:
            coreSize: 20
            maxQueueSize: 500000
            keepAliveTimeMinutes: 2
            queueSizeRejectionThreshold: 500000
    command:
        default:
            fallback:
                isolation:
                    semaphore:
                        maxConcurrentRequests: 20
            execution:
                timeout:
                    enabled: false
                isolation:
                    strategy: THREAD
                    thread:
                        timeoutInMilliseconds: 121000
ribbon:
    ConnectTimeout: 20000
    ReadTimeout: 40000
```

```yml
# feign clients => file: application*.yml
# keep in mind that feign uses ribbon internally
feign:
    hystrix:
        # disable hystrix curcuit breaker for feign clients
        enabled: false
```

```yml
# file: docker-compose/central-server-config/application.yml
eureka:
    # avoid registry peer replication
    server:
        maxThreadsForPeerReplication: 0
```

```yml
# file: docker-compose/docker-compose.yml
volumes:
    # mount host dir into container
    # IMPORTANT: If this is changed the container image must be removed from docker registry.
    - ../../../Desktop/testOutput:/data
```

### 5. Non-embedded development database

```docker
docker-compose -f src/main/docker/mariadb.yml up [ --detach ]
docker-compose -f src/main/docker/mariadb.yml stop
```

### 6. Create an entity

Define your entities with [JDL-Studio](https://start.jhipster.tech/jdl-studio/) or [JHipster Domain Language (JDL)](https://www.jhipster.tech/jdl/).

If defined with _JDL Studio_, download `jhipster-jdl.jh`, copy it to your project folder and rename it.

Generate entities:

```bash
jhipster import-jdl normality.jh [ --force ]
```

More than one `*.jh` file may be given on command line.

By default `import-jdl` regenerates only entities which have changed. Flag `--forced` generates all entities from scratch.

Update running database:

```bash
gradlew liquibaseClearCheckSums
gradlew liquibaseDiffChangelog
```

## Docker

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

## SonarQube

* start _SonarQube_ server with `docker-compose -f src/main/docker/sonar.yml up -d`
* build application and run tests with `gradlew -Pprod clean test sonarqube`
* navigate to `http://localhost:9000`

See more on [Code quality](https://www.jhipster.tech/code-quality/) and [Continuous Code Quality](https://www.sonarqube.org/).

## Upgrade application

See [Upgrading an application](https://www.jhipster.tech/upgrading-an-application/).
