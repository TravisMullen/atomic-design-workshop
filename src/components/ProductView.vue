<template>
  <article class="my-product-view">
    <img alt="Product" src="../assets/product.jpg">
    <section >
      <my-product-details  :orderFrequency="orderFrequency" :title="title" :price="price" :sizes="sizes"></my-product-details>
    </section>
  </article>
</template>

<script>
import MyProductDetails from '@/components/ProductDetails'
export default {
  name: 'my-product-View',
  components: {
    MyProductDetails
  },
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    sizes: {
      type: Array,
      default: () => []
    },
    orderFrequency: {
      type: Array,
      default: () => []
    },
    image: {
      type: String
    }
  }
  // computed: {
  //   fontSize () {
  //     return `font-size: ${this.size}`
  //   }
  // }
}
</script>

<style lang="scss">
.my-product-view {
  display: flex;
  flex: 1 0 auto;
}
</style>
