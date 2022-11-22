import React from 'react'
import Button from '../../components/Button/Button'
import LinkedButton from './LinkedButton'

export default {
  title: 'Compounds/LinkedButton',
  component: LinkedButton,
}

const Template = (args) => <LinkedButton {...args} />

export const Default = Template.bind({})

const { onClick, ...remainingDefaultProps } = Button.defaultProps
Default.args = {
  buttonProps: {
    ...remainingDefaultProps,
    label: 'Linked Button',
  },
  orientation: 'vertical',
  path: '/',
}
