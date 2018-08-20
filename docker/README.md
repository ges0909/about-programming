---
title: Docker
sidebar: auto
lang: en-US
---
# Docker

## Installation

[Docker for Windows](https://docs.docker.com/docker-for-windows/install/) requires Windows 10 Pro or higher.

::: tip
After installing **Docker for Windows** the option _Switch to Windows containers..._ must be checked (see context-menu).
:::

::: tip
**Kitematic** is downloaded by selecting the context-menu option _Kitematic_.
:::

## Clear image registry

```bash
docker system prune
# or
docker system prune -a
```
