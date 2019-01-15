/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

const description = 'Lorem ipsum dolor amet truffaut vinyl wolf next level, pitchfork four dollar toast meggings vexillologist. Helvetica schlitz kombucha lumbersexual, activated charcoal hot chicken fashion axe truffaut wayfarers 90\'s kinfolk farm-to-table sustainable franzen. Chicharrones iPhone artisan cornhole woke synth, lyft crucifix lo-fi kinfolk normcore truffaut keytar quinoa jean shorts. Letterpress meh copper mug messenger bag, chia 3 wolf moon vape echo park biodiesel tote bag man braid small batch twee actually ethical. Ethical green juice tattooed, art party live-edge godard distillery kitsch slow-carb.'
// import { description } from '../mock'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// import MyButton from '../components/MyButton.vue'

import MyHeader from '../components/Header.vue'
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

storiesOf('Header', module)
  .add('with default text', () => ({
    components: { MyHeader },
    template: '<my-header></my-header>'
  }))
  .add('with text from attribute value', () => ({
    components: { MyHeader },
    template: '<my-header headline="my headline"></my-header>'
  }))
// storiesOf('Button', module)
//   .add('with text', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">Hello Button</my-button>',
//     methods: { action: action('clicked') }
//   }))
//   .add('with JSX', () => ({
//     components: { MyButton },
//     render () {
//       return <my-button onClick={this.action}>With JSX</my-button>
//     },
//     methods: { action: linkTo('Button', 'with some emoji') }
//   }))
//   .add('with some emoji', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
//     methods: { action: action('clicked') }
//   }))
