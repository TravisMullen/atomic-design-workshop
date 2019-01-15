/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import MyIcon from '../components/Icon.vue'

storiesOf('Icon', module)
  .add('with default img', () => ({
    components: { MyIcon },
    template: '<my-icon></my-icon>'
  }))
  .add('with scaled img', () => ({
    components: { MyIcon },
    template: '<my-icon size="30"></my-icon>'
  }))
