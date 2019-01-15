<template>
  <fieldset class="my-radio-select">
    <span v-for="item in items" :key="item.value">
      <label class="color-secondary"><input type="radio" :name="item.name"  :value="item.value"> {{item.title}}</label>
      <span
        v-if="item.items">
        <my-selection
          style-class="small"
          :items="item.items"
          ></my-selection>
      </span>

    </span>
  </fieldset>
</template>

<script>
import MySelection from '@/components/Selection'
export default {
  name: 'my-selecton',
  components: {
    MySelection
  },
  props: {
    items: {
      type: Array,
      required: []
    }
  }
}
</script>

<style lang="scss">
fieldset {
  display: flex;
  label {
    margin-right: $base-unit;
  }
}
</style>
