import React from 'react'
import RequestItem from './RequestItem'
import { requests } from '../../resources/args'

export default {
  title: 'Compounds/RequestItem',
  component: RequestItem,
}

const Template = (args) => <RequestItem {...args} />

// we are manually passing in the "href" value only for story purposes. in an actual use case, the React.forwardRef handles creating the correct "href" value it gets passed from next/link
export const Default = Template.bind({})
Default.args = {
  index: 0,
  request: requests[0],
  href: requests[0].href.pathname,
}

export const Alternate = Template.bind({})
Alternate.args = {
  index: 1,
  request: requests[1],
  href: requests[1].href.pathname,
}
