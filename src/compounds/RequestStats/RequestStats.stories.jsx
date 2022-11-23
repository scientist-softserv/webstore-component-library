import React from 'react'
import RequestStats from './RequestStats'

export default {
  title: 'Compounds/RequestStats',
  component: RequestStats,
}

const Template = (args) => <RequestStats {...args} />

export const Default = Template.bind({})
Default.args = {
  billingAddress: '505 Lomas Sante Fe Dr\nSuite 110\nSolana Beach, CA, 92075\nUnited States',
  createdAt: 'September 9, 2022',
  deadline: 'September 17, 2022',
  projectCode: '',
  shippingAddress: '505 Lomas Sante Fe Dr\nSuite 110\nSolana Beach, CA, 92075\nUnited States',
}
