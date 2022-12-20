import React from 'react'
import Messages from './Messages'
import { messages } from '../../resources/args'

export default {
  title: 'Compounds/Messages',
  component: Messages,
}

const Template = (args) => <Messages {...args} />

export const WithoutMessages = Template.bind({})
WithoutMessages.args = {
  messages: [],
}

export const WithMessages = Template.bind({})
WithMessages.args = {
  messages,
}
