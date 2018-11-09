---
title: Streams
sidebar: auto
lang: en-US
---

# Streams

## Intermediate Operations

`filter()`, `map()`, `flatMap()`, `distinct()`, `sorted()`, `peek()`, `limit()`, `skip()`

## Terminal Operations

`forEach()`, `forEachOrdered()`, `toArray`, `reduce()`, `collect()`, `min()`, `max()`, `count()`, `anyMatch()`, `allMatch()`, `noneMatch()`, `findFirst(, `findAny()`

# Infinite Streams

```java
Stream<Integer> infiniteStream = Stream.iterate(0, i -> i + 2);
List<Integer> collect = infiniteStream
  .limit(10)
  .collect(Collectors.toList());
```

# Infinite Streams of a Custom Type

```java
Supplier<UUID> randomUUIDSupplier = UUID::randomUUID;
Stream<UUID> infiniteStreamOfRandomUUID = Stream.generate(randomUUIDSupplier);
List<UUID> randomInts = infiniteStreamOfRandomUUID
  .skip(10)
  .limit(10)
  .collect(Collectors.toList());
```
