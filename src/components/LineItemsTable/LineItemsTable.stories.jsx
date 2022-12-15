import React from 'react'
import LineItemsTable from './LineItemsTable'
import { lineItems } from '../../resources/args'

export default {
  title: 'Components/LineItemsTable',
  component: LineItemsTable,
}

const Template = (args) => <LineItemsTable {...args} />

export const Default = Template.bind({})
Default.args = {
  lineItems,
  subtotalPrice: '$3.00',
  shippingPrice: '$500.00',
  taxAmount: '$0.00',
  totalPrice: '$503.00',
}
