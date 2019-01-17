---
title: Elasticsearch
sidebar: auto
lang: en-US
---
# Elasticsearch
  
## Installation

Requires Java 8, _Oracle JDK version 1.8.0\_131_ is recommended.

* `wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.5.4.zip`
* `unzip elasticsearch-6.5.4.zip`
* `rm elasticsearch-6.5.4.zip`
* `cd elasticsearch-6.5.4/`

## Running

* `bin\elasticsearch`

## Bulk Data

* `wget https://download.elastic.co/demos/kibana/gettingstarted/shakespeare.json`
* `curl -H "Content-Type: application/json" -X POST "localhost:9200/shakespeare/_bulk?pretty" --data-binary @shakespeare.json`
