---
title: Spring Boot
sidebar: auto
lang: en-US
---
# Spring Boot

Spring Boot is based upon the Spring Framework, which is at its core a dependency-injection container. Spring makes it easy to define everything in your application as loosely coupled components which Spring will tie together at run time. Spring also has a programming model that allows you to make abstractions from specific deployment environments.

One of the key things you need to understand is that Spring is based on the concept of _Beans_ or _Components_, which are basically singletons. With dependency injection, each component declares the collaborators it needs, and Spring provides them at run time. The biggest advantage is that you can easily inject different instances for different deployment scenarios of your application (e.g. staging vs. production vs. unit tests).

| Annotation        |                                                     |
|-------------------|-----------------------------------------------------|
| `@Component`      | generic stereotype for any Spring-managed component |
| `@Repository`     | stereotype for persistence layer                    |
| `@Service`        | stereotype for service layer                        |
| `@Controller`     | stereotype for presentation layer (spring-mvc)      |
| `@RestController` |                                                     |

When annotating a method with the `@Bean` annotation, _JavaConfig_ will execute that method and register the return value as a bean within a _BeanFactory_. By default, the bean name will be the same as the method name.

## Top 5 Spring Boot Annotations

| Annotation                        |                                                                  |
|-----------------------------------|------------------------------------------------------------------|
| `@SpringBootApplication`          | `@Configuration` + `@ComponentScan` + `@EnableAutoConfiguration` |
| `@EnableAutoConfiguration`        | configures things depending present on classes on `classpath`    |
| `@ContextConfiguration`           |                                                                  |
| `@SpringApplicationConfiguration` |                                                                  |
| `@ConditionalOnBean`              |                                                                  |
| `@ConditionalOnMissingBean`       |                                                                  |
| `@ConditioanlOnMissingClass`      |                                                                  |
| `@ConditionalOnExpression`        |                                                                  |
| `@ConditionalOnJava`              |                                                                  |

## Externalized Configuration

### Properties file

Default configuration: `application.yml`

Profile-specific configuration: `application-dev.yml`, `application-prod.yml`,  etc.

::: tip Note
A property of a profile-specific configuration overwrites the one of the default configuration.
:::

### Command line

### Environment variables

## Packages by Layer vs. Feature

## Asynchronous Methods

* `@Async`
* [Spring Boot: Creating Asynchronous Methods Using @Async Annotation](https://dzone.com/articles/spring-boot-creating-asynchronous-methods-using-as?utm_medium=feed&utm_source=feedpress.me&utm_campaign=Feed:%20dzone%2Fjava)

## Custom Queries

* `@Query` / JPQL
* Query by Example
* Query methods
