/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import MyProductView from '../components/ProductView.vue'

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

storiesOf('ProductView', module)
  .add('show jawn', () => ({
    data: function () {
      return {
        title: 'Amazing Face Cleanser',
        price: '$32',
        sizes: ['5.2 fl oz', '10.8 fl oz'],
        image: 100,
        orderFrequency: primaryItems
      }
    },
    components: { MyProductView },
    template: '<my-product-view :orderFrequency="orderFrequency" :title="title" :price="price" :sizes="sizes" :image="image"></my-product-view>'
  }))
