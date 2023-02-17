import React from 'react'
import RequestList from './RequestList'
import { requests } from '../../resources/args'

export default {
  title: 'Compounds/RequestList',
  component: RequestList,
}

const Template = (args) => <RequestList {...args} />

export const Default = Template.bind({})
Default.args = {
  requests,
}

export const Alternate = Template.bind({})
Alternate.args = {
  backgroundColor: 'secondary',
  requests,
}

export const NoRequests = Template.bind({})
NoRequests.args = {
  requests: [],
}
