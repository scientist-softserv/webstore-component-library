import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}

export const Alternate = Template.bind({})
Alternate.args = {
  backgroundColor: '#999999',
  label: 'Alternate Button',
  size: 'large',
  textColor: '#000000',
}
