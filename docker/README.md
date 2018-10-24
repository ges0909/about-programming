---
title: Docker
sidebar: auto
lang: en-US
---
# Docker

## Install Docker on Windows

[Docker for Windows](https://docs.docker.com/docker-for-windows/install/) requires Windows 10 Pro or higher.

::: tip
After installing **Docker for Windows** the option _Switch to Windows containers..._ must be checked (see context-menu).
:::

::: tip
**Kitematic** is downloaded by selecting the context-menu option _Kitematic_.
:::

## Install Docker on CentOS

1. Update package database.
    * `sudo yum check-update`
1. Download latest docker version.
    * `curl -fsSL https://get.docker.com/ | sh`
1. Start docker daemon.
    * `sudo systemctl start docker`
    * `sudo systemctl stop docker`
    * `sudo systemctl restart docker`
1. Verify running docker daemon.
    * `sudo systemctl status docker`
1. Enable docker to start at boot time automatically.
    * `sudo systemctl enable docker`
1. Add users to _docker_ group to run docker command without _sudo_:
    * `sudo usermod -aG docker schrager`
    * ...
1. Log out and log in again to update the user groups list.

### Install Docker Compose

1. Download latest compose version (here 1.22.0).
    * `curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
1. Apply executable permissions to the binary.
    * `sudo chmod +x /usr/local/bin/docker-compose`
1. Test the installation.
    * `docker-compose -v`
  
## Install Docker in Docker Container (Alpine Linux)

* login to docker container and check version
  * `cat /etc/alpine-release`

* update list of available software
  * `apk update`

* install docker
  * `apk add docker`

* install `openrc` package (required for `rc-update` and `service` commands)
  * `apk add openrc --no-cache`

* configure docker daemon to start automatically on boot
  * `rc-update add docker boot`

* start docker daemon
  * `service docker start`

* verify if it is running
  * `docker ps`

## Useful Docker Commands

* Accessing container: `docker exec -it <container name> bash`
* Accessing container log: `docker logs <container name>`
* Stop container: `docker stop <container name>`
* List Docker volumes: `docker volume ls`
* Remove Docker volumes(s): `docker volume rm ...`
* Clear image registry: `docker system prune` or `docker system prune -a`
