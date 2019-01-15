<template>
  <figure>
    <img :src="src" :alt="alt" />
  </figure>
</template>

<script>
export default {
  name: 'my-icon',
  props: {
    size: {
      type: Number,
      default: 150
    },
    alt: {
      type: String,
      default: 'placeholder-image'
    }
  },
  computed: {
    src () {
      return `https://via.placeholder.com/${this.size}`
    }
  }
}
</script>
