---
title: Spring Boot
sidebar: auto
lang: en-US
---
# Spring Boot

## Asynchronous Methods

* `@Async`
* [Spring Boot: Creating Asynchronous Methods Using @Async Annotation](https://dzone.com/articles/spring-boot-creating-asynchronous-methods-using-as?utm_medium=feed&utm_source=feedpress.me&utm_campaign=Feed:%20dzone%2Fjava)

## Custom Queries

* `@Query`
* Query by Example
* Query methods

* JPQL

## Properties

* `application.yml`
* `application-dev.yml`
* `application-prod.yml`
* order of loading

## Components

| Annotation    |                                                     |
|---------------|-----------------------------------------------------|
| `@Component`  | generic stereotype for any Spring-managed component |
| `@Repository` | stereotype for persistence layer                    |
| `@Service`    | stereotype for service layer                        |
| `@Controller` | stereotype for presentation layer (spring-mvc)      |

## Beans

When annotating a method with the `@Bean` annotation, _JavaConfig_ will execute that method and register the return value as a bean within a _BeanFactory_. By default, the bean name will be the same as the method name.
