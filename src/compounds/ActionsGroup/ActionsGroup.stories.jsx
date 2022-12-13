import React from 'react'
import ActionsGroup from './ActionsGroup'

export default {
  title: 'Compounds/ActionsGroup',
  component: ActionsGroup,
}

const Template = (args) => <ActionsGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  // TODO(alishaevn): figure out why the story actions aren't working *shakes fist*
  handleSendingMessages: ({ message, files }) => {
    console.log('the typed value is:', message)
    console.log(`there is ${files.length} file(s):`, files.map((file) => file.name))
  },
}
