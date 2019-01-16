<template>
  <article class="my-product-details">
    <section class="bg-color-background">
      <h1 class="header color-primary">{{title}}</h1>
      <h2 class="header color-secondary">{{price}}</h2>
      <my-selection
        v-if="sizes"
        :items="sizes"
        ></my-selection>
      <my-button>Add to Cart</my-button>
      <my-radio-selection :items="orderFrequency"></my-radio-selection>
    </section>
  </article>
</template>

<script>
import MyButton from '@/components/MyButton'
import MySelection from '@/components/Selection'
import MyRadioSelection from '@/components/RadioSelection'
export default {
  name: 'my-product-details',
  components: {
    MySelection,
    MyRadioSelection,
    MyButton
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
.my-product-details {
  display: flex;
  section {
    margin: 4*$base-unit;
    display: inline-block;
  }
}
</style>
