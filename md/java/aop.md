---
title: AOP
sidebar: auto
lang: en-US
---
# AOP

AOP means "Aspect Oriented Programming" and is for implementing of cross cutting concerns.

## Terms

- Pointcut: expression used to define when a call to a method should be intercepted
- Advice: logic to be invoked when a method is intercepted
- Aspect: combintion of _Pointcut_ and _Advice_
- Join Point: when in running code the condition for pointcut is met, the advice is executed; the _Join Point_ is a specific execution instance of an _Advice_
- Weaver: Framework which implements AOP like "AspectJ"

## Pointcut

- `@Before`
- `@After`
- `@AfterReturning`
- `@AfterThrowing`

- `@Around` and `joinPoint.proceed()`
- `@annotation`

## Best Practice

```java
@Aspect
@Configuration
public class MethodTracingAspect {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Around("@annotation(com.in28minutes.springboot.tutorial.basics.example.aop.TrackTime)")
    public void around(ProceedingJoinPoint joinPoint) throws Throwable {
        log.trace("Method entered.");
        joinPoint.proceed();
        log.trace("Method leaved.");
   }
}
```
