---
title: Components
lang: en-US
meta:
  - name: vue vuepress
  - content:  vue vuepress
# sidebar: auto
---
# Vue Components

The template

```javascript
<template>
  <div class="number-modifier">
    <button @click="increment()">+</button>
    <strong> {{value}} </strong>
    <button @click="decrement()">-</button>
  </div>
</template>
<script>
export default {
  props: ['start'],
  data() {
    return {
      value: this.start
    }
  },
  methods: {
    increment() { this.value++ },
    decrement() { this.value-- }
  }
}
</script>
```

```javascript
<NumberModifier :start="5"></NumberModifier>
```

renders to

<NumberModifier :start="5"></NumberModifier>

Components will be stored and detected automatically in `.vuepress/components`.