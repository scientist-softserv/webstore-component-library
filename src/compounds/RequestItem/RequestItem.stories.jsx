import React from 'react'
import RequestItem from './RequestItem'
import { defaultImage } from '../../resources/args'

export default {
  title: 'Compounds/RequestItem',
  component: RequestItem,
}

const Template = (args) => <RequestItem {...args} />

export const Default = Template.bind({})
Default.args = {
  index: 0,
  request: {
    createdAt: 'September 9, 2022',
    description: 'Does the Company offer services related to Flow Cytometry?',
    href: '/request/F575C4',
    img: defaultImage,
    title: 'F575C4: Assay Depot Coffee Mug',
    status: {
      text: 'Vendor Review',
    },
    updatedAt: 'September 9, 2022 at 9:21 am',
  }
}

export const Alternate = Template.bind({})
Alternate.args = {
  index: 1,
  request: {
    createdAt: 'September 9, 2022',
    description: 'Does the Company offer services related to Flow Cytometry?',
    href: '/request/F575C4',
    img: defaultImage,
    title: 'F575C4: Assay Depot Coffee Mug',
    status: {
      backgroundColor: '#DEAF17',
      text: 'Work In Progress',
      textColor: '#FFFFFF',
    },
    updatedAt: 'November 16, 2022 at 4:45 pm',
  }
}
