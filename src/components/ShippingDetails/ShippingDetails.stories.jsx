import React from 'react'
import ShippingDetails from './ShippingDetails'

export default {
  title: 'Components/ShippingDetails',
  component: ShippingDetails,
}

const Template = (args) => <ShippingDetails {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: 'light',
  billingCountry: 'USA',
  shippingCountry: 'USA',
  updateRequestForm: (requestForm) => console.log({ requestForm }),
}
