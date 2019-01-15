<template>
  <figure>
    <img :src="src" />
  </figure>
</template>

<script>
// REQUIRED: npm install svg-inline-loader pug --save-dev
export default {
  name: 'my-icon',
  props: {
    size: {
      type: Number,
      default: 150
    }
  },
  computed: {
    src () {
      return `https://via.placeholder.com/${this.size}`
    }
  }
}
</script>
