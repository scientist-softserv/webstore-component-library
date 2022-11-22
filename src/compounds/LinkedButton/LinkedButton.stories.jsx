import React from 'react'
import LinkedButton from './LinkedButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Compounds/LinkedButton',
  component: LinkedButton,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LinkedButton {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  buttonProps: {
    ...Button.defaultProps,
    label: 'Linked Button',
  },
  orientation: 'vertical',
  href: '/',
}
