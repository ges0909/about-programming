---
title: Streams
sidebar: auto
lang: en-US
---
# Streams

* `stream()`
* `parallel()`
* `parallelStream()`
* `Stream.of()`
* `Stream.generate()`
* `Stream.iterate()`

* `Arrays.stream()`

Intermediate operations are lazy, so they’re not executed until a result of a processing is actually needed.

Computation on the source data is only performed when the terminal operation is initiated, and source elements are consumed only as needed.

## Intermediate Operations

* `filter()`
* `map()`, `flatMap()`, `mapToInt()`, `mapToDouble()`, `mapToObj()`
* `distinct()`, `sorted()`
* `peek()`, `limit()`, `skip()`

## Terminal Operations

* `forEach()`, `forEachOrdered()`
* `toArray()`
* `reduce()`, `collect()`
* `min()`, `max()`, `count()`, `average()`, `sum()`
* `anyMatch()`, `allMatch()`, `noneMatch()`
* `findFirst()`, `findAny()`

## Collectors

* `Collectors.toList()`
* `Collectors.summarizingDouble()`
* `Collectors.partitioningBy()`
* `Collectors.groupingBy()`
* `Collectors.mapping()`
* `Collectors.reducing()`
* `Collectors.joining()`

## Infinite Streams

```java
Stream<Integer> infiniteStream = Stream.iterate(0, i -> i + 2);
List<Integer> collect = infiniteStream
  .limit(10)
  .collect(Collectors.toList());
`
```

### Infinite Streams of a Custom Type

```java
Supplier<UUID> randomUUIDSupplier = UUID::randomUUID;
Stream<UUID> infiniteStreamOfRandomUUID = Stream.generate(randomUUIDSupplier);
List<UUID> randomInts = infiniteStreamOfRandomUUID
  .skip(10)
  .limit(10)
  .collect(Collectors.toList());
```

## IntStream

* `IntStream.of()`
* `Intstream.range()`, `Intstream.rangeClosed()`
* `IntStream.iterate()`
* `IntStream.generate()`
* `boxed()`
* `mapToDouble()`, `mapToLong()`
* `min()`, `max()`, `getAsInt()`
* `reduce()`
* `parallel()`

see also: [Java 8: Replace traditional for loops with IntStreams](http://www.deadcoderising.com/2015-05-19-java-8-replace-traditional-for-loops-with-intstreams/) 
