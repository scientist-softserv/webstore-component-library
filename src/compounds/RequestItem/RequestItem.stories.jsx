import React from 'react'
import RequestItem from './RequestItem'

export default {
  title: 'Compounds/RequestItem',
  component: RequestItem,
}

const Template = (args) => <RequestItem {...args} />

export const Default = Template.bind({})
Default.args = {
  createdAt: 'September 9, 2022',
  description: 'Does the Company offer services related to Flow Cytometry?',
  href: '/request/F575C4',
  title: 'F575C4: Assay Depot Coffee Mug',
  status: {
    text: 'Vendor Review',
  },
  updatedAt: 'September 9, 2022 at 9:21 am',
  user: {
    name: 'HG',
  },
}

export const Alternate = Template.bind({})
Alternate.args = {
  createdAt: 'September 9, 2022',
  description: 'Does the Company offer services related to Flow Cytometry?',
  href: '/request/F575C4',
  title: 'F575C4: Assay Depot Coffee Mug',
  status: {
    backgroundColor: '#DEAF17',
    text: 'Work In Progress',
    textColor: '#FFFFFF',
  },
  updatedAt: 'November 16, 2022 at 4:45 pm',
  user: {
    backgroundColor: '#000000',
    name: 'HG',
    textColor: '#FFFFFF',
  },
}
