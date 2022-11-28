import React from 'react'
import Document from './Document'

export default {
  title: 'Components/Document',
  component: Document,
}

const Template = (args) => <Document {...args} />

export const Default = Template.bind({})
Default.args = {
  id: '97734',
  date: 'Nov 22 2022',
  documentType: 'SOW',
  status: 'Approval Required',
  subtotalPrice: '$55.00',
}
