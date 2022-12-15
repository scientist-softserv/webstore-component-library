import React from 'react'
import RequestStats from './RequestStats'
import { shipTo } from '../../resources/args'

export default {
  title: 'Compounds/RequestStats',
  component: RequestStats,
}

const Template = (args) => <RequestStats {...args} />

export const Default = Template.bind({})
Default.args = {
  billingInfo: { address: shipTo.text, id: shipTo.id },
  createdAt: 'September 9, 2022',
  deadline: 'September 17, 2022',
  projectCode: '',
  shippingInfo: { address: shipTo.text, id: shipTo.id },
}
