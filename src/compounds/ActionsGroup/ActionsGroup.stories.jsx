import React from 'react'
import ActionsGroup from './ActionsGroup'

export default {
  title: 'Compounds/ActionsGroup',
  component: ActionsGroup,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => <ActionsGroup {...args} />

export const Default = Template.bind({})
