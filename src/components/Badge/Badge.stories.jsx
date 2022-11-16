import React from 'react'
import Badge from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
}

const Template = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'HBS',
}

export const Alternate = Template.bind({})
Alternate.args = {
  backgroundColor: '#A22727',
  text: 'Work In Progress',
  textColor: '#FFFFFF',
}
