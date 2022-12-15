import React from 'react'
import Messages from './Messages'
import { messages } from '../../resources/args'

export default {
  title: 'Compounds/Messages',
  component: Messages,
}

const Template = (args) => <Messages {...args} />

export const Default = Template.bind({})
Default.args = {
  messages,
}
