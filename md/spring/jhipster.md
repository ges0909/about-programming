---
title: JHipster
sidebar: auto
lang: en-US
---
# JHipster

Before you start read [The JHipster Mini-Book](https://www.infoq.com/minibooks/jhipster-4x-mini-book).

::: tip
Don't use `git-bash` as console for [JHipster](https://www.jhipster.tech/). The `bash` has problems with cursor control making it difficult to configure your application. Instead donwload [Cmder](http://cmder.net/) and execute `.\cmder.exe /REGISTER ALL` as administrator.
:::

## Installation

Prerequisites:

* [OpenJDK 8](https://openjdk.java.net/)
* [Node.js + npm](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/docs/install#windows-stable)
* [Git for Windows](https://git-scm.com/download/win)
* [Docker for Windows](https://docs.docker.com/docker-for-windows/install/) (requires Win 10 Pro or higher)

::: tip
_Docker_ must be running and TLS must be **disabled** (_Settings_ > _General_ > _Expose daemon ... without TLS_).
:::

Install _Yeoman_ and _JHipster_:

```bash
yarn global add yo # install 'yeoman' globally
yarn global add generator-jhipster
```

Upgrade to new _JHipster_ version:

```bash
yarn global upgrade generator-jhipster
```

## Sub Generators

* `jhipster upgrade`
* `jhipster entity`
* `jhipster spring-controller`
* `jhipster spring-service`
* `jhipster import-jdl *.jh`
* `jhipster docker-compose`
* `jhipster kubernetes`

## Build a Monolithic Application

1. `mkdir jhipster-monolithic-demo && cd jhipster-monolithic-demo`
1. `jhipster`  # select _Monolithic application_
1. `git flow init`
1. `gradlew` # build back-end
1. `yarn start` # build front-end
1. `gradlew -Pprod bootWar buildDocker` # build docker image
1. `mkdir docker; cd docker/; jhipster docker-compose`
1. `docker-compose`

## Build a Microservice

### Microservice

1. `jhipster` # select _Microservice application_
1. `git flow init`
1. `gradlew`

### Registry

1. `mkdir registry && cd registry`
1. download `war` file from [here](https://github.com/jhipster/jhipster-registry/releases)
1. run `java -jar jhipster-registry-4.0.0.war`
1. navigate to `http://localhost:8761`

### Gateway

1. `mkdir gateway && cd gateway`
1. `jhipster` # select _Microservice gateway_
1. `gradlew`
1. `yarn start`
1. checkin-in project to _Git_

### Externalized Configuration

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

### Non-embedded development database

```docker
docker-compose -f src/main/docker/mariadb.yml up [ --detach ]
docker-compose -f src/main/docker/mariadb.yml stop
```

### Create an entity

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

