<template>
  <button class="button utility color-white bg-color-primary" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: $base-unit 2*$base-unit;
  margin-top: $base-unit;
  margin-bottom: $base-unit;
}
</style>
