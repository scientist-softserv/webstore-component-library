import React from 'react'
import Button from '../../components/Button/Button'
import LinkedButton from './LinkedButton'

export default {
  title: 'Compounds/LinkedButton',
  component: LinkedButton,
}

const Template = (args) => <LinkedButton {...args} />

const { onClick, ...remainingDefaultProps } = Button.defaultProps

export const Default = Template.bind({})
Default.args = {
  buttonProps: {
    ...remainingDefaultProps,
    label: 'Linked Button',
  },
  addClass: '',
  path: '/',
}

export const WithQuery = Template.bind({})
WithQuery.args = {
  buttonProps: {
    ...remainingDefaultProps,
    label: 'Linked Button',
  },
  addClass: '',
  path: {
    pathname: '/test',
    query: { name: 'Best Service Ever' },
  },
}
