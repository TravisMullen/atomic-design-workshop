/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import MyHeader from '../components/Header.vue'

storiesOf('Header', module)
  .add('with default text', () => ({
    components: { MyHeader },
    template: '<my-header></my-header>'
  }))
  .add('with text from attribute value', () => ({
    components: { MyHeader },
    template: '<my-header headline="my headline"></my-header>'
  }))
