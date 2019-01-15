/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import MySelection from '../components/Selection.vue'

const items = [
  {
    value: 30,
    title: '30 Days',
    name: 'frequency'
  },
  {
    value: 7,
    title: '7 Days',
    name: 'frequency'
  }
]

storiesOf('Selection', module)
  .add('default style', () => ({
    data: function () {
      return {
        items: items
      }
    },
    components: { MySelection },
    template: '<my-selection :items="items"></my-selection>'
  }))
  .add('small style', () => ({
    data: function () {
      return {
        items: items
      }
    },
    components: { MySelection },
    template: '<my-selection style-class="small" :items="items"></my-selection>'
  }))
