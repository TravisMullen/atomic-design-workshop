<template>
  <header>
    <icon :size="size"></icon>
    <h1 :style="fontSize">{{headline}}</h1>
  </header>
</template>

<script>
import MyIcon from '@/components/Icon'
export default {
  name: 'my-header',
  components: {
    MyIcon
  },
  props: {
    size: {
      type: Number,
      default: 26
    },
    headline: {
      type: String,
      default: 'Hello World'
    }
  },
  computed: {
    fontSize () {
      return `font-size: ${this.size}`
    }
  }
}
</script>

<style>
header {
  display: flex;
}
h1 {
  /*color: var(--header-color, #444);*/
  color: #444;
  font-family: monospace;
}
</style>
