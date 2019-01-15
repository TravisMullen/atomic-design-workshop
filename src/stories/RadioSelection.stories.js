/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import MyRadioSelection from '../components/RadioSelection.vue'

const secondaryItems = [
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

const primaryItems = [
  {
    value: 'once',
    name: 'frequency-interval-value',
    title: 'Purchase once'
  },
  {
    value: 'interval_days',
    name: 'frequency-interval-value',
    title: 'Deliver every',
    items: secondaryItems
  }
]

storiesOf('Radio Selection', module)
  .add('with default img', () => ({
    data: function () {
      return {
        items: primaryItems
      }
    },
    components: { MyRadioSelection },
    template: '<my-radio-selection :items="items"></my-radio-selection>'
  }))
