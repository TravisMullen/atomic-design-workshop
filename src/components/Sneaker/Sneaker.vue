<template>
  <figure>
    <img :src="" alt="">
    <figcaption>
      {{title}}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'sneaker',
  props: {
    title: {
      type: String
    },
    sku: {
      type: String
    },
    size: {
      type: String
    }
  }
}
</script>