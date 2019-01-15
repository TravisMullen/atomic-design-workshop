<template>
  <select class="my-selecton" :class="styleClass">
    <option class="color-primary" v-for="item in items" :key="item.value" :name="item.name" :value="item.value">{{item.title}}</option>
  </select>
</template>

<script>
export default {
  name: 'my-selecton',
  props: {
    styleClass: {
      type: String,
      validator: function (value) {
        return ['small'].indexOf(value) !== -1
      }
    },
    items: {
      type: Array,
      default: () => [{
        value: 'a value',
        title: 'A value.',
        name: 'someValues'
      }]
    }
  }
}
</script>

<style lang="scss">
.my-selecton {
  border: 1px solid $color-primary;
  border-radius: 0;
  color: $color-primary;
  justify-content: center;
  align-content: center;
  justify-items: center;
  &.small {
    border-left: none;
    border-right: none;
    border-top: none;
  }
}
</style>
