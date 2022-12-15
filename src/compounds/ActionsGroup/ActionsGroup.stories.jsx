import React from 'react'
import ActionsGroup from './ActionsGroup'

export default {
  title: 'Compounds/ActionsGroup',
  component: ActionsGroup,
}

const Template = (args) => <ActionsGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  handleSendingMessages: ({ value }) => console.log('the typed value is:', value),
}
