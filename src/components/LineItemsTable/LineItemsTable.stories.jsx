import React from 'react'
import LineItemsTable from './LineItemsTable'

export default {
  title: 'Components/LineItemsTable',
  component: LineItemsTable,
}

const Template = (args) => <LineItemsTable {...args} />

export const Default = Template.bind({})
Default.args = {
  lineItems: [
    {
        "id": 921424,
        "retail_unit_price_currency": "$1.00",
        "retail_unit_price": "1.0",
        "retail_subtotal_price_currency": "$1.00",
        "retail_subtotal_price": "1.0",
        "quantity": "1.0",
        "currency": "USD",
        "currency_unit": "$",
        "name": "Milestone 1",
        "subtotal": "$1.00",
        "unit_price": "$1.00"
    },
    {
        "id": 921425,
        "retail_unit_price_currency": "$2.00",
        "retail_unit_price": "2.0",
        "retail_subtotal_price_currency": "$2.00",
        "retail_subtotal_price": "2.0",
        "quantity": "1.0",
        "currency": "USD",
        "currency_unit": "$",
        "name": "Milestone 2",
        "subtotal": "$2.00",
        "unit_price": "$2.00"
    }
  ],
  subtotalPrice: '$3.00',
  shippingPrice: '$500.00',
  taxAmount: '$0.00',
  totalPrice: '$503.00',
}
