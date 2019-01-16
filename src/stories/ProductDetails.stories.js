/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import MyProductDetails from '../components/ProductDetails.vue'

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

const sizes = [
  {
    value: '5.2',
    title: '5.2 fl oz',
    name: '5.2'
  },
  {
    value: '10.8',
    title: '10.8 fl oz',
    name: '10.8'
  }
]

storiesOf('ProductDetails', module)
  .add('show jawn', () => ({
    data: function () {
      return {
        title: 'Amazing Face Cleanser',
        price: '$32',
        sizes,
        image: 100,
        orderFrequency: primaryItems
      }
    },
    components: { MyProductDetails },
    template: '<my-product-details :orderFrequency="orderFrequency" :title="title" :price="price" :sizes="sizes" :image="image"></my-product-details>'
  }))
