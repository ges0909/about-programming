---
title: Home
lang: en-US
#sidebar: auto
---
# VuePress Doc Pipeline

As precondition install [Node.js](https://nodejs.org/en/) with _npm_ on you local machine.

## How to setup a VuePress project

1. install _VuePress_ globally with `npm install -g vuepress`
1. create a project folder and navigate to it
1. create a file _README.md_ and edit it
1. `vuepress dev` starts server with live reloading
1. browse to `http://localhost:8080`

## How to deliver a VuePress project

1. `vuepress build` stores minified results under `.vuepress/dist`

## Vue templates

<ul>
<li v-for="i of 3">{{i}}</li>
</ul>

## Vue components

* will be detected automatically in `.vuepress/components`

## Where to learn more

* [An Introduction to VuePress](https://alligator.io/vuejs/vuepress-introduction/) :heart:
* [Getting Started with Vuepress](https://medium.com/@laurandidi21/getting-started-with-vuepress-ebf1b0ff6c0d)

## Open points

* Can I create a blog with VuePress?
