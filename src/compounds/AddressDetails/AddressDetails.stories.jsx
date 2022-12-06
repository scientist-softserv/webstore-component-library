import React from 'react'
import AddressDetails from './AddressDetails'

export default {
  title: 'Compounds/AddressDetails',
  component: AddressDetails,
}

const Template = (args) => <AddressDetails {...args} />

export const Default = Template.bind({})
Default.args = {
}
