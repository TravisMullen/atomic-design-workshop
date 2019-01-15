/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Font Style Classes', module)
  .add('.header', () => ({
    template: '<span class="header">This is a <code>.header</code> style.</span>'
  }))
  .add('.subheader', () => ({
    template: '<span class="subheader">This is a <code>.subheader</code> style.</span>'
  }))
  .add('.utility', () => ({
    template: '<span class="utility">This is a <code>.utility</code> style.</span>'
  }))
  .add('default [body]', () => ({
    template: '<span>This is a standard font style.</span>'
  }))
