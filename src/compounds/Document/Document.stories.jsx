import React from 'react'
import Document from './Document'
import { shipTo, shipFrom, lineItems } from '../../resources/args'

export default {
  title: 'Components/Document',
  component: Document,
}

const Template = (args) => <Document {...args} />

export const Default = Template.bind({})
Default.args = {
  document: {
    identifier: '97734',
    date: 'Nov 22 2022',
    documentStatus: 'Approval Required',
    documentStatusColor: '#999999',
    documentType: 'SOW',
    documentTypeColor: 'bg-dark',
    lineItems,
    requestIdentifier: '76EBF1',
    subtotalPrice: '$3.00',
    taxAmount: '$0.00',
    taxCategory: '',
    terms: 'NET 60',
    totalPrice: '$503.00',
    shippingPrice: '$500.00',
    shipTo,
    shipFrom,
  },
}
