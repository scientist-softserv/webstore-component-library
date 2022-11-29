import React from 'react'
import Document from './Document'

export default {
  title: 'Components/Document',
  component: Document,
}

const Template = (args) => <Document {...args} />

export const Default = Template.bind({})
Default.args = {
  id: '76EBF1',
  date: 'Nov 22 2022',
  documentStatus: 'Approval Required',
  documentStatusColor: 'bg-secondary',
  documentType: 'SOW',
  documentTypeColor: 'bg-dark',
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
  request: '97734',
  subtotalPrice: '$3.00',
  taxAmount: '$0.00',
  taxCategory: '',
  terms: 'NET 60',
  totalPrice: '$503.00',
  shippingPrice: '$500.00',
  shipTo: {
    "id": 2385964,
    "organization_name": "Scientist.com",
    "street": "505 Lomas Sante Fe Dr",
    "street2": "Suite 110",
    "city": "Solana Beach",
    "state": "CA",
    "zipcode": "92075",
    "country": "US",
    "latitude": null,
    "longitude": null,
    "name": null,
    "attention": "",
    "person_name": "",
    "care_of": null,
    "text": "505 Lomas Sante Fe Dr\nSuite 110\nSolana Beach, CA, 92075\nUnited States"
  },
  shipFrom: {
    "id": 2385966,
    "organization_name": "Golden",
    "street": "1313 Mocking Bird Lane",
    "street2": "",
    "city": "Raleigh",
    "state": "NC",
    "zipcode": "27519",
    "country": "US",
    "latitude": "35.8789623",
    "longitude": "-78.6528039",
    "name": "",
    "attention": null,
    "person_name": null,
    "care_of": null,
    "text": "1313 Mocking Bird Lane\nRaleigh, NC, 27519\nUnited States"
  },
}
